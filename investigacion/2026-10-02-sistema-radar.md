# Sistema de la familia Radar — qué hereda Radar Pyme

Extraído el 2-oct-2026 de los repos locales `radar-circular` (RC) y `radar-construccion-industrializados` (CI). Verificado por muestreo: `CI/src/styles/editorial.css:48-49` (`--r-surface: 4px`, `--r-control: 2px`), `CI/src/data/tipos.ts` (`Dato<T>{valor,nivel,fuente,fecha,nota}`), `CI/src/components/editorial/Nivel.tsx` existe.

## Base heredable: la versión de CI (la más depurada)

- **Tipografía:** Newsreader (titulares y cifras), Libre Franklin (cuerpo, 17px/1.6), Spline Sans Mono (kickers, ejes, badges, fuentes). Autohospedadas con `@fontsource-variable/*` (CSP `font-src 'self'`), no Google Fonts.
- **Paleta:** base papel + tinta + sidebar oscuro, derivados con `color-mix(in oklab …)`. Cada radar define su propia paleta en `:root` (RC «Bosque», CI «Obra»), con contraste AA 4,5:1 anotado por token. **Radar Pyme necesita paleta propia.**
- **Radios:** `--r-surface: 4px`, `--r-control: 2px`; una sola marca de borde; texto epistémico ≥ 12px.
- **Layout:** `.rc-screen` max-width 1060px; sidebar 250px que pasa a cajón bajo 860px.
- **Primitivas** (`src/components/editorial/primitives.tsx`): Kicker, Hed, Dek, Byline, Rule, SectionTitle, PageHead, Badge, KpiStrip, Figure («Fig. N» + título + lede + «Fuente:»), Callout, SourceNote, RadarMark, EditorialTable (columna fija, orden, modo apilado en móvil, CSV en cliente).
- **Nivel de afirmación:** `Nivel.tsx` (botón N1/N2 con fuente · fecha · nota), `Celda` («Por confirmar» si el dato es null), `LeyendaNivel`; tipo `Dato<T>`.
- **Gráficos:** SVG/HTML propios, sin librería.
- **Páginas:** portada, panorama, fichas, glosario, calendario, **Metodología** (niveles, convenciones, fuentes con fecha de consulta, salvedades, **correcciones** «qué decía / qué dice / por qué», cadencia, reproducibilidad) y **Acerca** (independencia, alcance, quién lo hace, datos y privacidad).
- **Fechas:** día-mes-año, distinguiendo corte de la fuente, consulta y revisión; una sola función `fechaCorta()`.
- **Stack:** React 19 + TypeScript, Vite, react-router 7, Netlify; prerender con Playwright (`scripts/prerender.py`): una página por ruta, 404 real, sitemap. `netlify.toml` con CSP estricta y cache immutable. Sin analítica ni cookies en CI.
- **Datos:** JSON en `src/data/` generados por scripts Python; refresco manual (sin GitHub Actions en RC ni CI).

## Independencia (plantilla)

RC (`Acerca.tsx`): «… mantiene la independencia editorial como condición no negociable: ningún cliente de sus servicios ni patrocinador influye en el contenido público, los datos ni su interpretación. No representa a ningún organismo regulador ni recibe encargo de él. La plataforma pública es y seguirá siendo de acceso abierto.» CI agrega: «Ninguna empresa figura por haberlo solicitado ni deja de figurar por haberlo pedido.»

Para Radar Pyme hay que agregar el equivalente para herramientas y fondos: ningún software ni asesoría figura por haber pagado o pedido figurar.

## Tono

Neutral, siglas expandidas la primera vez, lenguaje de consultoría y no de marketing, sin antítesis «no X: Y». Radar Pyme habla a un emprendedor, no a un regulador: mismo rigor, registro más llano (decisión pendiente para F3).

## No aplica

Radar Educativo es otro sistema (SaaS con login, Supabase, Source Serif 4). No es referente visual.
