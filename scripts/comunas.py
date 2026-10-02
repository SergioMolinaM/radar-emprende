"""Tabla maestra de comunas (Censo 2024) y normalización de nombres para cruzar RES, SII y Corfo."""
import pathlib
import re
import unicodedata

import openpyxl

RAIZ = pathlib.Path(__file__).resolve().parent.parent / 'data-raw'
CENSO = RAIZ / 'censo' / 'D1_Poblacion-censada-por-sexo-y-edad-en-grupos-quinquenales.xlsx'

# Grafías distintas para la misma comuna (nombre normalizado de la fuente -> nombre normalizado del Censo).
# Cada par se agrega solo después de ver el nombre sin calce en los datos.
ALIAS = {
    # Registro de Empresas y Sociedades (comuna tributaria), visto el 2-oct-2026.
    'EST CENTRAL': 'ESTACION CENTRAL',
    'CON CON': 'CONCON',
    'SAN VICENTE T T': 'SAN VICENTE',
    'PUERTO NATALES': 'NATALES',
    'LA CALERA': 'CALERA',
    'SAN FCO DE MOSTAZAL': 'MOSTAZAL',
    'SAN JOSE MAIPO': 'SAN JOSE DE MAIPO',
    'TIL TIL': 'TILTIL',
    'LLAY LLAY': 'LLAILLAY',
    'QUINTA TILCOCO': 'QUINTA DE TILCOCO',
    'SAN PEDRO DE MELIPILLA': 'SAN PEDRO',
    'MARCHIGUE': 'MARCHIHUE',
    'ALTO BIO BIO': 'ALTO BIOBIO',
    'OHIGGINS': 'O HIGGINS',
    'TORRES DE PAINE': 'TORRES DEL PAINE',
    'ANTARTIDA': 'ANTARTICA',
    # SII, nómina de personas jurídicas 2024.
    'P AGUIRRE CERDA': 'PEDRO AGUIRRE CERDA',
}


def norm(nombre):
    s = unicodedata.normalize('NFKD', str(nombre)).encode('ascii', 'ignore').decode()
    s = re.sub(r'[^A-Za-z ]', ' ', s).upper()
    s = re.sub(r'\s+', ' ', s).strip()
    return ALIAS.get(s, s)


def cargar_censo():
    """Devuelve {codigo_comuna: dict(codigo, comuna, region, codigo_region, poblacion)}."""
    wb = openpyxl.load_workbook(CENSO, read_only=True)
    ws = wb['2']
    comunas = {}
    for fila in ws.iter_rows(min_row=5, values_only=True):
        cod_reg, region, _, _, cod_com, comuna, pob = fila[:7]
        if not isinstance(cod_com, int) or cod_com == 0:
            continue
        comunas[cod_com] = dict(codigo=cod_com, comuna=comuna, region=region,
                                codigo_region=cod_reg, poblacion=pob)
    return comunas


def indice_por_nombre(comunas):
    """{(nombre_normalizado, codigo_region): codigo} y {nombre_normalizado: [codigos]}."""
    por_par, por_nombre = {}, {}
    for c in comunas.values():
        n = norm(c['comuna'])
        por_par[(n, c['codigo_region'])] = c['codigo']
        por_nombre.setdefault(n, []).append(c['codigo'])
    return por_par, por_nombre


def resolver(nombre, region, por_par, por_nombre):
    """Código de comuna o None. Usa región si viene; si no, solo nombres únicos."""
    n = norm(nombre)
    try:
        r = int(float(region))
    except (TypeError, ValueError):
        r = None
    if r is not None and (n, r) in por_par:
        return por_par[(n, r)]
    cods = por_nombre.get(n, [])
    return cods[0] if len(cods) == 1 else None
