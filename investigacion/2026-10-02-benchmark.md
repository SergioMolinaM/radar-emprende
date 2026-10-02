# Radar Pyme — benchmark nacional y dominios

Verificado el 2-oct-2026 por el investigador del arnés. Método: WebFetch (el contenido pasa por un modelo que resume; no es lectura literal) y WebSearch. Toda cifra de este documento tiene confianza **media** hasta que Claude la relea contra la fuente en navegador o PDF (regla de PLAN.md §2). Lo que no se pudo abrir se marca «no verificado»; las ausencias se declaran como «no encontrado con X», no como inexistentes.

## 1. Dominios (NIC.cl)

Consulta: `https://www.nic.cl/registry/Whois.do?d=<dominio>`.

| Dominio | Resultado | Lectura |
|---|---|---|
| **radar-circular.cl** (control positivo) | Titular Sergio Molina Monasterios, Tercera Letra; creado 24-abr-2026; vence 24-abr-2027 | El whois funciona y devuelve titular. El control pasa. |
| **radarpyme.cl** | **Ocupado.** Titular «Marcos»; creado 30-ago-2026; vence 30-ago-2027; NS Cloudflare. | No está libre. Ver §4.5: el sitio está vivo y es un producto cercano. |
| **radar-pyme.cl** | «Nombre de dominio no existe» | **Libre**, con el control positivo hecho. Ojo: es la versión con guion, que se confunde por teléfono y por voz con el dominio ocupado. |

## 2. Benchmark: oficiales

Columnas como el de Radar CI, más URL e interés comercial. «Abierta» = licencia o términos de reutilización encontrados.

| Fuente | URL (respondió el 2-oct) | Qué publica | Dato concreto | Actualización | Formato | Abierta | Actor / interés comercial |
|---|---|---|---|---|---|---|---|
| **SII — Portal Mipyme** | https://www.sii.cl/portales/mipyme/inicio.htm (200). `/portales/mipyme/` a secas da 404. | Cómo organizar la empresa (persona natural, MEF, EIRL, SRL), regímenes, contabilidad, inicio de actividades (F4415), fiscalizaciones posteriores | La página trae umbrales en UTA/UTM «de enero 2009» y enlaces a circulares 1998–2008; no declara vigencia | No declarada | HTML | No encontrado con WebFetch (términos de uso del SII no buscados) | Estado; sin interés comercial |
| **SII — Tipos de regímenes** | https://www.sii.cl/destacados/modernizacion/tipos_regimenes_mt.html (200) | Pro Pyme General y Transparente, régimen general, renta presunta | **Dice «10% para los años 2020, 2021 y 2022, y 25% para los años siguientes»**; no menciona Ley 21.755 ni 12,5% (búsqueda de la cadena en la página, resultado negativo; no se hizo control positivo, aunque la cita literal de 10%/25% salió del mismo texto) | Sin fecha | HTML | Igual que arriba | Estado |
| **SII — FAQ Pro Pyme General** | https://www.sii.cl/preguntas_frecuentes/declaracion_renta/001_140_7529.htm (200) | Respuesta corta sobre qué es el régimen | Dice «tasa reducida» sin cifra | Tiene fecha de creación y de actualización (no leída) | HTML | — | Estado |
| **SII — Facturación gratuita MiPyme** | https://www.sii.cl/portales/mipyme/factura_electronica.htm (200) | Sistema gratuito de factura electrónica para pocos documentos; plazo de IVA hasta el día 20 | «Gratuito»; exige certificado digital, correo y actividad de 1ª categoría (según snippet de búsqueda, no leído en la página). Boleta electrónica: **no encontrado** en esta página | Sin fecha | HTML + sistema web | No | Estado |
| **SII — Circular 53/2025** | https://www.sii.cl/normativa_legislacion/circulares/2025/circu53.pdf (PDF 179 KB descargado) | Circular de Impuestos Directos del 2025 que apareció al buscar la tasa 12,5% | **No verificado**: el PDF vino ilegible para WebFetch; que trate de la Ley 21.755 es lo que sugiere el título del resultado, no una lectura | 2025 | PDF | Norma pública | Estado |
| **ChileAtiende** | https://www.chileatiende.gob.cl/ (200). Portada centrada en personas; **no se encontró** sección pyme en la portada. | Fichas de trámites por institución. Ej.: https://www.chileatiende.gob.cl/fichas/3208-inicio-de-actividades-e-inscripcion-de-rut | Ficha de inicio de actividades: «no tiene costo», plazo de dos meses, online obligatorio desde 1-jun-2020. «Última actualización:» sin fecha visible | Variable por ficha; sin fecha visible | HTML, PDF por ficha, feeds | **Sí: CC0.** https://www.chileatiende.gob.cl/terminos-y-condiciones: «Los contenidos de este sitio... están bajo la licencia Creative Commons Zero (CC0)» | Estado (IPS); sin interés comercial |
| **Dirección del Trabajo** | https://www.dt.gob.cl/portal/1626/w3-channel.html (200) | Trámites para empleadores, Modelos de Contrato (21 formatos, .doc/.docx/.pdf; https://www.dt.gob.cl/portal/1626/w3-article-97403.html, sin fecha), MiDT, Indicadores | Simulador de finiquito y de indemnizaciones en cuotas: existen según búsqueda (https://www.dt.gob.cl/m/1620/w3-article-101172.html); **esa URL dio 404 al abrirla** y la variante `/portal/1626/` también. Acceso con Clave Única: no verificado | Sin fecha | HTML, DOC/PDF | No encontrado con WebFetch (términos no buscados) | Estado |
| **DT MiPyME en línea** | https://mipyme.dt.gob.cl/ | Capacitación para mipymes (link desde la portada de la DT) | **No verificado**: error de certificado al abrir | — | — | — | Estado |
| **DT — Indicadores económicos** | https://ventanilla.dirtrab.cl/indicadores/webform1.aspx | Indicadores (link desde la portada de la DT) | **No verificado**: la conexión se cayó | — | — | — | Estado |
| **Registro de Empresas y Sociedades** (ex Tu Empresa en un Día) | https://www.registrodeempresasysociedades.cl/ (200) | Guías de constitución, modificación y disolución, certificados, formatos, notarías, sección «Indicadores» | https://www.escritorioempresa.cl/ da 308 y redirige acá: **Escritorio Empresa y este registro son el mismo portal**. «Guía para formalizar tu emprendimiento» (24 pp.): metadatos Canva, **31-ago-2021**, autor Daniel Pizarro; texto no extraíble | Guía de 2021; resto sin fecha | HTML, PDF | No encontrado | Estado (Economía + Corfo) |
| **Escritorio Empresa — alcance** | Búsqueda; fuente secundaria (resultado de buscador) | «Más de 70 trámites, 200 municipios, 23 instituciones» | **No verificado en fuente primaria**; el lanzamiento de 2016 decía 15 trámites (https://www.economia.gob.cl/2016/06/22/gobierno-lanza-escritorio-empresa-una-plataforma-digital-de-tramites-para-la-creacion-y-operacion-de-empresas.htm, snippet) | — | — | — | Estado |
| **OPEN** (Oficina de Productividad y Emprendimiento Nacional) | https://open.economia.cl/ — **no resuelve** (ENOTFOUND). El buscador lo listó como `/sobre-open/`. | Creada en ago-2018 (según notas de Economía y DF en resultados de búsqueda); agenda de simplificación regulatoria | **No verificado**: no se pudo abrir el sitio. No se encontró con estas búsquedas una guía ni calculadora para pymes publicada por OPEN | — | — | — | Estado |
| **Sercotec — sitio** | https://www.sercotec.cl/ (200) | Estudios, «Calculadora de circularidad», «Explorador territorial», catastro de ferias libres, Ruta Digital, Pymes en Línea | Centros de Negocios: **62** según nota de BioBio de ene-2026 (https://www.biobiochile.cl/noticias/servicios/toma-nota/2026/01/27/quieres-emprender-que-son-los-centros-de-negocios-de-sercotec-y-donde-encontrarlos.shtml, snippet); no verificado en sercotec.cl | Noticias de sep-2026 | HTML, PDF | No encontrado | Estado |
| **Sercotec — Portal de capacitación** | https://capacitacion.sercotec.cl/portal/ (200) | Cursos gratuitos: contabilidad, financiamiento, legal/laboral, marketing, comercio digital | «15.920 cupos disponibles» el 2-oct; contabilidad simplificada, precios y gestión financiera entre los cursos (requisito de Capital Semilla Modo Empleo) | Mensual (cupos) | Cursos asincrónicos y sincrónicos, certificado | No (cursos, no datos) | Estado |
| **Sercotec — Manual para formalizar** | https://www.sercotec.cl/wp-content/uploads/2024/05/Manual-para-formalizar-un-emprendimiento.pdf (PDF 86,7 KB) | Manual | Metadatos: 22-abr-2024. **Contenido no extraíble**; no se sabe qué dice ni qué costos da | 2024 | PDF | Sin licencia declarada | Estado |
| **Corfo** | https://www.corfo.gob.cl/sites/cpp/homecorfo (corfo.cl da 302 a corfo.gob.cl) | El Viaje del Emprendedor, Fortalece Pyme, StartupChile, Registro de Personas Jurídicas | El Viaje del Emprendedor: 19.700 emprendedores, 25.400 cursos terminados, 180 instituciones (https://www.elviajedelemprendedor.cl/); temas: modelo de negocio, ventas, capital; **formalización y tributario: no encontrado con WebFetch en esa página** | Sin fecha | Cursos web | No encontrado | Estado |
| **Previred — Indicadores** | https://www.previred.com/indicadores-previsionales/ (200) | Indicadores mensuales y PDF archivados desde 2010 | Septiembre 2026: UF $41.057,20 (30-sep); UTM $71.721; tope AFP 90 UF = $3.695.148 (coincide: 90 × 41.057,20); tope cesantía 135,2 UF = $5.550.933; renta mínima imponible $553.553. Abril 2026: $539.000 (título de un PDF en búsqueda) | Mensual | HTML + PDF | No encontrado | Previred (entidad privada sin fines de lucro; sin interés comercial claro: **no verificado**) |
| **Previred — calculadora** | — | — | «Calculadora de cotizaciones gratis» aparece solo en un resultado de blog de terceros (simplo.cl); **no encontrado en previred.com** con la página de indicadores, que no ofrece calculadoras | — | — | — | — |
| **Superintendencia de Pensiones** | https://www.spensiones.cl/ — las páginas profundas dieron **403 a WebFetch** (cotización del empleador, costo previsional). | Simulador de pensiones, Cálculo del Costo Previsional (comisión AFP según renta), Infórmate y Decide | Existencia confirmada solo por resultados de búsqueda. Para empleadores: **no encontrado** una calculadora de costo | — | — | — | Estado |
| **Hacienda — nota de implementación** | https://www.hacienda.cl/noticias-y-eventos/noticias/implementacion-de-la-reforma-previsional-nueva-cotizacion-del-empleador-regira (200) | Aporte del empleador, Ley 21.735 | Calendario: ago-2025 a jul-2026 1%; ago-2026 a jul-2027 3,5%; ago-2027 a jul-2028 4,25%; ago-2028 a jul-2029 5%; ago-2032 a jul-2033 7,8%; ago-2033 a jul-2045 8,5% (WebFetch omitió los tramos 2029–2032). Nota del 11-jun-2025 | Puntual | HTML | — | Estado |
| **BancoEstado — Emprende** | emprendebancoestado.cl **ahora es vamosmipyme.cl** (aviso en resultado de búsqueda). Academia: https://academia.emprendebancoestado.cl/ (apareció en búsqueda; no abierta). https://www.vamosmipyme.cl da **403**. | Academia gratuita: formalización, comercio digital, contabilidad; artículo sobre regímenes | **No verificado**: el artículo «Conoce más acerca de los nuevos regímenes tributarios» no se abrió | — | HTML, cursos | No encontrado | Banco estatal; **sí tiene interés comercial** (cuenta, crédito) |

## 3. Benchmark: privados, gremios y medios

| Fuente | URL (respondió) | Qué publica | Dato concreto | Actualización | Formato | Abierta | Actor / interés comercial |
|---|---|---|---|---|---|---|---|
| **Buk** | https://www.buk.cl/recursos/calculadora/calculadora-sueldo-liquido (200) | Calculadora de sueldo líquido | Solo líquido, no costo empleador. **No menciona** el aporte de reforma previsional del empleador (no encontrado con la lectura de WebFetch). Aviso: «herramienta de simulación» | Sin fecha | Web | Sin registro; sin licencia | Empresa de software de remuneraciones; CTA a cotizar y demo |
| **Nubox** | https://www.nubox.com/recursos-calculadoras (200) | 6 calculadoras: sueldo bruto a líquido, finiquito, horas extra, IVA, boleta de honorarios, honorarios para contadores | Sin cuenta ni correo. Dice «Actualizamos los parámetros previsionales y tributarios cuando cambian». Aporte del empleador: **no mencionado** | Declarada «cuando cambian», sin fecha | Web | Sin licencia | Empresa de software; CTA a remuneraciones, contabilidad y facturación |
| **Nubox — blog contadores** | https://blog.nubox.com/contadores/contabilidad-simplificada (200) | Guía de contabilidad simplificada Pro Pyme | Fecha visible: 8-sep-2020; sin cifras de 2026 | 2020 | HTML | Sin licencia | Mismo; CTA «Contrata online» |
| **Talana / RunAHR** | https://runahr.com/cl/recursos/salario/calcular-sueldo-liquido/ (200) | Calculadora de sueldo con costo total del empleador | Muestra «Reforma pensiones empleador (1%) vigente desde agosto 2025. Sube 3,5% en agosto 2026» y «Última actualización: Septiembre 2026». Nota: dice 1%, siendo que desde ago-2026 rige 3,5% (ver §4.3) | Septiembre 2026 | Web | Sin registro | Empresa de software; CTA a prueba gratis y demo |
| **calculadora-sueldo.cl** | https://calculadora-sueldo.cl/ (200) | Sueldo líquido/bruto 2026 | Operador: Álvaro León, construido por FlowNex AI. «Revisado 8-sep-2026». No trata costo empleador ni el aporte de reforma. Cita un mínimo «Ley 21.830, mayo 2026» (**no verificado**) | Sep-2026 | Web | Sin anuncios; enlaza a comparador de AFP afiliado | Particular / startup; interés comercial indirecto |
| **sueldo.cl** | **No verificado**: solo aparece como «existe» en un resumen de búsqueda; no se abrió | — | — | — | — | — | — |
| **Rex+** | **No encontrado** con la búsqueda «calculadora sueldo líquido costo empleador gratis Chile Buk Talana Nubox Rex+» | — | — | — | — | — | — |
| **Mi Pyme Cumple** (CNC) | https://mipymecumple.cl/ (200) | Boletín Informativo Legal (hasta el N°295), avisos laborales, webinars | Temas: Ley Karin, 40 horas, equidad de género, marcas. Aliados: PUC, OIT, SURA Empresas, Thomson Reuters | Continua (2026) | HTML, webinars | No declarada | Gremio (CNC) con auspiciadores; **SURA vende seguros a empresas** |
| **Cámara Nacional de Comercio** | https://cnc.cl/ | «Comercio Emprende», «Extorsión Cero», «Sin Fachadas» (con el SII), índice de digitalización | No se abrió en esta sesión; datos de resultados de búsqueda | — | — | — | Gremio |
| **ASECH** | https://asech.cl/ (200) | Comunidad, eventos, socios | «52.000 socios» (la página); un resultado de búsqueda dice «más de 36.000» (**contradictorio, sin resolver**). No encontró biblioteca de manuales en la portada (búsqueda en esa sola página). Auspicia: Scotiabank, Visa, SURA, Mercado Libre | Eventos | HTML | Cuota gremial anual | Gremio con patrocinio de empresas |
| **Multigremial Nacional** | https://mgnacional.cl/ (200) | Noticias, memoria anual, minutas, Pulso Gremial | Sin paywall; **guías, herramientas o e-learning: no encontrado** en la portada. Contenido de sep–oct 2026 | Continua | HTML | Sin licencia | Gremio (13 ramas según la página; los «80.000 empresas» salen de un resultado de búsqueda) |
| **Emprende.cl** | https://emprende.cl/plan_pyme/ dio **404** al abrirla; el resto apareció en búsqueda | Guías «Crea tu PYME» y un «Plan Pyme: soporte legal y profesional desde 5 UF/mes» | Servicio pagado de soporte legal; quién está detrás: **no verificado** | — | — | — | Probable empresa de servicios; interés comercial por el plan de pago |
| **DF Pyme / medios** | No verificado: la búsqueda no devolvió una sección pyme de DF | — | — | — | — | — | — |
| **Otros blogs (contadores, Oficina Virtual, NSS, Chipax, Gomaxxa)** | Aparecen en búsquedas sobre tasa 12,5% y regímenes | Explicaciones del 12,5%, inicio de actividades | NSS Abogados (5-jul-2025) la presenta aún como proyecto presentado el 22-ene-2025 (no ley): quedó vieja el día que salió la ley | Blogs: 2025–2026 | HTML | Sin licencia | Estudios y software que venden servicios |
| **radarpyme.cl** | https://www.radarpyme.cl (200) | Cruza el catálogo de productos del usuario con oportunidades abiertas de Compra Ágil y licitaciones, con puntaje 0–100 | Operador no identificado en el sitio; dominio creado 30-ago-2026, titular «Marcos» | Producto vivo | Web app | No encontrado | Probable producto comercial (**no verificado**) |

## 4. Hallazgos que cambian el plan

### 4.1 Error de numeración en PLAN.md: no existe «Ley 21.720» de pensiones

PLAN.md §2 y §4A llaman «Ley 21.720» al aporte del empleador. La ley de reforma previsional es la **Ley 21.735** (Hacienda, 11-jun-2025; AAFP, resultado de búsqueda). La **Ley 21.720** es la de inhibidores de señal (BCN idNorma 1209400 apareció entre los resultados; descripciones coincidentes en dos fuentes). Corregir antes de que el número llegue a `datos/*.json`.

### 4.2 Contradicción entre fuentes oficiales: la tasa del Pro Pyme

- La página de regímenes del SII dice 10% para 2020–2022 y 25% «para los años siguientes» y no menciona la rebaja.
- La **Ley 21.755** (publicada el 11-jul-2025, según resultados de búsqueda; no leída en BCN) fija **12,5% para los ejercicios 2025, 2026 y 2027** y 15% para 2028, con la mitad del PPM. La Circular SII 53/2025 es la candidata a respaldo, pero no se pudo leer.
- Implicancia: el SII tiene una página de referencia **desactualizada y no marcada como tal**. Para Radar Pyme es el caso modelo de R2/R6: publicar la tasa con vigencia y citar la ley, no la página del SII. Pendiente de Claude: leer la Ley 21.755 en BCN y la circular.

### 4.3 Desfase entre calculadoras privadas y la ley

- El aporte del empleador subió a **3,5% desde la remuneración de agosto de 2026** (Hacienda y AAFP; SP no se pudo abrir). La calculadora de RunAHR, con «última actualización septiembre 2026», muestra 1%. Buk y Nubox no lo mencionan. calculadora-sueldo.cl no calcula costo del empleador.
- Dos lecturas posibles: el texto de RunAHR es incompleto (decía también «sube a 3,5% en agosto 2026»), o el cálculo no lo aplica. **No se ejecutó la calculadora**, así que no se sabe cuál. Es pregunta, no hallazgo.

### 4.4 Lo que ya está bien resuelto (enlazar, no duplicar)

- **Inicio de actividades**: ficha de ChileAtiende (gratis, dos meses, online desde 2020), reutilizable por **CC0**.
- **Constitución de sociedades**: Registro de Empresas y Sociedades (el mismo portal que Escritorio Empresa).
- **Facturación gratuita**: Sistema del SII.
- **Indicadores mensuales** (UF, UTM, topes, renta mínima): Previred, con PDF desde 2010.
- **Finiquito**: simulador de la DT (URL a reconfirmar) y de Nubox.
- **Contratos modelo**: 21 formatos de la DT.
- **Cursos**: Sercotec (15.920 cupos), DT MiPyME (no verificado), Academia Emprende.

### 4.5 `radarpyme.cl` ya existe como producto de Compra Ágil

Es el producto que PLAN.md §3 deja como F6 condicional. Con el dominio ocupado por un tercero y un sitio vivo sobre ese mismo asunto: (a) el nombre «Radar Pyme» queda confundible; (b) F6 pasa de «solo si F2 lo justifica» a «hay un incumbente»; (c) `radar-pyme.cl` está libre, pero registrarlo apunta a la confusión, no la evita. Decisión de nombre pendiente de Sergio; este informe no la toma.

### 4.6 Lo que nadie con interés comercial puede publicar

Todas las calculadoras privadas son ganchos de venta de un software de remuneraciones, contabilidad o facturación (CTA verificados en Buk, Nubox y RunAHR). Con eso:

- **Comparar software pagado con herramientas gratuitas** (facturador del SII, formatos de la DT, Previred, ChileAtiende) no lo puede publicar ninguno de ellos. Es el único hueco que sobrevive al ataque, con una condición: depende de que esas herramientas gratuitas cubran de verdad el caso de una pyme pequeña. Eso no se ha medido; PLAN.md §4E ya contempla el catálogo.
- Tampoco lo publica un gremio: ASECH y Mi Pyme Cumple tienen auspiciadores (SURA, Scotiabank, Visa, Mercado Libre).
- El Estado no compara contra el privado por diseño.

### 4.7 Dónde el hueco real puede no existir (adversarial)

- **«Una guía de cómo formalizarse» no es un hueco.** ChileAtiende (CC0), el Registro de Empresas, el Portal Mipyme del SII, Sercotec, Corfo y BancoEstado ya la cubren, gratis y con respaldo estatal. Una guía nueva compite contra el Estado con menos autoridad.
- **«Calculadora de sueldo» tampoco**: hay al menos cuatro gratis y sin registro.
- Lo que sí **no se encontró** en estas búsquedas: una página única que junte, con vigencia y cita literal, qué cambió en la ley que afecta a una pyme (12,5%, aporte del 3,5%, el calendario hasta 8,5%) y que advierta qué páginas oficiales están viejas. PLAN.md descarta el radar de cambios normativos; el hueco calza más con ese descarte que con una guía. **Resolver esa tensión es decisión de Sergio y de las entrevistas.**
- El Portal Mipyme del SII luce de 2009 en sus umbrales: el desfase es real, pero no se demostró que una pyme se equivoque por leerlo. Eso lo dicen las entrevistas, no este benchmark.

## 5. No verificado (no codificar a ciegas)

- Ley 21.755: número, fecha de publicación y texto (no leída en BCN; solo resultados de búsqueda). Circular SII 53/2025: ilegible.
- Calendario del aporte del empleador entre 2029 y 2032 (WebFetch omitió esos tramos).
- Simuladores de la DT: URL 404; si exigen Clave Única, no se sabe.
- OPEN: sitio no resolvió. DT MiPyME: error de certificado. spensiones.cl, vamosmipyme.cl: 403.
- Centros de Negocios Sercotec «62»: solo nota de prensa.
- Términos de reutilización del SII, la DT, Previred, Sercotec y Corfo: **no encontrado con estas búsquedas**.
- Calculadora de Previred: no encontrada en previred.com.
- sueldo.cl, Rex+, DF Pyme: no abiertos o no encontrados.
- Quién opera Emprende.cl y radarpyme.cl.
- ASECH 52.000 vs 36.000 socios.
- Mínimo $553.553 (Previred, sept-2026) vs. $539.000 (abril): una sola fuente por cada uno; la ley que lo cambió («21.830») no está verificada.

Memoria del investigador a actualizar con: CC0 de ChileAtiende, escritorioempresa.cl redirige al Registro, corfo.cl pasó a corfo.gob.cl, Ley 21.720 ≠ pensiones.
