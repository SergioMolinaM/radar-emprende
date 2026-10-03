"""EME 8 (INE/Economía, levantamiento 2025): informalidad por región y rama, y las
razones para iniciar o no iniciar actividades en el SII.

Entrada: data-raw/eme/base-de-datos-full-eme8-csv.csv (scripts/descargar.py).
Salida:  datos/eme8_informalidad.json

Variables (diccionario de variables EME 8, economia.gob.cl, dic-2025):
- informalidad (p.215): 1 informal, 0 formal. Construcción en el manual de usuario
  de la base, §5.3: registro en el SII (e3), contabilidad (e1) y separación de
  gastos (e2), con el lugar de trabajo como variable de reemplazo.
- e3 (p.111): inició actividades en el SII; 1-4 sí, 5 no, 6 no, en proceso.
- e4 (p.111): razón principal para no iniciar actividades. Cuestionario p.13: sólo se pregunta si
  e3 = 5 («No»); «No, estoy en proceso» (6) salta a E8.
- e6 (p.113): razón principal para iniciar actividades, pregunta E6 del cuestionario (p.14); se
  pregunta si e3 = 1 a 4. El código 3 no coincide entre fuentes: el cuestionario impreso dice «Para
  acceder a financiamiento (créditos)» y el diccionario «Para descontar IVA (descontar gastos)».
  Se publica como ambiguo y fuera del gráfico.
- c1_caenes_1d_red (p.25): rama reducida, 6 categorías.

Errores estándar con el diseño complejo (estrato, conglomerado, factor_eme), por
linealización de Taylor para una proporción en un dominio; los estratos con un solo
conglomerado no aportan varianza (equivale a survey.lonely.psu = "certainty", que
indica el manual, §4). Calidad según el «Estándar para la evaluación de la calidad de
las estimaciones en encuestas de hogares» (INE, 2020), p.9-10:
  n >= 60 y gl >= 9, si no: no fiable;
  ee <= raíz cúbica de p² / 9 (p < 0,5) o de (1-p)² / 9 (p >= 0,5): fiable; si no: poco fiable.
gl = conglomerados con observaciones en el dominio - estratos con observaciones en el dominio.
Además, el total ponderado de casos (numerador) debe tener cv <= 15 % (15-30 %: poco fiable;
> 30 %: no fiable). El estándar no lo escribe así para proporciones, pero es la regla que
reproduce la única marca oficial de «poco fiable» (Aysén: ee de la proporción dentro del
tope, cv del total 17,7 %; ninguna otra región supera 15 %). Se aplica la más estricta.

Redondeo: a dos decimales y luego a uno, mitad hacia arriba. Es el que reproduce las cifras
publicadas (Servicios 39,246 → 39,3; La Araucanía 66,047 → 66,1).

Control positivo: reproduce las 16 tasas regionales, las 6 por rama y la marca de
«poco fiable» de la síntesis oficial (pp.18-20). Si no las reproduce, el script se detiene.
"""
import csv
import json
from collections import defaultdict
from decimal import ROUND_HALF_UP, Decimal
from datetime import date
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
BASE = RAIZ / 'data-raw' / 'eme' / 'base-de-datos-full-eme8-csv.csv'
SALIDA = RAIZ / 'datos' / 'eme8_informalidad.json'

REGIONES = {
    '15': 'Arica y Parinacota', '1': 'Tarapacá', '2': 'Antofagasta', '3': 'Atacama', '4': 'Coquimbo',
    '5': 'Valparaíso', '13': 'Metropolitana', '6': "O'Higgins", '7': 'Maule', '16': 'Ñuble', '8': 'Biobío',
    '9': 'La Araucanía', '14': 'Los Ríos', '10': 'Los Lagos', '11': 'Aysén', '12': 'Magallanes',
}
RAMAS = {'1': 'Sector primario', '2': 'Manufactura', '3': 'Construcción', '4': 'Comercio', '5': 'Transporte', '6': 'Servicios'}
RAZON_NO = {
    '1': 'El registro es demasiado caro o toma mucho tiempo',
    '2': 'No sabe cómo registrarse',
    '3': 'El negocio es demasiado pequeño o la actividad es poco frecuente',
    '4': 'No cumple los requisitos',
    '5': 'Temor a ser fiscalizado o a perder beneficios sociales',
    '6': 'El registro no es esencial para el negocio',
    '77': 'Otra',
}
RAZON_SI = {
    '1': 'Para cumplir la ley',
    '2': 'Para acceder a programas o beneficios',
    '3': 'Código 3, ambiguo: «Para acceder a financiamiento (créditos)» según el cuestionario; «Para descontar IVA (descontar gastos)» según el diccionario',
    '4': 'Para cotizar en pensiones y salud',
    '5': 'Por exigencia de clientes o proveedores',
    '6': 'Para formalizar el negocio',
    '77': 'Otra',
}

# Síntesis de resultados VIII EME (INE), pp.18-20. Marca: True = «estimación poco fiable».
OFICIAL_NACIONAL = 54.2
OFICIAL_RAMA = {'1': 74.3, '2': 63.6, '3': 67.9, '4': 56.6, '5': 57.1, '6': 39.3}
OFICIAL_REGION_NOMBRADAS = {'9': 66.1, '1': 64.3, '3': 61.7, '7': 60.8}
OFICIAL_REGION_VALORES = sorted([57.5, 64.3, 58.3, 61.7, 55.8, 53.5, 50.7, 51.6, 60.8, 52.9, 54.7, 66.1, 56.5, 56.1, 50.0, 34.0])
OFICIAL_POCO_FIABLES = 1  # una sola barra regional con asterisco (50,0*)


def leer():
    with open(BASE, encoding='utf-8-sig', newline='') as f:
        filas = list(csv.DictReader(f))
    if len(filas) != 7170:
        raise SystemExit(f'Se esperaban 7170 filas (diccionario); hay {len(filas)}')
    return filas


def red(x):
    """Redondeo de la síntesis oficial: a 2 decimales y luego a 1, mitad hacia arriba."""
    d2 = Decimal(repr(x)).quantize(Decimal('0.01'), ROUND_HALF_UP)
    return float(d2.quantize(Decimal('0.1'), ROUND_HALF_UP))


ORDEN = ['no fiable', 'poco fiable', 'fiable']


def _varianza(filas, valor):
    """Varianza de diseño de un total: suma por estrato de la dispersión de los totales por conglomerado."""
    tot = defaultdict(float)
    upm_por_estrato = defaultdict(set)
    for r in filas:
        upm_por_estrato[r['estrato']].add(r['conglomerado'])
        v = valor(r)
        if v:
            tot[(r['estrato'], r['conglomerado'])] += v
    var = 0.0
    for h, upms in upm_por_estrato.items():
        nh = len(upms)
        if nh < 2:
            continue
        zs = [tot.get((h, c), 0.0) for c in upms]
        media = sum(zs) / nh
        var += nh / (nh - 1) * sum((z - media) ** 2 for z in zs)
    return var


def proporcion(filas, en_dominio, es_caso):
    """Proporción ponderada de `es_caso` dentro del dominio, con ee de diseño y calidad INE 2020.
    `filas` es toda la base: el dominio se trata como subpoblación, sin recortar el diseño."""
    dom = [r for r in filas if en_dominio(r)]
    n = len(dom)
    if n == 0:
        return None
    W = sum(float(r['factor_eme']) for r in dom)
    p = sum(float(r['factor_eme']) for r in dom if es_caso(r)) / W
    # Proporción: variable linealizada z = w (y - p) / W en el dominio, 0 fuera.
    ee = _varianza(filas, lambda r: float(r['factor_eme']) * ((1.0 if es_caso(r) else 0.0) - p) / W if en_dominio(r) else 0.0) ** 0.5
    # Total de casos (numerador).
    T = W * p
    cv_total = (_varianza(filas, lambda r: float(r['factor_eme']) if en_dominio(r) and es_caso(r) else 0.0) ** 0.5 / T) if T else float('inf')
    gl = len({r['conglomerado'] for r in dom}) - len({r['estrato'] for r in dom})
    if n < 60 or gl < 9:
        calidad = 'no fiable'
    else:
        tope = (min(p, 1 - p) ** 2) ** (1 / 3) / 9
        c_prop = 'fiable' if ee <= tope else 'poco fiable'
        c_tot = 'fiable' if cv_total <= 0.15 else 'poco fiable' if cv_total <= 0.30 else 'no fiable'
        calidad = min(c_prop, c_tot, key=ORDEN.index)
    return {'pct': red(100 * p), 'ee_pct': round(100 * ee, 2), 'cv_total_pct': round(100 * cv_total, 1), 'n': n, 'gl': gl, 'calidad': calidad}



def main():
    filas = leer()
    con_dato = lambda r: r['informalidad'] in ('0', '1')
    informal = lambda r: r['informalidad'] == '1'

    nacional = proporcion(filas, con_dato, informal)
    region = {c: {'nombre': nom, **proporcion(filas, lambda r, c=c: con_dato(r) and r['region'] == c, informal)}
              for c, nom in REGIONES.items()}
    rama = {c: {'nombre': nom, **proporcion(filas, lambda r, c=c: con_dato(r) and r['c1_caenes_1d_red'] == c, informal)}
            for c, nom in RAMAS.items()}

    # --- Control positivo contra la síntesis oficial ---
    errores = []
    if nacional['pct'] != OFICIAL_NACIONAL:
        errores.append(f"nacional {nacional['pct']} != {OFICIAL_NACIONAL}")
    for c, v in OFICIAL_RAMA.items():
        if rama[c]['pct'] != v:
            errores.append(f"rama {RAMAS[c]} {rama[c]['pct']} != {v}")
    for c, v in OFICIAL_REGION_NOMBRADAS.items():
        if region[c]['pct'] != v:
            errores.append(f"región {REGIONES[c]} {region[c]['pct']} != {v}")
    if sorted(x['pct'] for x in region.values()) != OFICIAL_REGION_VALORES:
        errores.append(f"valores regionales {sorted(x['pct'] for x in region.values())} != {OFICIAL_REGION_VALORES}")
    poco = [x for x in region.values() if x['calidad'] != 'fiable']
    if len(poco) != OFICIAL_POCO_FIABLES or poco[0]['pct'] != 50.0 or poco[0]['calidad'] != 'poco fiable':
        errores.append(f"marcas de calidad regionales: {[(x['nombre'], x['pct'], x['calidad']) for x in poco]}")
    if errores:
        raise SystemExit('Control positivo FALLA:\n  ' + '\n  '.join(errores))

    # --- Razones: por qué no y por qué sí ---
    sin_inicio = lambda r: r['e3'] == '5' and r['e4'] not in ('88', '99', 'NA', '')
    con_inicio = lambda r: r['e3'] in ('1', '2', '3', '4') and r['e6'] not in ('88', '99', 'NA', '')
    razones_no = {c: {'razon': t, **proporcion(filas, sin_inicio, lambda r, c=c: r['e4'] == c)} for c, t in RAZON_NO.items()}
    razones_si = {c: {'razon': t, **proporcion(filas, con_inicio, lambda r, c=c: r['e6'] == c)} for c, t in RAZON_SI.items()}
    sin_inicio_total = proporcion(filas, lambda r: r['e3'] in [str(i) for i in range(1, 7)], lambda r: r['e3'] in ('5', '6'))

    out = {
        '_meta': {
            'descripcion': 'Microemprendedores formales e informales por región y rama de actividad, y razón principal para iniciar o no iniciar actividades en el SII.',
            'fuente': 'Elaboración propia a partir de la base de datos de la VIII Encuesta de Microemprendimiento, 2025 (INE y Ministerio de Economía; base full, diccionario de variables y manual de usuario, economia.gob.cl, dic-2025).',
            'universo': 'Microemprendedores: cuenta propia y empleadores con hasta 10 trabajadores, formales e informales. Representatividad nacional y regional; no comunal.',
            'definicion_informalidad': 'Síntesis de resultados VIII EME, p.18: «Se considera como persona microemprendedora informal a quien no cuenta con registro ante el Servicio de Impuestos Internos y no lleva un sistema contable que les permita separar los gastos del negocio de los gastos del hogar.»',
            'diseno': 'Errores estándar con estrato, conglomerado y factor_eme (linealización de Taylor; estratos de un conglomerado sin aporte de varianza).',
            'calidad': 'INE (2020), Estándar para la evaluación de la calidad de las estimaciones en encuestas de hogares, pp.9-10: n >= 60, gl >= 9 y ee <= raíz cúbica de p²/9 (o de (1-p)²/9 si p >= 0,5); además cv del total de casos <= 15 % (regla que reproduce la marca oficial de Aysén). «no fiable» no se publica.',
            'redondeo': 'A dos decimales y luego a uno, mitad hacia arriba: reproduce las cifras de la síntesis oficial.',
            'control': 'Reproduce la tasa nacional (54,2 %), las 6 tasas por rama, las 16 regionales y la única marca de «poco fiable» (50,0 %) de la síntesis oficial, pp.18-20.',
            'preguntas': {
                'e4': '¿Cuál es la principal razón por la que no ha iniciado actividades de su negocio o actividad por cuenta propia ante el Servicio de Impuestos Internos (SII)? (pregunta E4, cuestionario EME 8, p.13; sólo a quien responde «No» en E3, no a quien está en proceso; respuesta espontánea, si no la hay se leen alternativas)',
                'e6': '¿Cuál es la principal razón por la que inició actividades de su negocio o actividad por cuenta propia ante el Servicio de Impuestos Internos (SII)? (pregunta E6, cuestionario EME 8, p.14; respuesta espontánea, si no la hay se leen alternativas)',
            },
            'nota_e3': 'Sin inicio de actividades en el SII no equivale a informal: la tasa de informalidad también considera la contabilidad y la separación de gastos.',
            'generado': date.today().isoformat(),
            'script': 'scripts/eme8_informalidad.py',
            'nivel': 2,
            'licencia': 'CC BY 4.0 para el cálculo (Radar Emprende, de Tercera Letra SpA).',
        },
        'informalidad': {'nacional': nacional, 'region': region, 'rama': rama},
        'sin_inicio_actividades': sin_inicio_total,
        'razones_no_inicio': razones_no,
        'razones_inicio': razones_si,
    }
    SALIDA.write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding='utf-8')
    print('Control positivo OK')
    print('nacional', nacional)
    for x in region.values():
        print(f"  {x['nombre']:20} {x['pct']:5} ee {x['ee_pct']:5} cvT {x['cv_total_pct']:5} n {x['n']:5} gl {x['gl']:4} {x['calidad']}")
    for x in rama.values():
        print(f"  {x['nombre']:20} {x['pct']:5} ee {x['ee_pct']:5} n {x['n']:5} {x['calidad']}")
    print('sin inicio', sin_inicio_total)
    for x in razones_no.values():
        print(f"  NO {x['pct']:5} ee {x['ee_pct']:5} cvT {x['cv_total_pct']:5} n {x['n']} {x['calidad']:12} {x['razon']}")
    for x in razones_si.values():
        print(f"  SÍ {x['pct']:5} ee {x['ee_pct']:5} cvT {x['cv_total_pct']:5} n {x['n']} {x['calidad']:12} {x['razon']}")


if __name__ == '__main__':
    main()
