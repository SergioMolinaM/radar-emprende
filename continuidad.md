# Continuidad — Radar Emprende (antes Radar Pyme)

## 2026-10-06 — adversarial, audit de diseño y publicación

### Hecho

**Adversarial sobre publicar** (pedido de Sergio)
- «Publicar sin difundir» no se sostenía con `robots.txt` abierto. Se propuso `noindex` hasta la respuesta del abogado. **Sergio eligió indexable desde hoy.** Contraargumento registrado: Circular, Educativo y CI ya son públicos con «Radar»; lo que agrega Emprende es el choque con la clase 35 y con el podcast «RADAR EMPRENDE».
- **El dominio quedó a nombre de Sergio Molina Monasterios**, no de Tercera Letra SpA (whois NIC, creado 6-oct 14:41). Cambio de titular: lo hace el contacto administrativo desde la cuenta NIC («Cambio de Titular», faq tit-02). Costo y requisitos para la SpA no verificados.
- **Conectar Netlify a GitHub se salta `guard-creditos-netlify`** (un push a `main` publica y cobra). Decisión de Sergio: deploy a mano hoy. La conexión se decide con el primer PR mensual (~28-oct), con regla `ignore` en `netlify.toml`.
- Comprobado: datos al día (`actualizar.py`: sin publicación nueva, corte ago-2026). Las cifras de `eme8_limitantes` no aparecen en el sitio (búsqueda con control positivo en los 18 archivos).

**Dominio y Netlify**
- `ORIGEN = https://radaremprende.cl` en `RouteMeta.tsx` y `prerender.py`. `robots.txt` con la línea `Sitemap`.
- Sitio Netlify `radar-emprende` (id ed125311-2659-499e-a183-8fa974754d78), creado por Sergio. Zona DNS creada por Sergio: nameservers dns1–dns4.p05.nsone.net, puestos en NIC el 6-oct. El clasificador de permisos bloquea a Claude los cambios de DNS y dominio.

**Audit de impeccable** (subagente): 15/20, sin P0. Corregido:
- Peso: `fuentes.ts` ya no importa datos (`meta_fuentes.json` generado por `copiar-datos.mjs`); el prerender escribe todo al final (antes la portada ya renderizada servía de plantilla y sus modulepreload se copiaban a todas las páginas). Acerca y 404 no bajan datos; `fuentes` pasó de 176 KB a 3,4 KB.
- Táctiles de 44 px: menú, orden de tablas, menú lateral, sello N1/N2 (ahora enlace a `/metodologia#niveles`). `ScrollToTop` respeta anclas.
- 404 sin canónica ni og:url (el prerender lo controla). Letra mínima 12 px (incluye `.rc-ax`). Gris de gráficos `--c2` → `--c5` (3,5:1). Caption en la tabla de fuentes. Ejes de los múltiplos sin decimal.
- Portada: el indicador repetido (44,8 %) pasa a % de mujeres entre socios, desde `src/data/socios.ts`, compartido con /quien-las-crea. Indicadores en negro.
- /empresas-creadas: 3 límites a la vista (Registro, comuna tributaria, mes) + enlace; Metodología lista ahora los límites de cada serie. En /cohortes y /formales-e-informales no se recortó: sus advertencias definen la cifra.
- Detector mecánico: 0 hallazgos (con control positivo).

**Verificador** sobre el borrador de Netlify: FALLA (solo `.rc-ax` a 11,5 px) → corregido → PASA sobre el borrador 6ac53a080a35fedc4e29c4f2 (letra ≥ 12 px en 8 rutas a 320 y 1280, ejes sin solaparse, assets idénticos a `dist/`). Antes había pasado los otros 8 puntos: canónicas, 404 real sin canónica, chunks por página, 37,8 % igual en portada y /quien-las-crea, anclas, táctiles, cifras contra `datos/`, 0 errores de consola con la CSP real.

**Revisión web completa** (Sergio: «chequeaste en celular?… el logo al descargarlo en el celu… el og… todo»)
- Faltaba ícono de pantalla de inicio: `apple-touch-icon.png`, `icon-192/512.png`, `icon-maskable-512.png` (marca «ping» estática, punto rojo; `scripts/iconos.py` los regenera), `manifest.webmanifest` con Content-Type en `netlify.toml`, `theme-color`. Favicon con el punto rojo de la marca.
- Verificador, revisión completa (iPhone 13 en WebKit, Pixel 7, 320 px; 9 rutas; ícono, manifest, og, cabeceras, 37 enlaces externos, cifras): PASA con menores → corregidos: táctiles de 44 px en filtros, selector, buscador, botones, marca, enlaces de servicios y 404; título de tabla fuera del área desplazable (`.rc-itable-cap` visible + `<caption class="rc-sr">`); botón de la 404 como el de portada. Reverificado: PASA (borrador 6ac54882289a6b95f97af0a7). N2: área táctil efectiva 46×47.
- Regla llevada a `~/.claude/agents/verificador.md` para todos los proyectos y memoria `revision-web-completa`.
- No verificado: teléfono físico, ícono guardado de verdad, vista previa en redes con el dominio (aún no resuelve).

**Deploy de producción: bloqueado por Netlify**
- Sergio asignó el dominio (`updateSite`: custom_domain radaremprende.cl, alias www); Netlify creó los registros NETLIFY de apex y www; NIC delegó a p05.nsone.net; `ssl: true`.
- Push hecho (`3a8c7d3`; el sitio no tiene repo enlazado, `build_settings` vacío: 0 créditos).
- `netlify deploy --prod` (con DEPLOY-AUTORIZADO creado por Sergio) → `JSONHTTPError: Forbidden`. No se creó deploy de producción (`published_deploy: null`); no se reintentó.
- Cuenta `sergiomolinam`: `grace_topup_granted_at` 2026-10-06T18:48 UTC y `in_operational_mode: true`; período de uso 12-sep → 12-oct, 1.000 créditos de plan. Lectura (no verificada): créditos agotados; borradores permitidos, producción bloqueada. El saldo es compartido por los 29 sitios: riesgo de pausa de sitios en vivo, incluidos clientes.
- Sergio: «ok... esperemos».

### Pendiente

- **Sergio, urgente:** revisar https://app.netlify.com/teams/sergiomolinam/billing/general (créditos, modo operacional, riesgo para los demás sitios). Recargar o esperar al 12-oct.
- **Claude, cuando Sergio destrabe la cuenta:** un deploy de producción de `sitio/dist` (= borrador verificado 6ac54882289a6b95f97af0a7; si se reconstruye, comparar md5). `~/.claude/DEPLOY-AUTORIZADO` ya se consumió (el guardia lo confirmó al bloquear el push de cierre): Sergio tiene que crearlo de nuevo. Después, en vivo: HTTPS, www → apex, portada, 404, og, ícono, celular.
- **Sergio:** abrir el sitio en su celular (iPhone/Android) y probar compartir el link cuando el dominio resuelva.
- **Sergio:** `netlify api updateSite` con `custom_domain` radaremprende.cl y el alias www (sin eso Netlify no sirve el dominio ni emite HTTPS).
- **Sergio:** `! touch ~/.claude/DEPLOY-AUTORIZADO` → un deploy de producción.
- **Claude:** cuando NIC delegue, comprobar NS, HTTPS y el sitio en vivo en radaremprende.cl.
- **Sergio:** cambio de titular del dominio a Tercera Letra SpA (consultar costo y requisitos con soporte NIC) y factura a nombre de la SpA.
- **Sergio:** abogado por la marca (sin cambios). El sitio queda indexable.
- **Claude, ~28-oct:** primer PR mensual del workflow; decidir con Sergio la conexión a GitHub con regla `ignore`.
- Sin cambios: retención de `data-raw/` antes del 1-dic; recalcular `eme8_limitantes.json` antes de publicar esas cifras; transparencia hacia el 2-nov.

### Estado del repo

`main`. Cambios del 6-oct en el commit de cierre (incluye el nuevo `sitio/src/data/socios.ts`). `sitio/.netlify/` ignorado.

### Incumplimientos

- Encadené `cd` en el tercer comando de la sesión (memoria `no-encadenar-cd` actualizada).

## 2026-10-05 — radar mensual, Diario Oficial, socios y capital

### Hecho

**Decisiones**
- **Radar, no guía ni herramienta** (Sergio: «no haremos una herramienta, solamente haremos un radar»). Reemplaza «Entrevistas antes que contenido» y «Núcleo angosto» del 2-oct; F1–F3 sin objeto. Las dos llamadas del 3-oct no se fichan. Registrada con sus cuatro líneas en README y PLAN §0.
- **Ritmo mensual** (Sergio). El RES republica el archivo del año en datos.gob.cl cerca de una vez al mes: `package_activity_list` de la API CKAN da cambios entre el día 6 y el 28 de cada mes en 2026. Mismo recurso, otro nombre de archivo.
- **Qué agregar.** Elegido: el Diario Oficial y los socios (planilla del informe mensual de Economía) y el capital declarado (CSV del RES). Descartado: rubros (el cuadro trae solo 5 giros y cada sociedad cuenta varios), liquidaciones Superir (PDF en imagen, 541 contra 148.405 invita a leer «nadie cierra»), ENE (sin serie regional descargable vigente, CC BY-SA), INDAP (solo agro). Por qué es mejor para el producto: son series mensuales, automatizables y verificables contra fuente. Costo (no es criterio): bajo, porque reusan archivos que ya se bajan.

**Mecanismo mensual**
- `scripts/actualizar.py` lee la API CKAN, baja cada año con versión nueva a `data-raw/res/<año>-...csv` y recalcula. Sale sin hacer nada si `corte.versiones` del JSON coincide con lo publicado; si el cálculo falla, borra `_ckan.json`.
- `scripts/economia_res.py` busca el informe en la página de la categoría y baja la planilla. Control positivo: su serie RES reproduce la nuestra en 150 de 160 meses, y el resto difiere en 1–3. Sale sin escribir si el informe es el mismo.
- `.github/workflows/actualizar.yml` corre cada lunes y abre un pull request si cambia `datos/`. Sergio activó el permiso de Actions para crear pull requests el 5-oct. Corrida manual del 5-oct (run 37360273523): PASA por el camino «sin datos nuevos». Se agregó la entrada `forzar` (corrida manual) para probar el camino del pull request y para reparar.
- `constituciones.py`:
  - Sin años fijos: `corte`, `mensual`, `mensual_region`, `acumulado` y `capital`; `por_mil_hab_2025` pasa a `por_mil_hab`.
  - Se detiene ante meses faltantes o años intermedios incompletos.
  - Reproduce exacto el JSON de HEAD.
  - El mes es el de aprobación del SII (calza en el 100 % de las filas de 2025 y 2026).

**Hallazgos**
- **Portada corregida antes de publicar.** El titular «3,9 veces 2014» contaba solo el RES. Con el Diario Oficial, 2025 suma 221.262 y 2014 suma 98.349: 2,2 veces. El DO bajó de 46.802 a 18.856. Columnas apiladas.
- **Censo 2024 bajo CC BY-SA 4.0.** Leído en ine.gob.cl/terminos-de-uso-y-licencia-de-datos-abiertos. La población y la tasa por mil se declaran bajo esa licencia (fuentes.ts y `_meta` de constituciones).
- **Comuna social = comuna tributaria en el 98,7 % de 2025.** No resuelve lo de Providencia.
- **Capital** (columna «Capital», sin decir si está pagado):
  - 2025: mediana $1,5 millones; 47,7 % declara $1 millón o menos.
  - Solo se comparan 2025 y el año en curso (pesos nominales).
  - 497 sociedades de 2025 declaran menos de $1.000 (unidad no verificada).
- **Socios:** mujeres 37,8 % ene–ago 2026 (31,7 % en 2014); sociedades solo extranjeras 10,8 % (2,8 % en 2014).

**Sitio**
- `/empresas-creadas`: sección «Mes a mes» (KPI, 25 meses, tabla regional).
- Página nueva `/quien-las-crea`.
- Metodología con los scripts y la serie nuevos.
- Los 10 enlaces de servicios se volvieron a comprobar el 5-oct con control positivo.
- Verificador:
  - FALLA (`_ckan.json` antes del recálculo y 4 menores) → corregido.
  - FALLA (10 puntos visuales y de texto, ninguna cifra mal) → corregido.
  - Tercera pasada: PASA.
- Investigador: `investigacion/2026-10-05-fuentes-mensuales.md`.

**Textos generales** (pedido de Sergio)
- Titular nuevo: «Las empresas que nacen en cada comuna de Chile / y lo que pasa con ellas.»
- Entradilla, meta description (index.html y RouteMeta) y pie de página actualizados con las secciones y fuentes nuevas.
- Excepción CC BY-SA 4.0 del Censo agregada en el pie, Acerca, LICENSE-CONTENIDO.md y README.

**Workflow probado en GitHub**
- Corrida forzada (run 37360518254): recalculó todo en un runner limpio y los JSON salieron idénticos a los del repo (cálculo reproducible). El camino que crea el pull request sigue sin probar: se probará con la primera publicación real (~28-oct).

**Imagen para redes**
- `sitio/public/og.png` (1200×630), generada desde `sitio/scripts/og-imagen.html` con Playwright y las tipografías del sitio. `RouteMeta` emite og:image y twitter:card solo cuando `ORIGEN` tenga dominio (exigen URL absoluta). Si cambia la marca, se regenera.

**Netlify**
- Crear el sitio (`netlify sites:create --name radar-emprende --account-slug sergiomolinam --disable-linking`) fue denegado por el clasificador de permisos. Sin sitio ni borrador. Queda para Sergio. No conectar el repo a GitHub sin decidirlo: cada push a `main` sería un deploy de producción de 15 créditos.

**Marca: insumos para el abogado** (`investigacion/2026-10-05-marcas-alternativas.md`)
- INAPI no se pudo consultar: el buscador carga por JavaScript. No se afirma ninguna ausencia. Los pasos para hacerlo a mano están en la nota.
- Dominios .cl el 5-oct: radaremprende.cl y radar-emprende.cl libres; vigia.cl, atalaya.cl y mirador.cl inscritos por terceros; vigiaemprende.cl, atalayaemprende.cl y miradoremprende.cl libres.
- Existe un podcast «RADAR EMPRENDE» en Spotify (Ellioth Gomez). Comprobado por Claude con búsqueda; país y actividad no verificados.
- Alternativa que propuso Claude si la familia cambia de nombre: Vigía. Tiene usos en datos (VigIA de Suseso/U. de Chile).

**Incumplimientos**
- Encadené `cd X && …` en muchos comandos. Memoria `no-encadenar-cd`.
- El commit `eeb1620` dice «opción para forzar» y solo trae la continuidad: el guardia de push bloqueó el comando compuesto entero, incluida la edición del workflow, y no lo revisé antes de commitear. El cambio real va en `90fbb36`.

### Pendiente

**Publicación del 6-oct (Sergio: «mañana publicamos»).** Propuesta de Claude: publicar sin difundir hasta la respuesta del abogado. Orden:
1. **Sergio:** terminar la inscripción de radaremprende.cl a nombre de Tercera Letra SpA (NIC: $9.990/año, exento de IVA; pedir factura a nombre de la SpA).
2. **Sergio:** `! netlify sites:create --name radar-emprende --account-slug sergiomolinam --disable-linking`.
3. **Claude:** fijar `ORIGEN` en `RouteMeta.tsx` y `scripts/prerender.py`, build y borrador `netlify deploy --dir=dist` (0 créditos); verificador sobre la URL del borrador.
4. **Sergio con guía:** dominio en Netlify y DNS en el panel de NIC; HTTPS automático.
5. **Decisión de Sergio:** conectar el sitio a GitHub (recomendado: el pull request mensual aceptado publica solo, ~15 créditos/mes; commits de documentación con `[skip ci]`) o deploys a mano.
6. **Sergio:** crear `~/.claude/DEPLOY-AUTORIZADO` con `!`; un solo deploy de producción.

- **Sergio:** consulta a abogado por la marca «RADAR» (preguntas en `investigacion/2026-10-05-marcas-alternativas.md`; INAPI hay que consultarlo a mano). Sin respuesta: no difundir.
- **Sergio:** crear el sitio en Netlify (comando arriba) o autorizar que Claude lo cree; después, borrador `netlify deploy --dir=dist` (0 créditos) y verificador sobre esa URL.
- **Claude, al tener dominio:** fijar `ORIGEN` en `RouteMeta.tsx` y `scripts/prerender.py` (canónica, og:url, og:image, sitemap).
- **Sergio:** retención de `data-raw/` antes del 1-dic-2026 (sin cambios; `data-raw/economia/` solo trae agregados).
- **Claude, primer lunes con datos nuevos (después del ~28-oct):** revisar la primera corrida real del workflow y su pull request. Si no corrió, ver el registro en Actions.
- **Claude:** recalcular `datos/eme8_limitantes.json` con el método INE antes de publicar esas cifras (sin cambios).
- **Claude, opcional:** decidir si la EME 8 (coproducida por el INE, bajada de economia.gob.cl) cae bajo CC BY-SA. No verificado.
- Respuestas de transparencia hacia el 2-nov (sin cambios).

### Estado del repo

`main`; cambios del 5-oct en el commit de cierre. `data-raw/res/` tiene un archivo por año y `_ckan.json`; `data-raw/economia/` tiene la planilla de agosto. Sin deploy. La preview del 2-oct sigue en el puerto 4321 (sirve `dist/` del disco).

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
