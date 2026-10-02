"""¿A qué comunas llegan los proyectos de innovación y emprendimiento de Corfo? (2016-2025)

Cruza por RUT los proyectos adjudicados (Corfo DataInnovación) con el domicilio vigente del
beneficiario en la nómina de personas jurídicas del SII, y los compara con el número de empresas
de cada comuna (SII, estadísticas de empresas, año comercial 2024).

Salida: datos/corfo_comuna.json (solo agregados; ningún RUT, razón social ni proyecto individual).
Uso: python scripts/corfo.py
"""
import collections
import datetime
import io
import json
import pathlib
import zipfile

import comunas as C

RAIZ = pathlib.Path(__file__).resolve().parent.parent
PORTAFOLIO = RAIZ.parent
CORFO = PORTAFOLIO / 'navegador-ds22' / 'fuentes' / 'corfo-datainnovacion-api-proyectos-2009-2026.json'
SII = RAIZ / 'data-raw' / 'sii'
SALIDA = RAIZ / 'datos' / 'corfo_comuna.json'
DESDE, HASTA = 2016, 2025


def rut_num(texto):
    s = str(texto).strip().replace('.', '').upper()
    base = s.split('-')[0]
    return int(base) if base.isdigit() else None


def num(texto):
    try:
        return float(str(texto).replace('.', '').replace(',', '.'))
    except ValueError:
        return 0.0


def domicilios(ruts, por_nombre_comuna):
    """rut -> codigo comuna del domicilio vigente (VIGENCIA = S)."""
    por_par, por_nombre = por_nombre_comuna
    out = {}
    with zipfile.ZipFile(SII / 'PUB_NOM_DIRECCIONES.zip') as z:
        with io.TextIOWrapper(z.open('PUB_NOM_DOMICILIO.txt'), encoding='utf-8', errors='replace') as fh:
            cab = fh.readline().strip().split('\t')
            i_rut, i_vig, i_com = cab.index('RUT'), cab.index('VIGENCIA'), cab.index('COMUNA')
            for linea in fh:
                p = linea.rstrip('\r\n').split('\t')
                if p[i_vig] != 'S' or not p[i_rut].isdigit():
                    continue
                r = int(p[i_rut])
                if r in ruts:
                    cod = C.resolver(p[i_com], None, por_par, por_nombre)
                    if cod is None and C.norm(p[i_com]) not in C.NO_COMUNA:
                        raise SystemExit(f'Domicilio SII: comuna sin calce {p[i_com]!r}. Agregar alias en comunas.py.')
                    if cod is not None:
                        out[r] = cod
    return out


def empresas_2024(cs, idx):
    por_par, por_nombre = idx
    n = collections.Counter()
    with zipfile.ZipFile(SII / 'EMPRESAS.zip') as z:
        with io.TextIOWrapper(z.open('PUB_COMU.txt'), encoding='latin-1') as fh:
            cab = fh.readline().rstrip('\n').split('\t')
            for linea in fh:
                p = linea.rstrip('\n').split('\t')
                if p[0] != '2024':
                    continue
                cod = C.resolver(p[1], None, por_par, por_nombre)
                if cod is None:
                    if C.norm(p[1]) in C.NO_COMUNA:
                        continue
                    raise SystemExit(f'PUB_COMU: comuna sin calce {p[1]!r}. Agregar alias en comunas.py.')
                n[cod] += int(p[4].replace('.', ''))
    return n


def main():
    cs = C.cargar_censo()
    idx = C.indice_por_nombre(cs)
    proyectos = [p for p in json.load(open(CORFO, encoding='utf-8'))
                 if str(p.get('año_adjudicacion', '')).isdigit() and DESDE <= int(p['año_adjudicacion']) <= HASTA]
    ruts = {rut_num(p['rut_beneficiario']) for p in proyectos} - {None}
    dom = domicilios(ruts, idx)
    emp = empresas_2024(cs, idx)

    n_proy = collections.Counter()
    benef = collections.defaultdict(set)
    monto = collections.Counter()
    micro_peq = collections.Counter()
    sin_comuna = collections.Counter()
    for p in proyectos:
        r = rut_num(p['rut_beneficiario'])
        cod = dom.get(r)
        if cod is None:
            sin_comuna[p.get('tipo_persona_beneficiario') or 'sin dato'] += 1
            continue
        n_proy[cod] += 1
        benef[cod].add(r)
        monto[cod] += num(p.get('aprobado_corfo') or 0)
        if p.get('tramo_ventas') in ('Microempresa', 'Pequeña'):
            micro_peq[cod] += 1

    filas = []
    for cod, c in sorted(cs.items()):
        e = emp.get(cod, 0)
        filas.append(dict(
            codigo=cod, comuna=c['comuna'], region=c['region'], codigo_region=c['codigo_region'],
            proyectos=n_proy[cod], beneficiarios=len(benef[cod]), proyectos_micro_pequena=micro_peq[cod],
            monto_aprobado_corfo=round(monto[cod]), empresas_sii_2024=e,
            proyectos_por_mil_empresas=round(1000 * n_proy[cod] / e, 2) if e else None,
        ))
    sin_proyectos = [f['comuna'] for f in filas if f['proyectos'] == 0]
    salida = {
        '_meta': {
            'descripcion': f'Proyectos de Corfo (innovación y emprendimiento) adjudicados entre {DESDE} y {HASTA}, por comuna del domicilio vigente del beneficiario.',
            'fuentes': [
                'Corfo DataInnovación, API de proyectos 2009-2026 (descargada el 1-sep-2026 para navegador-ds22; derechos reservados: se publican solo agregados).',
                'SII, nómina de personas jurídicas, domicilios vigentes (PUB_NOM_DIRECCIONES, agosto de 2026).',
                'SII, estadísticas de empresas por comuna, año comercial 2024 (PUB_COMU).',
            ],
            'nivel': 2,
            'limites': [
                'Solo instrumentos de innovación y emprendimiento que publica DataInnovación (Ley I+D, Voucher, Startup, Semilla, etc.). No incluye Sercotec, Fosis ni el resto de Corfo.',
                'Comuna del domicilio vigente a agosto de 2026, no al momento del proyecto. Universidades, centros y grandes empresas suelen tener domicilio en Santiago, Providencia o Las Condes aunque ejecuten en regiones: comparar con «region_ejecucion» de Corfo antes de concluir.',
                'Beneficiarios sin domicilio en la nómina de personas jurídicas (por ejemplo, personas naturales) quedan fuera: ver «sin_comuna».',
                'Proyectos por cada 1.000 empresas usa el número de empresas del SII de 2024 en la comuna.',
                'Monto aprobado Corfo tal como viene en DataInnovación (pesos nominales de cada año, sin ajustar).',
            ],
            'proyectos_en_rango': len(proyectos),
            'sin_comuna': dict(sin_comuna),
            'comunas_sin_proyectos': len(sin_proyectos),
            'generado': datetime.date.today().isoformat(),
            'script': 'scripts/corfo.py',
            'licencia': 'CC BY 4.0 para el cálculo, Radar Emprende - Tercera Letra SpA (cita las fuentes originales)',
        },
        'comunas_sin_proyectos': sin_proyectos,
        'comunas': filas,
    }
    SALIDA.write_text(json.dumps(salida, ensure_ascii=False, indent=1), encoding='utf-8')
    print('proyectos', len(proyectos), '| con comuna', sum(n_proy.values()), '| sin comuna', dict(sin_comuna))
    print('comunas sin proyectos', len(sin_proyectos), '| empresas SII 2024', sum(emp.values()))


if __name__ == '__main__':
    main()
