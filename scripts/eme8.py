"""EME 8 (INE/Economía, levantamiento 2025): limitantes del crecimiento (K1) y
conocimiento y uso de Fosis, Sercotec y Corfo (K12-K14) y de programas (K15).

Entrada: data-raw/eme/base-de-datos-full-eme8-csv.csv (scripts/descargar.py).
Salida:  datos/eme8_limitantes.json

Códigos según el diccionario de variables EME 8 (economia.gob.cl, dic-2025):
k1_*: 0 no, 1 primer limitante, 2 segundo, 99 no responde (pp.148-152).
k12_*: 1 sí, 2 no, 99 NR; k13/k14 sólo si la anterior es sí.
Todas las proporciones van ponderadas con factor_eme. Se publica también n
sin ponderar; con n < 60 la celda se marca `poco_confiable` (criterio propio).
"""
import csv
import json
from datetime import date
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
BASE = RAIZ / 'data-raw' / 'eme' / 'base-de-datos-full-eme8-csv.csv'
SALIDA = RAIZ / 'datos' / 'eme8_limitantes.json'

LIMITANTES = {
    'k1_1': 'Falta de clientes',
    'k1_2': 'Falta de insumos',
    'k1_3': 'Falta de financiamiento',
    'k1_4': 'Falta de trabajadores capacitados y/o altos costos de contratación',
    'k1_5': 'Alto costo de las regulaciones y/o tasas de impuestos',
    'k1_6': 'Altos costos de insumos',
    'k1_7': 'Incertidumbre sobre el estado de la economía',
    'k1_8': 'Responsabilidades familiares',
    'k1_9': 'Razones de salud',
    'k1_10': 'Factores naturales y climáticos',
    'k1_11': 'No cree que existan factores que limiten',
    'k1_77': 'Otro',
}
INSTITUCIONES = {'1': 'Fosis', '2': 'Sercotec', '3': 'Corfo'}
PROGRAMAS = {
    'k15_1': 'Subsidio al sueldo mínimo',
    'k15_2': 'Fogape Chile Apoya',
    'k15_3': 'Digitaliza tu Pyme (Chequeo digital)',
    'k15_4': 'Capital Semilla, Abeja y/o Pioneras',
    'k15_5': 'Centro de Desarrollo de Negocios',
    'k15_6': 'Medidas de alivio tributario y obligaciones fiscales',
}
N_MIN = 60


def leer():
    with open(BASE, encoding='utf-8-sig', newline='') as f:
        filas = list(csv.DictReader(f))
    if len(filas) != 7170:
        raise SystemExit(f'Se esperaban 7170 filas (diccionario); hay {len(filas)}')
    return filas


def prop(filas, num, den):
    """Proporción ponderada de `num` sobre las filas que cumplen `den`."""
    sub = [r for r in filas if den(r)]
    w = sum(float(r['factor_eme']) for r in sub)
    wn = sum(float(r['factor_eme']) for r in sub if num(r))
    return {
        'pct': round(100 * wn / w, 1) if w else None,
        'n': len(sub),
        'poco_confiable': len(sub) < N_MIN,
    }


def grupos(filas):
    g = {'total': filas}
    g['empleador'] = [r for r in filas if r['cise_eme'] == '1']
    g['cuenta_propia'] = [r for r in filas if r['cise_eme'] == '0']
    g['informal'] = [r for r in filas if r['informalidad'] == '1']
    g['formal'] = [r for r in filas if r['informalidad'] == '0']
    return g


def main():
    filas = leer()
    valido_k1 = lambda r: r['k1_1'] not in ('99', 'NA', '')
    out = {'_meta': {
        'fuente': 'INE y Ministerio de Economía, VIII Encuesta de Microemprendimiento (EME 8), levantamiento may-ago 2025. Base full y diccionario de variables, economia.gob.cl, dic-2025.',
        'pregunta_k1': '¿Cuáles son los dos aspectos más importantes que usted cree limitan al crecimiento de su negocio? (respuesta espontánea; si no la hay, se leen alternativas)',
        'universo': 'Microemprendedores: cuenta propia y empleadores con hasta 10 trabajadores, formales e informales.',
        'ponderador': 'factor_eme',
        'n_min': N_MIN,
        'generado': date.today().isoformat(),
        'nivel': 2,
    }}
    res = {}
    for nombre, sub in grupos(filas).items():
        lim = {}
        for v, etiqueta in LIMITANTES.items():
            lim[etiqueta] = {
                'primero': prop(sub, lambda r, v=v: r[v] == '1', valido_k1),
                'primero_o_segundo': prop(sub, lambda r, v=v: r[v] in ('1', '2'), valido_k1),
            }
        inst = {}
        for i, nom in INSTITUCIONES.items():
            k12, k13, k14 = f'k12_{i}', f'k13_{i}', f'k14_{i}'
            valido = lambda r, k=k12: r[k] in ('1', '2')
            inst[nom] = {
                'conoce': prop(sub, lambda r, k=k12: r[k] == '1', valido),
                'postulo': prop(sub, lambda r, k=k13: r[k] == '1', valido),
                'recibio': prop(sub, lambda r, k=k14: r[k] == '1', valido),
            }
        prog = {}
        for v, nom in PROGRAMAS.items():
            prog[nom] = prop(sub, lambda r, v=v: r[v] == '1', lambda r, v=v: r[v] in ('1', '2'))
        valido_k9 = lambda r: r['k9'] in ('1', '2', '3', '77')
        destino = {
            nom: prop(sub, lambda r, c=c: r['k9'] == c, valido_k9)
            for c, nom in (('1', 'Público en general'), ('2', 'Empresa o cooperativa'),
                           ('3', 'Instituciones del Estado u otras organizaciones'), ('77', 'Otro'))
        }
        res[nombre] = {'limitantes': lim, 'instituciones': inst, 'programas': prog,
                       'ventas_dirigidas_a': destino}
    out['grupos'] = res
    SALIDA.write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding='utf-8')
    print('escrito', SALIDA)


if __name__ == '__main__':
    main()
