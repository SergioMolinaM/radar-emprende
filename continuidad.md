# Continuidad — Radar Pyme

## Sesión 2026-10-02 (viernes)

### Hecho

- Barrido de software libre (GitHub/GitLab) y modelos abiertos (Hugging Face) para pymes chilenas, guardado en `investigacion/2026-10-02-barrido-open-source.md`.
- Decidido (README): guía de información en vez de software de impuestos; entrevistas antes que contenido.
- `guion-entrevistas.md` y `fichas/plantilla.md`. `contactos.md` y audios fuera del repo por `.gitignore`.
- Repo local creado (primero como `trastienda`; renombrado a `radar-pyme` el mismo día a pedido de Sergio, para sumarlo a la familia RADAR). 

- `guion-whatsapp.md`: sondeo de 6 preguntas a emprendedores, para elegir a quién entrevistar.
- Decidido con Sergio: abierto y libre (contenido CC BY 4.0, código MIT, repo público) y núcleo angosto; radar de Compra Ágil y fondos solo si las entrevistas lo piden. Pregunta de fondos y ventas al Estado agregada a ambos guiones.
- `fichas/*` fuera de git salvo la plantilla (rubro + comuna identifica). Repo público creado por Sergio: https://github.com/SergioMolinaM/radar-pyme (verificado PUBLIC, 9 entradas en la raíz).

- `PLAN.md`: decisiones cerradas, protocolo R1–R8 adaptado (R1: no asesora casos particulares), fases F0–F6. F0 (base de datos verificada) empezó en paralelo al sondeo: dos investigadores en curso (contratar; formalizarse + calendario + herramientas).

- F0 con siete investigadores. Entregados y commiteados: A contratar, B/C/D formalizarse + calendario + herramientas oficiales, E catálogo libre, F benchmark, H sistema Radar. En curso: G datos públicos, I fondos.
- Benchmark: guía de formalizarse y calculadora de sueldo ya cubiertas por el Estado (ChileAtiende CC0, Registro de Empresas, Previred, DT): se enlazan. Sobrevive: comparación honesta software pagado vs. gratuito, registro de páginas oficiales desactualizadas con cita (SII regímenes, DL 3.063 de 1999 en sii.cl), fondos con tasa de adjudicación.
- **radarpyme.cl está ocupado** por un producto comercial «RadarPyme» (cruza catálogo con Compra Ágil; sitio vivo, verificado). radar-pyme.cl libre en NIC. Nombre en decisión de Sergio.
- Corrección: la reforma de pensiones es la Ley 21.735 (decía 21.720 en PLAN y en un prompt). Memoria `numero-de-ley-se-verifica`.
- Pregunta de software pagado agregada a la entrevista larga (premisa «no pagar software» sin probar).

### Pendiente

- Decidir nombre (Sergio) antes de difundir nada.
- Releer contra la fuente las citas de A y B/C/D (todas vía WebFetch, resumidor) antes de `datos/*.json`. Dudas abiertas: SIS dentro del 3,5 % vs. Hacienda «se suma»; tope 3,4 % vs. tabla SUSESO 6,80 % (Ley 16.744); asignación familiar vigente hasta 30-jun-2026; LRE «15 días hábiles» vs. «día 15»; IDPC Pro Pyme 12,5 % (Ley 21.755 sin leer).
- G e I entregados. G: la serie fuerte es el Registro de Empresas y Sociedades (datos.gob.cl, CC BY, comuna y mes); SII/EME sin cabeceras verificadas → verificador con Python en curso. I: fondos.gob.cl no sirve como fuente (54 fondos de emprendimiento, 0 abiertos, fichas Corfo 2024); tasa de adjudicación oficial solo Capital Semilla 2011 (4,8 %); el resto se pide por Ley 20.285. Fuentes automatizables: calendario y RSS de Sercotec, tabla paginada de INDAP.
- Encuestas previas (investigador en curso): para no gastar preguntas del sondeo en lo ya medido.
- Borradores de solicitudes de transparencia (Ley 20.285) a Sercotec, Corfo y Fosis por postulantes y adjudicados 2023-2026: las firma y envía Sergio.
- F0: releer las citas de los investigadores contra la fuente y pasar lo nivel 1 a `datos/*.json`.
- Elegir las cinco pymes y anotarlas en `contactos.md` (no versionado).
- Hacer las entrevistas y llenar `fichas/P1.md`…`P5.md` el mismo día.
- Mandar el sondeo de WhatsApp a 15–20 emprendedores; de ahí salen los cinco de la entrevista larga.

### Estado del repo

`main` siguiendo `origin/main` (público).
