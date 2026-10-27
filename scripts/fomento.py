"""¿Cuántos postulan y cuántos quedan en los programas de emprendimiento de FOSIS y SERCOTEC? (2023-2025)

Lee las respuestas a las solicitudes de transparencia FOSIS AI004T0002258 (22-oct-2026) y SERCOTEC
AH012T0003197 (26-oct-2026), guardadas en data-raw/transparencia/ (fuera de git). Cotejo y límites en
investigacion/2026-10-27-transparencia-respuestas.md.

Salida: datos/fomento_comuna.json (solo agregados por comuna y región; las fuentes no traen datos de personas).
Uso: python scripts/fomento.py
"""
import collections
import datetime
import json
import pathlib

import openpyxl

import comunas as C

RAIZ = pathlib.Path(__file__).resolve().parent.parent
FOSIS = RAIZ / 'data-raw' / 'transparencia' / 'fosis' / 'Base_Datos_AI004T002258.xlsx'
SERCOTEC = RAIZ / 'data-raw' / 'transparencia' / 'sercotec' / 'Datos_Emprende_Crece_Almacen_Modo_Empleo_2023_al_2026.xlsx'
SALIDA = RAIZ / 'datos' / 'fomento_comuna.json'
# 2026 queda fuera: las convocatorias siguen en selección (SERCOTEC Emprende 2026 informa 185 beneficiarios
# contra 2.203 en 2023) y FOSIS informa 0 personas que completaron.
ANIOS = (2023, 2024, 2025)

# En la hoja «datos» de FOSIS los dos Emprendamos se distinguen solo por un espacio al final; la hoja «tabla»
# los nombra. El control de abajo comprueba que la asignación reproduce la tabla.
PROGRAMA_FOSIS = {
    'EMPRENDAMOS': 'Emprendamos Básico',
    'EMPRENDAMOS ': 'Emprendamos Avanzado',
    'SEMILLA REGULAR': 'Emprendamos Semilla Regular',
    'SEMILLA SYO': 'Emprendamos Semilla (Seguridades y Oportunidades)',
}
TABLA_FOSIS = {
    'EMPRENDAMOS BÁSICO': 'Emprendamos Básico',
    'EMPRENDAMOS AVANZADO': 'Emprendamos Avanzado',
    'SEMILLA REGULAR': 'Emprendamos Semilla Regular',
    'SEMILLA SYO': 'Emprendamos Semilla (Seguridades y Oportunidades)',
}
CAMPOS_FOSIS = ('PostulacionesRecibidas', 'CuposDisponibles', 'PersonasSeleccionadas', 'PersonasCompletaron')
HOJAS_SERCOTEC = {'EMPRENDE': 'Emprende', 'CRECE': 'Crece', 'ALMACEN': 'Almacenes'}


def filas(ruta, hoja):
    """Filas de una hoja como dicts, desde la primera fila con tres o más celdas (el encabezado)."""
    ws = openpyxl.load_workbook(ruta, read_only=True, data_only=True)[hoja]
    todas = list(ws.iter_rows(values_only=True))
    i = next(k for k, f in enumerate(todas) if sum(v is not None for v in f) >= 3)
    cab = [str(v) if v is not None else '' for v in todas[i]]
    return [dict(zip(cab, f)) for f in todas[i + 1:] if any(v is not None for v in f)]


def fosis(cs):
    datos = filas(FOSIS, 'datos')
    # Control: la hoja «datos» sumada por año y programa reproduce la hoja «tabla» que armó FOSIS.
    suma = collections.defaultdict(lambda: [0, 0, 0, 0])
    for x in datos:
        for k, c in enumerate(CAMPOS_FOSIS):
            suma[(x['Año'], PROGRAMA_FOSIS[x['Programa']])][k] += x[c] or 0
    anio = None
    controladas = 0
    for f in filas(FOSIS, 'tabla'):
        v = list(f.values())
        if isinstance(v[0], int):
            anio = v[0]
        elif isinstance(v[0], str) and v[0].strip() in TABLA_FOSIS:
            if suma[(anio, TABLA_FOSIS[v[0].strip()])] != list(v[1:5]):
                raise SystemExit(f'FOSIS: la hoja datos no reproduce la tabla en {anio} {v[0]}.')
            controladas += 1
    if controladas != 16:
        raise SystemExit(f'FOSIS: se esperaban 16 filas de control en la tabla y se leyeron {controladas}.')

    por_comuna = collections.defaultdict(lambda: [0, 0, 0, 0])
    por_programa = collections.defaultdict(lambda: [0, 0, 0, 0])
    for x in datos:
        if x['Año'] not in ANIOS:
            continue
        cod = x['CodComuna']
        if cod not in cs or C.norm(cs[cod]['comuna']) != C.norm(x['Comuna']):
            raise SystemExit(f'FOSIS: comuna {cod} {x["Comuna"]!r} no calza con el Censo.')
        for k, c in enumerate(CAMPOS_FOSIS):
            por_comuna[cod][k] += x[c] or 0
            por_programa[(PROGRAMA_FOSIS[x['Programa']], x['Año'])][k] += x[c] or 0
    programas = [
        dict(programa=p, anio=a, postulaciones=v[0], cupos=v[1], seleccionadas=v[2], completaron=v[3])
        for (p, a), v in sorted(por_programa.items())
    ]
    return por_comuna, programas


def sercotec(cs, idx):
    convocatorias = {}
    region = collections.defaultdict(lambda: collections.Counter())
    for hoja, programa in HOJAS_SERCOTEC.items():
        for x in filas(SERCOTEC, hoja):
            convocatorias[x['proyecto_id']] = (programa, x['Agno'], x)
            if x['Agno'] not in ANIOS:
                continue
            r = region[(programa, x['region'])]
            r['postulaciones'] += x['postulaciones_enviadas'] or 0
            r['admisibles'] += x['postulaciones_admisibles'] or 0
            r['seleccionados'] += (x.get('Seleccionados') if 'Seleccionados' in x else x.get('Seleccionados/as')) or 0
            r['beneficiarios'] += x['Beneficiarios/as'] or 0
            r['renuncias'] += x['Renunciado'] or 0

    # Por comuna solo Emprende y Almacenes: en Crece los beneficiarios vienen dentro de la hoja de postulaciones
    # (ver la nota de investigación) y no se pueden separar sin inferir.
    def por_comuna(hoja, campo):
        n = collections.Counter()
        sin = 0
        por_conv = collections.Counter()
        for x in filas(SERCOTEC, hoja):
            programa, anio, _ = convocatorias[x['proyecto_id']]
            if programa == 'Crece' or anio not in ANIOS:
                continue
            por_conv[x['proyecto_id']] += x['Cantidad'] or 0
            cod = C.resolver(x['comuna'], x['direccion_regional_id'], *idx)
            if cod is None:
                if C.norm(x['comuna']) not in C.NO_COMUNA:
                    raise SystemExit(f'SERCOTEC: comuna sin calce {x["comuna"]!r}. Agregar alias en comunas.py.')
                sin += x['Cantidad'] or 0
            else:
                n[cod] += x['Cantidad'] or 0
        # Control: el desglose comunal suma lo mismo que cada convocatoria.
        dif = {i: por_conv[i] - (convocatorias[i][2][campo] or 0) for i, (p, a, _) in convocatorias.items()
               if p != 'Crece' and a in ANIOS and por_conv[i] != (convocatorias[i][2][campo] or 0)}
        return n, sin, dif

    post, post_sin, dif_post = por_comuna('Postulaciones_comuna', 'postulaciones_enviadas')
    benef, benef_sin, dif_benef = por_comuna('Beneficiarios_comuna', 'Beneficiarios/as')
    if dif_benef:
        raise SystemExit(f'SERCOTEC: beneficiarios por comuna no calzan con la convocatoria en {dif_benef}.')
    # Única diferencia conocida al 27-oct-2026: una convocatoria de Emprende 2023 con una postulación menos.
    if sum(abs(v) for v in dif_post.values()) > 1:
        raise SystemExit(f'SERCOTEC: postulaciones por comuna no calzan con la convocatoria en {dif_post}.')
    regiones = [dict(programa=p, region=r, **dict(v)) for (p, r), v in sorted(region.items())]
    return post, post_sin, benef, benef_sin, regiones, sum(dif_post.values())


def main():
    cs = C.cargar_censo()
    idx = C.indice_por_nombre(cs)
    fc, programas_fosis = fosis(cs)
    sp, sp_sin, sb, sb_sin, regiones, dif_post = sercotec(cs, idx)

    # FOSIS por comuna se publica solo sumado entre programas: Semilla SyO atiende a personas en extrema pobreza y
    # el cruce comuna × programa trae 91 celdas de 1 a 4 personas (revisor, 27-oct-2026).
    comunas = []
    for cod, c in sorted(cs.items()):
        f = fc.get(cod)
        comunas.append(dict(
            codigo=cod, comuna=c['comuna'], region=c['region'], codigo_region=c['codigo_region'],
            fosis_en_respuesta=f is not None,
            fosis_postulaciones=f[0] if f else 0, fosis_cupos=f[1] if f else 0,
            fosis_seleccionadas=f[2] if f else 0, fosis_completaron=f[3] if f else 0,
            sercotec_postulaciones=sp[cod], sercotec_beneficiarios=sb[cod],
        ))
    claves_fosis = {k for c in comunas for k in c if k.startswith('fosis_')}
    if claves_fosis != {'fosis_en_respuesta', 'fosis_postulaciones', 'fosis_cupos', 'fosis_seleccionadas', 'fosis_completaron'}:
        raise SystemExit(f'FOSIS: campos comunales no previstos {sorted(claves_fosis)}; por comuna solo van totales entre programas.')
    sin_nada = [c['comuna'] for c in comunas if c['fosis_seleccionadas'] == 0 and c['sercotec_beneficiarios'] == 0]
    salida = {
        '_meta': {
            'descripcion': f'Postulaciones y personas seleccionadas en los programas de emprendimiento de FOSIS y SERCOTEC, {ANIOS[0]} a {ANIOS[-1]}, por comuna y región, según sus respuestas a solicitudes de acceso a la información.',
            'fuentes': [
                'FOSIS, respuesta a la solicitud AI004T0002258 (Ley 20.285), 22-oct-2026: planilla Base_Datos_AI004T002258.xlsx, elaborada por la Unidad de Gestión de la Subdirección de Gestión de Programas desde el Sistema de Postulación a Programas (SPP).',
                'SERCOTEC, respuesta a la solicitud AH012T0003197 (Ley 20.285), carta G.G. N° 283 del 23-oct-2026: planilla Datos_Emprende_Crece_Almacen_Modo_Empleo_2023_al_2026.xlsx.',
                'INE, Censo 2024, para la lista y los nombres de las comunas.',
            ],
            'nivel': 1,
            'anios': list(ANIOS),
            'limites': [
                f'Solo convocatorias de {ANIOS[0]} a {ANIOS[-1]}. Las de 2026 siguen en selección o ejecución y no se suman.',
                'FOSIS cuenta postulaciones registradas en su sistema, no personas distintas: una persona que postula a dos programas o dos años cuenta dos veces.',
                'FOSIS informa más personas seleccionadas que cupos en todos los programas y años; la respuesta no lo explica.',
                'SERCOTEC por comuna incluye Emprende (Capital Semilla, Capital Abeja y, desde 2024, Pioneras; Semilla Modo Empleo solo tiene convocatorias en 2026) y Almacenes. Crece se muestra solo por región: en la respuesta, sus beneficiarios por comuna vienen mezclados con las postulaciones, y separarlos sería suponer.',
                'La columna de renuncias de SERCOTEC es, según su carta, un «registro de renuncias o restituciones de recursos».',
                'SERCOTEC no entregó el monto total adjudicado ni cuántos terminaron con rendición aprobada; no se estiman.',
                'La comuna es la que informa cada servicio para el postulante. «Otro lugar» (SERCOTEC) queda sin comuna.',
                'Una comuna con cero no prueba que el programa no llegue: puede haber cupos sin postulantes o postulantes registrados en otra comuna.',
            ],
            'control': f'FOSIS: la hoja de datos sumada por año y programa reproduce las 16 filas de la tabla resumen que entregó FOSIS. SERCOTEC: los beneficiarios por comuna suman exacto lo informado en cada convocatoria; las postulaciones por comuna también, salvo {abs(dif_post)} postulación de una convocatoria de Emprende 2023.',
            'sercotec_postulaciones_sin_comuna': sp_sin,
            'sercotec_beneficiarios_sin_comuna': sb_sin,
            'fosis_comunas_sin_filas': [c['comuna'] for c in comunas if not c['fosis_en_respuesta']],
            'comunas_sin_seleccionados': len(sin_nada),
            'generado': datetime.date.today().isoformat(),
            'script': 'scripts/fomento.py',
            'licencia': 'Cifras de FOSIS y SERCOTEC entregadas por Ley de Transparencia, citadas como fuente. Sumas y tasas: CC BY 4.0 (Radar Emprende, de Tercera Letra SpA).',
            'reproducibilidad': 'Las planillas originales, respuesta a las solicitudes FOSIS AI004T0002258 y SERCOTEC AH012T0003197, no se publican en el repositorio; con ellas en data-raw/transparencia/, python scripts/fomento.py regenera este archivo.',
        },
        'fosis_programas': programas_fosis,
        'sercotec_regiones': regiones,
        'comunas_sin_seleccionados': sin_nada,
        'comunas': comunas,
    }
    SALIDA.write_text(json.dumps(salida, ensure_ascii=False, indent=1), encoding='utf-8')
    t = lambda k: sum(c[k] for c in comunas)
    print('FOSIS', ANIOS, 'postulaciones', t('fosis_postulaciones'), 'seleccionadas', t('fosis_seleccionadas'))
    print('SERCOTEC por comuna: postulaciones', t('sercotec_postulaciones'), '+ sin comuna', sp_sin,
          '| beneficiarios', t('sercotec_beneficiarios'), '+ sin comuna', sb_sin)
    print('comunas sin seleccionados en ninguno de los dos:', len(sin_nada), sin_nada[:15])


if __name__ == '__main__':
    main()
