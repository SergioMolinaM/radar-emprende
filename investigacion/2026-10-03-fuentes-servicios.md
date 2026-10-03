# Fuentes y servicios para la página de informalidad. Verificación 3-oct-2026

Fecha de consulta de todo lo de abajo: 2026-10-03.

## Limitaciones del método (leer primero)

- No hay herramienta de HTTP crudo en esta sesión. "Carga OK" significa que WebFetch devolvió contenido sin error 4xx/5xx; no es un código 200 medido con curl. Las redirecciones 301 se anotan.
- Las citas pasaron por el modelo extractor de WebFetch, que a veces resume. Las marcadas (L) venían entre comillas y en español; aun así, antes de publicar cada cita en el sitio hay que cotejarla a ojo contra la página. Las citas de las bases de Sercotec 2026 salieron de r.jina.ai (conversión del PDF) y traen página/sección.
- Varias URL que aparecen en buscadores o dentro de las propias páginas dan 404 hoy (ver "URL que NO sirven").
- Premisa de neutralidad: varios de estos servicios están escritos para empujar a formalizarse. Se anota en cada uno lo que dice la página, sin adoptarlo como voz del Radar.

## Resumen

| # | Servicio | URL verificada (carga OK) | Exige inicio de actividades SII | Cobertura | Vigencia |
|---|---|---|---|---|---|
| 1 | SII, trámite Inicio de actividades | https://www.chileatiende.gob.cl/fichas/3025-inicio-de-actividades-persona-natural y https://www.sii.cl/preguntas_frecuentes/rut_inicio_actividades/001_105_3793.htm | Es el trámite mismo. Obligación legal (Código Tributario art. 68, según SII) | Nacional | Vigente |
| 2 | Registro de Empresas y Sociedades (Tu Empresa en un Día) | https://www.registrodeempresasysociedades.cl/ | Sí, para operar como empresa: el portal incluye "Inicio de Actividades SII" como paso. No es requisito de ingreso al portal (no verificado) | Nacional | Vigente |
| 3 | Ruta de la Pyme | https://www.rutadelapyme.cl/ | No verificado (no se encontró texto de requisitos). Por diseño es solo de formalización | RM (Gobierno de Santiago / UAI) | Vigente (cargó). No neutral |
| 4 | Pyme Ágil | https://www.economia.gob.cl/2025/12/04/mas-de-10-municipios-de-la-rm-firmaron-convenio-con-el-ministerio-de-economia-para-acelerar-formalizacion-de-pymes.htm (nota oficial); la plataforma vive dentro de https://www.registrodeempresasysociedades.cl/ | Sí, de hecho: la nota describe la formalización en tres etapas con inicio de actividades previo a la patente | Municipal (solo comunas con convenio; "73 municipios" según un buscador, no verificado en la fuente) | Vigente |
| 5 | SUPER | https://www.super.gob.cl/ | No verificado (la página no lo dice). Orientado a proyectos de inversión | Nacional | Vigente. Probablemente fuera de alcance para micro |
| 6a | Fosis Emprendamos Semilla | https://www.fosis.gob.cl/es/programas/emprendimiento-y-empleabilidad/emprendamos-semilla/ y https://www.chileatiende.gob.cl/fichas/9341-programa-emprendamos-semilla | La página no lo menciona entre requisitos: "no verificado en bases" | Nacional, por comuna con oferta | Postulación 2026 cerrada |
| 6b | Fosis Emprendamos (negocio en funcionamiento) | https://www.fosis.gob.cl/es/programas/emprendimiento-y-empleabilidad/emprendamos/ y https://www.chileatiende.gob.cl/fichas/9343-programa-emprendamos | Sí, requisito literal | Nacional, por comuna | Cerrada (8-may-2026) |
| 7a | Sercotec Capital Semilla Emprende | https://www.sercotec.cl/capital-semilla-emprende/ | Exige NO tener inicio en primera categoría para postular; si gana, debe iniciarlo | Nacional con bases regionales (RM 2026 verificada) | Convocatoria RM 2026 cerrada (cierre 13-may reportado por prensa, no verificado en Sercotec) |
| 7b | Sercotec Centros de Desarrollo de Negocios | https://sitios.sercotec.cl/centros-de-negocios/ (301 desde www.sercotec.cl/centros-de-negocios/) | No verificado: ninguna página consultada fija requisito de inicio de actividades | Nacional (red regional/comunal) | Vigente |
| 8 | Microempresa Familiar (MEF), Ley 19.749 | https://www.chileatiende.gob.cl/fichas/3268-inicio-de-actividades-como-microempresa-familiar-mef ; https://www.sii.cl/contribuyentes/empresas_por_tamano/microemp_familiares_faq.htm | Régimen dentro del sistema formal: inscripción municipal y luego inicio de actividades MEF en el SII | Municipal + SII | Vigente |
| 9 | Encuesta de Microemprendimiento (EME 8) | https://www.ine.gob.cl/estadisticas/sociales/mercado-laboral/microemprendimiento ; https://www.economia.gob.cl/category/estudios-encuestas/encuestas-y-bases-de-datos/encuesta-de-microemprendimiento-eme | No aplica (fuente de datos; cubre formales e informales) | Nacional | EME 8 publicada 10-dic-2025 |
| Extra A | Sercotec Capital Abeja Emprende | https://www.sercotec.cl/capital-abeja-emprende/ | Exige NO tener inicio en primera categoría | Nacional con bases regionales | 2026 (convocatorias regionales; estado RM no verificado) |
| Extra B | Sercotec Capital Pioneras | https://www.sercotec.cl/programas/capital-pioneras/ | Exige NO tener inicio en primera categoría | Nacional con bases regionales | Estado no especificado en la página |

Los dos extras son solo para mujeres ("sexo registral femenino"). No encontré un tercer candidato oficial que sirva a quien no tiene inicio y no sea de ese tipo; Capital Semilla Emprende y Emprendamos Semilla ya están en la lista.

## Detalle por servicio

### 1. SII, inicio de actividades
- Nombre: "Inicio de actividades (persona natural)" (ficha ChileAtiende, institución responsable SII). Ojo: la URL que se suele citar, sii.cl/destacados/inicio_actividades/index.html, da 404.
- Qué hace (L, ChileAtiende ficha 3025): "Obtén una declaración jurada formalizada que te autoriza a iniciar y realizar operaciones económicas o comerciales que pueden producir rentas que deben pagar impuestos en primera o segunda categoría."
- Plazo (L, misma ficha): "La iniciación de actividades debes realizarla dentro de los dos meses siguientes a su comienzo."
- Definición SII (L, https://www.sii.cl/ayudas/nuevos_contribuyentes/boleta-vys-facturador.html, sección "¿Qué es Inicio de Actividades?"): "Es el aviso al SII de una entidad que comenzará o comenzó a realizar actividades remuneradas en el país" ... "que tiene como objetivo formalizarse ante el SII, obligación señalada en el Código Tributario art. 68".
- Procedimiento (L, https://www.sii.cl/preguntas_frecuentes/rut_inicio_actividades/001_105_3793.htm): "Debe ingresar al sitio Web del SII, en sección Servicios online, RUT e Inicio de actividades, menú Inicio de actividades, opción Iniciar actividades".
- Cobertura: nacional. Confianza: alta en la ficha y el FAQ; media en la cita de boleta-vys-facturador (el extractor la dio resumida).
- Implicancia: describir como obligación legal tal como la presenta el SII, sin adjetivar. El artículo 68 del Código Tributario no lo verifiqué en BCN; la cita es la que hace el propio SII.

### 2. Registro de Empresas y Sociedades
- Nombre oficial en la página: "Tu Empresa en un Día | Registro de Empresas y Sociedades"; portal del Ministerio de Economía, Fomento y Turismo. escritorioempresa.cl redirige aquí (memoria previa).
- Qué hace (L parcial): permite realizar "los actos legales y societarios fundamentales para el ciclo de vida de tu empresa." También: "Solicita la patente municipal de tu empresa o sociedad".
- Inicio de actividades (L): "Inicio de Actividades SII" / "Realiza el inicio de actividades ante el SII." y "Para poder realizar el inicio de actividades ante el SII, se debe tener en consideración que". Es un paso de la plataforma; que sea condición para usar el portal no está en esa página.
- Cobertura: nacional. Confianza: media (extracción parcial del portal, que carga por JS).
- Implicancia: es un servicio para constituir sociedad; no sirve a una persona natural sin sociedad que no quiera constituirla.

### 3. Ruta de la Pyme
- Nombre: "Ruta de la Pyme". Carga OK (título HTML "Ruta de la Pyme | Laravel").
- Qué hace (L): "Formalizar tu emprendimiento ahora es más fácil. Con la Ruta de la Pyme puedes dar el salto al éxito hoy." / "Crea una cuenta y sigue tu paso a paso personalizado." / "Ruta de la Pyme es un proyecto del Gobierno de Santiago, ejecutado por la Universidad Adolfo Ibáñez."
- Inicio de actividades: no verificado; la página principal no trae bases ni requisitos.
- Cobertura: la página dice "Gobierno de Santiago" (GORE RM). Alcance geográfico de uso no verificado.
- Problema para el Radar: su propuesta de valor es formalizar y ordena el contenido "para cada etapa de formalización" con paso a paso. Es exactamente lo que pediste evitar. Si se incluye, solo como fuente de información de trámites con una línea factual; la recomendación de excluirla es razonable. Decisión tuya.
- Las subpáginas /preguntas-frecuentes y /sobre-nosotros que probé dan 404 (las URL eran adivinadas).

### 4. Pyme Ágil
- Nombre: "Pyme Ágil" (ex Escritorio Empresa según DIPRES, vía buscador). No hallé sitio propio; funciona como módulo del RES.
- Qué hace (L, nota Economía 4-dic-2025): "una plataforma digital en el que micro, pequeñas y medianas empresas pueden solicitar su patente comercial sin ir presencialmente a su municipalidad".
- Inicio de actividades (L, misma nota): "deben formalizarse por medio de tres etapas: la constitución de una empresa o sociedad, el inicio de actividades ante el Servicio de Impuestos Internos (SII) y la obtención de la patente municipal". Es una descripción del proceso, no una cláusula de bases de acceso.
- Implementación (L): "los municipios podrán implementar la plataforma web de manera gratuita, al interior del Registro de Empresas y Sociedades (RES)". Cobertura municipal según convenio.
- Confianza: media-alta. El cuenta de 73 municipios viene de un resumen de buscador; no lo cites.
- Implicancia: no sirve a quien no tiene inicio de actividades.

### 5. SUPER
- Nombre: "SUPER - Sistema Unificado de Permisos". Carga OK.
- Qué hace (L): "Registra tu proyecto y haz seguimiento a tus permisos" y "Busca y accede a permisos digitales del Estado, de manera fácil y segura." Sitio: "267 Permisos en SUPER".
- En https://www.super.gob.cl/que-es-super (cargó, pero puede ser una SPA): "Es una plataforma digital del Estado que actúa como ventanilla única para tramitar de forma digital y centralizada todos los permisos sectoriales". La página no dice para quién ni si exige RUT de empresa o inicio de actividades: no verificado.
- Contexto (buscador, no página oficial citada): está regulado por la Ley 21.770 (Marco de Autorizaciones Sectoriales), para proyectos de inversión, a cargo de la Oficina de Grandes Proyectos/Autorizaciones Sectoriales. Probablemente no es herramienta de microemprendimiento. Recomiendo excluirla o ponerla con esa salvedad.
- Cobertura: nacional.

### 6. Fosis
Nota de nombre: "Yo Emprendo Semilla" ya no existe con ese nombre en las páginas oficiales; hoy los programas son "Emprendamos" y "Emprendamos Semilla".

**6a. Emprendamos Semilla** (URL Fosis cargó; ChileAtiende ficha 9341 cargó)
- Qué hace (L, Fosis): "Este programa te apoya para desarrollar un negocio o un trabajo independiente, o fortalecer un pequeño emprendimiento en proceso de formación".
- Requisitos (L): "Pertenecer al 40% de la población más vulnerable según el Registro Social de Hogares", "Estar sin trabajo o tener un empleo precario", idea de negocio o pequeño negocio.
- Inicio de actividades: ninguna de las dos páginas lo menciona. Un buscador lo afirma "no requerido", pero esa fuente no es oficial: dato no confirmado. Falta la bases/ficha técnica regional (https://fichaprogfe.fosis.gob.cl/ aparece enlazada desde Fosis, no la abrí).
- Estado: ChileAtiende (L): "La postulación al programa finalizó el 30 de abril de 2026". Fosis postulaciones (L): "Las postulaciones al programa Emprendamos Semilla se encuentran cerradas".
- Cobertura: nacional, por comunas con oferta.

**6b. Emprendamos**
- Qué hace (L, ChileAtiende 9343): "entrega capacitación, asesoría y financiamiento para que potencies y hagas crecer tu negocio o actividad económica independiente en desarrollo."
- Inicio de actividades (L, Fosis página del programa): "Tener inicio de actividades ante el Servicio de Impuestos Internos" (ChileAtiende 9343 lo repite: "iniciación de actividades ante el Servicio de Impuestos Internos (SII)").
- Estado: la página Fosis aún dice "Pronto avisaremos la fecha de inicio de postulaciones 2024" (desactualizada); Fosis postulaciones dice plazo 8-may-2026 y "Aún quedan cupos".
- Implicancia: Fosis tiene un programa para cada lado. Contenido textual de los requisitos de 6a debería leerse en las bases antes de decir "no exige".

### 7a. Sercotec Capital Semilla Emprende
- Qué hace (L, https://www.sercotec.cl/capital-semilla-emprende/): "Es un fondo concursable de Sercotec que promueve la creación de nuevos negocios con oportunidad de participar en el mercado a través de su formalización."
- Requisito (L, misma página): "Emprendedores y emprendedoras, mayores de edad (igual o mayor a 18 años), sin inicio de actividades en primera categoría ante el Servicio de Impuestos Internos, que presenten un proyecto de negocio que cumpla con el foco definido por la convocatoria de Sercotec en su región."
- Bases RM 2026 (https://www.sercotec.cl/wp-content/uploads/2026/04/Bases-Semilla-EMPRENDE-2026-Metropolitana-VB%C2%B0.pdf, vía r.jina.ai): sección 1.2, p. 6: "A personas emprendedoras, mayores de edad, sin inicio de actividades en primera categoría ante el" SII. Sección 1.1, p. 4: "Capital Semilla es una línea del Programa de Emprendimiento de Sercotec, que promueve la creación de nuevos negocios".
- Condición posterior (bases RM 2026): p. 4: "El Capital Semilla Emprende contempla que los emprendedores y las emprendedoras que resulten seleccionados/as, deben iniciar actividades en primera categoría ante el Servicio de Impuestos Internos (SII) como una nueva empresa"; pp. 28-29: "Este inicio de actividades deberá tener fecha posterior al inicio de la convocatoria"; p. 32: "Si la persona natural postulante resulta seleccionada, debe iniciar actividades en primera categoría".
- Respuesta a tu pregunta: sí, es para personas SIN inicio en primera categoría, pero el programa los obliga a iniciar actividades si ganan. No es neutral. Quien tiene inicio de actividades en segunda categoría sí puede postular (según resumen de buscador sobre las bases; no confirmé la frase literal).
- Estado: convocatoria RM 2026 abierta 29-abr a 13-may-2026 según prensa (El Mostrador, 13-may-2026); la ficha de Sercotec no la cité con fechas. Confianza: alta en requisito, media en fechas.
- Cobertura: nacional, bases por región.

### 7b. Sercotec Centros de Desarrollo de Negocios
- Nombre: "Centros de Desarrollo de Negocios" / "Centros de Negocios Sercotec".
- Qué hace (L, https://www.chileatiende.gob.cl/fichas/68603-centros-de-negocios-sercotec): "En los Centros de Negocios de Sercotec recibes asesoría técnica gratuita y personalizada de mentores expertos para fortalecer tus capacidades y hacer crecer tu emprendimiento o empresa."
- A quién (L, sitios.sercotec.cl/centros-de-negocios/nuestros-servicios/): "Micro y pequeñas empresas y cooperativas en busca de oportunidades o formas de mejorar su gestión para impulsar su crecimiento". Centro Santiago (L): "Atiende a micro y pequeños/as empresarios/as y emprendedores/as de dos comunas de la Región Metropolitana: Santiago, Providencia."
- Inicio de actividades: no verificado. Revisé la ficha ChileAtiende, Nosotros, Servicios, Santiago y Maipú, y ninguna fija ese requisito. Eso no prueba que no exista en las condiciones internas del programa. Una fuente no oficial (negocios.uchile.cl) dice que los centros están dirigidos a quienes "desean o requieren apoyo para aumentar sus ventas o iniciar su idea de negocio"; no sirve como cita.
- Cobertura: nacional, cada centro atiende comunas definidas (ejemplos: Santiago y Providencia; Maipú y Cerrillos). Hay 62 centros según un resumen de buscador (no verificado).
- Implicancia: para el sitio, decir "las páginas oficiales no fijan inicio de actividades como requisito de atención" es verdadero, y "no verificado en bases internas" es la salvedad honesta.

### 8. Microempresa Familiar (MEF), Ley 19.749
- Norma (BCN, idNorma=188826, XML, artículo único que modifica el DL 3.063/1979 art. 26): "Se entenderá por microempresa familiar aquella que reúna los siguientes requisitos: a) Que la actividad económica que constituya su giro se ejerza en la casa habitación familiar; b) Que en ella no laboren más de cinco trabajadores extraños a la familia, y c) Que sus activos productivos, sin considerar el valor del inmueble en que funciona, no excedan las 1.000 unidades de fomento."
- Inscripción (L, misma norma): "Para acogerse a los beneficios señalados ... el interesado deberá inscribirse en la municipalidad respectiva y acompañará una declaración jurada en la que afirme que es legítimo ocupante de la vivienda ...". La ley no menciona inicio de actividades ni al SII en ese texto.
- SII (L, ChileAtiende 3268, trámite "Inicio de actividades como Microempresa Familiar (MEF)", institución SII): "Avisa al Servicio de Impuestos Internos (SII) sobre la iniciación de actividades como Microempresa Familiar (MEF)." Requisito: "Estén inscritos como Microempresa Familiar en el registro municipal correspondiente."
- SII FAQ (L, microemp_familiares_faq.htm): sobre contribuyentes que ya iniciaron actividades: "No necesitan concurrir al SII, sin embargo, en el Formulario de Inscripción en Registro, Declaración Jurada, y Declaración de Inicio de Actividades deberá señalar que ya hizo Inicio de Actividades".
- Respuesta: la MEF no es un camino para quien no quiere tener inicio de actividades; el beneficio exige inscripción municipal y, según el SII, el trámite de inicio de actividades MEF. Confianza: alta en la ley, media en el resto.
- Cobertura: municipal (registro) y SII. El reglamento es el DS 102 de 2002 (Hacienda), no verificado aquí.
- Nota: la URL sii.cl/contribuyentes/empresas_por_tamano/microemp_familiares.htm que probé da 404; la página inicial sobre MEF no la ubiqué.

### 9. Encuesta de Microemprendimiento (EME 8)
- Nombre: "Encuesta de Microemprendimiento (EME)", VIII EME (levantamiento 2025).
- Qué es (L, INE): "La Encuesta de Microemprendimiento (EME) tiene como objetivo principal realizar una caracterización profunda de los microemprendimientos que se desarrollan a nivel nacional"; "está dirigida a hogares en donde reside un dueño de un microemprendimiento" y cubre "unidades económicas pequeñas, ya sea formales o informales, pertenecientes a todos los sectores económicos." Bienal desde 2013, INE con Ministerio de Economía.
- Publicación: EME 8 el 10-dic-2025 (página de Economía, según el extractor; fecha no cotejada con el PDF). Síntesis: https://www.ine.gob.cl/docs/default-source/microemprendimiento/publicaciones-y-anuarios/viii-eme/sintesis-de-resultados-viii-eme-2025.pdf (existe, PDF no legible por WebFetch; no cité cifras de él).
- Cobertura: nacional. Confianza: alta.
- Implicancia: fuente natural para la sección; la neutralidad se respeta porque la propia encuesta cubre formales e informales.

### Extras que sirven a quien no tiene inicio de actividades
- **Capital Abeja Emprende** (L, https://www.sercotec.cl/capital-abeja-emprende/): "Es un fondo concursable que promueve la creación de nuevos negocios liderados por mujeres con oportunidad de participar en el mercado a través de su formalización." Requisito: "Sin inicio de actividades en primera categoría ante el Servicio de Impuestos Internos". Solo mujeres. Misma condición de formalizar si se gana: no lo verifiqué en las bases de Abeja; se asume por analogía y queda como no verificado.
- **Capital Pioneras** (L, https://www.sercotec.cl/programas/capital-pioneras/): "Es un fondo concursable que promueve la creación de nuevos negocios liderados por mujeres" en rubros de menor participación; "Emprendedoras mayores de edad (igual o mayor a 18 años), de sexo registral femenino"; "sin inicio de actividades en primera categoría ante el Servicio de Impuestos Internos". Estado de convocatoria: la página no lo da.
- Nota neutralidad: ambos y Capital Semilla comparten el modelo "sin inicio hoy, con inicio si ganas". Hay que decirlo así en el sitio, porque "sirve a quien no tiene inicio" sin esa cola sería incompleto.

## URL que NO sirven (404 hoy, 3-oct-2026)
- https://www.sii.cl/destacados/inicio_actividades/index.html
- https://www.sii.cl/servicios_online/1039-1155.html, .../1039-.html (esta última cargó una portada genérica de servicios online)
- https://www.fosis.gob.cl/es/programas/autonomia-economica/emprendamos-semilla/ y .../emprendamos/ (aparecen en el buscador y en la propia página Fosis de postulaciones; dan 404)
- https://www.fosis.gob.cl/es/programas/emprendamos-semilla/
- https://www.rutadelapyme.cl/preguntas-frecuentes y /sobre-nosotros
- https://www.sii.cl/contribuyentes/empresas_por_tamano/microemp_familiares.htm
- BCN con idNorma=198063 no es la Ley 19.749 (es un decreto MOP); la correcta es 188826. Las páginas HTML de BCN muestran error de lentitud; el XML de consulta/obtxml sí responde.

## Datos no confirmados
1. Si Emprendamos Semilla exige inicio de actividades en sus bases/ficha técnica: las páginas Fosis y ChileAtiende no lo piden; no abrí fichaprogfe.fosis.gob.cl.
2. Si los Centros de Desarrollo de Negocios exigen inicio de actividades a quien consulta: ninguna página lo fija; las bases internas no están publicadas en lo que revisé.
3. Si SUPER exige RUT de empresa/inicio de actividades para registrarse: no figura.
4. Si Ruta de la Pyme exige algo para crear cuenta: no figura.
5. Texto literal del Código Tributario art. 68 (citado por el SII, no abierto).
6. Número de municipios con Pyme Ágil (73) y número de centros Sercotec (62): solo resúmenes de buscador.
7. Fechas exactas de la convocatoria Sercotec RM 2026 desde la fuente oficial.
8. Que Abeja/Pioneras obliguen a iniciar actividades al ganar (solo verificado en Capital Semilla RM 2026).
9. Cotejo visual de las citas (L) contra cada página, antes de publicar.

## Implicancias para la página de informalidad
- Fuentes de datos y de información sin sesgo: EME, SII (como descripción del trámite), ChileAtiende.
- Servicios útiles sin inicio de actividades hoy: Capital Semilla, Abeja y Pioneras (con la cola de formalizar al ganar), Fosis Emprendamos Semilla (inicio no mencionado), Centros de Negocios (no fijado en las páginas). Todos con convocatorias 2026 cerradas o sin estado claro; el Radar no debería escribir "abierto".
- Servicios que presuponen formalización: Registro de Empresas, Pyme Ágil, MEF, Fosis Emprendamos. Ruta de la Pyme es explícitamente promotora de formalización; SUPER es de proyectos de inversión.
- Para mantener la neutralidad: tabla con una columna "Requiere inicio de actividades: Sí / No / No verificado", sin orden de pasos y sin verbos de empuje.
