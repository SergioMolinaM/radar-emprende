# Continuidad — Radar Emprende (antes Radar Pyme)

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

- Nombre investigado (`investigacion/2026-10-02-nombre.md`): RadarPyme es de una persona, un mes de vida, solo registro/login, sin términos publicados y sin marca. Radar Emprende: dominios .cl libres, sin marca; existe un podcast y el estudio «Radar Emprendedor» (G100). **«RADAR» a secas está registrada en INAPI en clases 35 y 42 por Marketing y Estrategia SpA; Radar Circular no está registrada.**

- **Sergio eligió Radar Emprende** («dale»). Repo de GitHub y carpeta local renombrados a `radar-emprende` (GitHub redirige el nombre viejo). F6 sin Compra Ágil (lo hace RadarPyme).

- **`datos/contratar.json`**: primer archivo de datos. Claude releyó 15 páginas oficiales con script y control positivo (todas coinciden) y el PDF de la Ley 21.735: el SIS queda dentro del 3,5 % desde ago-2026 (art. 8° transitorio, «sustituirá la cotización»). Asignación familiar: tabla SUSESO con período desde 01-07-2026, mismos montos (duda cerrada). Costo empleador sobre el IMM, indefinido: 6,83 % = $37.808, más adicional de la mutual.

- **Ruta de la Pyme** (rutadelapyme.cl, GORE RM + UAI, viva) y la propuesta archivada `_propuestas-archivadas/lobby-gore-rm/` (12-jun) leídas tras aviso de Sergio: la formalización está cubierta; la propuesta ya diseñaba «Ruta del Crecimiento» y «Radar de Fomento RM». Detalle en `investigacion/2026-10-02-ruta-de-la-pyme.md`. INCUMPLIMIENTO: no busqué en lo archivado antes de investigar (memoria actualizada).
- Fondos: bases releídas en PDF (Semilla, Crece, Modo Empleo, Expande, DIPRES 2011). Semilla 3 % aplica a gestión e inversiones; Expande: Corfo pone hasta 75 % del costo total (aporte ≥ 1/3 del subsidio). `datos/fondos.json` por escribir con esto.

### Pendiente

- Sergio: ¿radar-publico-delta.vercel.app es suyo?
- Escribir `datos/fondos.json` con lo releído.
- Relectura pendiente: comisiones de las otras AFP, 10 % AFP y 7 % salud (nivel 2), Previred día 13; luego B/C/D (formalizarse) y fondos.
- Consulta a abogado de propiedad industrial por la marca RADAR (afecta a toda la familia) antes de inscribir radar-emprende.cl o radaremprende.cl y de difundir.
- Releer contra la fuente las citas de A y B/C/D (todas vía WebFetch, resumidor) antes de `datos/*.json`. Dudas abiertas: SIS dentro del 3,5 % vs. Hacienda «se suma»; tope 3,4 % vs. tabla SUSESO 6,80 % (Ley 16.744); asignación familiar vigente hasta 30-jun-2026; LRE «15 días hábiles» vs. «día 15»; IDPC Pro Pyme 12,5 % (Ley 21.755 sin leer).
- G e I entregados. G: la serie fuerte es el Registro de Empresas y Sociedades (datos.gob.cl, CC BY, comuna y mes); SII/EME sin cabeceras verificadas → verificador con Python en curso. I: fondos.gob.cl no sirve como fuente (54 fondos de emprendimiento, 0 abiertos, fichas Corfo 2024); tasa de adjudicación oficial solo Capital Semilla 2011 (4,8 %); el resto se pide por Ley 20.285. Fuentes automatizables: calendario y RSS de Sercotec, tabla paginada de INDAP.
- Encuestas previas (17 estudios): lo que pregunta el guion no está medido en ninguno; EME 8 cubre informalidad, contador y crédito. Doing Business descartado. Entrevista larga suma «por qué se formalizó» y «por qué no contrata».
- Datos verificados con descarga real (Claude releyó tres cifras con los archivos): RES 2025 = 202.406 constituciones, RM (13) 89.715; EME 8 micro = 1.998.178, informalidad 54,2 %. SII EMPRESAS.zip con comuna × tramo × rubro 2005-2024; nómina SII con término de giro y RUT → cruce RES×SII hecho, pero término de giro no mide supervivencia (propuesta: tres estados por cohorte). INE.Stat informalidad detenido en 2024; boletín ENE n.º 35 (abr-jun 2026). Descargas en el scratchpad, fuera del repo.
- Borradores de solicitudes de transparencia (Ley 20.285) a Sercotec, Corfo y Fosis por postulantes y adjudicados 2023-2026: las firma y envía Sergio.
- F0: releer las citas de los investigadores contra la fuente y pasar lo nivel 1 a `datos/*.json`.
- Elegir las cinco pymes y anotarlas en `contactos.md` (no versionado).
- Hacer las entrevistas y llenar `fichas/P1.md`…`P5.md` el mismo día.
- Mandar el sondeo de WhatsApp a 15–20 emprendedores; de ahí salen los cinco de la entrevista larga.

### Estado del repo

`main` siguiendo `origin/main` (público, github.com/SergioMolinaM/radar-emprende).
