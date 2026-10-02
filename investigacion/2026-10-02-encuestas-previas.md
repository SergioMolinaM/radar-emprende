# Radar Pyme — encuestas y estudios previos sobre problemas de micro y pequeñas empresas

**Consultado:** 2-oct-2026. **Método:** WebSearch y WebFetch (directo o vía r.jina.ai). Sin shell: ningún PDF se abrió en disco.

**Advertencia de método (leer primero).** Las «citas literales» de este documento salieron de un extractor automático (modelo pequeño que resume la página). Ese extractor falló de tres formas durante la sesión: devolvió «binario ilegible» en PDF de imagen; inventó nombres de variable (f1…f10) del diccionario EME 8 que luego su propia relectura no confirmó (se descartaron, ver §1); y declaró «ausente» un tema en un PDF donde la relectura dio otro resultado. Por eso:
- **R7 = 1** solo si la cifra apareció en dos lecturas independientes, o en una nota de prensa oficial más una lectura del documento.
- **R7 = 2** si salió de una sola lectura del documento primario, o de fuente secundaria que cita al primario. Antes de pasar a `datos/` hay que releer el PDF (PLAN §2).
- **R7 = 3** si no se puede afirmar.
- «Página» es la que reportó el extractor; no está comprobada contra el PDF.

## 0. Resumen de estudios

| # | Estudio | Quién / interés | Levantamiento | Muestra y representatividad | Microdatos |
|---|---|---|---|---|---|
| 1 | INE EME 8 | Estado (INE + Economía) | may-ago 2025 | Probabilística, nacional y regional; micro con hasta 10 trabajadores en hogares | Sí (CSV/R/Stata; URL no hallada) |
| 2 | INE EME 7 | Estado | may-ago 2022 | 7.850 viviendas, 8.576 informantes (p.1) | Sí (no verificado dónde) |
| 3 | INE EME 5 | Estado | 2017 | 8.820 (Boletín Financiamiento) | Sí (no verificado) |
| 4 | Economía/INE ELE 7 | Estado | refs. 2020-22, terreno 2023 | Empresas formales sobre 800 UF; 409.300 representadas; sin región | Sí (CSV/TXT) |
| 5 | INE ENTIC (TIC en empresas) 2018 | Estado | ref. 2018, pub. jul-2020 | 3.344 empresas, **sin microempresas** | No verificado |
| 6 | DT ENCLA 2023 | Estado | jul-dic 2023 | 4.496 empresas con 5 o más trabajadores | Sí (sección «Bases de datos» DT; no abierta) |
| 7 | CIAT/SII costos de transacción tributarios | Estado + organismo multilateral | año 2014, pub. dic-2015 | Muestra: **no encontrada** | No |
| 8 | Banco Mundial Doing Business 2020, Paying Taxes | Multilateral | datos 2019 | Empresa hipotética, no encuesta | Archivado |
| 9 | GEM Chile 2024/25 y 2025/26 | Universidad (UDD) + consorcio GEM | 2024 / 2025 | 4.113 adultos + 239 expertos (2024); n 2025 no hallado | Sí, vía GEM global (no verificado) |
| 10 | Propyme «Termómetro Pyme» | Plataforma privada de pymes; análisis por DefensaDeudores.cl | mensual 2026 | Autoselección (comunidad por correo); sep-2026: 21.726 invitadas, 2.718 respuestas válidas | No |
| 11 | Propyme + DefensaDeudores, encuesta abr-2025 | Ídem | abr-2025 | n=1.139 mipymes, muestreo no declarado | No |
| 12 | Entel Digital, «Digitalización de las empresas» | Proveedor de telecom | 2023 (según blog; el PDF dice 2025) | «más de 600» respuestas, 75 % pyme, reclutamiento no declarado | No |
| 13 | Economía, Chequeo Digital 2021-24 | Estado; autodiagnóstico | 2021-2024 | «40.000+ empresas», autoaplicado | No verificado |
| 14 | Xepelin Insights / IMAXEP 2025 | Fintech de financiamiento pyme | 2025 | Datos transaccionales de unas 42.000 pymes clientes | No |
| 15 | DIPRES, Evaluación impacto Sercotec Crece | Estado (evaluación externa U. de Concepción) | datos 2016-2022 | Administrativo, 21.827 proyectos; sin encuesta | No verificado |
| 16 | Banco Central, Encuesta de Crédito Bancario | Estado; responden bancos, no pymes | trimestral | Lado oferta | Series |
| 17 | OCDE, Economic Surveys Chile 2025; Financing SMEs 2026 | Multilateral | 2025 / 2026 | Compilación | Sí (cuadros) |

## 1. INE/Economía — EME 8 (VIII Encuesta de Microemprendimiento)

- **URLs:** nota del Ministerio https://www.economia.gob.cl/2025/12/10/nueva-encuesta-revela-que-baja-la-informalidad-y-suben-los-ingresos-de-los-microemprendimientos.htm ; síntesis https://www.ine.gob.cl/docs/default-source/microemprendimiento/publicaciones-y-anuarios/viii-eme/sintesis-de-resultados-viii-eme-2025.pdf ; diccionario https://www.economia.gob.cl/wp-content/uploads/2025/12/diccionario-de-variables-eme-8.pdf
- **Quién:** INE con el Ministerio de Economía. Interés: estadística oficial; el Ministerio la usa para mostrar avance (informalidad a la baja).
- **Muestra:** ver `2026-10-02-datos-publicos.md` §4 (7.170 observaciones en la base full; diferencia con 8.381 hogares sin resolver). Probabilística.
- **Microdatos:** sí, 668 variables (diccionario, p.1 de la lectura). URL de descarga no hallada.
- **Qué NO mide la síntesis (según dos lecturas):** obstáculos declarados, uso digital, conocimiento de Sercotec/Corfo por separado. **Si el cuestionario de la base los tiene, no está verificado.** El diccionario leído sólo mostró los Módulos A a D; un primer intento devolvió códigos f1 a f10 («razón de no registro», «dificultades u obstáculos», «uso de programas de apoyo») que la relectura no confirmó. **Tratarlos como inexistentes hasta abrir la base.**

Cifras (el número de página es del extractor):

| Cifra | Cita | Pág. | R7 |
|---|---|---|---|
| Informalidad | «un 54,2% desarrolla su actividad económica de manera informal» (2022: 58,3 %) | nota Economía; síntesis p.18 | 1 |
| Definición | «Se considera como persona microemprendedora informal a quien no cuenta con registro ante el Servicio de Impuestos Internos y no lleva un sistema contable» | síntesis p.18 | 1 |
| Por qué no se registran | «El negocio es demasiado pequeño y/o la actividad es poco frecuente» 52,5 %; «El registro no es esencial para el funcionamiento del negocio» 20,2 % | nota Economía | 1 (base del porcentaje no declarada: asumo no inscritos) |
| Financiamiento inicial | «Un 60,4% … inició su negocio con recursos propios»; «Solo el 12,2% señaló haber utilizado algún tipo de préstamo o crédito» | síntesis p.15 | 1 |
| Quién prestó | «49,7% acudió a amistades o parientes y un 19,1% solicitó un crédito bancario» | síntesis p.15 | 2 |
| Contador | «25,5% Sí, acude a los servicios de un contador»; «76,9% separa los gastos del negocio de los de su propio hogar» | síntesis p.21 | 2 (el denominador, todos o sólo formales, no verificado) |
| Capacitación | «Solo un 25,9% … ha realizado una capacitación formal»; 17,7 % de ella financiada por programas de gobierno | síntesis p.8 | 2 |
| Cuenta propia | «73,4% trabaja por cuenta propia sin ayudantes o socios»; 40,6 % de los empleadores tiene un solo trabajador | síntesis p.16 | 2 |
| Cotización | 43,6 % cotiza salud, 28,4 % cotiza pensión | nota Economía | 2 |

**Implicancia:** es la única encuesta grande y probabilística de los negocios de más bajo nivel. Pero «razones de informalidad» son sólo de quienes **siguen sin registrarse**: quien se formalizó y pagó el costo no aparece (ver §C).

## 2. EME 7 (2022) y EME 5 (2017) — series para comparar

URLs: EME 7 https://www.economia.gob.cl/wp-content/uploads/2023/06/sintesis-de-resultados-eme-vii.pdf ; EME 5 informalidad https://www.economia.gob.cl/wp-content/uploads/2018/02/Bolet%C3%ADn-Informalidad-EME-5.pdf ; EME 5 financiamiento https://www.economia.gob.cl/wp-content/uploads/2018/02/Financiamiento-en-los-microemprendimientos-EME-5.pdf

| Cifra | Cita | Fuente/pág. | R7 |
|---|---|---|---|
| EME 7, muestra | «trabajo de campo … entre los meses de mayo y agosto de 2022 y consideró 7.850 viviendas (8.576 informantes)» | EME 7 p.1 | 2 |
| EME 7, conocimiento de apoyo estatal | FOSIS lo conoce 57 % de las mujeres y 40,8 % de los hombres; SERCOTEC 32,6 % y 29,6 %; «otras instituciones» 10 % o menos | EME 7 p.19 | 2 (única medida de conocimiento de programas hallada; es 2022 y por sexo) |
| EME 7, no capacitación | 1.487.570 no se capacitaron en 2 años (75,2 %); mujeres: razón principal «no saber donde acudir» | EME 7 p.18 | 2 |
| EME 7, crédito | Solicitaron 201.354; razón de no pedir: «no necesitar préstamos» 611.229; «desconocen el procedimiento» 22.000 | EME 7 pp.21-22 | 2 |
| EME 5 (2017), razones de no registro (Tabla 2) | no esencial 37,7 %; negocio pequeño 31,0 %; nadie similar registrado 8,5 %; **no sabe cómo registrarse 5,7 %; proceso demasiado caro 4,7 %**; miedo a perder beneficios 2,3 %; miedo a fiscalización 2,3 %; toma demasiado tiempo 2,2 % | EME 5 boletín, Tabla 2 | 2 |
| EME 5, crédito | «el 23,8 % … ha solicitado un crédito»; «El 93,6 % de los negocios que solicitaron un crédito, lo recibieron»; no pidieron por «no necesitarlo (39,1 %)», «prefiere no solicitar uno (21,7 %)», «considerar que no se lo otorgarían (20 %)»; rechazos por falta de garantía 28,3 % | EME 5 financiamiento | 2 |

## 3. Economía/INE — ELE 7

URL: https://www.economia.gob.cl/wp-content/uploads/2024/12/informe-de-resultados-ele7-final.pdf (informe) y página en `2026-10-02-datos-publicos.md` §5. Universo: formales sobre 800 UF, así que **no cubre al microemprendedor informal ni al de ventas bajas**.

| Cifra | Cita | Pág. | R7 |
|---|---|---|---|
| Pidieron crédito | «Se estima que el 17 % de las empresas solicitaron al menos un préstamo» | 10 | 2 |
| Rechazo | «Hasta cinco veces más rechazos de solicitud de prestamos enfrentan las MiPyMe que las grandes empresas»; el extractor dio 3 % (grandes) frente a 15 % (mipyme) (pp.11-12) | 1, 11-12 | 2 (los 3 y 15 % sin confirmar) |
| Fuentes | grandes y medianas usan al menos cinco fuentes de forma significativa; pequeñas y micro «sólo tres» | 1 | 2 |
| Comercio electrónico | «un 6 % de las empresas ha realizado ventas por comercio electrónico y 4 % ha realizado compras» | 23 | 2 |

**Lo que el extractor dio como ausente en el informe:** obstáculos, trámites/informalidad, contador, programas públicos. Es lectura de una sola pasada (ver advertencia); **«no encontrado con» la lectura del informe, no «no existe»**: la base de microdatos podría traer más.

## 4. Impuestos y cumplimiento (tributario y laboral)

### 4a. CIAT/SII — Medición de costos de transacción tributarios en pymes (año 2014)
- **URLs:** https://www.ciat.org/new-study-medicion-de-los-costos-de-transaccion-tributarios-en-pequenas-y-medianas-empresas-en-chile/?lang=en ; noticia SII https://www.sii.cl/pagina/actualizada/noticias/2015/231215noti01jv.htm (23-dic-2015). PDF indicado por CIAT: `ciatorg-public.sharepoint.com/biblioteca/Estudios/2015_medicion_costos_chile.pdf` **(el dominio no resolvió desde acá; no abierto)**.
- **Quién:** SII + CIAT, con metodología CIAT/ONU. Interés: del propio Estado.
- **Cifras leídas en la nota del SII (R7 1):** costos de transacción tributarios de micro, pequeña y mediana «representaron en 2014 el 0.96 % del PIB» (0,87 % costo de cumplimiento, 0,086 % costo administrativo del SII); «Chile es uno de los países dentro de la región que tiene menores costos de cumplimiento».
- **Cifras por tamaño (R7 2, solo de un resumen de búsqueda, no vi el documento):** micro, costo anual medio de cumplimiento $1.531.922, 2,1 % de sus ventas; pequeña $1.932.398 (0,7 %); mediana $4.253.066 (0,4 %). Un segundo resumen de búsqueda atribuyó horas anuales de 281, 276 y 395 a micro, pequeña y mediana; **no se pudo confirmar y no se debe usar**.
- **Muestra y diseño: no encontrados.** Con la muestra desconocida no puedo decir si cubre microempresas informales (casi seguro no: el SII sólo encuesta a sus contribuyentes).
- **Microdatos:** no.

### 4b. Banco Mundial — Doing Business 2020, Paying Taxes
- **URL:** https://www.doingbusiness.org/content/dam/doingBusiness/country/c/chile/CHL.pdf (PDF no legible por el extractor). Cifras vistas en resumen de búsqueda: 296 horas anuales, 7 pagos, tasa total 34,0 % de la utilidad (R7 2).
- **Descartar como dato de nuestra población:** (i) mide una **empresa hipotética mediana** (la metodología, que no pude releer en el PDF, la describe con decenas de empleados), no un microemprendedor; (ii) el Banco Mundial **discontinuó** el informe el 16-sep-2021 por irregularidades en las ediciones 2018 y 2020 (https://www.devex.com/news/world-bank-scraps-doing-business-rankings-due-to-data-irregularities-101630); (iii) el caso de Chile 2018 fue el que hizo renunciar a Paul Romer. **Sirve como dato histórico con esa advertencia, no como base de ninguna cifra del sitio.**

### 4c. Dirección del Trabajo — ENCLA 2023
- **URLs:** https://www.dt.gob.cl/portal/1629/w3-propertyvalue-188853.html ; síntesis https://www.ine.gob.cl/docs/default-source/condiciones-de-empleo-y-relaciones-laborales/publicaciones-y-anuarios/2023/sintesis-de-resultados---encla-2023.pdf
- **Quién:** DT, levantada por INE. Muestra: «4.496 empresas … con 5 o más trabajadores» (lectura de la nota INE/DT, R7 2). **Excluye a las empresas de 1 a 4 trabajadores**, justo el caso «primer trabajador».
- **Lo que mide** (por lo visto en los resultados publicados): sindicalización, negociación colectiva, relaciones laborales. **No encontrado** con «ENCLA 2023 microempresas formalización contrato registro electrónico»: ninguna cifra sobre costo de cumplir o conocer la normativa laboral. Lectura de resultados parcial; no abrí el informe completo. Útil sólo como contexto.

### 4d. Previsión (contexto del costo laboral)
- Informe anual de deuda previsional 2020 de la Superintendencia de Pensiones: 293.227 empleadores con deuda a dic-2020, 34,3 % de ellos con deuda de $500.000 o menos (https://www.spensiones.cl/portal/institucional/594/articles-14698_recurso_1.pdf; cifra de resumen de búsqueda, R7 2). Es administrativo (quién debe), **no pregunta por qué**. La nueva cobranza unificada rige desde 1-jun-2026 (resumen de búsqueda, no verificado en fuente).

### 4e. Estudios de opinión del SII
- La página https://www.sii.cl/aprenda_sobre_impuestos/estudios/opinion.htm lista estudios de **1997, 1998, 2005 y 2008**. Hay una encuesta de satisfacción de 2019 (https://www.sii.cl/noticias/2019/170119noti02er.htm, hecha por Activa Research); **sus resultados no se encontraron**. Ningún estudio de percepción del SII sobre micro o pequeñas en los últimos 5 años: **no encontrado con** «SII estudio percepción contribuyentes pymes».

## 5. Financiamiento y fondos públicos

- **Banco Central, Encuesta de Crédito Bancario 2.º trim. 2026** (https://www.bcentral.cl/en/content/-/detalle/prensa/nota-de-prensa/ecb-segundo-trimestre-2026): lado de la oferta; encuesta a ejecutivos de bancos (18-jun a 2-jul-2026). La página no se pudo releer; el resumen decía que la percepción de menor demanda de pymes bajó de 40 % a 10 % entre los bancos y que las condiciones se volvieron más favorables. **Dice qué piensan los bancos, no los emprendedores; no sirve para medir la experiencia del microemprendedor** (R7 2).
- **OCDE:** Economic Surveys Chile 2025 (https://www.oecd.org/en/publications/oecd-economic-surveys-chile-2025_efad96ce-en.html): «lengthy and complex permit system, low digital skills and digital uptake among SMEs» (resumen de búsqueda). Financing SMEs 2026 (https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/03/financing-smes-and-entrepreneurs-2026_9098969d/075d8058-en.pdf): perfil de Chile **no leído**. Son análisis de política con datos administrativos, sin encuesta propia a emprendedores.
- **Conocimiento de fondos (Sercotec, Corfo, Fosis):** la única cifra por institución es EME 7 p.19 (arriba). Un reportaje de «Será Noticia» (21-dic-2025) atribuye a la EME 2025 que «47 %» reconoce a FOSIS como principal apoyo, «33 %» ha postulado y «57 %» ha participado (https://seranoticia.cl/2025/12/21/fosis-lidera-el-reconocimiento-como-principal-apoyo-publico-al-emprendimiento-en-chile/). **No pude verlo en la síntesis EME 8, y el 57 % coincide exactamente con el 57 % de mujeres que *conocen* FOSIS en la EME 7. Sospecho una mezcla o una cifra de un estudio propio de FOSIS. R7 3 hasta rastrear la tabla.**
- **Tasa de adjudicación:** la evaluación DIPRES de Sercotec Crece (https://www.dipres.gob.cl/597/articles-383678_informe_final.pdf, mayo-2025; Caro, Parada, Ríos) usa datos administrativos del programa y del SII (21.827 proyectos), sin encuesta a beneficiarios. El extractor dijo que «aproximadamente 15 % de los postulantes resulta beneficiario»; **no confirmado, R7 3**. Efecto medido: «existe evidencia significativa de un cambio de 22 por ciento en el nivel de ventas» (p.22; mujeres 40 %; hombres sin efecto significativo) (R7 2). El diseño (discontinuidad en el puntaje de corte) compara a quien quedó justo arriba o justo abajo, no a quien nunca postuló.
- **Estudio de Sercotec «Emprendimiento y microempresa»** (https://www.sercotec.cl/wp-content/uploads/2024/11/Estudio-de-emprendimiento-y-microempresa.pdf): base de postulantes 2021-2023 (n=202.479 postulantes, 46.424 admisibles, 18.621 beneficiarias), es administrativo y se centra en género. Dato aprovechable si se confirma: de 202.479 postulaciones quedaron 18.621 beneficiarios (9,2 %, cálculo mío, **R7 2 y se mezclan siete programas y tres años; no es una tasa de adjudicación por convocatoria**).
- **Chile Emprende:** el Ministerio dice que consolida «más de 200 instrumentos de fomento» de 25 instituciones y que «La información estaba dispersa y fragmentada» (https://www.economia.gob.cl/wp-content/uploads/2026/02/10-03-26-mipymes-y-emprendimiento.pdf, 10-mar-2026, pp.5 y 13; R7 2). **Es el Estado diciendo que el problema es de información, sin dato de encuesta que lo respalde.**

## 6. Digitalización y software

| Estudio | Cifra | R7 |
|---|---|---|
| ENTIC 2018 (https://www.economia.gob.cl/wp-content/uploads/2020/07/Informe-de-Resultados-Encuesta-TIC.pdf) | «las microempresas no fueron consideradas» (p.6); n=3.344, ventas sobre 2.400 UF; «El 99% de las grandes empresas y el 91% de las pymes tuvo acceso a internet» (p.2); ERP: 77 % grandes, 22 % pymes (p.2); comercio electrónico 13 % pymes (p.2) | 2 |
| ELE 7 (2022) | 6 % vendió por comercio electrónico (p.23) | 2 |
| Chequeo Digital 2021-24 (https://www.economia.gob.cl/wp-content/uploads/2026/03/100326-doc-estrategia-de-digitalizacion.pdf, p.13) | «cerca del 70% de las empresas se encuentran en los niveles Inicial y Novato»; 14 % avanzado o experto; 40.000+ empresas | 2; **autodiagnóstico voluntario, no representativo** |
| Entel Digital | 75 % de las pymes reconoce obstáculos; falta de recursos 26 %; encontrar personal con competencias digitales 46 % | 2; **la empresa vende conectividad y soluciones; muestra de 600 sin método** |
| Xepelin (IMAXEP) | «Solo un 20% de las pymes opera con sistemas avanzados de gestión digital»; más del 40 % usó factoring digital | 3; **vendedor, datos de sus propios clientes** |
| Movistar «Adopción Digital Pymes» | «98% invertirá en digitalización» (resumen de búsqueda) | 3; **intención declarada, vendedor, método no visto** |
| Castillo-Vergara (U. Alberto Hurtado), Observatorio Económico 2025 (https://www.observatorioeconomico.cl/index.php/oe/article/view/592) | 536 empresas; alta penetración de páginas web y banca digital, avanzadas incipientes | 2; muestra no probabilística no verificada |

**Vacío central:** no hay cifra representativa de cuántas microempresas **formales o informales** emiten sus boletas o facturas con software gratuito del SII, con un programa de pago o a mano. ENTIC excluye micro; EME 8 puede preguntar por internet (no verificado).

## 7. Gremios y plataformas: autoselección y interés

### 7a. Propyme «Termómetro Pyme» (mensual, 2026)
- **Quién:** Propyme (comunidad de pymes por correo); análisis por DefensaDeudores.cl. Su modelo de negocio **no se pudo verificar** (la página cargó vacía); el nombre DefensaDeudores.cl sugiere un servicio ligado a deudas.
- **Método:** sep-2026: 1-7 de septiembre, 21.726 empresas de la comunidad, **2.718 respuestas válidas** (12,5 %), 30 % RM; el propio texto aclara «perceptions … not a comprehensive national census» (https://revistaemprende.cl/termometro-pyme-septiembre-2026/).
- **Cifras:** sep-2026: 77 % subió costos en 3 meses; **73 %** inyecta recursos personales (ago: 74 %; abr: 69 %); 36 % de micro y pequeñas despidió en los últimos 30 días; abr-2026: **28 % postergó el pago de IVA**, 27 % solicitó crédito bancario, **35 % debe a Tesorería** (resumen de búsqueda de varias notas; R7 2). Otra edición (may-2026, 17.366 invitadas) dio «73 % no postergó IVA» y «60 % no mantiene deudas con la TGR», lo que contradice el 35 % de deuda de abril (ver §C).
- **Datos relevantes para nosotros:** postergación del IVA y deuda con Tesorería son lo único hallado que se parece a «cuánto se atrasan en impuestos»; **sólo como señal de dónde preguntar, nunca como prevalencia** (R7 3 para uso como cifra nacional).

### 7b. Propyme + DefensaDeudores.cl, abr-2025
- Fuente: La Tercera (https://www.latercera.com/pulso/noticia/encuesta-50-de-pymes-aumentara-inversion-pero-la-mayoria-congelara-contrataciones-en-2025/). n=1.139 mipymes, muestreo no especificado. «85% … declare facing obstacles to access financing, mainly due to high interest rates and guarantee requirements»; «60.1% cite labor costs» como factor de contratación; 62 % mantendrá su dotación y ~20 % la aumentará (extractor; R7 3).
- **Adversarial:** la pregunta «¿enfrenta obstáculos?» con respuesta sí/no a una comunidad que ya sigue a una plataforma financiera produce 85 % casi siempre. Compárese con ELE 7: 17 % pidió crédito y 15 % de rechazo (R7 2). La cifra de gremio habla de molestia, la de ELE de hechos.

### 7c. Multigremial Nacional, CNC, Conapyme, ASECH
- **Hallado:** declaraciones públicas contra el proyecto de cumplimiento tributario («12 puntos críticos», Tiempo21) y contra los requisitos del SII para iniciar actividades (Emol, 10-ene-2025, https://www.emol.com/noticias/Economia/2025/01/10/1153851/pymes-sii-facturas.html). **Ninguno cita una encuesta.** El caso concreto del reportaje: unos 15 días entre solicitud y aprobación, frente a un compromiso de 5 días hábiles del SII (lectura del extractor; R7 2).
- **No encontrado:** encuesta propia de CNC, Multigremial, Conapyme o ASECH con base y cuestionario publicados (búsqueda con 4 términos; sólo hallé la de ASECH sobre pandemia, sin abrir). **Si piden política pública con un solo caso o con encuesta cerrada, ese es el patrón.**

## 8. No verificado

1. Que la base EME 8 traiga variables de obstáculos, uso digital, razones de no pedir crédito o uso de programas (el diccionario sólo se vio hasta el Módulo D).
2. Muestra y diseño del estudio CIAT/SII 2014; cifras por tamaño (sólo resumen de búsqueda); si incluye contadores externos.
3. Procedencia de las cifras Fosis (47/33/57 %) atribuidas a la EME 2025.
4. Banco Mundial Enterprise Surveys Chile (encuesta 2010; la página no cargó la ficha); su nivel de informalidad y obstáculos.
5. OCDE Financing SMEs 2026, ficha de Chile.
6. ELE 7: cifras de obstáculos; ELE 8 (sin resultados).
7. Informe GEM Chile 2025/26 completo (UDD, 4-ago-2026): no vi n ni tablas de obstáculos. Cifras del titular: TEA 29,4 %, establecidos 7,1 %, «tres de cada cuatro … la escasez de empleo» como motivación principal, 50,4 % no emprendería por miedo al fracaso (https://www.udd.cl/noticias/2026/08/04/lanzamiento-gem-chile-2025-2026-emprender-sigue-siendo-una-aspiracion-para-los-chilenos/; R7 2). GEM 2024/25: n=4.113 adultos, 239 expertos; NECI 4,9 sobre 10; financiamiento entre lo peor evaluado por expertos (R7 2). **No hallé en GEM una cifra sobre trámites o impuestos como motivo de cierre.**
8. ENCLA 2023: cifras de cumplimiento o costo laboral.
9. Cuestionario de la EME 8 y fecha prevista de ELE 8 (ya anotado en datos-publicos §14).

## A. Qué preguntas de nuestros guiones ya están respondidas con muestras grandes

| Pregunta del guion | Respuesta existente | Cómo usarla |
|---|---|---|
| WhatsApp 3: «¿Tienes inicio de actividades? ¿Qué te ha frenado?» | EME 8: 54,2 % informal (def. SII + contabilidad); razones: «demasiado pequeño» 52,5 %, «no esencial» 20,2 %. EME 5: «no sabe cómo registrarse» 5,7 %, «demasiado caro» 4,7 %, «toma demasiado tiempo» 2,2 % | **No gastar mensajes en el «por qué».** Contraste. Sólo vale preguntar lo que la encuesta cerrada no capta (ver B). |
| Entrevista bloque 2: quién lleva los impuestos | EME 8: 25,5 % usa contador (p.21, base por confirmar) | Contraste con la muestra propia. |
| Entrevista bloque 2: cuántas personas trabajan, con contrato o a honorarios | EME 8: 73,4 % cuenta propia sin ayudantes; 40,6 % de los empleadores con un solo trabajador | Contexto: contratar al primer trabajador es el caso minoritario. |
| Bloque 4, bancos: crédito | EME 5/7/8 y ELE 7: pocos piden; 12,2 % empezó con crédito (EME 8); rechazo 15 % (ELE 7, sin confirmar) | No preguntar «si pidió crédito» como prevalencia; sí «qué pasó la última vez». |
| WhatsApp 6 / bloque 4: fondos | EME 7: Sercotec lo conocen 32,6 % de las mujeres y 29,6 % de los hombres; FOSIS 57 % y 40,8 % | Sólo sirve de contraste, ya vieja (2022) y sin «cómo se enteró». |
| Bloque 2: capacitación | EME 8: 25,9 % tomó capacitación formal; EME 7: mujeres, «no saber donde acudir» | Contraste. |

## B. Qué queda sin medir en ningún estudio hallado (por eso sí vale preguntarlo)

1. **Horas y plata del último mes**, por organismo (SII, DT, Previred, banco), de micro y pequeñas con contratados. Sólo hay costos agregados (CIAT 2014) o por tamaño de una muestra desconocida; ninguno por trámite.
2. **Multas, intereses y cobros que pagaron por no saber** (bloque 3, pregunta 4). No encontré encuesta sobre multas del SII o de la DT a micro; sólo el dato administrativo de deuda previsional.
3. **Qué creía saber y estaba equivocado** (bloque 4, LRE, F29, boletas). No hay medición de conocimiento tributario/laboral de microempresarios. **Hallazgo adverso:** no encontré ninguna encuesta de conocimiento de normas.
4. **A quién le preguntan primero y dónde se informan** (guion 5 y WhatsApp 7). **No encontrado:** ninguna encuesta que pregunte la fuente de información tributaria o laboral de micro y pequeñas.
5. **Cómo se enteran de los fondos y por qué no postulan** (EME 7 mide conocimiento de la institución, no del instrumento ni la barrera de postular). Tampoco rendición de gastos ni carga de postular.
6. **Cómo emiten boletas y facturas** y cuánto pagan por el software: ENTIC excluye micro.
7. **Por qué se formalizaron** y qué les costó el trámite: sólo mide a los no registrados.
8. **Trámite de contratar al primer trabajador**: ENCLA parte en 5 trabajadores; EME 8 no pregunta por qué no contratan (no verificado).
9. **Datos personales (Ley 21.719):** no busqué encuesta; no verificado si existe.

## C. Contradicciones y señales de sesgo

1. **Informalidad: ¿es el trámite o es que no lo necesitan?** Gremios (Multigremial, ASECH) dicen «arcaico y complejo» sin encuesta. EME 8 y EME 5 dicen que quienes siguen sin registrarse responden «demasiado pequeño» o «no esencial» (72,7 % sumados, EME 8); costo y falta de conocimiento suman 10,4 % en EME 5 (2017, no 2025). **Pero** es una lectura por sobreviviente: el que fracasó al tratar de inscribirse y se declara «no esencial» no se distingue. Y la respuesta «demasiado pequeño» es una racionalización que no dice si el trámite le costó. Esta contradicción es lo que las entrevistas deben aclarar.
2. **EME 5 frente a EME 8 en razones:** 2017: no esencial 37,7 %, pequeño 31,0 %; 2025: pequeño 52,5 %, no esencial 20,2 %. Cambio de orden y de peso. No hay nota metodológica leída para ver si las categorías cambiaron; **no comparar sin leerla** (EME 8 usó modo mixto; las categorías pueden ser otras).
3. **Crédito: «obstáculos» frente a hechos.** Propyme: 85 % declara obstáculos. EME 5: 93,6 % de quienes pidieron lo recibió; sólo 20 % no pidió por creer que no se lo darían. ELE 7: 15 % de rechazo (sin confirmar). La cifra del gremio mide molestia en una muestra de comunidad financiera; las de INE miden resultado en una muestra probabilística. **Si un gremio infla un problema para pedir política, este es el caso más claro.**
4. **Propyme contradice a Propyme:** abr-2026, 35 % de las mipymes con deuda en la Tesorería; may-2026, 60 % «no mantiene deudas con la TGR» (o sea, 40 %). Distinta muestra y distinta pregunta; no se puede usar ni como serie ni como cifra.
5. **Impuestos: «Chile tiene costos bajos» frente a «excesivos».** SII 2015: «uno de los países dentro de la región que tiene menores costos de cumplimiento»; Doing Business 2020 dio 296 horas, «casi el doble del promedio OCDE» (resumen de búsqueda), pero el caso es una empresa hipotética mediana y el informe fue desacreditado. CIAT: la carga **recae más en la micro** (2,1 % de ventas frente a 0,4 % en la mediana), lo cual **apoya al gremio en lo regresivo, no en que sea alto**. Ningún estudio mide el costo del microemprendedor informal que sí se formalice.
6. **Digitalización: intención frente a conducta.** Movistar «98 % invertirá», Entel «90 % lo considera relevante»; ENTIC (2018): 13 % comercio electrónico en pymes; ELE 7 (2022): 6 %; Chequeo Digital: 14 % avanzado; Xepelin: 20 %. Las cifras de intención vienen de proveedores y miden deseo, no uso.
7. **FOSIS:** el 57 % de FOSIS aparece en una nota de 2025 como «ha participado» y en EME 7 (p.19) como «conoce» (mujeres). No usar ninguna de las dos hasta rastrear la tabla.
8. **Universos incompatibles.** EME = hogares, hasta 10 trabajadores, con informales; ELE = formales sobre 800 UF; ENTIC y ENCLA = empresas con 5 o más trabajadores o con ventas sobre 2.400 UF; Propyme = comunidad por correo. Ninguna cifra de un universo se puede aplicar a otro (por ejemplo, 17 % de ELE no es el 12,2 % de EME).
9. **Doble cuenta de informalidad.** ENE: 26,5 % de los *ocupados* es informal (datos-publicos §3); EME 8: 54,2 % de los *microemprendedores* es informal. Distintos denominadores y definiciones (cotización frente a registro en el SII).

## Siguiente paso mínimo

Con un equipo con Python o Excel: descargar la base EME 8 y listar sus 668 variables (cierra §8, punto 1); abrir el PDF CIAT 2015 para la muestra y horas; releer EME 5 y EME 8 notas metodológicas para comparar razones. Sin esto, ninguna cifra de esta nota pasa a `datos/` con R7 1.
