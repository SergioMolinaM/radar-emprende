# Radar Emprende — fuentes oficiales de frecuencia mensual o mayor

**Consultado:** 5-oct-2026. **Método y límite:** solo WebFetch/WebSearch (sin shell). No se descargó ningún archivo a una planilla. Las páginas y PDF pasaron por un resumidor, así que cada cifra citada aquí es «leída en resumen», no «abierta en el archivo», salvo donde diga lo contrario. Los ceros de búsqueda no se toman como ausencia: se dice «no encontrado» o «no verificado».
**Escala:** alta = leído en API/metadatos o confirmado por dos vías; media = leído en la página oficial por resumen; baja = secundaria.
**Frecuencia demostrada** = fechas de publicaciones consecutivas que vi, no la declarada.

Lo ya revisado el 2-oct (RES CSV, SII anual, EME 8, ENE informalidad, ChileCompra EMT semestral, CMF morosidad) no se repite salvo para añadir evidencia nueva.

---

## Resumen

| # | Fuente | Frecuencia demostrada | Granularidad | Descarga sin login | Veredicto |
|---|---|---|---|---|---|
| 1 | Superir: reporte estadístico mensual (liquidaciones y reorganizaciones de empresas) | Mensual (PDF jul pub. 18-ago; ago pub. 16-sep) | Nacional; tamaño y rubro; región solo en el Cuadro 10 del informe de Economía | Sí, PDF; imagen, no texto | Entra, como cifra nacional y regional agregada |
| 2 | Economía: informe RES mensual (PDF + XLSX) | Mensual, 6 informes seguidos (5-may a 28-sep) | Región (mes corriente), rubro declarado, tipo, cooperativas por región, liquidaciones por región en año móvil | Sí | Ya en el radar; añade rubro, cooperativas y liquidaciones |
| 3 | INE ENE boletín nacional (cuenta propia, empleadores) | Mensual (n.º 327, 334, 335) | Nacional; regional vía boletines PDF regionales | Sí (PDF) | Entra: cuenta propia y empleadores |
| 4 | ChileCompra órdenes de compra (ZIP mensual) | Existe `2026-10.zip` el 5-oct (mes en curso) | Orden de compra (columnas no abiertas) | Sí (GET directo) | Fuente fina probable; no abierta. Se solapa con RadarPyme |
| 5 | INDAP concursos (HTML) | Diaria (aperturas 28-sep, 1-oct, 2-oct) | Área/comuna, fechas | Sí | Calendario rural; sin RSS |
| 6 | SII nómina PJ (altas y términos de giro, actualización ago-2026) | Una sola actualización observada (ago-2026) | RUT, comuna vía domicilios | Sí | Cadencia no demostrada |
| 7 | CMF morosidad por comuna | Mensual declarada; último dato jun-2026 (rezago ~3 meses) | Comuna | Sí | Ya visto el 2-oct; no mide pyme |
| — | Sercotec, Corfo, Fosis (calendario de fondos) | — | — | — | Sin fuente estructurada |
| — | SII inicios y términos (`ciclo_de_vida`) | Anual | Región | — | Descartada: anual |
| — | CMF FOGAES, FOGAPE | Irregular | Nacional | — | Descartadas |

---

## 1. Superir — procedimientos concursales de empresas

- **Organismo:** Superintendencia de Insolvencia y Reemprendimiento.
- **URLs:**
  - Página: https://www.superir.gob.cl/informacion-y-estadisticas/observatorio-estadistico-superir/ (dice «Fecha de actualización: 15 de septiembre de 2026»). Ofrece dos informes interactivos (Power BI: Cifras Relevantes y Atención Ciudadana) y un «Repositorio de Reportes Mensuales». No lista archivos descargables.
  - PDF mensual, patrón verificado: `https://www.superir.gob.cl/wp-content/uploads/2026/04/REPORTE-ESTADISTICO-MENSUAL-MARZO-2026.pdf` (376 KB, responde); `.../2026/08/REPORTE-ESTADISTICO-MENSUAL-JULIO-2026.pdf` (495 KB, 2 páginas); `.../2026/09/REPORTE-ESTADISTICO-MENSUAL-AGOSTO-2026.pdf` (491 KB, 2 páginas). `.../2026/07/REPORTE-ESTADISTICO-MENSUAL-JUNIO-2026.pdf` da 404: o cambia el nombre en los cierres de semestre o no se publica con ese patrón. No verificado cuál.
  - Boletín Concursal: https://www.boletinconcursal.cl/boletin/procedimientos. La página dice que permite descargar publicaciones de procedimientos vigentes de la Ley 20.720 en **JSON o CSV**. **No verificado:** qué campos trae, si trae comuna o región del deudor, ni términos de uso.
- **Formato:** PDF de 2 páginas. Dos extracciones de texto (WebFetch directo y vía r.jina.ai) no devolvieron tablas ni cifras: el PDF parece contener imagen o gráficos. **Hay que leerlo renderizado** (como indica la memoria del proyecto para cuestionarios).
- **Frecuencia demostrada:** informe de julio publicado 18-ago-2026 y de agosto 16-sep-2026 (fechas según r.jina); comunicado de prensa de ene-ago el 14-sep-2026; reporte del primer trimestre el 7-abr-2026 y semestral con comunicado 31-jul-2026 (g5noticias). Rezago de 2 semanas. Confianza media.
- **Desagregación (de los comunicados, alta):** nacional; tipo de procedimiento; tamaño de empresa liquidada (ene-ago 2026: 541 liquidaciones de empresas, 329 micro = 60,8 %, 126 pequeñas = 23,3 %, juntas 84,1 %); sector (servicios 61,7 %, industria 33,5 % según el comunicado); 43 reorganizaciones (22 micro y pequeñas, 21 medianas y grandes). **El comunicado de septiembre no trae región.** La región sí aparece en el informe de Economía (ver §2): 403 de 702 liquidaciones del año móvil a agosto en la Metropolitana.
- **Licencia:** **no declarada** en las páginas revisadas.
- **Cifra para el radar:** «Liquidaciones de empresas iniciadas en el mes y en el año móvil, y qué parte son micro y pequeñas», al lado de las constituciones del mismo periodo. Cuidado con el cotejo: una liquidación es el cierre judicial de una empresa con deudas; la mayoría de los cierres no pasa por ahí (término de giro ante el SII). Titular de la tabla: «cierres por insolvencia», no «cierres».
- **Solapamiento:** ninguno conocido con RadarPyme.
- **No verificado:** serie mensual histórica descargable; contenido del Power BI; campos del Boletín Concursal.

## 2. Ministerio de Economía — informe mensual RES (más de lo ya usado)

- **Listado:** https://www.economia.gob.cl/category/estudios-encuestas/registro-de-empresas-y-sociedades
- **Frecuencia demostrada (alta, leída en el listado):** marzo 2026 → 5-may; abril → 26-may; mayo → 24-jun; junio → 27-jul; julio → 28-ago; agosto → 28-sep. Seis informes consecutivos, rezago 4 semanas.
- **XLSX agosto 2026:** http://www.economia.gob.cl/wp-content/uploads/2026/09/figuras-y-cuadros-informe-res-agosto-2026.xlsx (21 hojas por resumen). **Contiene** `Cuadro_3` (rubros declarados por las sociedades nuevas), `Cuadro_4` a `Cuadro_9` (stock de cooperativas y socios por región y sector) y `Series Históricas Reg. Coop. (2020-2026)`. **No contiene** hoja de liquidaciones ni de disoluciones.
- **PDF agosto 2026:** http://www.economia.gob.cl/wp-content/uploads/2026/09/res-agosto-2026.pdf. Por resumen: **Cuadro 10, fuente Superir:** 702 procesos de liquidación en el año móvil terminado en agosto (-0,4 %), 403 en la Metropolitana (57 %). Rubros de agosto: comercio 13.687; asesorías 8.650; comercio internacional 5.667; arrendamiento 4.766; administración 4.148. Cooperativas activas 2.169 (RM 469, Araucanía 307, Valparaíso 296), 2.141.951 socios.
- **Trampa de rubros:** la suma de esos cinco rubros (36.918) supera con creces las 20.906 constituciones del mes, así que cada sociedad declara varias actividades. No se pueden sumar ni leer como «n.º de empresas por rubro» sin ver la nota del cuadro. **No verificado** (no abrí el XLSX).
- **Disoluciones y modificaciones:** el informe de agosto **no las incluye** (leído); el CSV del RES en datos.gob.cl tiene un solo valor en `Tipo de actuacion` (CONSTITUCIÓN, verificado el 2-oct). La página `registrodeempresasysociedades.cl/Indicadores` existe, pero el resumen no mostró su contenido: **no verificado**. Una búsqueda de `package_search q=sociedades` en datos.gob.cl no devolvió otro conjunto del RES (devolvió 20 conjuntos, sin más RES); no es prueba de ausencia.
- **Licencia:** informes de Economía sin licencia declarada; el CSV sí es CC-BY.
- **Cifra para el radar:** rubro declarado de las nuevas sociedades del mes (con la advertencia de actividades múltiples); stock de cooperativas por región; liquidaciones por región, año móvil.

## 3. INE — Encuesta Nacional de Empleo: cuenta propia y empleadores

- **Boletines nacionales:** `https://www.ine.gob.cl/docs/default-source/ocupacion-y-desocupacion/boletines/2026/nacional/ene-nacional-NNN.pdf`. **Frecuencia demostrada (alta):** n.º 327 el 29-ene-2026; n.º 334 el 28-ago-2026 (may-jul); n.º 335 el 30-sep-2026 (jun-ago; 2,8 MB). El n.º 336 da 404 (control correcto: 334 y 335 responden). Mensual, rezago 1 mes.
- **Contenido del n.º 335 (media, por resumen):** variación a 12 meses de ocupados por categoría: empleadores +5,9 %; asalariados formales -2,9 %; cuenta propia mujeres +4,4 %. Tasa de desocupación 9,6 %; informalidad 26,3 % (jun-ago 2026, página INE). **El boletín nacional no trae tabla regional** (resumen).
- **Datos descargables por región:**
  - **INE.Stat:** el cubo `ENE_OCU_CISE93` (ocupados por categoría: empleadores, cuenta propia, asalariados privado/público, servicio doméstico, familiar no remunerado; con región, tramo etario, sexo) **declara rango 2010 a 2024-V04** en su estructura SDMX (`https://stat.ine.cl/restsdmx/sdmx.ashx/GetDataStructure/ENE_OCU_CISE93`). Coincide con `INF_TOI`, que el 2-oct ya se confirmó detenido en 2024-V04. **Conclusión:** INE.Stat no sirve para series vigentes. El GetData completo supera 10 MB y no se pudo leer; el período lo infiero de la estructura, no de las observaciones.
  - **Boletines regionales PDF** (regiones.ine.cl): publicados el mismo día que el nacional (verificado el 2-oct para informalidad).
  - **Microdatos ENE** (CSV/Stata): la página del INE dice «Bases de datos en formatos Stata (.dta) y CSV»; una búsqueda atribuye a la base el trimestre jun-ago 2026. **URL directa no verificada.** El Datamart `bancodatosene.ine.cl` exige correo y clave (verificado en la página): no cuenta como descarga sin login.
- **Licencia (media, resumen de la página de términos):** **CC BY-SA 4.0**; hay que «reconocer adecuadamente la autoría», enlazar la licencia e indicar los cambios; ejemplo de cita: «Fuente: INE, nombre del producto donde se extrae la información, actualizada 2019». URL: https://www.ine.gob.cl/terminos-de-uso-y-licencia-de-datos-abiertos. **Implicancia:** el 2-oct se dejó «licencia no encontrada». Si el INE es CC BY-SA, lo derivado debe salir bajo la misma licencia, y el contenido del sitio es CC BY 4.0: **conflicto a resolver antes de publicar tablas derivadas del INE.** Releer la página literal antes de decidir.
- **Cifra para el radar:** «Ocupados por cuenta propia y empleadores, variación a 12 meses» (nacional, mensual). Regional solo si se arma desde microdatos o desde PDF regionales.
- **Nota:** cuenta propia incluye profesionales independientes; no es medida de «emprendimiento» ni de informalidad.

## 4. ChileCompra — órdenes de compra, ZIP mensual

- **URL (patrón de terceros, sin documentación oficial leída):** `https://transparenciachc.blob.core.windows.net/oc-da/AAAA-M.zip`. Pruebas de hoy: `2026-8.zip` y `2026-9.zip` responden con más de 10 MB; **`2026-10.zip` responde con 9,3 MB (contiene `2026-10.csv`), el 5-oct, o sea el mes en curso**; `2026-12.zip` da 404 (control negativo). El contenedor no se puede listar (404).
- **Frecuencia:** el archivo del mes en curso existe a 4 días de iniciado: actualización al menos semanal o diaria. **Fechas de Last-Modified: no vistas** (WebFetch no muestra cabeceras). Confianza media.
- **Columnas y desagregación:** **no abiertas** (el ZIP queda guardado pero no hay herramienta para descomprimirlo en esta sesión). El inventario del 2-oct cita 79 columnas por orden de compra según un repositorio de terceros. La página oficial `datos-abiertos.chilecompra.cl/descargas` devuelve vacío sin JavaScript. **Licencia: no encontrada.**
- **Qué mostraría:** monto y n.º de órdenes a empresas de menor tamaño por región del proveedor, por mes. **Solapamiento:** es exactamente el cruce que RadarPyme hace con Compra Ágil; PLAN.md §0 (2-oct) cierra F6 sin Compra Ágil. Se anota como reserva, no como propuesta.
- **No verificado:** si el ZIP incluye Compra Ágil; si trae marca de tamaño; codificación (el 2-oct apareció Latin-1 contra UTF-8 oficial).

## 5. Fondos: Sercotec, Corfo, Fosis, INDAP

- **Sercotec.** **Corrección a la memoria del investigador:** el calendario `widgetsercotec.sercotec.cl/Calendario` **no es de convocatorias de fondos**. Sus entradas son charlas y talleres («Centro emprende Banco Estado octubre», «Autoliderazgo comercial») con fecha de inicio, región y comuna, y sin fecha de cierre ni estado. El feed principal `https://www.sercotec.cl/feed/` es WordPress vivo: 10 entradas entre 4-ago y 28-sep-2026 (ej. 28-sep: Capital Semilla Modo Empleo etapa 2; 16-sep: Barrios con Identidad Arica; 24-ago: Modo Empleo etapa 1), mezcla noticias con convocatorias y **no trae fechas de apertura y cierre en campos**. El feed de categoría `/category/convocatorias/feed/` está parado (último ítem 3-abr-2025). Las publicaciones tipo «Conoce las convocatorias de octubre» son de 2023 y 2024. `wp-json` da 403. Las bases por región son PDF (por ejemplo `.../2026/05/Bases-Abeja-EMPRENDE-2026-Valparaiso-VB°.pdf`; postulación Abeja mayo 2026: 14-27 de mayo según búsqueda, no según las bases). **Descartada como fuente estructurada.** Sí sirve para detectar el anuncio (RSS), no para tabular fechas.
- **Corfo.** El listado `corfo.gob.cl/sites/cpp/programasyconvocatorias/` muestra «Cargando resultados…» sin JavaScript, sin RSS ni API visible. Fichas por convocatoria legibles (memoria del 2-oct). El conjunto de datos.gob.cl «Proyectos aprobados y recursos adjudicados Corfo 2018 a 2025» es CC-Zero, frecuencia declarada anual, modificado 2-oct-2026, pero es enlace a Power BI. **Descartada para calendario.**
- **Fosis.** `fosis.gob.cl/es/postulaciones/` dice que las postulaciones de emprendimiento «finalizaron» (Emprendamos 2026 «hasta el 8 de mayo») y remite a `spp.fosis.cl/ENLINEA/consulta/oferta_comuna.aspx` (oferta por comuna; **no abierta**). **Descartada.**
- **INDAP.** https://www.indap.gob.cl/concursos/todos-los-concursos: 479 concursos, tabla con nombre, apertura, cierre y territorio (comuna o región); las 11 primeras filas tienen aperturas del 9-sep al 2-oct-2026 (PROMR Petorca 02-10; PRODESAL Casablanca 01-10; PRODESAL Ovalle 28-09). Frecuencia diaria demostrada. Sin RSS ni exportación. Sin licencia declarada. Paginado `?page=N` (memoria del 2-oct). Es la única fuente estructurada de fondos de esta tanda, pero **solo cubre emprendimiento agrícola y rural**: sirve a municipios con PRODESAL, no al emprendedor urbano.
- **Cifra para el radar:** «concursos INDAP abiertos esta semana, por comuna, con días hasta el cierre».

## 6. SII — altas y términos de giro

- **Estadísticas de inicios y términos** (`sii.cl/sobre_el_sii/estadisticas_inicio_de_actividades.html`): **anual** 2005-2024, actualización oct-2025, región y categoría, sin comuna; descargo literal «Cifras preliminares, las cuales podrían variar producto de rectificación por parte de los contribuyentes, o bien, por procesos de fiscalización». **Descartada: anual y sin comuna.**
- **Nóminas de personas jurídicas** (`sii.cl/sobre_el_sii/nominapersonasjuridicas.html`, verificadas el 2-oct): `PUB_NOMBRES_PJ.zip` (inicio y término de giro vigentes por RUT), `PUB_NOM_DIRECCIONES.zip` (comuna), `PUB_NOM_ACTECOS.zip` (actividad). Hoy (5-oct) la página sigue diciendo «Actualización: agosto 2026» para las tres. **Frecuencia demostrada: una actualización observada** (5-ago); no hay segunda fecha. No se puede afirmar «mensual». Con ellas se podría contar altas y términos de giro **por mes y comuna** con cortes al día, pero cada refresco habría que bajarlo (50-95 MB) y la cadencia es desconocida.
- No hay estadística mensual del SII de DTE, ventas ni F29 por comuna en lo revisado (una búsqueda; no concluyente).

## 7. CMF y garantías

- **Morosidad por comuna** (`cmfchile.cl/portal/estadisticas/626/w4-propertyvalue-29497.html`): mensual declarada, último dato junio 2026, serie desde ago-2016, XLSX. Rezago de unos tres meses, luego **no es mensual al día**. No distingue empresa de persona (no verificado). **Descartada para esta sección:** no mide emprendimiento.
- **FOGAES** (Ley 21.543, `.../626/w4-propertyvalue-29536.html`): el XLSX `articles-112123_recurso_1.xlsx` (junio 2026; timestamp del enlace corresponde a fines de julio) trae serie mensual junio 2025-junio 2026 por banco, tamaño (micro y pequeña juntas), sector y destino; junio 2026: 2.434 créditos, $271.500 millones. **Pero los archivos publicados son tres en 19 meses** (dic-2023 Chile Apoya, dic-2024, nov-2025, jun-2026): publicación irregular. No hay región en lo leído. **Descartada** (no cumple frecuencia ni región).
- **FOGAPE:** series COVID cerradas en 2021; Chile Apoya terminó dic-2023. **Sin serie mensual vigente encontrada.**
- **Garantías Corfo (Fogain):** solo cifras anuales en notas de prensa (2025: USD 1.760 millones). **Descartada.**
- **Cuentas corrientes por región:** semestral. **Descartada.**

## 8. Superintendencia de Pensiones

- Su Centro de Estadísticas tiene «Cotizantes e ingreso imponible promedio (mensuales)» según la búsqueda. `spensiones.cl` da 403 por WebFetch y **no se pudo leer**. Si hubiera empleadores por tamaño y región sería relevante para «contratar al primer trabajador»; **no verificado**. Candidata para una próxima revisión con navegador.

---

## Ranking (valor para quien emprende o lo apoya)

**Criterio:** (1) frecuencia mensual demostrada con fechas; (2) descarga sin login; (3) licencia o riesgo de uso; (4) cifra concreta que complementa lo que el radar ya muestra; (5) que sirva a quien apoya (municipio, contador, Sercotec) y no solo a analistas; (6) sin solapar RadarPyme. Compara las fuentes por esas razones, no por esfuerzo de construcción.

1. **Superir, liquidaciones de empresas** (§1 con el Cuadro 10 del informe de Economía, §2). Es la contrapartida directa de las constituciones, mensual con fechas, nacional con tamaño y región por año móvil. Riesgo: PDF que hay que leer en imagen; licencia sin declarar; es cierre por insolvencia, no todos los cierres.
2. **Informe RES de Economía, cuadros de rubro y cooperativas** (§2). Seis informes consecutivos, XLSX sin login; agrega lo que el CSV no tiene (rubro declarado). Riesgo: actividades múltiples por sociedad; solo mes corriente por región.
3. **INE ENE: cuenta propia y empleadores** (§3). Mensual con tres ediciones fechadas. Riesgo mayor: licencia CC BY-SA contra el sitio CC BY 4.0, y la desagregación regional no está en datos estructurados vigentes.
4. **INDAP, concursos abiertos** (§5). Única fuente de fondos estructurada y diaria; útil para municipios rurales. Riesgo: solo agro; sin licencia ni RSS.
5. **ChileCompra, órdenes de compra mensuales** (§4). La de más detalle, pero sin columnas verificadas y solapada con RadarPyme: queda en reserva hasta que Sergio decida cambiar el cierre de F6.

Fuera del ranking: SII nómina PJ (cadencia no demostrada), CMF (no mide emprendimiento), FOGAES/FOGAPE (irregular), calendarios Sercotec/Corfo/Fosis (sin estructura).

## Pendiente de verificar (no codificar a ciegas)

1. Contenido legible del PDF mensual de Superir (renderizar) y los campos del Boletín Concursal (CSV/JSON).
2. Notas del `Cuadro_3` y existencia de `Cuadro_10` en el PDF de Economía con cifras exactas (leí un resumen).
3. Literal de la licencia del INE (CC BY-SA 4.0) y qué obliga a un sitio CC BY 4.0.
4. URL de microdatos ENE y estado de INE.Stat (el período por estructura, no por observaciones).
5. Columnas y alcance del ZIP de órdenes de compra de ChileCompra, y su Last-Modified.
6. Segunda fecha de actualización de las nóminas PJ del SII.
7. Estadísticas mensuales de la Superintendencia de Pensiones (empleadores).
8. Contenido de `registrodeempresasysociedades.cl/Indicadores`.
