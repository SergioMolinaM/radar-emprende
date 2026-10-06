"""Prerender post-build: guarda el HTML ya renderizado de cada ruta en dist/<ruta>.html.

Por qué: el sitio es una SPA y sin esto Google, Bing, WhatsApp y LinkedIn reciben un index.html
genérico para todas las rutas (título, descripción, canónica y JSON-LD los pone el JS). Con el
HTML estático, cada ruta lleva su <head> correcto y su contenido legible sin ejecutar JavaScript.
El JS igual carga y toma el control (React vuelve a renderizar el mismo contenido).

También escribe dist/404.html (ruta inexistente → Netlify responde 404 real, no una portada con
código 200) y regenera dist/sitemap.xml con lastmod = último cambio de contenido (git).

Uso: python scripts/prerender.py   (lo llama `npm run build`; requiere playwright para Python).
Heredado de Radar Construcción Industrializada el 2-oct-2026. Con ORIGEN = None no escribe
canónica ni sitemap.xml.
"""
from __future__ import annotations

import datetime as dt
import pathlib
import subprocess
import sys
import time
import urllib.request

from playwright.sync_api import sync_playwright

RAIZ = pathlib.Path(__file__).resolve().parents[1]
DIST = RAIZ / 'dist'
# Dominio radaremprende.cl (inscrito en NIC el 6-oct-2026). Con None no hay canónica ni sitemap.
ORIGEN: str | None = 'https://radaremprende.cl'
PUERTO = 4198

# (ruta, changefreq, priority) — la misma lista que el sitemap
RUTAS: list[tuple[str, str, str | None]] = [
    ('/', 'monthly', '1.0'),
    ('/empresas-creadas', 'monthly', '0.9'),
    ('/quien-las-crea', 'monthly', None),
    ('/cohortes', 'yearly', None),
    ('/corfo', 'yearly', None),
    ('/formales-e-informales', 'yearly', None),
    ('/metodologia', 'monthly', None),
    ('/acerca', 'yearly', None),
]


def esperar_servidor(url: str, seg: int = 30) -> None:
    fin = time.time() + seg
    while time.time() < fin:
        try:
            urllib.request.urlopen(url, timeout=2).read(1)
            return
        except Exception:
            time.sleep(0.4)
    raise SystemExit(f'prerender: el preview no respondió en {seg} s')


def fecha_contenido() -> str:
    """lastmod del sitemap: la fecha del último cambio de contenido (src/ y public/), no la del build.
    Si hay cambios sin commitear en esas carpetas, es hoy; si no, la fecha del último commit que las tocó."""
    try:
        sucio = subprocess.run(['git', 'status', '--porcelain', '--', 'src', 'public'], cwd=RAIZ, capture_output=True, text=True, check=True).stdout.strip()
        if sucio:
            return dt.date.today().isoformat()
        ultimo = subprocess.run(['git', 'log', '-1', '--format=%cs', '--', 'src', 'public'], cwd=RAIZ, capture_output=True, text=True, check=True).stdout.strip()
        return ultimo or dt.date.today().isoformat()
    except Exception:
        return dt.date.today().isoformat()


def sitemap() -> str:
    hoy = fecha_contenido()
    filas = []
    for ruta, freq, prio in RUTAS:
        loc = (ORIGEN or '') + ('/' if ruta == '/' else ruta)
        extra = f'<priority>{prio}</priority>' if prio else ''
        filas.append(f'  <url><loc>{loc}</loc><lastmod>{hoy}</lastmod><changefreq>{freq}</changefreq>{extra}</url>')
    return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + '\n'.join(filas) + '\n</urlset>\n'


def main() -> None:
    if not (DIST / 'index.html').exists():
        raise SystemExit('prerender: falta dist/index.html; corre vite build primero')
    srv = subprocess.Popen(
        ['npx', 'vite', 'preview', '--port', str(PUERTO), '--strictPort'],
        cwd=RAIZ, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, shell=(sys.platform == 'win32'),
    )
    try:
        base = f'http://localhost:{PUERTO}'
        esperar_servidor(base + '/')
        plantilla = (DIST / 'index.html').read_text(encoding='utf-8')
        with sync_playwright() as p:
            navegador = p.chromium.launch()
            pagina = navegador.new_page(viewport={'width': 1280, 'height': 900})
            errores: list[str] = []
            listos: list[tuple[str, pathlib.Path, str]] = []
            pagina.on('pageerror', lambda e: errores.append(str(e)))
            # <ruta>.html y no <ruta>/index.html: con el directorio, Netlify redirige /indice → /indice/ (301) y la
            # canónica dice /indice; con el archivo plano sirve /indice tal cual (verificado en vivo el 18-sep-2026).
            objetivos = [(r, DIST / (r.strip('/') + '.html') if r != '/' else DIST / 'index.html') for r, _, _ in RUTAS]
            objetivos.append(('/__no-existe__', DIST / '404.html'))
            for ruta, destino in objetivos:
                pagina.goto(base + ruta, wait_until='networkidle')
                pagina.evaluate('document.fonts.ready')
                pagina.wait_for_timeout(250)
                html = pagina.evaluate('"<!doctype html>" + document.documentElement.outerHTML')
                if '<div id="root"></div>' in html or '<title>' not in html:
                    raise SystemExit(f'prerender: {ruta} salió vacía')
                # Vite inyecta <link rel="modulepreload"> con URL absoluta del preview; en producción la CSP
                # (script-src 'self') la bloquea. Se vuelve relativa y se comprueba que no quede rastro.
                html = html.replace(f'{base}/', '/')
                if 'localhost' in html:
                    raise SystemExit(f'prerender: {ruta} conserva una URL de localhost')
                if ORIGEN:
                    # Control: el head prerenderizado tiene que llevar la canónica de esa ruta (la pone RouteMeta).
                    canon = ORIGEN + ('/' if ruta == '/' else ruta)
                    if ruta != '/__no-existe__' and f'<link rel="canonical" href="{canon}">' not in html:
                        raise SystemExit(f'prerender: {ruta} sin canónica {canon}')
                    # Control: RouteMeta no pone canónica ni og:url en una ruta desconocida.
                    if ruta == '/__no-existe__' and ('rel="canonical"' in html or 'property="og:url"' in html):
                        raise SystemExit('prerender: la 404 trae canónica u og:url')
                if ruta == '/__no-existe__':
                    # La 404 no es una URL indexable.
                    html = html.replace('</head>', '<meta name="robots" content="noindex"></head>', 1)
                # Control: la página trae su título propio (lo pone RouteMeta) y no el genérico.
                if ruta not in ('/', '/__no-existe__') and '<title>Radar Emprende — Chile</title>' in html:
                    raise SystemExit(f'prerender: {ruta} quedó con el título genérico')
                listos.append((ruta, destino, html))
            navegador.close()
            if errores:
                raise SystemExit('prerender: errores de página: ' + '; '.join(errores[:3]))
        # Se escribe todo al final: vite preview sirve dist/index.html como respaldo de cada ruta, y si la
        # portada ya renderizada lo reemplazara a mitad de camino, sus modulepreload (datos de la portada)
        # quedarían copiados en todas las páginas siguientes.
        for ruta, destino, html in listos:
            destino.parent.mkdir(parents=True, exist_ok=True)
            destino.write_text(html, encoding='utf-8')
            print(f'  {ruta:22s} -> {destino.relative_to(DIST)}  ({len(html) // 1024} KB)')
        assert '<div id="root">' in plantilla
        if ORIGEN:
            xml = sitemap()
            (DIST / 'sitemap.xml').write_text(xml, encoding='utf-8')
            print(f'  sitemap.xml: {len(RUTAS)} URLs, lastmod {fecha_contenido()} (sólo en dist/)')
        else:
            print('  sitemap.xml: no se escribe (sin dominio propio todavía)')
    finally:
        srv.terminate()
        try:
            srv.wait(timeout=5)
        except subprocess.TimeoutExpired:
            srv.kill()


if __name__ == '__main__':
    main()
