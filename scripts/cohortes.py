"""Qué pasó con las sociedades creadas cada año (cohortes RES 2020-2024), por comuna.

Cruza por RUT el Registro de Empresas y Sociedades con dos nóminas del SII:
- PUB_NOMBRES_PJ (corte agosto 2026): fecha de término de giro vigente.
- PUB_EMPRESAS_PJ_<año> (años comerciales 2020-2024): si la sociedad figura en la nómina de ese año.

Tres estados excluyentes por sociedad, a la fecha de los datos:
  termino_giro       tiene término de giro vigente en PUB_NOMBRES_PJ
  en_nomina_2024     no tiene término y figura en la nómina del año comercial 2024
  fuera_nomina_2024  no tiene término y no figura en la nómina 2024

Salida: datos/cohortes_comuna.json (solo conteos; ningún RUT).
Uso: python scripts/cohortes.py
"""
import collections
import csv
import datetime
import io
import json
import pathlib
import zipfile

import comunas as C

RAIZ = pathlib.Path(__file__).resolve().parent.parent
RES = RAIZ / 'data-raw' / 'res'
SII = RAIZ / 'data-raw' / 'sii'
SALIDA = RAIZ / 'datos' / 'cohortes_comuna.json'
COHORTES = range(2020, 2025)
ANIOS_NOMINA = range(2020, 2025)


def rut_num(texto):
    s = texto.strip().replace('.', '').upper()
    return int(s.split('-')[0]) if s and s.split('-')[0].isdigit() else None


def leer_cohortes():
    cs = C.cargar_censo()
    por_par, por_nombre = C.indice_por_nombre(cs)
    cohorte = {}  # rut -> (anio, codigo_comuna)
    for anio in COHORTES:
        with open(RES / f'{anio}-sociedades-por-fecha-rut-constitucion.csv', encoding='utf-8-sig') as fh:
            for fila in csv.DictReader(fh, delimiter=';'):
                rut = rut_num(fila['RUT'])
                cod = C.resolver(fila['Comuna Tributaria'], fila['Region Tributaria'], por_par, por_nombre)
                if rut is None or cod is None:
                    raise SystemExit(f'Fila sin RUT o comuna en {anio}')
                cohorte.setdefault(rut, (int(fila['Anio']), cod))
    return cs, cohorte


def leer_termino_giro(ruts):
    con_termino = {}
    with zipfile.ZipFile(SII / 'PUB_NOMBRES_PJ.zip') as z:
        nombre = 'PUB_NOMBRES_PJ.txt'
        with io.TextIOWrapper(z.open(nombre), encoding='utf-8', errors='replace') as fh:
            cab = fh.readline().rstrip('\n').split('\t')
            i_rut, i_tg = cab.index('RUT'), cab.index('FECHA_TG_VIG')
            for linea in fh:
                p = linea.rstrip('\n').split('\t')
                if len(p) <= i_tg:
                    continue
                rut = int(p[i_rut]) if p[i_rut].isdigit() else None
                if rut in ruts:
                    con_termino[rut] = p[i_tg].strip()
    return con_termino  # rut -> fecha TG ('' si no tiene)


def leer_nominas(ruts):
    presentes = {a: set() for a in ANIOS_NOMINA}
    with zipfile.ZipFile(SII / 'PUB_EMPRESAS_PJ_2020_A_2024.zip') as z:
        for a in ANIOS_NOMINA:
            with io.TextIOWrapper(z.open(f'PUB_EMPRESAS_PJ_{a}.txt'), encoding='utf-8', errors='replace') as fh:
                cab = fh.readline().rstrip('\n').split('\t')
                i_rut = cab.index('RUT')
                for linea in fh:
                    r = linea.split('\t', i_rut + 1)[i_rut]
                    if r.isdigit() and int(r) in ruts:
                        presentes[a].add(int(r))
    return presentes


def main():
    cs, cohorte = leer_cohortes()
    ruts = set(cohorte)
    tg = leer_termino_giro(ruts)
    nominas = leer_nominas(ruts)

    estado = collections.Counter()   # (cod, anio, estado)
    curva = collections.Counter()    # (anio_cohorte, anio_nomina) -> n en nómina
    tamano = collections.Counter()   # anio_cohorte -> n
    no_en_sii = 0
    for rut, (anio, cod) in cohorte.items():
        tamano[anio] += 1
        if rut not in tg:
            no_en_sii += 1
        if tg.get(rut):
            e = 'termino_giro'
        elif rut in nominas[2024]:
            e = 'en_nomina_2024'
        else:
            e = 'fuera_nomina_2024'
        estado[(cod, anio, e)] += 1
        for a in ANIOS_NOMINA:
            if a >= anio and rut in nominas[a]:
                curva[(anio, a)] += 1

    estados = ('termino_giro', 'en_nomina_2024', 'fuera_nomina_2024')
    nacional = {}
    for anio in COHORTES:
        n = tamano[anio]
        tot = {e: sum(estado[(cod, anio, e)] for cod in cs) for e in estados}
        nacional[str(anio)] = dict(
            constituidas=n, **tot,
            pct={e: round(100 * tot[e] / n, 1) for e in estados},
            en_nomina_por_anio_comercial={str(a): curva[(anio, a)] for a in ANIOS_NOMINA if a >= anio},
        )
    filas = []
    for cod, c in sorted(cs.items()):
        por_cohorte = {}
        for anio in COHORTES:
            n = sum(estado[(cod, anio, e)] for e in estados)
            por_cohorte[str(anio)] = dict(constituidas=n, **{e: estado[(cod, anio, e)] for e in estados})
        filas.append(dict(codigo=cod, comuna=c['comuna'], region=c['region'], codigo_region=c['codigo_region'],
                          cohortes=por_cohorte))

    salida = {
        '_meta': {
            'descripcion': 'Estado a la fecha de los datos de las sociedades constituidas en el RES entre 2020 y 2024, por comuna tributaria y año de constitución.',
            'fuentes': [
                'Registro de Empresas y Sociedades, Ministerio de Economía (datos.gob.cl, CC BY).',
                'SII, nómina de personas jurídicas PUB_NOMBRES_PJ (actualizada en agosto de 2026): término de giro vigente.',
                'SII, nóminas PUB_EMPRESAS_PJ de los años comerciales 2020 a 2024 (publicadas en enero de 2026).',
            ],
            'estados': {
                'termino_giro': 'Tiene término de giro vigente ante el SII (a agosto de 2026).',
                'en_nomina_2024': 'Sin término de giro y figura en la nómina de personas jurídicas del SII del año comercial 2024.',
                'fuera_nomina_2024': 'Sin término de giro y no figura en esa nómina.',
            },
            'nivel': 2,
            'limites': [
                'No es una tasa de supervivencia. El término de giro formal es raro: una sociedad que dejó de operar casi nunca lo tramita. Figurar en la nómina del SII de un año es una señal de actividad, pero el SII no publica en la página revisada la regla que define quién figura (no verificado).',
                'La nómina más reciente es la del año comercial 2024; la cohorte 2024 se mide en su mismo año (puede no haber tenido tiempo de declarar).',
                'Cruce por RUT: todas las sociedades del RES 2020-2024 deberían figurar en PUB_NOMBRES_PJ; ver «no_encontradas_en_sii».',
                'Comuna tributaria al constituirse; la sociedad pudo cambiar de domicilio después.',
            ],
            'no_encontradas_en_sii': no_en_sii,
            'generado': datetime.date.today().isoformat(),
            'script': 'scripts/cohortes.py',
            'licencia': 'CC BY 4.0, Radar Emprende - Tercera Letra SpA (cita también las fuentes originales)',
        },
        'nacional': nacional,
        'comunas': filas,
    }
    SALIDA.write_text(json.dumps(salida, ensure_ascii=False, indent=1), encoding='utf-8')
    print(json.dumps(nacional, ensure_ascii=False, indent=1))
    print('no encontradas en SII:', no_en_sii)


if __name__ == '__main__':
    main()
