# Continuidad — Radar Emprende (antes Radar Pyme)

## 2026-10-02 — de la idea a datos verificados y sitio local

### Hecho

**Origen y decisiones** (detalle y respaldo en `README.md` y `PLAN.md` §0)
- Sergio pidió ver qué software libre (GitHub, Hugging Face) se podía dar a pymes «como favor a la patria». Barrido en `investigacion/2026-10-02-barrido-open-source.md`. Decisión: **información, no software de impuestos** (un ERP o facturador gratis abandonado deja a la pyme multada; el SII ya da gratis la facturación).
- Abierto y libre: repo público, contenido CC BY 4.0, código MIT. Fichas de entrevistas y contactos fuera de git.
- Nombre: Trastienda → Radar Pyme → **Radar Emprende**. radarpyme.cl es un producto comercial de un tercero (alertas de Compra Ágil, landing en radar-publico-delta.vercel.app); por eso F6 ya no incluye Compra Ágil. `investigacion/2026-10-02-nombre.md`.
- **Marca «RADAR» registrada en INAPI en clases 35 y 42 por Marketing y Estrategia SpA; ningún radar de Tercera Letra tiene marca.** Memoria `marca-radar-registrada-por-tercero`.
- Formalización y permisos **fuera del núcleo**: los cubren Ruta de la Pyme (GORE RM/UAI), Pyme Ágil, SUPER y el propio `patentes-ia`. Radar Emprende empieza donde termina la Ruta de la Pyme (tesis de la propuesta archivada al GORE del 12-jun, `_propuestas-archivadas/lobby-gore-rm/`).

**Investigación F0** (`investigacion/`, todas del 2-oct): contratar (A), formalizarse + calendario + herramientas oficiales (B/C/D), catálogo de herramientas libres (E), benchmark (F), datos públicos (G, verificado con descarga real), sistema Radar (H), fondos (I), encuestas previas, Ruta de la Pyme, canales de transparencia, desafíos de las empresas (ELE y otras: no hay ranking oficial de obstáculos por tamaño con micro; EME 5 2017: falta de clientes 29,5 %, financiamiento 25,4 %).

**Datos verificados** (`datos/`, generados con `scripts/`; bases en `data-raw/`, no versionado, `scripts/descargar.py` las regenera)
- `contratar.json` y `fondos.json`: citas releídas por Claude contra la fuente (script de relectura con control positivo y PDF de la Ley 21.735). La reforma de pensiones es la **Ley 21.735** (no la 21.720). SIS dentro del 3,5 % desde ago-2026. Semilla Expande: Corfo pone hasta 75 % del costo total (aporte ≥ 1/3 del subsidio).
- `constituciones_comuna.json` (RES 2013-2026 × Censo 2024), `cohortes_comuna.json` (cohortes 2020-2024 × nóminas SII: término de giro / en nómina 2024 / fuera) y `corfo_comuna.json` (DataInnovación 2016-2025 × domicilio SII; Ley I+D aparte; 98 comunas sin proyectos). Corfo se baja de la API pública de DataInnovación.
- Verificador: FALLA (RUT con DV pegado, Ley I+D contada, límites) → PASA. Revisor: APROBADO con observaciones (aplicadas: licencia acotada al cálculo, sin bytecode, regla n<5).

**Sitio** (`sitio/`, solo local, sin deploy)
- Diseño de Radar CI con **paleta «Diario» elegida por Sergio** (negro y rojo #c8102e sobre blanco). Descartadas: «blanco de imprenta» (Sergio: «el mismo diseño de CI, otros colores») y «Mar» (no le gustó el color).
- Portada al estilo de Radar Circular; páginas de empresas creadas, cohortes (paneles por año), Corfo, Metodología y Acerca. Regla n<5 en base y parte. Textos revisados sin lenguaje de IA ni muletillas (pedido de Sergio). Contacto: contacto@terceraletra.cl (existe). Barra de desplazamiento visible (pedido de Sergio al cierre).
- Verificador: FALLA ×3 → PASA en la cuarta pasada (datos, n<5, enlaces, accesibilidad, 320–1440 px, sin cookies ni terceros).

**Otros**
- `guion-entrevistas.md` y `guion-whatsapp.md` (sondeo de 6 preguntas).
- Solicitudes de transparencia a Sercotec, Corfo y Fosis (postulantes, admisibles, adjudicados por región y comuna 2023-2026) **enviadas por Sergio el 2-oct**; canales en `solicitudes-transparencia.md`.

### Pendiente

- **Sergio:** consulta a abogado de propiedad industrial por la marca «RADAR» (afecta a toda la familia). Bloquea inscribir radar-emprende.cl o radaremprende.cl y cualquier deploy o difusión.
- **Sergio:** mandar el sondeo de WhatsApp (15–20 emprendedores) y hacer las cinco entrevistas largas; fichas en `fichas/` (no versionadas), contactos en `contactos.md`. Desbloquea F2 (elegir el núcleo de la guía).
- **Sergio:** decidir la retención de `data-raw/` (direcciones y razones sociales de todas las personas jurídicas): borrar tras cada cálculo o fijar plazo, antes del 1-dic-2026 (Ley 21.719). No se borró: «sigamos» no fue un sí.
- **Sergio:** ¿se queda la frase de portada «La guía para emprendedores se preparará a partir de entrevistas con dueños de negocios»? Sin respuesta.
- Respuestas de transparencia hacia el 2-nov (20 días hábiles, cálculo propio); anotar los números de solicitud cuando Sergio los pase. Al llegar, guardar en `investigacion/transparencia/` y pasar cifras a `datos/`.
- Deploy del sitio: requiere autorización expresa y antes la marca y el dominio.
- Opcional: leer el cuestionario EME 8 (módulo K, limitantes) desde la base ya descargada en `data-raw/eme/`.

### Estado del repo

`main` = `origin/main` tras el push de cierre (github.com/SergioMolinaM/radar-emprende, público). `data-raw/`, `sitio/node_modules/`, `sitio/dist/` y las copias `sitio/src/data/*.json` están ignorados. Nada a medio camino.
