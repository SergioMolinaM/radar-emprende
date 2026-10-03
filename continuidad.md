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

- `patentes-ia` ya estudió Ruta de la Pyme, Pyme Ágil y SUPER; formalización y permisos quedan fuera del núcleo de Radar Emprende (PLAN §0), para no duplicar lo que la postulación de Bienes Públicos ofrece.

- **`datos/fondos.json`**: Semilla Emprende, Crece, Modo Empleo (Sercotec RM 2026) y Semilla Expande (Corfo) con citas releídas en las bases; tasa de adjudicación 2011 (DIPRES). radar-publico-delta.vercel.app no es de Sergio (tercero). Solicitudes de transparencia ampliadas a desglose por comuna.

- En el portafolio ya había 11.017 proyectos Corfo DataInnovación 2009-2026 con RUT y región (`navegador-ds22/fuentes/`): cruzables con la nómina SII para ver a qué comunas no llega Corfo. Anotado en `investigacion/2026-10-02-datos-publicos.md`.

- **Capa de datos (Sergio: «parte con los datos»)**: `scripts/` (descargar, comunas, constituciones, cohortes, corfo) y `datos/` con tres JSON agregados (sin RUT). Bases en `data-raw/` (no versionado, se regenera con `scripts/descargar.py`). Homologación de comunas al Censo 2024 con calce estricto (el script se detiene ante un nombre sin calce).
  - Constituciones 2013-2026 por comuna: 2025 = 202.406 (10,95 por mil hab.); Providencia 80,9 por mil (hipótesis: domicilios tributarios).
  - Cohortes 2020-2024: de las 134.769 sociedades de 2020, 20,7 % con término de giro (11.558 de ellos fechados en 2023: hipótesis de término de oficio, no verificada), 44,8 % en la nómina SII 2024, 34,5 % fuera. 5 RUT no encontrados en el SII.
  - Corfo DataInnovación 2016-2025: 6.064 proyectos con subsidio (los 1.116 certificados Ley I+D van aparte), 5.829 con comuna; **98 comunas sin ningún proyecto**. 215 beneficiarios personas naturales sin RUT publicado (Corfo pone «PERSONA NATURAL»). 5 grafías de comuna del SII que se perdían en silencio corregidas; calce estricto.
  - **Verificador: FALLA en la primera pasada** (RUT con DV pegado sin guion, Ley I+D contada como proyecto, tres límites que no describían los datos) → arreglado → **PASA** en la segunda, con recálculo independiente de las 346 comunas × 3 archivos sin diferencias.

- **Revisor: APROBADO con observaciones menores** (publicado sin datos personales; celdas chicas sin riesgo adicional porque las fuentes publican lo mismo por RUT). Aplicado: __pycache__ fuera del repo, licencia acotada al cálculo (columnas de INE/SII conservan su condición), nota de reproducibilidad de Corfo, regla de presentación n<5 en PLAN. INCUMPLIMIENTO: los datos se subieron antes de pasar por el revisor; se pasó después.

### Pendiente

- **Decidir con Sergio la retención del crudo** (`data-raw/`: direcciones y razones sociales de todas las personas jurídicas): borrarlo tras generar y regenerar con `descargar.py`, o fijar plazo por escrito, antes del 1-dic (Ley 21.719).
- Corfo reproducible: `descargar.py` baja la API pública de DataInnovación (token publicado por Corfo, leído de su página en cada corrida); idéntica al archivo de navegador-ds22 (11.017 proyectos, mismas claves) y mismos totales. El conjunto CC0 de datos.gob.cl es solo un enlace a Power BI, no sirve.
- `data-raw/` NO borrado: Sergio respondió «sigamos», no un sí explícito; sigue pendiente su decisión.
- Sitio (páginas de datos, sin guía): subagente construyendo en `sitio/`, solo local.
- Solicitudes de transparencia **enviadas por Sergio el 2-oct** (Sercotec, Corfo, Fosis); respuesta esperada hacia el 2-nov (20 días hábiles; cálculo propio descontando los feriados del 12 y 31 de octubre); anotar números de solicitud.
- Sergio: sondeo WhatsApp y consulta de marca.
- Relectura F0 cerrada: comisiones de las 7 AFP (SP), 10 % AFP, 7 % salud y plazos día 10/13 (Fonasa), 3 cursos previos de Crece (bases). Solo quedan en nivel 2 las fechas de Semilla Expande 2026 (convocatoria cerrada).
- Canales de transparencia verificados (Chrome + sitio de Sercotec) y escritos en `solicitudes-transparencia.md`; Sercotec sí está sujeta a la Ley 20.285 (rol 12-2023).
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
