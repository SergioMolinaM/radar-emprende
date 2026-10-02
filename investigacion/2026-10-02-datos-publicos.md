# Radar Pyme — inventario de datos públicos sobre empresas pequeñas, emprendimiento e informalidad

**Consultado:** 2-oct-2026. **Método:** WebFetch/WebSearch/lectura de PDF y XLSX. No hubo shell: ningún archivo se descargó a disco para abrirlo en una planilla. Dónde se pudo leer el contenido real del archivo se dice «abierto»; donde solo se leyó la página que lo describe se dice «solo página».
**Escala de confianza:** alta = leído en el archivo o en la API; media = leído en la página oficial, archivo no abierto; baja = fuente secundaria.

## 0. Resumen de estado de cada fuente

| # | Fuente | Último período | Geografía | Formato | ¿Archivo abierto? | Veredicto |
|---|---|---|---|---|---|---|
| 1 | SII estadísticas de empresas | año comercial 2024 (act. oct-2025) | región, provincia, comuna | XLSB, TXT (zip) | NO (xlsb ilegible; zip >10 MB) | Núcleo de la capa. Columnas sin verificar |
| 2 | SII nómina de personas jurídicas | año comercial 2020-2024 (act. nov-2025) | región (comuna: no confirmada) | TXT en zip | NO | Única vía a «cuántas sobreviven» |
| 3 | RES en datos.gob.cl | 31-ago-2026 (act. 28-sep-2026) | comuna tributaria y social | CSV, CC-BY | SÍ (API, 3 filas + cabecera) | La mejor serie viva |
| 4 | RES informe mensual (Economía) | agosto 2026 (pub. 28-sep-2026) | región, solo mes corriente | PDF + XLSX | SÍ (XLSX jun-2026, 21 hojas) | Sin comuna |
| 5 | INE ENE informalidad | trimestre abr-jun 2026 (regional); boletín nacional ene-mar 2026 | región (comuna: no existe) | PDF; CSV/Stata en banco ENE; INE.Stat | SÍ (boletín nacional PDF) | Serie regional viva; INE.Stat quedó en may-2024 |
| 6 | INE EME 8 | terreno may-ago 2025, pub. 10-dic-2025 | nacional y regional | CSV, R, Stata | NO (diccionario/manual leídos, base no) | Única medición de informales con microdatos |
| 7 | INE/Economía ELE 7 | años 2020-2022 (pub. 27-dic-2024) | nacional por actividad y tamaño | CSV, TXT | NO | Vieja y no regional. ELE 8 en terreno |
| 8 | ChileCompra informe EMT semestral | 1.er semestre 2025 (al 30-jun-2025) | región (solo gráficos) | PDF | SÍ (PDF completo) | Cifras regionales atrapadas en gráficos |
| 9 | ChileCompra datos abiertos | mensual/diario (no verificado en vivo) | comprador/proveedor (columnas no verificadas) | CSV/ZIP, OCDS | NO (página requiere JavaScript) | Probable mejor fuente de Compra Ágil, sin verificar |
| 10 | CMF regionales | morosidad por comuna a jun-2026 | comuna (morosidad) | XLSX | NO | Crédito pyme por región: no encontrado |
| 11 | Corfo (datos.gob.cl, DataInnovación, Data Emprendimiento) | jul-2026 (DataInnovación); 2001-2023 (Data Emprendimiento) | región | CSV/XLSX/Power BI | NO | Cubre solo parte de Corfo |
| 12 | Sercotec transparencia | 2018 | — | XLSX | NO | Muerta |
| 13 | Fosis | — | — | — | — | No encontrado |
| 14 | Superir (extra) | 1.er semestre 2026; ene-ago 2026 | nacional en el comunicado | Observatorio web | NO | Complemento de cierres |

---

## 1. SII — Estadísticas de empresas

- **URL de la página:** https://www.sii.cl/sobre_el_sii/estadisticas_de_empresas.html (publicada 10-nov-2025, «última actualización: octubre 2025»). Años comerciales 2005-2024.
- **Descarga (todas bajo `https://www.sii.cl/sobre_el_sii/empresas/`):** `PUB_TOTAL.xlsb`, `PUB_COMU.xlsb` (por comuna), `PUB_COMU_RUBR.xlsb`, `PUB_COMU_SUBR.xlsb`, `PUB_COMU_ACT.xlsb`, `PUB_COMU_TRTRAB.xlsb` (comuna × tramo de trabajadores), `PUB_TRAM5_COMU.xlsb` (tramo de ventas de 5 × comuna), `PUB_TRAM_COMU.xlsb` (13 tramos), `PUB_TRINT_COMU.xlsb` (18 tramos), `PUB_GEN_COMU.xlsb` (género asociado al RUT × comuna), `PUB_INI_FIN.xlsb` (evolución de contribuyentes: inicio y fin), `EMPRESAS.zip` (texto separado por tabulador, formato abierto), `Infografia_a_las_pymes_SII.pdf`. Lista completa de 60 archivos leída en la página.
- **Variables según la página (media):** número de empresas, ventas, trabajadores dependientes, remuneraciones por género, género asociado al RUT; clasificación por región, provincia, comuna, rubro, subrubro, actividad, tramo de ventas (5, 13 o 18), tramo de trabajadores.
- **Qué se pudo abrir:** `PUB_REG.xlsb` se descargó (77,4 KB, mime xlsb) pero el contenido es binario y no se pudo leer; `PUB_TOTAL.xlsb` por proxy dio 422; `EMPRESAS.zip` supera 10 MB. **Columnas reales: NO VERIFICADAS.** Para leerlas hay que descargar en un equipo con Excel o Python.
- **Notas del SII (alta, literal en la página):** cifras «preliminares, las cuales podrían variar producto de rectificación»; valores con `*` = 10 o menos declarantes (secreto tributario); proviene del Formulario 1887; el SII «no asume responsabilidad alguna» por veracidad, vigencia o integridad.
- **Rezago:** el año comercial 2024 se publicó en oct-2025. Al 2-oct-2026 el año 2025 aún no está. Rezago de 9 a 12 meses sobre el cierre del año.
- **Licencia:** **no encontrada** (la página solo trae el descargo de responsabilidad). No hay declaración CC. Antes de redistribuir series completas, preguntar o citar fuente sin republicar el archivo.
- **Trampa que sí se verificó:** la página vieja `https://www.sii.cl/estadisticas/empresas_region.htm` sigue en línea y muestra años comerciales 2014-2015 con archivos `region/PUB_Reg_Com.xlsx` (2005-2015). Es un cementerio con aspecto oficial. Los archivos vigentes son los de `sobre_el_sii/empresas/`.
- **Espejo secundario:** reportes comunales de la BCN (`https://www.bcn.cl/siit/reportescomunales/reporpdf.html?anno=2025&idcom=<CUT>`) traen empresas SII por tamaño y rubro, pero solo hasta 2023 (leído para El Monte, 13602: 2.036 empresas y 6.069 trabajadores dependientes en 2023). La BCN va dos años atrás del SII.
- **Pregunta que responde:** ¿cuántas empresas y de qué tamaño hay en mi comuna y rubro, y cuántos trabajadores dependientes emplean? (¿hay mercado para mi giro?, ¿qué tan micro es mi comuna?).

### 1b. SII — Nómina de personas jurídicas
- **URL:** https://www.sii.cl/sobre_el_sii/nominapersonasjuridicas.html. Archivos TXT en zip por rangos de año comercial (2020-2024, 2015-2019, 2010-2014, 2005-2009). Actualización: nov-2025.
- **Variables según la página (media):** fecha y tipo de término de giro, tramo de ventas (13), número de trabajadores, región, rubro, actividad, fecha de inicio, tipo de contribuyente, tramo de capital. **Comuna: el resumen no la lista; no confirmado.**
- **Por qué importa:** es nivel RUT. Con fecha de inicio y de término de giro permite contar supervivencia y, si se cruza por RUT con el CSV del RES (punto 3), supervivencia de las sociedades creadas por comuna. **No verificado** que esto funcione: falta abrir el archivo y comprobar que el RUT venga sin enmascarar y que la cobertura de término de giro sea utilizable.
- **Licencia:** igual descargo del SII; sin licencia explícita.

### 1c. SII — Estadísticas F29
- https://www.sii.cl/sobre_el_sii/estadisticas_f29.html. Anual 2005-2024, región y comuna, xlsb y texto, mismos descargos. Cantidad de declarantes y montos por códigos principales, desagregados por tramo de ventas y rubro (media). No abierto.

---

## 2. Registro de Empresas y Sociedades (RES) — datos abiertos por comuna

- **Dataset:** https://datos.gob.cl/dataset/registro-de-empresas-y-sociedades (Subsecretaría de Economía y Empresas de Menor Tamaño). API de verificación: `https://datos.gob.cl/api/3/action/package_show?id=registro-de-empresas-y-sociedades`.
- **Verificado en la API (alta):** licencia `cc-by`; frecuencia declarada `1m` (mensual); metadata modificada el 28-sep-2026; 14 recursos CSV: un archivo por año 2013-2025 y uno 2026 «hasta el 31 de agosto» (21,5 MB, modificado 28-sep-2026).
- **Descarga ejemplo (año 2025):** `https://datos.gob.cl/dataset/363edd60-4919-4ff1-b85f-f8e14d61285a/resource/71c8e355-226a-461e-809a-870c2275a178/download/2025-sociedades-por-fecha-rut-constitucion.csv` (29,7 MB; modificado 21-ene-2026). No se pudo bajar completo (supera 10 MB), pero la API del datastore del mismo recurso sí respondió.
- **Columnas reales (alta, `datastore_search` del recurso 2025):** `_id`, `ID`, `RUT`, `Razon Social`, `Fecha de actuacion (1era firma)`, `Fecha de registro (ultima firma)`, `Fecha de aprobacion x SII`, `Anio`, `Mes`, `Comuna Tributaria`, `Region Tributaria`, `Codigo de sociedad`, `Tipo de actuacion`, `Capital`, `Comuna Social`, `Region Social`. Todas texto. 202.406 filas en el archivo 2025. Filas de ejemplo: «Directorio Pesticidas.cl SpA», Macul, región 13, capital 10.000; «Apicola Navarro SpA», Chépica, región 6, capital 1.500.000.
- **Lo que trae y no trae:** trae comuna tributaria y comuna social, tipo de sociedad, capital y fechas por RUT. **No trae** rubro (no hay columna) ni cierres. `Tipo de actuacion` puede mezclar constitución con otros actos: no verificado qué valores toma ni si 202.406 son solo constituciones. Antes de contar, hay que ver la distribución de ese campo.
- **Cuidado de datos personales:** `Razon Social` es nombre de sociedad pero muchas llevan nombre y apellido de personas (ejemplo en la muestra: «Corporación Pedrazzini SpA»). Para publicar en el sitio, agregar a comuna/mes, no republicar la nómina.
- **Pregunta que responde:** ¿en qué comunas se crean más empresas por cada mil habitantes, con qué capital inicial y bajo qué figura (SpA, EIRL, Ltda.), y cómo cambia mes a mes?

### 2b. Informe mensual del Ministerio de Economía
- Listado: https://www.economia.gob.cl/category/estudios-encuestas/registro-de-empresas-y-sociedades. Último: **agosto 2026**, publicado 28-sep-2026 (https://www.economia.gob.cl/2026/09/28/informe-de-creacion-de-empresas-y-cooperativas-agosto-2026.htm; PDF `http://www.economia.gob.cl/wp-content/uploads/2026/09/res-agosto-2026.pdf`). Cada informe trae un XLSX «Figuras y Cuadros».
- **XLSX junio 2026 abierto (alta):** `http://www.economia.gob.cl/wp-content/uploads/2026/07/figuras-y-cuadros-informe-res-junio-2026.xlsx`, 21 hojas. Series mensuales mayo-2013 a jun-2026: RES vs Diario Oficial, constituciones por días hábiles, género de socios, extranjeros, rango etario. Por tipo societario (SpA 15.198 = 80,6 %) solo el mes corriente. Por región (`_Cuadro_2_`: N.º, participación, var. 12 meses, var. mensual) **solo el mes corriente**. **Comuna no aparece en ninguna hoja.**
- **Cifras del informe de agosto 2026 (media, página):** 20.906 constituciones en el mes (+1,6 % anual); 161.318 entre enero y agosto (récord); el RES concentra más del 90 %; SpA 80,8 % de lo registrado por RES; 12 de 16 regiones al alza.
- **Licencia:** no declarada en las páginas del informe. El dataset de datos.gob.cl sí es CC-BY.
- **Trampa de cortes:** las cifras mensuales de Economía (RES + Diario Oficial) no son el mismo universo que el CSV (régimen simplificado). Comparar siempre contra la misma definición.

---

## 3. INE — Informalidad laboral (ENE)

- **Página:** https://www.ine.gob.cl/estadisticas-por-tema/mercado-laboral/informalidad-laboral. Boletines trimestrales móviles.
- **Boletín nacional n.º 34 abierto (alta):** trimestre ene-mar 2026, publicado 5-may-2026. Tasa de ocupación informal 26,5 % (+0,7 pp en 12 meses), 2.498.665 ocupados informales; mujeres 27,9 %, hombres 25,4 %; cuenta propia 63,6 %; sector informal 14,9 %. Tablas por sexo, tramo etario, rama, grupo ocupacional (CIUO 08.CL), categoría, tipo de unidad de producción (matriz Hussmanns), horas. **No contiene tabla regional.** Tiene 5 páginas. URL: https://www.ine.gob.cl/docs/default-source/informalidad-y-condiciones-laborales/boletines/2026/ene-informalidad-34.pdf
- **Tasa nacional más reciente (media, página INE):** 26,3 % en jun-ago 2026.
- **Regional (media/alta):** cada región publica su boletín en `regiones.ine.cl/<región>/...`. En Valparaíso ya está el de **abr-jun 2026**; en O'Higgins se leyó la nota de ene-mar 2026: 29,4 % (+2,1 pp), 133.733 informales. Valparaíso ene-mar 2026: 28,4 % (-0,8 pp) según la búsqueda. Los regionales llevan unos 2 meses de atraso respecto al trimestre móvil nacional.
- **Serie descargable por región:** https://stat.ine.cl/Index.aspx?DataSetCode=INF_TOI (Excel, CSV, PC-Axis, SDMX; dimensiones: 16 regiones + nacional × sexo × trimestre móvil). **Hallazgo adverso:** dos lecturas independientes (por proxy y directa) muestran que el último período cargado es **mar-may 2024** (28,2 % nacional), dos años atrás. Puede ser un cubo abandonado o una lectura en caché del sitio; **no verificado en vivo con navegador**. Hasta confirmar, la serie regional trimestral actual hay que armarla desde los boletines regionales o desde los microdatos de la ENE.
- **Microdatos ENE:** http://bancodatosene.ine.cl/ (Datamart; desde ene-mar 2010; leído en la página). Descarga CSV/Stata/SPSS indicada en la página regional de Valparaíso. Permite calcular informalidad por región y por rama; la ENE **no publica comuna** y su diseño no es representativo a ese nivel.
- **Definición (alta, nota del boletín regional):** dependientes sin cotización de salud y pensión por la relación laboral + cuenta propia del sector informal + familiares no remunerados. Hay un corte: **las proyecciones de población se rebasaron al Censo 2017**, con las series antiguas basadas en Censo 2002; no mezclar. Falta saber cómo el Censo 2024 afectará la serie (no verificado).
- **Licencia:** no encontrada en la página. Para el INE rige su política de uso con cita de fuente (no verificada aquí).
- **Pregunta que responde:** ¿qué parte de quienes trabajan en mi región lo hace sin cotizar, en qué rama, y está subiendo?

## 4. INE — Encuesta de Microemprendimiento (EME 8)

- **Páginas:** https://www.ine.gob.cl/eme y la del Ministerio de Economía https://www.economia.gob.cl/2025/12/10/octava-encuesta-de-microemprendimiento-eme-8.htm (publicada **10-dic-2025**).
- **Datos reales (alta/media):** terreno mayo-agosto 2025; marco muestral de la ENE mar-may 2025; universo: cuentapropistas y empleadores con hasta 10 trabajadores en viviendas particulares; representatividad nacional y regional (error absoluto 1,0 %, relativo 1,2 % para estimaciones principales).
- **Bases (alta, manual de usuario):** «Base full» con 668 variables y 7.170 observaciones; «Base de empleo» con 10 variables y 3.327 observaciones. Factor de expansión `factor_eme`. Variables de formalidad: `e3` (registro en el SII), `e1` (contabilidad), `e2` (separación de gastos) y una variable construida `informalidad`. Formatos: CSV, R y Stata.
- **Inconsistencia a vigilar:** la página del Ministerio habla de 8.381 hogares y 9.094 informantes; el manual de usuario habla de muestra lograda de 6.735 viviendas y 7.170 informantes. Probablemente una es muestra seleccionada y la otra lograda, pero no se confirmó.
- **Cortes que no se comparan:** la EME pasó de **bienal a trienal**; EME 8 usa modo mixto (teléfono y presencial) con Survey Solutions (Banco Mundial) y se quitaron las preguntas de COVID. Comparar EME 7 (2022) con EME 8 requiere revisar la nota metodológica; no verificado.
- **Fuera de alcance:** quien no es dueño de un negocio con hasta 10 trabajadores no entra. No es un censo de informales; hay que decir «microemprendedores en hogares».
- **Síntesis de resultados:** https://www.ine.gob.cl/docs/default-source/microemprendimiento/publicaciones-y-anuarios/viii-eme/sintesis-de-resultados-viii-eme-2025.pdf (PDF no legible por las herramientas; cifras sueltas de la búsqueda: ganancia media $828.612, 25,9 % con capacitación, 60,4 % empezó con recursos propios; baja confianza hasta leerla).
- **Documentación:** diccionario `https://www.economia.gob.cl/wp-content/uploads/2025/12/diccionario-de-variables-eme-8.pdf` y manual `.../manual-de-usuario-de-bbdd-eme-8.pdf`.
- **URL de los CSV/RDS/DTA de la base:** **no encontrada** (la página del INE no la lista en el texto extraído). Hay que abrir en navegador la sección «Bases de datos» del micrositio.
- **Licencia:** la página del Ministerio dice que los materiales son públicos «para fines académicos, de investigación y de políticas públicas» (media, paráfrasis de la lectura). Falta la fórmula de licencia exacta.
- **Pregunta que responde:** ¿qué proporción de los microemprendedores de mi región está inscrita en el SII, lleva contabilidad, cuánto gana y qué le impide formalizarse?

## 5. Ministerio de Economía/INE — Encuesta Longitudinal de Empresas (ELE)

- **ELE 7:** https://www.economia.gob.cl/2024/12/27/septima-encuesta-longitudinal-de-empresas-ele-7.htm. Publicada 27-dic-2024. Años de referencia **2020-2022**, terreno 2023. Universo: empresas formales con ventas sobre **800 UF**. Representa 409.300 empresas (43 % micro, 54 % pyme, 3 % grandes). Representatividad: nacional, por actividad, tamaño de ventas y cruces; **no regional**. Bases anonimizadas en CSV y TXT, informe de resultados, calidad y diseño muestral.
- **ELE 8:** años de referencia 2023-2024-2025; en la búsqueda solo aparecen cuestionarios e instructivos del INE de abril 2026, o sea terreno, sin resultados. **Resultados: no encontrados** (búsqueda en INE y Economía).
- **datos.gob.cl:** la ficha «Encuesta Longitudinal de Empresas (ELE)» del INE tiene **0 recursos**, licencia cc-nc, modificada 2021-09-30. Muerta.
- **Adversarial:** al excluir lo menor a 800 UF (unos 20 millones de pesos anuales), deja fuera a casi todos los negocios que le interesan a Radar Pyme; los datos son de hace cuatro años; no hay región. Úsese solo como contexto de empleo, financiamiento y sobrevivencia declarada en empresas formales más grandes.
- **Pregunta que responde:** ¿cómo financian, contratan y exportan las pymes formales (sobre 800 UF) y qué las frena?

## 6. ChileCompra — participación de menor tamaño y Compra Ágil

- **Informe semestral EMT (alta, abierto):** `https://www.chilecompra.cl/wp-content/uploads/2026/01/Cifras_EMT_semestre1_2025.pdf` (también existe el del 2.º semestre 2025 en https://www.chilecompra.cl/estadisticas-mercado-publico/; no abierto). Obligatorio por el art. 49 de la Ley 19.886 reformada (vigente 12-dic-2024). 7 páginas. Datos al 30-jun-2025: 61.338 proveedores EMT (83 % de los proveedores); 548.672 órdenes de compra; USD 4.236 millones = 32,1 % de lo transado (+35,8 % real); Compra Ágil USD 559 millones, 364.473 órdenes, EMT 80,7 % del monto y 88,1 % de las órdenes. Por región: Aysén 60,7 %, Atacama 59,8 %, Tarapacá 59,2 %, Metropolitana 24,9 % del monto; en órdenes Atacama 69,2 %, Metropolitana 53,7 %.
- **Trampa (alta, literal del informe):** la marca EMT la asigna el SII cada Operación Renta según ingresos (micro hasta 2.400 UF, pequeña 2.401-25.000, mediana 25.001-100.000) y ChileCompra usa una copia **estática**; **las personas naturales de segunda categoría no son EMT** y quedan fuera del primer llamado de la Compra Ágil. Una microempresa que opera como persona natural con boleta de honorarios no aparece como EMT. Otro punto: lo regional está solo como gráfico de barras en PDF (porcentajes por región en el gráfico; no hay tabla).
- **Cifras del año 2025 (media, resumen de búsqueda de ChileCompra):** más de 100 mil proveedores, 83 % EMT; Compra Ágil USD 1.166 millones, 42 % de las órdenes, 82,9 % a EMT. No abierto el documento fuente.
- **Datos abiertos:** https://datos-abiertos.chilecompra.cl/descargas y https://datos-abiertos.chilecompra.cl/compra-agil. **Las dos páginas exigen JavaScript y las herramientas solo vieron «habilite JavaScript»: contenido no verificado.** Según ChileCompra (búsqueda/entrada de 2022): CSV UTF-8 con punto y coma, ZIP, XLS y JSON OCDS; órdenes de compra por semestre, licitaciones por mes; Compra Ágil en CSV; rezago de un mes, descargas masivas OCDS con un día de rezago. Contacto: datosabiertos@chilecompra.cl. Un repositorio de terceros (baja confianza) documenta el patrón `https://transparenciachc.blob.core.windows.net/oc-da/<año>-<mes>.zip`; consultado `.../oc-da/2026-8.zip` respondió con archivo de más de 10 MB (existe, no abierto), con 79 columnas por orden de compra. El mismo repositorio dice Latin-1 y separador coma, contra «UTF-8 y punto y coma» de ChileCompra: contradicción sin resolver.
- **La API de Mercado Público no expone Compra Ágil** (respuesta oficial de @ChileCompra en X, feb-2025, vista en el resumen de búsqueda): solo CSV.
- **Licencia:** **no encontrada.**
- **Pregunta que responde:** ¿qué parte de lo que compra el Estado en mi región se adjudica a empresas pequeñas, en qué rubros y a qué montos?

## 7. Banco Central y CMF — crédito

- **No encontrado:** crédito a pymes por región ni por comuna. Búsquedas hechas: «colocaciones por tamaño de empresa región» en CMF y Banco Central.
- **CMF Estadísticas Regionales:** https://www.cmfchile.cl/portal/estadisticas/626/w4-propertyvalue-29497.html (leído). Ofrece: cuentas corrientes de personas jurídicas y naturales por región (anual, 30-jun-2026, XLSX 1,47 MB cada una); **morosidad por distribución geográfica/comuna** (mensual, jun-2026, XLSX 8,8 MB, histórico desde ago-2016); índices de morosidad de 90 días o más y de menos de 90 días (XLSX). **Colocaciones por comuna y por actividad económica**: las páginas viejas (`w3-propertyvalue-29576/29578`) redirigen a URLs que dan 404, y el módulo antiguo de `sbif.cl` quedó congelado en 2020. Si siguen vivos, estarán en la herramienta BEST-CMF (`https://www.best-cmf.cl/best-cmf/#!/reportesintegrados`), **no abierta**.
- **Informe Anual de Estadísticas Regionales del Sector Financiero 2025 (octava edición, presentado 12-nov-2025):** https://www.cmfchile.cl/portal/estadisticas/617/articles-100489_recurso_1.pdf. Dato de la nota de prensa: 467 deudores por mil habitantes a mar-2025. **No se comprobó** que desagregue por tamaño de empresa; PDF no abierto.
- **Deudores comerciales por tamaño de deuda:** serie marcada **«descontinuado»** en el sitio de la CMF (título leído en los resultados de búsqueda, página no verificada).
- **Banco Central BDE:** https://si3.bcentral.cl/siete/. Colocaciones del sistema bancario nacionales y la Encuesta de Crédito Bancario con segmento PyME (trimestral, indicadores de percepción, no stock regional). Regional: «Estadísticas regionales» del BCCh (actividad, empleo), sin pyme.
- **Licencia:** no encontrada.
- **Implicancia:** la morosidad comunal de la CMF, aunque no distingue empresa de persona (no verificado), es el único proxy comunal de estrés crediticio.

## 8. Corfo, Sercotec, Fosis

- **Corfo en datos.gob.cl (alta, API):** 5 conjuntos con «emprendimiento»; 4 son de **2012-2013** (cc-nc, 2015) y uno es «Proyectos aprobados y recursos adjudicados Corfo 2018 a 2025», recurso **tipo URL a Power BI**, licencia CC-Zero, modificado 2-oct-2026. Un tablero no es descarga: la tabla subyacente no está.
- **DataInnovación (InnovaChile):** https://datainnovacion.cl/buscador-proyectos. «Datos actualizados a julio 2026»; descarga Excel o CSV; campos: código de proyecto, instrumento, beneficiario, título, financiamiento Innova, región, sector. «Todos los derechos reservados 2025», **sin licencia abierta**. Cubre instrumentos de innovación, no Corfo completo (no verificado qué queda fuera).
- **Corfo Data Emprendimiento:** https://www.corfo.gob.cl/sites/dataemprendimiento/. «+8.700 proyectos», más de 630.000 registros, 2001-2023, regional. Una lectura dice que no pide login y otra (búsqueda) que sí para descargar: conflicto sin resolver. Termina en 2023.
- **Fondos anuales adjudicados por sector** (Observatorio Logístico, espejo secundario): solo nacional, anual, con 8 meses de rezago.
- **Sercotec:** el portal de transparencia (https://transparencia.sercotec.cl/) muestra «última actualización: 11/07/2018»; el único listado de beneficiarios que se halló es `CSE.xlsx` de Capital Semilla Emprende 2018 (presupuesto de $5.390.640 miles). Los resultados actuales aparecen como notas de prensa regionales (por ejemplo 58 beneficiarios en Metropolitana, 52 en Biobío y 50 en Valparaíso para Capital Semilla Emprende 2026, según búsqueda; baja confianza). **No se encontró** nómina actual descargable.
- **Fosis:** **no encontrado** con «transparencia activa nómina beneficiarios Yo Emprendo región datos abiertos»; solo noticias (28.000 cupos y $29 mil millones para 2026, según Gob.cl; baja confianza).
- **Implicancia:** hoy no se puede cruzar «quién recibió fondo» con «quién sobrevivió». Se puede, a lo sumo, calendarizar los fondos como contexto.

## 9. Superir (extra, no pedido)

- Observatorio Estadístico: https://www.superir.gob.cl/informacion-y-estadisticas/observatorio-estadistico-superir/ (no abierto). Comunicado del 1.er semestre 2026: 8.047 procedimientos concursales; entre enero y agosto 11.326; 411 liquidaciones de empresas, 359 micro y pequeñas. **Sin desglose regional en el comunicado**; formato del observatorio no verificado.
- Sirve como contrapeso de las constituciones: el 87 % de las liquidaciones de empresas del semestre son micro o pequeñas (lectura propia de «359 de 411»).

## 10. datos.gob.cl — barrido

- Búsqueda por API `package_search`: «empresas» = 144 conjuntos, entre ellos RES (14 recursos, vivo), ELE (0 recursos, muerto) y conjuntos sin relación (minería, sanitarias). «emprendimiento» = 5 (Corfo, arriba). **«informalidad» = 0.** «empresas sii» = 0 (no hay estadística del SII en el portal). **No encontrado con** los términos «empresas sii», «microempresa», «informalidad». Los OR con espacios dieron 0 por sintaxis; no tomarlos como ausencia.

---

## 11. Las 3-5 series de más valor

1. **Constituciones RES por comuna y mes (RES CSV) normalizadas por población (Censo 2024).** Pública, CC-BY, mensual, con comuna, 2013-ago 2026. Nadie la ve a nivel de comuna en los informes oficiales (el informe mensual solo trae región del mes corriente). Se puede agregar sin exponer nombres.
2. **Supervivencia de sociedades por comuna: CSV del RES (RUT, fecha) × nómina de personas jurídicas del SII (término de giro).** Es lo que responde «cuántas sobreviven». **Es hipótesis**: falta abrir la nómina y comprobar RUT completo, comuna y confiabilidad del término de giro. Si falla, el sustituto es `PUB_INI_FIN` (inicio y fin agregados).
3. **Empresas por comuna × tramo de ventas × tramo de trabajadores (SII `PUB_COMU_TRTRAB`, `PUB_TRAM5_COMU`).** Estructura empresarial local con 20 años de serie. Columnas por verificar.
4. **Informalidad regional trimestral (ENE, boletines regionales o microdatos).** Es la única medida de informalidad regional viva; la serie de INE.Stat parece detenida.
5. **Compra Ágil: participación de EMT por región (informe semestral + descargas abiertas).** Ahora es PDF con gráficos; la fuente fina (OC por mes con comuna/región del proveedor) no se pudo verificar.

## 12. Cruces posibles (y su límite)

- **Constituciones por comuna (RES) × informalidad regional (ENE):** viable solo a escala regional para la informalidad. Dos unidades distintas: RES son sociedades creadas; ENE son personas ocupadas. La informalidad típica (cuenta propia sin inscripción) **no deja rastro en el RES**. Presentar como contexto, no como causa.
- **RES × SII nómina (supervivencia):** ver serie 2. Riesgo: sesgo del RES (solo régimen simplificado, sin sociedades creadas por escritura; sin giro).
- **SII empresas por comuna × ChileCompra EMT por región:** cociente «cuánto del universo de empresas pequeñas llega a vender al Estado». Cuidado: ChileCompra clasifica EMT con marca SII estática y excluye personas naturales; el SII cuenta personas jurídicas. Dos denominadores distintos.
- **EME 8 regional × ENE regional:** la EME mide formalidad del microemprendedor (`e3`, `informalidad`), la ENE la del empleo. Se pueden poner lado a lado por región, no sumar.
- **Morosidad comunal CMF × constituciones por comuna:** correlación descriptiva, sin causalidad; la morosidad mezcla personas y empresas (no verificado).
- **Para el núcleo «contratar al primer trabajador»:** SII `PUB_COMU_TRTRAB` (cuántas empresas de la comuna tienen 1-2 trabajadores) + ENE informalidad por región.
- **Para el núcleo «formalizarse»:** RES por comuna + EME 8 (`e3`, razones de no inscripción) + ENE.

## 13. Qué está muerto, desactualizado o no comparable (resumen adversarial)

- **PDF muerto:** informe semestral EMT de ChileCompra (regional solo en gráficos); informe anual regional de la CMF; boletines de informalidad (PDF por región, sin serie).
- **Desactualizado:** INE.Stat `INF_TOI` (mar-may 2024, por confirmar); ficha ELE en datos.gob.cl (0 recursos); Sercotec transparencia (2018); `sii.cl/estadisticas/empresas_region.htm` (2014-2015); CMF/sbif regional antiguo (2020); Corfo Data Emprendimiento (2023) y 4 conjuntos Corfo de 2012-2013; BCN reportes comunales (SII hasta 2023).
- **Con cortes que no se comparan:** SII preliminar (se revisa después); EME 8 (trienal, modo mixto, se quitó COVID); ENE (rebasado a Censo 2017; el Censo 2024 aún no se refleja, no verificado); RES mensual (RES + Diario Oficial) vs CSV (solo RES); ChileCompra EMT (marca SII estática, sin personas naturales); ELE (solo sobre 800 UF, sin región).
- **Sin licencia declarada:** SII, INE (en las páginas leídas), ChileCompra, CMF, DataInnovación (derechos reservados), ELE (cc-nc). Con licencia: RES datos.gob.cl (CC-BY), Corfo Power BI (CC-Zero). Con esto, el sitio de Radar Pyme (CC BY 4.0) puede citar y calcular, pero **no debe republicar tablas completas del SII o del INE sin consulta**.
- **Rezago:** SII año comercial 2024 recién en oct-2025; EME 8 de 2025; ELE 7 de 2020-2022; informalidad regional con 2 meses; RES con 1 mes. Lo más fresco es RES y ChileCompra.

## 14. No verificado (no codificar a ciegas)

1. Columnas y años de todos los `.xlsb` del SII y de `EMPRESAS.zip` (no se pudo abrir ni uno).
2. Si la nómina de personas jurídicas del SII trae comuna y RUT completo.
3. Valores de `Tipo de actuacion` en el CSV del RES y si las 202.406 filas de 2025 son solo constituciones.
4. Que el archivo RES 2026 (`202608-sociedades-por-fecha-rut-constitucion.csv`) tenga las mismas 16 columnas que el de 2025 (solo se leyó la lista de recursos).
5. URL directa de los CSV de la EME 8 y su licencia exacta.
6. Estado real de `stat.ine.cl INF_TOI` en navegador; tabla regional de ene-mar 2026 de todas las regiones.
7. Contenido y columnas de las descargas de ChileCompra (páginas con JavaScript).
8. Si la CMF aún publica colocaciones por comuna y por actividad (en BEST-CMF).
9. Existencia de nóminas actuales de beneficiarios de Sercotec y Fosis fuera de las noticias.
10. Licencias de SII, INE, ChileCompra y CMF más allá de los descargos.
11. Resultados de ELE 8 y fecha prevista.
12. Cifras del 2.º semestre 2025 de ChileCompra y síntesis de la EME 8 (PDF ilegible).
13. Número de sociedades RES que figuran con comuna social distinta de la tributaria, y qué comuna conviene usar.

## 15. Siguiente paso mínimo (lo hace Sergio o un agente con shell)

Descargar en una máquina con Python: `EMPRESAS.zip` del SII, la nómina de personas jurídicas, los CSV RES 2024-2026 y la base EME 8; abrir cabeceras y registrar columnas reales. Eso cierra los puntos 1, 2, 3, 4 y 5 de la sección 14.

---

## Verificación 2-oct (descarga real)

**Método:** curl + Python 3.12 (pyxlsb y pypdf en venv), archivos bajados al scratchpad de la sesión, fuera del repo. Fechas de archivo = cabecera HTTP `Last-Modified`. Ningún dato personal del RES ni de la nómina del SII se copia aquí: los RUT y razones sociales se usaron solo para contar y cruzar.

### V1. RES en datos.gob.cl (cierra puntos 3, 4 y 13 de §14)

| Archivo | URL descargada (todas bajo `https://datos.gob.cl/dataset/363edd60-4919-4ff1-b85f-f8e14d61285a/resource/`) | Tamaño | Last-Modified | Filas |
|---|---|---|---|---|
| 2024 | `42ee8c8c-59cf-42e4-89af-ec19a87dbf8d/download/2024-sociedades-por-fecha-rut-constitucion.csv` | 24.450.789 B | 17-ene-2025 | 165.258 |
| 2025 | `71c8e355-226a-461e-809a-870c2275a178/download/2025-sociedades-por-fecha-rut-constitucion.csv` | 29.713.181 B | 21-ene-2026 | 202.406 |
| 2026 (a ago) | `472de7b5-384f-452d-9da5-2928689d8f2f/download/202608-sociedades-por-fecha-rut-constitucion.csv` | 21.470.812 B | 28-sep-2026 | 148.405 |

- **Formato:** UTF-8 con BOM, separador `;`, CRLF. **15 columnas idénticas en los tres años** (el `_id` de §2 es del datastore, no del archivo): `ID;RUT;Razon Social;Fecha de actuacion (1era firma);Fecha de registro (ultima firma);Fecha de aprobacion x SII;Anio;Mes;Comuna Tributaria;Region Tributaria;Codigo de sociedad;Tipo de actuacion;Capital;Comuna Social;Region Social`.
- **Ejemplo de formato (anonimizado):** `5xxxxxx;78xxxxxx-K;<razón social> SpA;01-01-2025;01-01-2025;01-01-2025;2025;Enero;MACUL;13;SpA;CONSTITUCIÓN;10000;MACUL;13`. RUT completo con DV (100 % de las filas calzan `\d{7,8}-[\dK]`), únicos dentro de cada año. Fechas `dd-mm-aaaa`; mes en texto; región como número 1-16; comuna en mayúsculas sin tildes.
- **`Tipo de actuacion`: un solo valor, `CONSTITUCIÓN`, en el 100 % de las filas de 2024, 2025 y 2026.** Los archivos son solo constituciones (modificaciones y disoluciones no vienen).
- **`Anio`/`Mes` = fecha de aprobación del SII** (coincide en 202.406/202.406 filas de 2025 y 148.405/148.405 de 2026). La fecha de 1.ª firma puede ser muy anterior (mínimo 24-may-2023 en el archivo 2025). Contar por `Anio/Mes` = contar por aprobación SII.
- **Tipo societario 2025:** SpA 153.539 (75,9 %), EIRL 31.584, SRL 17.234, SA 41, otros 8.
- **Comuna:** 346 comunas tributarias distintas en 2025 (347 sociales); 0 tributarias vacías, 3 sociales vacías. **Tributaria ≠ social en 2.704 filas de 2025 (1,3 %)**, 2.369 en 2024, 1.862 en 2026. Recomendación: usar la tributaria (sin vacíos); la diferencia es marginal.
- **Sanity check, constituciones 2025 por región tributaria:** Tarapacá 3.877 · Antofagasta 6.439 · Atacama 2.544 · Coquimbo 8.010 · Valparaíso 20.400 · O'Higgins 10.314 · Maule 11.317 · Biobío 15.004 · Araucanía 10.389 · Los Lagos 10.302 · Aysén 1.433 · Magallanes 1.961 · Metropolitana 89.715 (44,3 %) · Los Ríos 4.310 · Arica 1.873 · Ñuble 4.518. Total 202.406.
- **Contraste con Economía:** el CSV 2026 suma 148.405 en ene-ago; el informe mensual da 161.318 (RES + Diario Oficial). La diferencia (~13 mil) es consistente con la trampa de §2b: universos distintos.
- **Licencia:** `cc-by` en la API (`package_show`, metadata 28-sep-2026). Confirmado.

### V2. SII estadísticas de empresas (cierra punto 1 de §14)

- **URLs (HTTP 200):** `https://www.sii.cl/sobre_el_sii/empresas/EMPRESAS.zip` (283.846.800 B, Last-Modified 25-nov-2025), `.../PUB_COMU.xlsb` (1.194.477 B), `.../PUB_COMU_TRTRAB.xlsb` (4.321.907 B), `.../PUB_TRAM5_COMU.xlsb` (4.784.600 B), `.../PUB_INI_FIN.xlsb` (6.831.302 B), los xlsb con Last-Modified 24-nov-2025. La página lista 59 xlsb + el zip + un PDF.
- **`EMPRESAS.zip`:** 60 TXT separados por tabulador (uno por cada xlsb; `PUB_COMU_ACT` viene partido en V1/V2). Formato no uniforme: `PUB_COMU.txt` y `PUB_INI_FIN.txt` en Latin-1 con miles con punto (`12.670`); `PUB_COMU_TRTRAB`, `PUB_TRAM5_COMU` y `PUB_COMU_RUBR` traen **4 filas vacías antes de la cabecera** y números como float (`2005.0`). Hay que normalizar al leer.
- **Período real:** años comerciales **2005-2024** (20 años) en los archivos revisados, salvo `PUB_COMU_ACT_V2` (2021-2024).
- **`PUB_COMU` (24 columnas):** `Año Comercial | Comuna / Provincia / Región del domicilio o casa matriz | Número de empresas | Ventas anuales en UF | Número de trabajadores dependientes informados | Renta neta informada en UF | Trabajadores ponderados por meses trabajados |` las mismas tres por género femenino y masculino `|` número, honorarios en UF y ponderados de trabajadores a honorarios (total, femenino, masculino). 2024: 347 filas = 346 comunas + «Sin Información»; suma 1.582.805 empresas, igual a `PUB_TOTAL` 2024.
- **`PUB_COMU_TRTRAB`:** mismas columnas + `Tramo según trabajadores dependientes informados`, 5 valores: `0) Sin trabajadores`, `1) 1 a 9 trabajadores`, `2) 10 a 49`, `3) 50 a 249`, `4) 250 o más trabajadores informados`. 1.676 filas en 2024.
- **`PUB_TRAM5_COMU`:** + `Tramo según ventas (5 tramos)`: Micro, Pequeña, Mediana, Grande, Sin Ventas/Sin Información. (13 y 18 tramos en `PUB_TRAM_COMU` y `PUB_TRINT_COMU`, no abiertos.)
- **Rubro:** `PUB_COMU_RUBR` trae letra CIIU + glosa (`C - Industria manufacturera`); `PUB_COMU_ACT_V2` trae actividad de 6 dígitos, subrubro y rubro.
- **`PUB_INI_FIN` (8 columnas, 949.214 filas): no tiene columna de comuna, solo región** (cabecera completa leída). Columnas: `Año comercial | Clasificación | Tramo según ventas | Rubro | Región | Tramo según trabajadores informados | Género asociado al RUT | Número de empresas`. `Clasificación` tiene 8 categorías del tipo «Es/No es empresa el año anterior / Es empresa en el año / Es/No es empresa el año siguiente / Sin información». Sirve para entradas y salidas regionales, no comunales.
- **Secreto estadístico (observado en los datos):** el SII **no suprime filas ni el número de empresas**; reemplaza por `*` las columnas en UF (ventas, renta, honorarios) y deja visibles los conteos de empresas y trabajadores. En `PUB_COMU` hay 78 filas con `*`; en `PUB_COMU_TRTRAB`, 13.508; en `PUB_COMU_ACT_V2`, 258.966 de 338.649. Hay filas enmascaradas con hasta 481 empresas, así que la regla no es solo «10 o menos empresas en la celda» (probablemente cuenta declarantes del monto; no verificado). Consecuencia: **los conteos por comuna × tramo están completos; las ventas por comuna × tramo, no.**
- **xlsb abierto con pyxlsb:** `PUB_COMU.xlsb` tiene hojas `Datos` (6.941 filas no vacías, mismas cabeceras y valores que el TXT, sin redondeo) y `Notas` (pyxlsb leyó 0 celdas; puede tener solo formas o cuadros de texto: no verificado). El TXT basta.
- **Licencia:** no aparece en la página. Sigue abierta (punto 10).

### V3. SII nómina de personas jurídicas (cierra punto 2 de §14; la serie 2 de §11 deja de ser hipótesis)

- **Hallazgo nuevo:** la página `nominapersonasjuridicas.html` ofrece, además de las nóminas por año comercial, **tres nóminas actualizadas en agosto de 2026**: `PUB_NOMBRES_PJ.zip` (razón social, inicio y **término de giro vigente**), `PUB_NOM_DIRECCIONES.zip` (domicilios y sucursales vigentes y no vigentes, con comuna) y `PUB_NOM_ACTECOS.zip` (actividades vigentes).
- **URLs y archivos (todas bajo `https://www.sii.cl/estadisticas/nominas/`, HTTP 200):**
  - `PUB_EMPRESAS_PJ_2020_A_2024.zip`: 187.529.334 B, Last-Modified 29-ene-2026; un TXT por año 2020-2024 (2024: 377 MB, 994.476 filas). **22 columnas:** `Año comercial | RUT | DV | Razón social | Tramo según ventas | Número de trabajadores dependie | Fecha inicio de actividades vige | Fecha término de giro | Fecha primera inscripción de ac | Tipo término de giro | Tipo de contribuyente | Subtipo de contribuyente | Tramo capital propio positivo | Tramo capital propio negativo | Rubro económico | Subrubro económico | Actividad económica | Región | Provincia | Comuna | R_PRESUNTA | OTROS_REGIMENES` (nombres truncados en el original). UTF-8, tabulador, fechas `aaaa-mm-dd`.
  - `PUB_NOMBRES_PJ.zip`: 52.385.281 B, Last-Modified 5-ago-2026. `PUB_NOMBRES_PJ.txt` con `RUT | DV | COD_SUBTIPO | RAZON_SOCIAL | FECHA_INICIO_VIG | FECHA_TG_VIG`; 3.373.630 filas, 978.159 con fecha de término de giro (`dd-mm-aaaa`). Corte efectivo: inicio de actividades máximo **2-ago-2026**.
  - `PUB_NOM_DIRECCIONES.zip`: 95.040.204 B, 5-ago-2026. `PUB_NOM_DOMICILIO.txt` y `PUB_NOM_SUCURSAL.txt` con `RUT | DV | VIGENCIA | FECHA | TIPO_DIRECCION | CALLE | NUMERO | BLOQUE | DEPARTAMENTO | VILLA_POBLACION | CIUDAD | COMUNA | REGION`. Trae dirección exacta: dato sensible cuando la sociedad lleva nombre de persona; usar solo la comuna.
  - `PUB_NOM_ACTECOS.zip`: 39.445.684 B, 5-ago-2026. `RUT | DV | CODIGO ACTIVIDAD | DESC. ACTIVIDAD ECONOMICA | FECHA | AFECTA A IVA | CATEGORIA TRIBUTARIA`. **Da el rubro que el RES no trae.**
- **Respuestas:** RUT completo sin enmascarar, en dos campos (`RUT` numérico + `DV`): sí (994.476/994.476 válidos en 2024). Comuna: sí (347 valores, 0 vacíos en 2024). Fecha y tipo de término de giro: sí; en 2024, 15.875 empresas con fecha, tipos `TERMINO DE GIRO PERSONA JURIDICA` (15.478) y `TERMINO GIRO SIMPLIFICADO RES. 41/2002` (397). Tramo de ventas como código 1-13 (glosa en la página).
- **Prueba de cruce RES × SII por RUT (hecha):**
  - Cohorte RES 2024: **165.258 de 165.258 RUT** están en `PUB_NOMBRES_PJ`; **6.886 (4,2 %) con término de giro** a ago-2026.
  - Cohorte RES 2025: 202.406 de 202.406 encontrados; 4.598 (2,3 %) con término de giro.
  - Cohorte RES 2026: 129.709 de 148.405 (todas las de ene-jul; solo 364 de 19.060 de agosto, por el corte del 2-ago); 923 con término.
  - Cohorte RES 2024 clasificada como «empresa» por el SII en el año comercial 2024: 100.597 de 165.258 (60,9 %).
- **Adversarial: el cruce funciona; la métrica no es «supervivencia».** El término de giro formal es raro (4 % a casi dos años): una sociedad sin movimiento rara vez lo tramita. Medir «sobrevive = sin término de giro» infla la supervivencia. La señal de actividad útil es figurar como empresa en la nómina del año comercial (contribuyente de 1.ª categoría, DJ 1887 o IVA vigente), con 13-14 meses de rezago. Propuesta: tres estados por cohorte y comuna (con término de giro / sin actividad declarada / activa).

### V4. INE EME 8 (cierra punto 5 de §14)

- **URLs (enlazadas en la página de Economía del 10-dic-2025):** `https://www.economia.gob.cl/wp-content/uploads/2025/12/base-de-datos-full-eme8-csv.csv` (13.664.609 B, Last-Modified 10-dic-2025) y `.../base-de-datos-empleo-eme8-csv.csv` (133.425 B). También `base-de-datos-full-eme8-r-rds.zip`, `base-de-datos-full-eme8-stata-dta.zip` y sus pares de empleo (no bajados). La página no enlaza SAV.
- **Base full:** UTF-8 con BOM, separador coma, **7.170 filas × 669 columnas** (668 + índice sin nombre). Variables confirmadas en los datos y con etiqueta en el diccionario PDF: `region` (1-16); `e3` «Inició actividades en Servicio de Impuestos Internos» (1 sí, boleta de honorarios; 2 sí, empresa persona natural; 3 sí, EIRL o Ltda.; 4 sí, otro tipo; 5 no; 6 no, en proceso); `e4` (razón para no inscribirse); `registro_ue` (0/1); `cuentas_ue`; `separa_gasto`; `informalidad` (1 informal, 0 formal); `num_micro`; `estrato`; `conglomerado`; `factor_eme` (factor de expansión).
- **Universo:** `informalidad` y `e3` son NA en las 407 filas con `num_micro = 0`. Hay que filtrar `num_micro == 1` (6.763 casos).
- **Control contra la publicación oficial (reproducido):** con `num_micro == 1` y `factor_eme` salen 1.998.178 microemprendedores y 54,2 % informales, **iguales a la Síntesis de resultados** del INE (PDF leído hoy con pypdf: «1.998.178 personas microemprendedoras», «un 54,2% desarrolla una actividad económica informal»; 2022: 58,3 %).
- **Informalidad por región (cálculo propio, ponderado, sin error muestral):** Tarapacá 64,3 · Antofagasta 58,3 · Atacama 61,7 · Coquimbo 55,8 · Valparaíso 53,5 · O'Higgins 51,6 · Maule 60,8 · Biobío 54,7 · Araucanía 66,0 · Los Lagos 56,1 · Aysén 50,0 · Magallanes 34,0 · Metropolitana 50,7 · Los Ríos 56,5 · Arica 57,5 · Ñuble 52,9 %. Las regiones chicas tienen 165-300 casos: publicar con intervalo usando `estrato`/`conglomerado`, nunca la cifra sola.
- **Base de empleo:** 3.327 × 11 (`id`, `f2_*`); sin región ni factor: se une a la full por `id`.
- **Inconsistencia de §4 resuelta:** la página del Ministerio dice «8.381 **viviendas seleccionadas** (9.094 informantes)»; el manual habla de la muestra lograda (7.170 informantes).
- **Licencia:** la página dice que la EME es «una fuente de uso público»; no declara licencia. La frase «fines académicos» de §4 no está en el texto de la página leída hoy. Sigue abierta.

### V5. INE informalidad (ENE) (cierra en parte el punto 6 de §14)

- **INE.Stat `INF_TOI` está detenido (confirmado en vivo por la API, no es caché):** `https://stat.ine.cl/restsdmx/sdmx.ashx/GetData/INF_TOI/all/all` (HTTP 200, 18.276.777 B) devuelve 81 trimestres móviles, de `2017-V08` a **`2024-V04`**. Último valor nacional 28,2 %, igual a la lectura previa de mar-may 2024. Dimensiones: región (16 + total), sexo, rama, CISE, grupo ocupacional, n.º de trabajadores, tramo etario, lugar de trabajo, nivel educativo, provincia, ciudad.
- **Último boletín nacional:** n.º 35, `https://www.ine.gob.cl/docs/default-source/informalidad-y-condiciones-laborales/boletines/2026/ene-informalidad-35.pdf` (1.476.790 B, 5 páginas), del 5-ago-2026: **trimestre abr-jun 2026, 27,0 % (+1,0 pp)**. El n.º 36 da 404 (control: el 34 y el 35 responden 200 con el mismo patrón): aún no publicado.
- **Regional:** boletín por región en PDF, publicado el mismo día que el nacional. Descargado el de Biobío: `https://regiones.ine.cl/documentos/default-source/region-viii/estadisticas/informalidad-y-condiciones-laborales/boletines/2026/informe-informalidad-regi%c3%b3n-del-biob%c3%ado-trimestre-abril-junio-2026.pdf` (1.532.222 B, Last-Modified 5-ago-2026, 4 páginas, edición n.º 29): **abr-jun 2026, 28,3 % (+3,1 pp)**. La página regional (`regiones.ine.cl/<región>/estadisticas-regionales/sociales/mercado-laboral/informalidad-laboral`) muestra primero un intersticial de Sitefinity; con cookies devuelve el listado, cuyos enlaces a archivos son solo PDF (búsqueda de enlaces .xls/.xlsx/.csv sobre el mismo HTML que sí devolvió los 3 PDF). **Corrige §3:** el regional no va 2 meses atrás del boletín trimestral nacional; sale el mismo día con el mismo trimestre.
- **Serie regional fresca:** solo PDF por región o microdatos ENE. La URL directa de los microdatos ENE **no se pudo verificar**: el HTML estático de las páginas del INE no trae la sección «Bases de datos» (carga con JavaScript). Un repositorio de terceros (baja confianza) los usa hasta jun-ago 2026, ~1,2 GB. Abierto: abrir esa sección con navegador.
- **Licencia:** no aparece en los boletines ni en la respuesta SDMX revisados.

### Estado de la lista de §14 tras la descarga

| # | Punto | Estado |
|---|---|---|
| 1 | Columnas de los xlsb y `EMPRESAS.zip` | **Cerrado** (V2) |
| 2 | Nómina PJ: comuna y RUT completo | **Cerrado: sí y sí** (V3); el cruce con RES por RUT calza al 100 % en 2024 y 2025 |
| 3 | Valores de `Tipo de actuacion` | **Cerrado: solo CONSTITUCIÓN** (V1) |
| 4 | RES 2026 con las mismas columnas | **Cerrado: sí, las mismas 15** (V1) |
| 5 | URL de los CSV EME 8 y licencia | URL **cerrada**; licencia **abierta** (V4) |
| 6 | `INF_TOI` y tabla regional | `INF_TOI` **cerrado: detenido en 2024-V04**; regional abr-jun 2026 solo en PDF; URL de microdatos ENE **abierta** |
| 10 | Licencias SII/INE | Siguen **abiertas** |
| 12 | Síntesis EME 8 | **Cerrado** para la cifra de informalidad (54,2 %, V4); ChileCompra 2.º semestre sigue abierto |
| 13 | Comuna social vs tributaria | **Cerrado:** difieren en 1,3 % (2025); usar tributaria |
| 7, 8, 9, 11 | ChileCompra, CMF, Sercotec/Fosis, ELE 8 | No abordados en esta verificación |
