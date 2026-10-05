"""Descarga las bases oficiales que usa Radar Emprende a data-raw/ (no versionado).

Uso: python scripts/descargar.py [prefijo ...]   (p. ej. «censo/» baja solo el Censo)
Salta los archivos que ya existen. El Registro de Empresas y Sociedades va aparte: scripts/actualizar.py. Fuentes y licencias en investigacion/2026-10-02-datos-publicos.md.
"""
import pathlib
import urllib.request

RAIZ = pathlib.Path(__file__).resolve().parent.parent / 'data-raw'

FUENTES = {
    # El Registro de Empresas y Sociedades lo baja scripts/actualizar.py: el archivo del año en curso
    # cambia de nombre cada mes y se busca en la API de datos.gob.cl.
    # SII: estadísticas de empresas y nómina de personas jurídicas (licencia no declarada: se publican agregados).
    'sii/EMPRESAS.zip': 'https://www.sii.cl/sobre_el_sii/empresas/EMPRESAS.zip',
    'sii/PUB_EMPRESAS_PJ_2020_A_2024.zip': 'https://www.sii.cl/estadisticas/nominas/PUB_EMPRESAS_PJ_2020_A_2024.zip',
    'sii/PUB_NOMBRES_PJ.zip': 'https://www.sii.cl/estadisticas/nominas/PUB_NOMBRES_PJ.zip',
    'sii/PUB_NOM_DIRECCIONES.zip': 'https://www.sii.cl/estadisticas/nominas/PUB_NOM_DIRECCIONES.zip',
    # INE: Censo 2024, población censada por sexo y edad (por comuna).
    'censo/D1_Poblacion-censada-por-sexo-y-edad-en-grupos-quinquenales.xlsx': 'https://censo2024.ine.gob.cl/wp-content/uploads/2025/03/D1_Poblacion-censada-por-sexo-y-edad-en-grupos-quinquenales.xlsx',
    # INE / Economía: Encuesta de Microemprendimiento 8 (2025).
    'eme/base-de-datos-full-eme8-csv.csv': 'https://www.economia.gob.cl/wp-content/uploads/2025/12/base-de-datos-full-eme8-csv.csv',
}


def descargar_corfo():
    """Proyectos de Corfo DataInnovación por su API pública.

    La API pide un token que Corfo publica en su página de documentación («public apiKey»);
    se lee de ahí en cada corrida para no dejarlo escrito en el repo.
    """
    import json
    import re
    ruta = RAIZ / 'corfo' / 'datainnovacion-proyectos.json'
    if ruta.exists() and ruta.stat().st_size > 0:
        print('ya está ', ruta.relative_to(RAIZ))
        return
    ruta.parent.mkdir(parents=True, exist_ok=True)
    ua = {'User-Agent': 'Mozilla/5.0 (Radar Emprende)'}
    doc = urllib.request.urlopen(urllib.request.Request('https://datainnovacion.cl/api', headers=ua), timeout=60).read().decode('utf-8', 'replace')
    m = re.search(r'(eyJ[\w-]+\.[\w-]+\.[\w-]+)', doc)
    if not m:
        raise SystemExit('No se encontró el token público en https://datainnovacion.cl/api: revisar la página.')
    req = urllib.request.Request('https://datainnovacion.cl/api/v1/proyectos',
                                 headers={**ua, 'Accept': 'application/json', 'Authorization': m.group(1)})
    datos = json.loads(urllib.request.urlopen(req, timeout=600).read().decode('utf-8'))
    if not isinstance(datos, list) or not datos:
        raise SystemExit(f'Respuesta inesperada de la API de DataInnovación: {str(datos)[:200]}')
    ruta.write_text(json.dumps(datos, ensure_ascii=False), encoding='utf-8')
    print('bajando  corfo/datainnovacion-proyectos.json:', len(datos), 'proyectos')


def main():
    import sys
    prefijos = sys.argv[1:]
    if not prefijos or any('corfo'.startswith(p) or p.startswith('corfo') for p in prefijos):
        descargar_corfo()
    for destino, url in FUENTES.items():
        if prefijos and not any(destino.startswith(p) for p in prefijos):
            continue
        ruta = RAIZ / destino
        if ruta.exists() and ruta.stat().st_size > 0:
            print('ya está ', destino)
            continue
        ruta.parent.mkdir(parents=True, exist_ok=True)
        print('bajando ', destino)
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Radar Emprende)'})
        with urllib.request.urlopen(req, timeout=600) as r, open(ruta, 'wb') as f:
            while bloque := r.read(1 << 20):
                f.write(bloque)
        print('  ', ruta.stat().st_size, 'bytes')


if __name__ == '__main__':
    main()
