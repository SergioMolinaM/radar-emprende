"""Empresas constituidas por comuna, año y mes (Registro de Empresas y Sociedades, desde mayo de 2013).

Salida: datos/constituciones_comuna.json (solo conteos agregados; ningún RUT ni razón social).
Uso: python scripts/constituciones.py (lo llama scripts/actualizar.py cada mes).
Nada de años ni fechas escritos a mano: el corte, el último año completo y la fecha de publicación
salen de los archivos y de data-raw/res/_ckan.json.
"""
import collections
import csv
import datetime
import json
import pathlib
import statistics

import comunas as C

RAIZ = pathlib.Path(__file__).resolve().parent.parent
RES = RAIZ / 'data-raw' / 'res'
SALIDA = RAIZ / 'datos' / 'constituciones_comuna.json'


def main():
    cs = C.cargar_censo()
    por_par, por_nombre = C.indice_por_nombre(cs)
    conteo = collections.Counter()      # (codigo, anio) -> n
    tipos = collections.Counter()       # (anio, tipo) -> n
    meses = collections.defaultdict(set)
    mensual = collections.Counter()     # (anio, mes) -> n
    mensual_region = collections.Counter()  # (codigo_region, anio, mes) -> n
    capital = collections.defaultdict(list)  # (anio, tipo) -> [capital declarado]
    ORDEN = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    NOMBRES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
    for f in sorted(RES.glob('*.csv')):
        with open(f, encoding='utf-8-sig') as fh:
            for fila in csv.DictReader(fh, delimiter=';'):
                cod = C.resolver(fila['Comuna Tributaria'], fila['Region Tributaria'], por_par, por_nombre)
                if cod is None:
                    raise SystemExit(f'Comuna sin calce: {fila["Comuna Tributaria"]!r} ({f.name}). Agregar alias en comunas.py.')
                anio = int(fila['Anio'])
                if fila['Mes'] not in ORDEN:
                    raise SystemExit(f'Mes desconocido {fila["Mes"]!r} en {f.name}.')
                mes = ORDEN.index(fila['Mes']) + 1
                conteo[(cod, anio)] += 1
                tipos[(anio, fila['Codigo de sociedad'])] += 1
                meses[anio].add(mes)
                mensual[(anio, mes)] += 1
                mensual_region[(cs[cod]['codigo_region'], anio, mes)] += 1
                capital[(anio, fila['Codigo de sociedad'])].append(float(fila['Capital']))
    anios = sorted({a for _, a in conteo})
    primero, ultimo = anios[0], anios[-1]
    # Último año completo: el más reciente con los doce meses. La tasa por mil habitantes usa ese año.
    completos = [a for a in anios if len(meses[a]) == 12]
    anio_tasa = completos[-1]
    corte_mes = max(meses[ultimo])
    # Sin huecos: cada año va de su primer a su último mes sin saltos, y solo el primero y el último pueden
    # estar incompletos. Si el año nuevo aparece antes que el archivo final del anterior, se detiene.
    for a in anios:
        if meses[a] != set(range(min(meses[a]), max(meses[a]) + 1)):
            raise SystemExit(f'Faltan meses dentro de {a}: {sorted(meses[a])}.')
        if a not in (primero, ultimo) and len(meses[a]) != 12:
            raise SystemExit(f'{a} está incompleto ({len(meses[a])} meses) sin ser el primer ni el último año: esperar el archivo final.')
    if min(meses[ultimo]) != 1:
        raise SystemExit(f'{ultimo} no empieza en enero: {sorted(meses[ultimo])}.')
    ckan = RES / '_ckan.json'
    versiones = {a: r['modificado'] for a, r in json.loads(ckan.read_text(encoding='utf-8')).items()} if ckan.exists() else {}
    publicado = (versiones.get(str(ultimo)) or '')[:10]
    if not publicado:
        raise SystemExit('Sin fecha de publicación del archivo del año en curso: correr scripts/actualizar.py, no este script solo.')
    # Fecha de descarga del archivo del año en curso (consulta de la fuente), no la de este cálculo.
    consulta = datetime.date.fromtimestamp((RES / f'{ultimo}-sociedades-por-fecha-rut-constitucion.csv').stat().st_mtime).isoformat()
    # Capital declarado en la escritura: solo el último año completo y el año en curso (pesos de cada año,
    # sin ajustar por inflación; por eso no se arma serie larga).
    TRAMOS = [('hasta_500_mil', 500_000), ('hasta_1_millon', 1_000_000), ('hasta_5_millones', 5_000_000),
              ('hasta_10_millones', 10_000_000), ('mas_de_10_millones', float('inf'))]
    def resumen_capital(anio):
        todos = [v for (a, _), vs in capital.items() if a == anio for v in vs]
        tramos = collections.Counter(next(n for n, tope in TRAMOS if v <= tope) for v in todos)
        return dict(
            n=len(todos), mediana=statistics.median(todos), bajo_mil=sum(v < 1000 for v in todos),
            tramos={n: tramos[n] for n, _ in TRAMOS},
            por_tipo={t: dict(n=len(vs), mediana=statistics.median(vs)) for (a, t), vs in sorted(capital.items()) if a == anio},
        )
    claves_mes = [f'{a}-{m:02d}' for a in anios for m in range(1, 13) if m in meses[a]]
    filas = []
    for cod, c in sorted(cs.items()):
        serie = {str(a): conteo.get((cod, a), 0) for a in anios}
        pob = c['poblacion']
        filas.append(dict(
            codigo=cod, comuna=c['comuna'], region=c['region'], codigo_region=c['codigo_region'],
            poblacion_censo_2024=pob, constituciones=serie,
            por_mil_hab=round(1000 * serie[str(anio_tasa)] / pob, 2) if pob else None,
        ))
    total_anio = {str(a): sum(conteo[(k, a)] for k in cs) for a in anios}
    # Acumulado del año en curso contra los mismos meses del anterior: lo único comparable de un año incompleto.
    acum = sum(mensual[(ultimo, m)] for m in range(1, corte_mes + 1))
    acum_prev = sum(mensual[(ultimo - 1, m)] for m in range(1, corte_mes + 1))
    pob_total = sum(c['poblacion'] for c in cs.values())
    tasa_nac = round(1000 * total_anio[str(anio_tasa)] / pob_total, 2)
    # Comunas de 50.000 habitantes o más: en las chicas una tasa alta es ruido de pocos casos, no concentración de domicilios.
    altas = sorted((f for f in filas if f['poblacion_censo_2024'] >= 50_000), key=lambda f: -f['por_mil_hab'])[:3]
    coma = lambda x, d: f'{x:.{d}f}'.replace('.', ',')
    partes = [f"{f['comuna']} ({coma(f['por_mil_hab'], 1)}{' por mil en ' + str(anio_tasa) if i == 0 else ''})" for i, f in enumerate(altas)]
    altas_txt = ', '.join(partes[:-1]) + ' y ' + partes[-1]
    salida = {
        '_meta': {
            'descripcion': 'Sociedades constituidas por comuna tributaria y año de aprobación del SII.',
            'fuente': 'Registro de Empresas y Sociedades, Ministerio de Economía (datos.gob.cl, CC BY). Población: Censo 2024, INE, tabla D1-2.',
            'fuente_url': 'https://datos.gob.cl/dataset/363edd60-4919-4ff1-b85f-f8e14d61285a',
            'metodo': 'Se cuenta cada sociedad constituida según su comuna tributaria y el año en que el SII aprobó la constitución. Los nombres de comuna se igualaron a los del Censo 2024 y todas las sociedades quedaron asignadas a una comuna.',
            'nivel': 2,
            'limites': [
                'Solo sociedades del Registro de Empresas y Sociedades (Ley 20.659). No incluye personas naturales con giro ni sociedades constituidas por escritura publicada en el Diario Oficial.',
                f'Años incompletos: {primero} empieza en {NOMBRES[min(meses[primero]) - 1]} (primer mes con datos en el archivo) y {ultimo} llega hasta {NOMBRES[corte_mes - 1]} (corte del archivo publicado el {int(publicado[8:]):02d}-{NOMBRES[int(publicado[5:7]) - 1][:3]}-{publicado[:4]}). No se comparan con los años completos; el año en curso se compara con los mismos meses del año anterior.',
                f'La tasa por cada 1.000 habitantes de {anio_tasa} usa la población del Censo 2024.',
                f'Capital: el valor de la columna «Capital» del archivo, que es el capital declarado al constituir la sociedad; el archivo no dice si está pagado. Pesos de cada año, sin ajustar por inflación: solo se comparan {anio_tasa} y {ultimo}. {resumen_capital(anio_tasa)["bajo_mil"]} sociedades de {anio_tasa} declaran menos de $1.000; podrían estar en otra unidad (no verificado) y se cuentan como vienen.',
                f'El mes es el de aprobación del SII. No está verificado si el Registro corrige meses ya publicados en archivos posteriores; el último mes puede cambiar.',
                f'La comuna es la tributaria (domicilio ante el SII), que puede no ser donde opera el negocio. {altas_txt} están muy sobre el promedio nacional ({coma(tasa_nac, 2)}). Hipótesis no verificada (nivel 2): concentran domicilios tributarios (oficinas virtuales, estudios contables) de sociedades que operan en otras comunas. No leer la tasa como «emprendimiento local».',
            ],
            'generado': datetime.date.today().isoformat(),
            'script': 'scripts/constituciones.py',
            'licencia': 'CC BY 4.0 para el cálculo (Radar Emprende, de Tercera Letra SpA). La población del Censo 2024 y la tasa por cada 1.000 habitantes, que se deriva de ella, van bajo CC BY-SA 4.0, la licencia del INE (https://www.ine.gob.cl/terminos-de-uso-y-licencia-de-datos-abiertos), que exige la misma licencia para lo derivado.',
        },
        'corte': {'anio': ultimo, 'mes': corte_mes, 'publicado': publicado, 'consulta': consulta, 'anio_tasa': anio_tasa,
                  'versiones': versiones},
        'totales_por_anio': total_anio,
        'mensual': {k: mensual[(int(k[:4]), int(k[5:]))] for k in claves_mes},
        'mensual_region': {r: {k: mensual_region[(r, int(k[:4]), int(k[5:]))] for k in claves_mes}
                           for r in sorted({c['codigo_region'] for c in cs.values()})},
        'acumulado': {'meses': corte_mes, 'anio': ultimo, 'valor': acum, 'anio_anterior': ultimo - 1, 'valor_anterior': acum_prev},
        'capital': {str(a): resumen_capital(a) for a in (anio_tasa, ultimo)},
        'tipo_societario_por_anio': {str(a): {t: n for (aa, t), n in sorted(tipos.items()) if aa == a} for a in anios},
        'comunas': filas,
    }
    SALIDA.write_text(json.dumps(salida, ensure_ascii=False, indent=1), encoding='utf-8')
    print('escrito', SALIDA, '| totales:', total_anio)


if __name__ == '__main__':
    main()
