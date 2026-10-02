"""Descarga las bases oficiales que usa Radar Emprende a data-raw/ (no versionado).

Uso: python scripts/descargar.py
Salta los archivos que ya existen. Fuentes y licencias en investigacion/2026-10-02-datos-publicos.md.
"""
import pathlib
import urllib.request

RAIZ = pathlib.Path(__file__).resolve().parent.parent / 'data-raw'
RES = 'https://datos.gob.cl/dataset/363edd60-4919-4ff1-b85f-f8e14d61285a/resource/'

FUENTES = {
    # Registro de Empresas y Sociedades (Ministerio de Economía), CC BY. Solo constituciones.
    'res/2013-sociedades-por-fecha-rut-constitucion.csv': RES + 'fd2b91b0-eb8e-45f1-98d0-1f3316bb6468/download/2013-sociedades-por-fecha-rut-constitucion.csv',
    'res/2014-sociedades-por-fecha-rut-constitucion.csv': RES + 'ba5d9b2a-c292-45f5-9767-93420c62529e/download/2014-sociedades-por-fecha-rut-constitucion.csv',
    'res/2015-sociedades-por-fecha-rut-constitucion.csv': RES + '6ffd416f-376f-40a8-9537-0d739f29fac9/download/2015-sociedades-por-fecha-rut-constitucion.csv',
    'res/2016-sociedades-por-fecha-rut-constitucion.csv': RES + '288b0a7d-2d40-4c59-a312-2cc562cfe4eb/download/2016-sociedades-por-fecha-rut-constitucion_v3.csv',
    'res/2017-sociedades-por-fecha-rut-constitucion.csv': RES + '667eef5c-0896-424b-baf1-d13356d40326/download/2017-sociedades-por-fecha-rut-constitucion.csv',
    'res/2018-sociedades-por-fecha-rut-constitucion.csv': RES + 'ca45026b-4dde-44b0-8725-64446a95f69d/download/2018-sociedades-por-fecha-rut-constitucion-v2.csv',
    'res/2019-sociedades-por-fecha-rut-constitucion.csv': RES + '0d0d0ffb-fb28-4314-9bf0-8402353c9448/download/2019-sociedades-por-fecha-rut-constitucion-v3.csv',
    'res/2020-sociedades-por-fecha-rut-constitucion.csv': RES + '1ad6cd82-8859-4601-a993-043009279f45/download/2020-sociedades-por-fecha-rut-constitucion.csv',
    'res/2021-sociedades-por-fecha-rut-constitucion.csv': RES + 'd5c69cb4-2fa8-4e92-906f-34776a30ce59/download/2021-sociedades-por-fecha-rut-constitucion.csv',
    'res/2022-sociedades-por-fecha-rut-constitucion.csv': RES + '3e286353-146d-47aa-ac42-e2f36e703d1f/download/2022-sociedades-por-fecha-rut-constitucion.csv',
    'res/2023-sociedades-por-fecha-rut-constitucion.csv': RES + '2fbe5f40-6c3d-42e6-8a84-e6ddce56d888/download/2023-sociedades-por-fecha-rut-constitucion.csv',
    'res/2024-sociedades-por-fecha-rut-constitucion.csv': RES + '42ee8c8c-59cf-42e4-89af-ec19a87dbf8d/download/2024-sociedades-por-fecha-rut-constitucion.csv',
    'res/2025-sociedades-por-fecha-rut-constitucion.csv': RES + '71c8e355-226a-461e-809a-870c2275a178/download/2025-sociedades-por-fecha-rut-constitucion.csv',
    'res/202608-sociedades-por-fecha-rut-constitucion.csv': RES + '472de7b5-384f-452d-9da5-2928689d8f2f/download/202608-sociedades-por-fecha-rut-constitucion.csv',
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


def main():
    for destino, url in FUENTES.items():
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
