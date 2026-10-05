# Radar Emprende

*Hasta el 2-oct-2026 se llamó Radar Pyme; el nombre cambió porque radarpyme.cl es otro producto.*

Radar de datos públicos sobre la creación de empresas y el emprendimiento en Chile: cuántas sociedades se constituyen y dónde, cuántas siguen vivas, a dónde llegan los apoyos públicos y cómo trabajan los negocios formales e informales. Cada cifra con su fuente, su método y sus límites. Pensado para recalcularse con cada publicación mensual del Registro de Empresas y Sociedades (`scripts/actualizar.py`; la corrida semanal en GitHub Actions abre un pull request que alguien revisa antes de publicar).

Mide y no prescribe: no asesora casos particulares ni empuja a formalizarse.

Parte de la familia RADAR de Tercera Letra: información pública dispersa convertida en inteligencia accesible, gratuita y verificada. Abierto el 2-oct-2026.

## Decisiones cerradas

**5-oct-2026 — Radar de datos, no guía ni herramienta.** (Sergio: «no haremos una herramienta, solamente haremos un radar».)
- **Elegido:** un radar de datos públicos verificados, actualizado mensualmente.
- **Descartado:** la guía con un núcleo (contratar al primer trabajador o formalizarse), con calculadora, que decidirían cinco entrevistas y un sondeo por WhatsApp.
- **Por qué es mejor para el producto:** lo construido hasta ahora ya es un radar y ninguna página depende de las entrevistas. Una guía de trámites duplicaría la Ruta de la Pyme, ChileAtiende y el SII. Además, acercaría el sitio a asesorar casos particulares, lo que el protocolo R1 prohíbe. Las dos llamadas del 3-oct no trajeron ningún caso concreto que justificara una guía.
- **Costo para nosotros (no es criterio):** menor que escribir y mantener una guía. `datos/contratar.json` y `datos/fondos.json`, reunidos para la guía, quedan sin uso en el sitio.
- **Reemplaza** a «Entrevistas antes que contenido» y «Núcleo angosto» del 2-oct, que se conservan abajo como historia.

**5-oct-2026 — Actualización mensual.**
- El Registro de Empresas y Sociedades republica en datos.gob.cl el archivo del año en curso cerca de una vez al mes. Es el mismo recurso con otro nombre de archivo, y los cambios de 2026 caen entre el día 6 y el 28 del mes (`package_activity_list` de la API CKAN, consultada el 5-oct-2026). El script busca el recurso del año en la API en vez de fijar la URL.
- Las nóminas del SII (cohortes) y la EME son anuales o de menor frecuencia; se actualizan cuando sale una edición nueva.

**2-oct-2026 — Información, no software de impuestos.**
- **Elegido:** información verificada con enlace a las herramientas oficiales gratuitas.
- **Descartado:** construir un ERP, un facturador electrónico o un sistema de remuneraciones libre.
- **Por qué es mejor para la gente:** un sistema de impuestos o de sueldos gratuito que se abandona deja a la pyme emitiendo o pagando mal, y la multa o la deuda laboral la paga ella; una información equivocada se coteja con la fuente sin daño. El SII ya da gratis la facturación (portal MIPYME) y la propuesta de F29; en GitHub hay unos diez motores de facturación electrónica creados en 2026 sin historial de mantención. El hueco real en software (remuneraciones con LRE) es el de mayor riesgo para trabajadores si queda sin mantener.
- **Costo para nosotros (no es criterio):** menor que mantener software, porque no exige certificación ni soporte.
- **Respaldo:** barrido de GitHub/GitLab y de Hugging Face del 2-oct-2026 (`investigacion/2026-10-02-barrido-open-source.md`).

**2-oct-2026 — Abierto y libre: sitio gratis, contenido CC BY 4.0, código MIT, repo público.**
- **Elegido:** acceso gratuito como Radar Construcción Industrializada, y además licencia libre para que otros reutilicen el contenido y los datos citando la fuente.
- **Descartado:** el modelo de Radar CI tal cual (sitio público con repo privado y sin licencia), que deja leer pero no copiar.
- **Por qué es mejor para la gente:** que contadores, municipios, Sercotec o cámaras de comercio puedan reproducir los datos multiplica su alcance; en un bien público eso vale más que el tráfico propio.
- **Costo para nosotros (no es criterio):** cuidar que nada identificable llegue al repo; lo publicable sale agregado y con la regla n < 5.

### Reemplazadas el 5-oct-2026

- *2-oct — Entrevistas antes que contenido:* cinco entrevistas y un sondeo por WhatsApp antes de escribir la guía. Sin guía, dejan de tener objeto. Los guiones se conservan en el repo.
- *2-oct — Núcleo angosto:* un tema central (contratar o formalizarse) que decidirían las entrevistas.

## Abierto

- Marca «RADAR» registrada por un tercero en INAPI (clases 35 y 42): consulta a abogado antes de inscribir dominio, desplegar o difundir.
- Dominio: radaremprende.cl o radar-emprende.cl, después de la consulta.

## Estructura

- `scripts/` — descarga y cálculo. `python scripts/actualizar.py` baja el Registro de Empresas y Sociedades y recalcula; `python scripts/descargar.py` baja las demás bases (SII, Censo, EME, Corfo). Todo queda en `data-raw/` (no versionado).
- `datos/` — cifras verificadas en JSON, con fuente, método y límites.
- `sitio/` — sitio estático (Vite + React, prerenderizado).
- `investigacion/` — barridos de fuentes con fecha.
- `guion-entrevistas.md`, `guion-whatsapp.md`, `fichas/plantilla.md` — de la etapa de guía (ver decisiones reemplazadas).

## Licencia

Contenido y datos: [CC BY 4.0](LICENSE-CONTENIDO.md), salvo lo derivado del Censo 2024 (CC BY-SA 4.0, ver el mismo archivo). Código: [MIT](LICENSE). Cita sugerida: «Radar Emprende — Tercera Letra SpA».
