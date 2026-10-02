# Radar Emprende

*Hasta el 2-oct-2026 se llamó Radar Pyme; el nombre cambió porque radarpyme.cl es otro producto.*

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
- **Costo para nosotros (no es criterio):** unas cinco horas de conversación más el registro. A las cinco entrevistas se suma un sondeo por WhatsApp a emprendedores (`guion-whatsapp.md`) para elegir a quién entrevistar.

**2-oct-2026 — Abierto y libre: sitio gratis, contenido CC BY 4.0, código MIT, repo público.**
- **Elegido:** acceso gratuito como Radar Construcción Industrializada, y además licencia libre para que otros reutilicen el contenido y los datos citando la fuente.
- **Descartado:** el modelo de Radar CI tal cual (sitio público con repo privado y sin licencia), que deja leer pero no copiar.
- **Por qué es mejor para la gente:** que contadores, municipios, Sercotec o cámaras de comercio puedan reproducir la guía multiplica su alcance; en un bien público eso vale más que el tráfico propio.
- **Costo para nosotros (no es criterio):** cuidar que nada identificable llegue al repo; por eso las fichas de entrevistas no se versionan (rubro + comuna identifica a una persona) y lo publicable sale agregado por región.

**2-oct-2026 — Núcleo angosto, no «todo para pymes».**
- **Elegido:** un tema central profundo (candidatos: contratar al primer trabajador; formalizarse) que deciden las entrevistas; un radar automático de Compra Ágil y fondos concursables solo si las entrevistas muestran que lo usarían.
- **Descartado:** una guía general de todo lo que toca a una pyme; y un radar de cambios normativos del SII y la DT (resumir mal una resolución hace daño y casi nada de lo publicado le toca a una pyme).
- **Por qué es mejor para la gente:** la referencia se gana siendo angosto y profundo (lección del plan de Radar CI, 17-sep-2026).
- **Costo para nosotros (no es criterio):** el radar de oportunidades reutilizaría el motor de `radar-licitaciones`.

## Abierto

- Las cinco entrevistas: a quién (se anota en `contactos.md`, fuera del repo).
- El contenido de la guía: sale de las fichas.
- Sitio y dominio: después del contenido.

## Estructura

- `guion-entrevistas.md` — entrevista larga (25–30 min) y reglas.
- `guion-whatsapp.md` — sondeo corto por WhatsApp a emprendedores.
- `fichas/` — una ficha por entrevista desde `plantilla.md`. **Solo la plantilla se versiona.**
- `investigacion/` — barridos de fuentes con fecha.
- `contactos.md` — **no se versiona**.

## Licencia

Contenido y datos: [CC BY 4.0](LICENSE-CONTENIDO.md). Código: [MIT](LICENSE). Cita sugerida: «Radar Emprende — Tercera Letra SpA».
