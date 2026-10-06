"""Íconos de pantalla de inicio (iPhone y Android) desde la marca del sitio.

Dibuja la variante «ping» de RadarMark (src/components/editorial/RadarMark.tsx), estática y con los colores
de la paleta «Diario», y escribe en public/:
  apple-touch-icon.png (180)   — iPhone, «Agregar a inicio»; iOS redondea las esquinas.
  icon-192.png, icon-512.png   — Android y manifest.webmanifest (purpose any).
  icon-maskable-512.png        — Android con máscara: la marca dentro de la zona segura (círculo del 80 %).

Uso: python scripts/iconos.py   (requiere playwright para Python). Si cambia la marca o la paleta, se regenera.
"""
from __future__ import annotations

import pathlib

from playwright.sync_api import sync_playwright

PUBLIC = pathlib.Path(__file__).resolve().parents[1] / 'public'
TINTA = '#111111'  # --accent
ROJO = '#c8102e'  # --accent-2
PAPEL = '#ffffff'  # --paper

MARCA = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
  <circle cx="24" cy="24" r="21" stroke="{TINTA}" stroke-width="1.1" opacity="0.28"/>
  <circle cx="24" cy="24" r="14" stroke="{TINTA}" stroke-width="1.1" opacity="0.34"/>
  <circle cx="24" cy="24" r="7" stroke="{TINTA}" stroke-width="1.1" opacity="0.5"/>
  <line x1="24" y1="3" x2="24" y2="45" stroke="{TINTA}" stroke-width="0.8" opacity="0.18"/>
  <line x1="3" y1="24" x2="45" y2="24" stroke="{TINTA}" stroke-width="0.8" opacity="0.18"/>
  <path d="M24 24 L24 3 A21 21 0 0 1 42.4 13.5 Z" fill="{TINTA}" opacity="0.16"/>
  <line x1="24" y1="24" x2="24" y2="3" stroke="{TINTA}" stroke-width="1.8" stroke-linecap="round"/>
  <circle cx="34" cy="15" r="3" fill="{ROJO}"/>
  <circle cx="24" cy="24" r="2.8" fill="{TINTA}"/>
</svg>'''

# (archivo, lado en px, fracción del lado que ocupa la marca)
SALIDAS = [
    ('apple-touch-icon.png', 180, 0.80),
    ('icon-192.png', 192, 0.84),
    ('icon-512.png', 512, 0.84),
    ('icon-maskable-512.png', 512, 0.62),
]


def main() -> None:
    with sync_playwright() as p:
        navegador = p.chromium.launch()
        for nombre, lado, frac in SALIDAS:
            pagina = navegador.new_page(viewport={'width': lado, 'height': lado}, device_scale_factor=1)
            m = round(lado * frac)
            pagina.set_content(
                f'<html><body style="margin:0;width:{lado}px;height:{lado}px;background:{PAPEL};'
                f'display:flex;align-items:center;justify-content:center">'
                f'<div style="width:{m}px;height:{m}px">{MARCA.replace("<svg ", f"<svg width=\"{m}\" height=\"{m}\" ")}</div>'
                f'</body></html>'
            )
            pagina.screenshot(path=str(PUBLIC / nombre), omit_background=False)
            pagina.close()
            print(f'  {nombre}: {lado}×{lado}')
        navegador.close()


if __name__ == '__main__':
    main()
