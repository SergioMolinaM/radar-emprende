"""Empresas constituidas por comuna y año (Registro de Empresas y Sociedades, 2013-2026).

Salida: datos/constituciones_comuna.json (solo conteos agregados; ningún RUT ni razón social).
Uso: python scripts/constituciones.py
"""
import collections
import csv
import datetime
import json
import pathlib

import comunas as C

RAIZ = pathlib.Path(__file__).resolve().parent.parent
RES = RAIZ / 'data-raw' / 'res'
SALIDA = RAIZ / 'datos' / 'constituciones_comuna.json'


def main():
    cs = C.cargar_censo()
    por_par, por_nombre = C.indice_por_nombre(cs)
    conteo = collections.Counter()      # (codigo, anio) -> n
    tipos = collections.Counter()       # (anio, tipo) -> n
    meses_2026 = set()
    for f in sorted(RES.glob('*.csv')):
        with open(f, encoding='utf-8-sig') as fh:
            for fila in csv.DictReader(fh, delimiter=';'):
                cod = C.resolver(fila['Comuna Tributaria'], fila['Region Tributaria'], por_par, por_nombre)
                if cod is None:
                    raise SystemExit(f'Comuna sin calce: {fila["Comuna Tributaria"]!r} ({f.name}). Agregar alias en comunas.py.')
                anio = int(fila['Anio'])
                conteo[(cod, anio)] += 1
                tipos[(anio, fila['Codigo de sociedad'])] += 1
                if anio == 2026:
                    meses_2026.add(fila['Mes'])
    anios = sorted({a for _, a in conteo})
    filas = []
    for cod, c in sorted(cs.items()):
        serie = {str(a): conteo.get((cod, a), 0) for a in anios}
        pob = c['poblacion']
        filas.append(dict(
            codigo=cod, comuna=c['comuna'], region=c['region'], codigo_region=c['codigo_region'],
            poblacion_censo_2024=pob, constituciones=serie,
            por_mil_hab_2025=round(1000 * serie['2025'] / pob, 2) if pob else None,
        ))
    total_anio = {str(a): sum(conteo[(k, a)] for k in cs) for a in anios}
    salida = {
        '_meta': {
            'descripcion': 'Sociedades constituidas por comuna tributaria y año de aprobación del SII.',
            'fuente': 'Registro de Empresas y Sociedades, Ministerio de Economía (datos.gob.cl, CC BY). Población: Censo 2024, INE, tabla D1-2.',
            'fuente_url': 'https://datos.gob.cl/dataset/363edd60-4919-4ff1-b85f-f8e14d61285a',
            'metodo': 'Se cuenta cada fila (todas son constituciones) por «Comuna Tributaria» y «Anio» (= año de aprobación del SII). Nombres de comuna homologados al Censo 2024 con scripts/comunas.py; 0 filas sin calce.',
            'limites': [
                'Solo sociedades del Registro de Empresas y Sociedades (Ley 20.659). No incluye personas naturales con giro ni sociedades constituidas por escritura publicada en el Diario Oficial.',
                f'2026 llega hasta el corte del archivo (meses: {sorted(meses_2026)}); no es comparable con años completos.',
                'La tasa por 1.000 habitantes usa la población del Censo 2024 para 2025.',
                'La comuna es la tributaria (domicilio ante el SII), que puede no ser donde opera el negocio. Providencia (80,9 por mil en 2025), Las Condes (29,6) y Santiago (25,8) están muy sobre el promedio nacional (10,95). Hipótesis no verificada (nivel 2): concentran domicilios tributarios (oficinas virtuales, estudios contables) de sociedades que operan en otras comunas. No leer la tasa como «emprendimiento local».',
            ],
            'generado': datetime.date.today().isoformat(),
            'script': 'scripts/constituciones.py',
            'licencia': 'CC BY 4.0, Radar Emprende - Tercera Letra SpA (cita también la fuente original)',
        },
        'totales_por_anio': total_anio,
        'tipo_societario_por_anio': {str(a): {t: n for (aa, t), n in sorted(tipos.items()) if aa == a} for a in anios},
        'comunas': filas,
    }
    SALIDA.write_text(json.dumps(salida, ensure_ascii=False, indent=1), encoding='utf-8')
    print('escrito', SALIDA, '| totales:', total_anio)


if __name__ == '__main__':
    main()
