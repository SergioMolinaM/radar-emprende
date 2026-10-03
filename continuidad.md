# Continuidad — Radar Emprende (antes Radar Pyme)

## 2026-10-03 — gráfico de portada y página «Formales e informales» (EME 8)

### Hecho

**Contexto de Sergio:** hizo dos encuestas telefónicas; respuestas generales (clientes, financiamiento, «muchos trámites para abrir»), ninguna con caso concreto. Se le respondió adversarial: n = 2, respuesta esperable a una pregunta abierta (los guiones exigen «la última vez»); propuesta de umbral para descartar la premisa: si en las cinco entrevistas largas nadie trae un caso concreto de papeleo con costo, la premisa de la guía cae.

**Decisiones**
- **Radar es neutral entre formales e informales** (Sergio, 3-oct: «no somos esos de "formalízate es mejor"… entiende la filosofía de radar»). Mide y no prescribe (R1 de `radar-circular/PROTOCOLO-VERACIDAD-VEREDICTOS.md`); la ley se cita como fuente, no para empujar. Memoria `neutral-formales-informales`.
- **Formalización entra como dato, no como guía que duplique la Ruta de la Pyme** (Sergio aceptó, 3-oct).
  - Elegido: página de datos de la EME 8 (informalidad por región y rama, razones para iniciar o no actividades) + «Fuentes y servicios» neutral.
  - Descartado: replicar la Ruta de la Pyme (Sergio lo ofreció: «si hay que duplicarlo no tengo problema»).
  - Por qué es mejor para el producto: el motivo eran dos llamadas sin caso; un duplicado contradice la postulación de `patentes-ia` a Bienes Públicos RM (se presenta como lo que falta a la Ruta y a Pyme Ágil); y un paso a paso de trámites no es lo que hace un radar. La EME además mostró que «caro o lento» + «no sabe cómo» es el 13,7 % de las razones para no iniciar.
  - Costo para nosotros (no es criterio): la página de datos es más barata que una guía; no decidió.

**Portada** (`sitio/src/pages/Portada.tsx`): gráfico de columnas en el hueco a la derecha del titular: sociedades constituidas 2014–2025 (años completos; 2025 en rojo, 202.406, «3,9 veces las 51.547 de 2014»), con advertencia de que el alza puede incluir el paso desde escritura pública (no medido). Componente `Columnas` en `charts.tsx` (tabindex móvil, flechas). Verificador: FALLA (barra de 2025 un 10 % baja, desborde a la derecha) → arreglos → PASA. La clase se renombró a `.rc-colchart` porque `.rc-cols` desarmaba la lista de comunas de /corfo.

**EME 8** (`scripts/eme8_informalidad.py` → `datos/eme8_informalidad.json`; nota `investigacion/2026-10-03-eme8-informalidad.md`): diccionario, cuestionario, manual y estándar de calidad INE 2020 leídos en original (PDF en `data-raw/eme/`). Errores de diseño (estrato, conglomerado, Taylor). Calidad INE + cv del total ≤ 15 % (reproduce la única marca oficial, Aysén). Redondeo en dos pasos. **Control positivo: reproduce las 23 cifras de la síntesis (nacional, 16 regiones, 6 ramas) y la marca; si no, se detiene.** Resultados: no iniciaron porque el negocio es muy chico o poco frecuente 52,9 %, no es esencial 20,4 %, caro/lento 7,3 %, no sabe cómo 6,4 %; iniciaron para cumplir la ley 42,1 %, formalizar 26,9 %, exigencia de clientes o proveedores 26,1 %.

**Página `/formales-e-informales`** (`sitio/src/pages/Informalidad.tsx`, `datos-informalidad.ts`, `servicios.ts`; ruta, menú, RouteMeta, prerender, Metodología, tarjeta en portada). «Fuentes y servicios»: 10 enlaces oficiales verificados por el investigador (`investigacion/2026-10-03-fuentes-servicios.md`) y releídos por Claude con curl (200 y cita); cláusula de Capital Semilla («quien resulta seleccionado debe iniciar actividades») leída en las bases RM 2026, p. 4. Verificador: FALLA → PASA. Errores míos que cazó: citaba «E10» por la E6; decía que la E4 incluía a quienes están «en proceso» (saltan a E8); el código 3 de e6 tiene etiqueta distinta en cuestionario («financiamiento (créditos)») y diccionario («descontar IVA») → fuera del gráfico con nota. Memoria `cuestionario-pdf-leer-renderizado`.

### Pendiente

- **Claude:** recalcular `datos/eme8_limitantes.json` (2-oct) con el método de esta sesión (diseño + estándar INE); hoy usa solo n < 60 («criterio propio»). Desbloquea: nada; hacerlo antes de publicar esas cifras.
- **Claude, opcional:** tabular `e4_otro` (n = 171; incluye «no es rentable o no le conviene»).
- **Claude:** reverificar los 10 enlaces de «Fuentes y servicios» antes de cualquier deploy (consultados el 3-oct-2026); Emprendamos Semilla: requisito de inicio de actividades no verificado en sus bases (no se afirma en el sitio).
- **Sergio:** consulta a abogado por la marca «RADAR» (bloquea dominio, deploy y difusión).
- **Sergio:** sondeo de WhatsApp y cinco entrevistas largas; anotar las dos llamadas del 3-oct como fichas T1 y T2 («queja general, sin caso»). Propuesta pendiente de respuesta: sumar al guion «¿Conoce la Ruta de la Pyme? ¿La usó? ¿En qué paso se quedó?».
- **Sergio:** retención de `data-raw/` antes del 1-dic-2026 (sin cambios).
- Respuestas de transparencia hacia el 2-nov (sin cambios).

### Estado del repo

`main`; todo lo de esta sesión en el commit de cierre y pusheado. `data-raw/eme/` trae ahora diccionario, cuestionario y manual en PDF (no versionado). Un `vite preview` del sitio corre en el puerto 4321 desde el 2-oct (PID 320): sirve `sitio/dist/` del disco. Sin deploy.

## 2026-10-02 — de la idea a datos verificados y sitio local

### Hecho

**Origen y decisiones** (detalle y respaldo en `README.md` y `PLAN.md` §0)
- Sergio pidió ver qué software libre (GitHub, Hugging Face) se podía dar a pymes «como favor a la patria». Barrido en `investigacion/2026-10-02-barrido-open-source.md`. Decisión: **información, no software de impuestos** (un ERP o facturador gratis abandonado deja a la pyme multada; el SII ya da gratis la facturación).
- Abierto y libre: repo público, contenido CC BY 4.0, código MIT. Fichas de entrevistas y contactos fuera de git.
- Nombre: Trastienda → Radar Pyme → **Radar Emprende**. radarpyme.cl es un producto comercial de un tercero (alertas de Compra Ágil, landing en radar-publico-delta.vercel.app); por eso F6 ya no incluye Compra Ágil. `investigacion/2026-10-02-nombre.md`.
- **Marca «RADAR» registrada en INAPI en clases 35 y 42 por Marketing y Estrategia SpA; ningún radar de Tercera Letra tiene marca.** Memoria `marca-radar-registrada-por-tercero`.
- Formalización y permisos **fuera del núcleo**: los cubren Ruta de la Pyme (GORE RM/UAI), Pyme Ágil, SUPER y el propio `patentes-ia`. Radar Emprende empieza donde termina la Ruta de la Pyme (tesis de la propuesta archivada al GORE del 12-jun, `_propuestas-archivadas/lobby-gore-rm/`).

**Investigación F0** (`investigacion/`, todas del 2-oct): contratar (A), formalizarse + calendario + herramientas oficiales (B/C/D), catálogo de herramientas libres (E), benchmark (F), datos públicos (G, verificado con descarga real), sistema Radar (H), fondos (I), encuestas previas, Ruta de la Pyme, canales de transparencia, desafíos de las empresas (ELE y otras: no hay ranking oficial de obstáculos por tamaño con micro; EME 5 2017: falta de clientes 29,5 %, financiamiento 25,4 %).

**EME 8 por dentro y otras encuestas** (tarde del 2-oct): `scripts/eme8.py` → `datos/eme8_limitantes.json`, nota `investigacion/2026-10-02-eme8-limitantes.md`. La pregunta de limitantes sigue en la EME 8 (base, no síntesis): clientes 26,9 %, financiamiento 14,1 %, regulaciones/impuestos 3,3 %, contratar 2,0 %; Corfo: conoce 24, postuló 2, recibió 1 de cada 100; 1,7 % vende principalmente al Estado u otras organizaciones. Control: la base reproduce el 54,2 % de informalidad. Subagente investigador: `investigacion/2026-10-02-encuestas-otras.md` (Superir/UGM 2025 releída por Claude: 73,7 % se informa por Google, 19,1 % en servicios públicos; ninguna encuesta mide por qué no se postula a fondos, contratar el primer trabajador ni vender al Estado).

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
- Frase de portada sobre la guía: sacada (decisión de Sergio, 2-oct). Se anuncia la guía cuando exista.
- Respuestas de transparencia hacia el 2-nov (20 días hábiles, cálculo propio): Sercotec AH012T0003197, Corfo AH004T0008055, Fosis AI004T0002258 (acuses en Gmail, 2-oct). Al llegar, guardar en `investigacion/transparencia/` y pasar cifras a `datos/`.
- Deploy del sitio: requiere autorización expresa y antes la marca y el dominio.
- Opcional: leer el cuestionario EME 8 (módulo K, limitantes) desde la base ya descargada en `data-raw/eme/`.

### Estado del repo

`main` = `origin/main` tras el push de cierre (github.com/SergioMolinaM/radar-emprende, público). `data-raw/`, `sitio/node_modules/`, `sitio/dist/` y las copias `sitio/src/data/*.json` están ignorados. Nada a medio camino.
