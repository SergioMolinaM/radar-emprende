# Radar Pyme

Guía pública y gratuita, en lenguaje llano, para el dueño de una pyme chilena: qué obligaciones tiene según su giro y tamaño, qué vence este mes, cuánto le cuesta de verdad contratar, y cuál de las herramientas gratuitas oficiales (SII, Previred, Dirección del Trabajo) le sirve para cada cosa.

Parte de la familia RADAR de Tercera Letra: información pública dispersa convertida en inteligencia accesible, gratuita y verificada. Sin fines de lucro. Abierto el 2-oct-2026.

## Decisiones cerradas

**2-oct-2026 — Información, no software de impuestos.**
- **Elegido:** guía de información verificada con enlace a las herramientas oficiales gratuitas.
- **Descartado:** construir un ERP, un facturador electrónico o un sistema de remuneraciones libre.
- **Por qué es mejor para la gente:** un sistema de impuestos o de sueldos gratuito que se abandona deja a la pyme emitiendo o pagando mal, y la multa o la deuda laboral la paga ella; una guía equivocada se coteja con la fuente sin daño. El SII ya da gratis la facturación (portal MIPYME) y la propuesta de F29; en GitHub hay unos diez motores de facturación electrónica creados en 2026 sin historial de mantención. El hueco real en software (remuneraciones con LRE) es el de mayor riesgo para trabajadores si queda sin mantener.
- **Costo para nosotros (no es criterio):** menor que mantener software, porque no exige certificación ni soporte.
- **Respaldo:** barrido de GitHub/GitLab y de Hugging Face del 2-oct-2026 (`investigacion/2026-10-02-barrido-open-source.md`).

**2-oct-2026 — Entrevistas antes que contenido.**
- **Elegido:** cinco entrevistas a pymes reales (`guion-entrevistas.md`) antes de escribir la guía.
- **Descartado:** definir el contenido desde la búsqueda de software.
- **Por qué es mejor para la gente:** la búsqueda mostró qué software existe, no qué le duele a una pyme; sin eso la guía responde preguntas que nadie hace.
- **Costo para nosotros (no es criterio):** unas cinco horas de conversación más el registro.

## Abierto

- Las cinco entrevistas: a quién (se anota en `contactos.md`, fuera del repo).
- El contenido de la guía: sale de las fichas.
- Formato y publicación: después del contenido.

## Estructura

- `guion-entrevistas.md` — guion y reglas.
- `fichas/` — una ficha anónima por entrevista (`P1.md`…), desde `plantilla.md`.
- `investigacion/` — barridos de fuentes con fecha.
- `contactos.md` — **no se versiona** (`.gitignore`).
