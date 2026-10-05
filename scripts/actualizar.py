"""Actualización mensual: baja del Registro de Empresas y Sociedades lo que cambió y recalcula.

El Ministerio de Economía republica en datos.gob.cl el archivo del año en curso cerca de una vez
al mes (mismo recurso, otro nombre de archivo: 202608-..., 202609-...). Por eso no se fija la URL:
se lee la lista de recursos de la API CKAN y se baja cada año cuya fecha de modificación cambió.
Cada año queda en data-raw/res/<año>-sociedades-por-fecha-rut-constitucion.csv (un archivo por año,
para no contar dos veces el mismo año), y la fecha de publicación en data-raw/res/_ckan.json.

Si datos/constituciones_comuna.json ya usa la última versión de cada año, termina sin bajar nada. Así la
corrida semanal de GitHub Actions (.github/workflows/actualizar.yml) solo deja cambios cuando hay datos nuevos.

Uso: python scripts/actualizar.py [--forzar]
"""
import json
import pathlib
import re
import subprocess
import sys
import urllib.request

RAIZ = pathlib.Path(__file__).resolve().parent.parent
RES = RAIZ / 'data-raw' / 'res'
DATOS = RAIZ / 'datos' / 'constituciones_comuna.json'
ESTADO = RES / '_ckan.json'
PAQUETE = '363edd60-4919-4ff1-b85f-f8e14d61285a'
API = f'https://datos.gob.cl/api/3/action/package_show?id={PAQUETE}'
UA = {'User-Agent': 'Mozilla/5.0 (Radar Emprende)'}


def leer_api():
    with urllib.request.urlopen(urllib.request.Request(API, headers=UA), timeout=60) as r:
        d = json.load(r)
    if not d.get('success'):
        raise SystemExit(f'La API de datos.gob.cl no respondió bien: {str(d)[:200]}')
    recursos = {}
    for r in d['result']['resources']:
        m = re.match(r'Constituciones del a\w+o (\d{4})', r['name'])
        if not m:
            continue
        anio = m.group(1)
        if anio in recursos:
            raise SystemExit(f'Dos recursos para {anio} en datos.gob.cl: revisar a mano.')
        recursos[anio] = {'id': r['id'], 'url': r['url'], 'nombre': r['name'],
                          'modificado': r.get('last_modified') or r.get('created')}
    # Control positivo: el paquete tiene que traer los años ya conocidos.
    if not {'2013', '2025'} <= recursos.keys():
        raise SystemExit(f'La API no trae los años esperados (2013 y 2025): {sorted(recursos)}. Revisar el paquete.')
    return recursos


def bajar(url, ruta):
    tmp = ruta.with_suffix('.parcial')
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=600) as r, open(tmp, 'wb') as f:
        while bloque := r.read(1 << 20):
            f.write(bloque)
    with open(tmp, encoding='utf-8-sig') as f:
        cabecera = f.readline()
    if 'Comuna Tributaria' not in cabecera or 'Mes' not in cabecera:
        tmp.unlink()
        raise SystemExit(f'El archivo de {url} no tiene la cabecera esperada: {cabecera[:200]!r}')
    tmp.replace(ruta)


def main():
    forzar = '--forzar' in sys.argv
    RES.mkdir(parents=True, exist_ok=True)
    antes = json.loads(ESTADO.read_text(encoding='utf-8')) if ESTADO.exists() else {}
    recursos = leer_api()
    if not forzar and DATOS.exists():
        usadas = json.loads(DATOS.read_text(encoding='utf-8')).get('corte', {}).get('versiones')
        if usadas == {a: r['modificado'] for a, r in recursos.items()}:
            print('Sin publicación nueva: los datos ya usan la última versión de cada año.')
            return
    # De aquí en adelante datos/ no usa lo publicado: siempre se recalcula, aunque no haya nada que bajar
    # (p. ej. si una corrida anterior bajó los archivos y falló al calcular).
    for anio, r in sorted(recursos.items()):
        ruta = RES / f'{anio}-sociedades-por-fecha-rut-constitucion.csv'
        if not forzar and ruta.exists() and antes.get(anio, {}).get('modificado') == r['modificado']:
            continue
        print('bajando', anio, '·', r['nombre'], '· modificado', r['modificado'])
        bajar(r['url'], ruta)
    # Archivos con nombre de corte (p. ej. 202608-...) de descargas anteriores: se reemplazan por el del año.
    for f in RES.glob('[0-9][0-9][0-9][0-9][0-9][0-9]-*.csv'):
        if (RES / f'{f.name[:4]}-sociedades-por-fecha-rut-constitucion.csv').exists():
            print('quitando', f.name, '(reemplazado por el archivo del año)')
            f.unlink()
    # constituciones.py lee las versiones de _ckan.json: se escribe antes, y si el cálculo falla se borra,
    # para que la corrida siguiente vuelva a bajar y a calcular en vez de darse por al día.
    ESTADO.write_text(json.dumps(recursos, ensure_ascii=False, indent=1), encoding='utf-8')
    try:
        subprocess.run([sys.executable, str(RAIZ / 'scripts' / 'constituciones.py')], check=True)
    except subprocess.CalledProcessError:
        ESTADO.unlink(missing_ok=True)
        raise


if __name__ == '__main__':
    main()
