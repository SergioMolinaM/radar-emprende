# Radar Emprende — encuestas adicionales sobre obstáculos de micro y pequeñas empresas (complemento a la línea base)

**Consultado:** 2-oct-2026. **Método:** WebSearch y WebFetch (directo y vía r.jina.ai). Sin shell: ningún PDF se abrió en disco (el visor de PDF local no tiene poppler). Mismo extractor automático y mismas advertencias que `2026-10-02-encuestas-previas.md` (puede inventar, puede declarar «ausente» lo que existe).

**Relectura en disco (Claude, 2-oct, pypdf sobre el PDF descargado):** el Resumen Ejecutivo de Superir/UGM confirma 28,1 % software (p.7), 73,7 % Google, 46,2 % familia o amigos, 19,1 % servicios públicos (p.8), 75 % desconoce instituciones de apoyo (p.9) y la ficha 3.168 / 430.039 / CAWI abr-may 2025 (p.11). Esas cifras pasan a R1 con página comprobada. El resto del documento sigue con las lecturas del extractor.

**Línea base leída completa antes de buscar:** `2026-10-02-encuestas-previas.md` y `2026-10-02-desafios-empresas.md`. No se repite nada de lo ya cubierto, salvo dato nuevo.

**Escala de confianza (R):** 1 = la cifra apareció en dos lecturas del documento primario (o primario más nota oficial) que coinciden; 2 = una lectura del primario, o secundaria que cita al primario; 3 = no usar como cifra. Las páginas son las que reportó el extractor. «Dos lecturas» significa dos pasadas del mismo extractor, no dos personas: sigue valiendo la regla de la línea base de releer el PDF antes de pasar algo a `datos/`.

## 0. Resumen en una tabla

| # | Estudio | Quién e interés | Levantamiento | Muestra | ¿Probabilística? | Incluye micro / informales | Microdatos | R |
|---|---|---|---|---|---|---|---|---|
| 1 | **Superir + U. Gabriela Mistral, «Tu Negocio, Tu Gestión»** | Superintendencia de Insolvencia (quiere herramientas digitales gratuitas contra el sobreendeudamiento) + universidad | abr-may 2025 | 3.168 emprendimientos activos; universo 430.039 inscritas en el registro de empresas de menor tamaño | Diseño probabilístico estratificado por región, pero **CAWI** (online); tasa de respuesta no hallada | Micro y pequeñas **formales inscritas**; informales no | No hallados | 1 cifras / 2 ficha |
| 2 | **Cajas de Chile + OCEC-UDP, «Estudio integral sobre la informalidad laboral»** | Gremio de cajas de compensación + centro de la UDP | 22-feb a 10-mar 2025 | 252 trabajadores informales (171 independientes) | **No** (panel de una plataforma de investigación de mercado, «Tester») | Informales (independientes y dependientes) | No hallados | 1 cifras |
| 3 | **SII, Encuesta de Costo de Cumplimiento Tributario 2024** | SII (repite la de 2014 que respalda el CIAT) | 1-oct a 10-dic 2024 | ~1.890 casos, presencial, empresas y personas | No declarado | No declarado | No | 1 existencia; **resultados no hallados** |
| 4 | **CMF + CAF, Encuesta de Capacidades Financieras de las MIPYMES** | Regulador financiero + banco multilateral | 5-mar a 2-may 2024 | 307 dueños o encargados de finanzas (67 % micro) | **No** (telefónica; marco de 2.000 contactos entregados por la CMF y BancoEstado) | Micro sí; informales no abordado | No hallados | 2 |
| 5 | **ChileCompra, Medición de Satisfacción de Usuarios (2023)** | Dirección de ChileCompra | 2023, 3 mediciones | >5.700 usuarios, 80 % proveedores | No declarado | Proveedores del Mercado Público (inscritos) | No | 2 |
| 6 | ChileCompra, Estudio de género (proveedores personas naturales) | ChileCompra + Comunidad Mujer | feb-2015 (telefónica) | 374 (187 mujeres, 187 hombres) de 11.418 | Sí (error 5 %, 95 %); respuesta 96 % | Personas naturales proveedoras | No hallados | 2 (vieja) |
| 7 | CNC, Victimización del Comercio (2.º sem. 2025) | Gremio (Cámara Nacional de Comercio) | 7-ene a 2-mar 2026 | 1.209 locales, 7 centros urbanos, ±2,8 % | No declarado en lo leído | Tamaño no declarado en lo leído | No hallados | 2 |
| 8 | ASECH + CobranzaOnline, morosidad en pymes | Gremio + empresa de cobranza (vendedor) | jul-ago 2025 | 372 empresas | No | Pymes | No | 2 |
| 9 | Propyme, sondeo «pago a 30 días» | Plataforma privada (misma familia que el Termómetro) | 28-31 jul 2026 | 1.728; 78 % micro (1-9 trabajadores) | No (autoselección) | Micro sí | No | 2 |
| 10 | UGM + Black&White, Encuesta Ecosistema Emprendedor (X, 2025; XIV, 2026) | Universidad privada + empresa de panel | mar-2025 (X) | 1.015 personas ≥18 años (X) | **No** (panel no probabilístico) | Población general; los emprendedores son un subconjunto sin n hallado | No | 2 (X) / 3 (XIV) |
| 11 | Chubb + Artool, caracterización de pymes | Aseguradora (vendedor) | 29-ago a 4-sep 2025 | 202 | Panel online | 50 % con menos de 10 trabajadores | No | 2, **no usar** |

## 1. Lo más relevante

### 1.1 Superir + UGM, «Tu Negocio, Tu Gestión» (2025) — el hallazgo principal de esta tanda

- **URLs:** nota de Superir https://www.superir.gob.cl/siete-de-cada-diez-emprendedores-sin-formacion-financiera-nuevo-estudio-revela-brechas-y-propone-redisenar-apoyos/ ; nota UGM https://www.ugm.cl/estudio-tu-negocio-tu-gestion-siete-de-cada-diez-emprendedores-sin ; **Resumen Ejecutivo** (PDF, 13-ago-2025) https://www.superir.gob.cl/wp-content/uploads/2025/08/Resumen-Ejecutivo.pdf
- **Quién e interés:** Superir (autoridad de insolvencia) con la Universidad Gabriela Mistral. El propio estudio anuncia «soluciones digitales gratuitas» para prevenir el sobreendeudamiento; la pregunta «¿usaría una herramienta gratuita?» sirve a ese plan.
- **Ficha (p.11 del resumen, una lectura, R2):** universo «430.039 micro y pequeñas empresas inscritas en el registro de empresas de menor tamaño»; muestra «3.168 emprendimientos activos en los últimos 12 meses»; «Muestreo probabilístico estratificado por región. Dentro de cada estrato, selección aleatoria simple»; «Online (CAWI), con un cuestionario cerrado de unos 15 minutos»; «Abril-mayo de 2025»; «±1,74% a nivel nacional, bajo supuestos de máxima varianza».
- **Qué mide:** gestión financiera, herramientas digitales, fuentes de información, necesidades de apoyo (portada del resumen). **No es un ranking de obstáculos.** No encontré en el resumen preguntas sobre trámites, contratar ni fondos.
- **Cifras (dos lecturas del PDF coinciden, más tres notas de prensa; R1):**

| Cifra | Cita | Pág. |
|---|---|---|
| Fuente de información | «73,7% recurre a búsquedas en Google y 46,2% a familiares o amigos. En contraste, solo un 19,1% menciona a servicios públicos» (municipalidades 3,9 %, en las notas de prensa) | 5 |
| Software | «Solo el 28,1% de los emprendimientos encuestados declara utilizar algún sistema o software» (mujeres 21,1 %, hombres 31,1 %) | 3-4 |
| Desconocimiento | 75 % desconoce instituciones públicas especializadas en crisis financiera de MIPEs | 5 |
| Herramienta gratuita | 84,3 % la usaría «si fuera gratuita, simple y con reportes claros» (intención hipotética) | 4 |
| Capacitación | 74 % no ha recibido capacitación financiera (notas Superir, UGM, Diario Sustentable) | — |
| Unipersonales | 38,5 % son negocios unipersonales; 16 % nunca ha mantenido estados financieros | 2 |

- **Inconsistencia dentro del mismo estudio (no resolver desde acá):** el resumen dice que de los unipersonales «solo un 20,3% genera utilidades» y «más del 55% enfrenta dificultades»; las tres notas de prensa dicen «43,8% cubre gastos con dificultad, 20,3% tiene problemas para cubrirlos, 9,6% en crisis severa» para todos. Parecen lecturas distintas de la misma cifra. **No usar 20,3 % ni 43,8 % sin ver el informe completo.** Tampoco la autoevaluación de conocimiento alto: 38 % en las notas, 32,6 % para unipersonales en el resumen.
- **Microdatos / informe completo:** no encontrados con «Tu Negocio, Tu Gestión informe completo / base de datos»; las notas dicen explícitamente que no hay enlace al informe.
- **Sesgos:** (i) CAWI: el marco son inscritas en el registro con medio de contacto online; el 73,7 % de «Google» es de gente que responde un cuestionario online. (ii) Informales no cubiertos. (iii) Tasa de respuesta no hallada; el ±1,74 % es el nominal de un muestreo aleatorio simple de n=3.168 (comprobé: 1,96·√(0,25/3168)=1,74 %) y no considera no-respuesta. (iv) Los «84 %» y «75 %» son intención y autorreporte.
- **Implicancia:** es la primera medición probabilística-en-diseño que encontré sobre **dónde se informan** las micro y pequeñas (la línea base, §B.4, decía «no encontrado»). Dice que se informan primero en buscadores y en conocidos, no en el Estado. Úsala con la salvedad de CAWI.

### 1.2 Cajas de Chile + OCEC-UDP, informalidad laboral (2025) — razones de no formalizarse con costo y trámite explícitos

- **URL:** https://ocec.udp.cl/cms/wp-content/uploads/2025/03/Estudio-Informalidad-Cajas-OCEC-VF-comp.pdf (versión de Cajas: https://www.cajasdechile.cl/wp-content/uploads/2025/03/Estudio-Integral-sobre-la-informalidad-laboral-en-Chile_Cajas-de-Chile_OCEC-UDP.pdf)
- **Quién e interés:** gremio de cajas de compensación; autores José Acuña y Juan Bravo (OCEC-UDP). Cajas de Chile tiene interés en políticas de formalización.
- **Diseño (p.8, dos lecturas coinciden):** encuesta propia «que permite indagar en los segmentos de independientes informales y dependientes informales»; **252 trabajadores informales (171 independientes = 67,9 %; 81 dependientes privados)**; 22-feb a 10-mar 2025; plataforma de investigación de mercado «Tester»; residentes mayores de 18 años. El documento **no declara limitaciones de representatividad** (el extractor lo dijo en la segunda lectura).
- **Cifras (pp.9-10, base: independientes informales, n=171, «una de las 3 principales razones», R1):**
  - «El 60,8% … mencionó como una de las 3 principales razones … los costos asociados al cumplimiento tributario» (permisos/patentes, declaraciones y contabilidad, impuestos percibidos como altos).
  - «el 61,4% … menciona como una de las 3 principales razones … dificultades asociadas al inicio de actividades» (registro en el SII caro/lento/engorroso, demora de permisos, falta de conocimiento).
  - Beneficios de formalizarse que más valoran: comprar insumos en mejores condiciones 41,5 %; acceso a nuevos clientes 40,4 %; crédito 37,4 %; evitar multas 35,1 %.
  - Medida que más los motivaría: subsidios o bonos 27,5 %; apoyo contable gratuito 24,6 %; baja de impuestos 22,8 %.
- **Sesgos:** muestra no probabilística, online, n=171 (con muestreo aleatorio simple sería ±7,5 puntos; como no lo es, ni eso aplica; cálculo mío). La pregunta es de **opción múltiple hasta 3** sobre una lista cerrada que ya incluye ítems de costo y trámite: mide qué ítems se marcan, no cuál es el principal. Es lo contrario de la EME 8 (respuesta única «demasiado pequeño» 52,5 %, no registrados) y no se pueden restar entre sí.
- **Implicancia:** es lo único hallado que pone cifra a «costo de cumplimiento tributario» y «dificultades de inicio de actividades» como razón de informalidad **en 2025**. Apoya la hipótesis del gremio, pero con n pequeño y autoselección; sirve para decidir qué preguntar, no como prevalencia.

### 1.3 SII, Encuesta de Costo de Cumplimiento Tributario 2024 — existe; **resultados no encontrados**

- **URL:** https://www.sii.cl/noticias/2024/250924noti01aav.htm (R1: la nota del SII y Diario Estrategia coinciden).
- Ejecuta la consultora José Fuentes Valdés y Compañía Limitada; «aproximadamente 1.890 casos»; «contribuyentes empresa como personas, quienes interactúan habitualmente con nuestra institución»; presencial en las principales comunas; 1-oct a 10-dic 2024; busca «los costos que enfrentan al cumplir con sus obligaciones tributarias, considerando tanto el tiempo como el dinero»; la nota dice que repite una encuesta de 2014.
- **No encontrado** con «SII Encuesta de Costo de Cumplimiento Tributario resultados 2025 / 2026 horas pymes» ni en `sii.cl/sobre_el_sii/acerca/estudios/` (la página de estudios que cargó solo lista hasta 1999; la ruta `/estudios/` dio 404). Tampoco vi el PGCT 2025 en detalle.
- **Implicancia:** actualizaría el estudio CIAT 2014 de la línea base (§4a). Si algún día sale, es la fuente oficial de «horas y plata» por tamaño. Hasta entonces, el dato más nuevo sigue siendo 2014. Una vía a evaluar (no verificada): solicitar los resultados por Ley de Transparencia.

### 1.4 CMF + CAF, capacidades financieras de las MIPYMES (2024)

- **URLs:** informe https://www.cmfchile.cl/portal/estadisticas/626/articles-87678_doc_pdf.pdf ; nota de prensa https://www.cmfchile.cl/portal/prensa/625/w4-article-88078.html (solo audio).
- **Ficha (p.6, dos lecturas coinciden, R2):** versión reducida, telefónica, «307 dueños o encargados de asuntos financieros»; el marco lo armó la CMF «con el apoyo de Banco Estado» (2.000 contactos); 5-mar a 2-may 2024; margen «+/- 5,6%» al 95 %; micro 67 % de la muestra (fig. 1, p.7). El plan original era 1.000 respuestas online; se abandonó por «campañas de ciberseguridad» de los bancos (p.7).
- **Cifras (R2):** 48 % separa las cuentas personales de las del negocio (p.20; una cuarta parte de ellos dice que le cuesta); 87 % tiene algún producto financiero de gestión de caja (p.20); 29 % tiene sitio web, 25 % lo usa para vender, 36 % usa aplicaciones de open banking, ventas online 9 % del total (p.24-25; una sola lectura).
- **Sesgos:** n=307, no probabilística, marco con clientes de BancoEstado y contactos de la CMF: **subestima a quienes no tienen banco**. Microempresas con ±10 puntos o más por submuestra (el informe da ±10,5 % para mujeres).
- **Implicancia:** poco aprovechable para «obstáculos». Útil como contraste del 48 % de separación de cuentas con el 76,9 % de la EME 8 (que es autorreporte de la EME; universos distintos).

### 1.5 CNC, Victimización del Comercio (2.º sem. 2025) — la seguridad como obstáculo, ausente de la línea base

- **URL:** https://cnc.cl/wp-content/uploads/2026/04/30°-Medicion-Victimizacion-del-Comercio-II-Semestre-2025.pdf (R2, una lectura vía r.jina.ai).
- **Ficha técnica (p.1-5 del informe):** «locales de los rubros Comercio, Logística, Hoteles y Restaurantes» en Iquique, Antofagasta, Valparaíso-Viña, Concepción-Talcahuano, Temuco, Puerto Montt y Gran Santiago; 1.209 encuestas; telefónica y presencial a dueños, administradores o encargados; ±2,8 % (95 %); 7-ene a 2-mar 2026. Semestral desde 2008.
- **Cifras:** victimización 61,2 % (p.5); 57 % no denuncia (p.20); de los que denuncian, 72,3 % no vio resultados (p.20); 74 % tiene gasto en seguridad (mediana por rubro $135 mil a $1,5 millones mensuales, pp.29-30).
- **No encontrado en lo leído:** distribución por tamaño de local y diseño de muestreo (si es probabilística).
- **Sesgo:** el gremio usa la serie para pedir política de seguridad. Cobertura: solo siete zonas urbanas y solo comercio, logística, hoteles y restaurantes.
- **Implicancia:** si el sitio habla de «qué les pasa a las micro», la inseguridad en comercio urbano tiene medición propia; el IPN del Banco Central también la cita de forma cualitativa. No es obstáculo regulatorio.
- **Otros productos CNC (R2 de nota secundaria, no abrí el documento):** Índice de Adaptación Tecnológica, 505 empresas del Gran Santiago, semestral, dice que las micro y pequeñas enfrentan «acceso a financiamiento, capacitación y soporte técnico» y que «a menor tamaño de empresa, mayor es el porcentaje que reporta un bajo nivel tecnológico» (https://www.reporteminero.cl/noticia/noticias/2025/04/adaptacion-tecnologica-comercio-cnc-brecha-empresas-chile-2025). Encuesta CNC-ChilePay, 410 comercios (58,2 % micro): solo vista en resumen de búsqueda.

## 2. Vender al Estado — lo que sí hay (nada es un ranking de barreras)

Ninguna fuente hallada mide «% de micro y pequeñas que nombra X como barrera para vender al Estado». Lo hallado:

| Fuente | Qué da | Límite | R |
|---|---|---|---|
| ChileCompra, Cuenta Pública 2023-2024 (https://www.chilecompra.cl/wp-content/uploads/2024/05/Documento-CuentaPublicaChileCompra-2023-2024.pdf, p.35) | «Durante el 2023 se realizaron 3 mediciones con una participación de más de 5.700 personas usuarias, de las cuales el 80% fueron respuestas de proveedores y proveedoras y el 20% de organismos compradores». Capacitaciones: 71 % con nota 6 o 7; «Proceso de Certificación en Compras Públicas» y Registro de Proveedores: 56 % con nota 6 o 7 | Mide satisfacción con los servicios de ChileCompra, no barreras para vender. Muestra y selección no declaradas. Interés: la propia institución evaluada | 2 |
| ChileCompra, MAPS Chile 2016 (http://www.chilecompra.cl/wp-content/uploads/2017/11/MAPS-final-2017.pdf, p.20) | «se realizaron 2 encuestas, una a proveedores y otra a los compradores … que proporcionaron valiosa información cuantitativa» (mar-may 2016) | **Los resultados de la encuesta a proveedores no se extrajeron** (dos lecturas; el documento es grande y el extractor puede haberlo truncado). Es el único hallazgo de una encuesta a proveedores con barreras posible; vale abrirlo | 2 (existencia); resultados no verificados |
| ChileCompra + Comunidad Mujer, estudio de género (feb-2015) (https://www.chilecompra.cl/wp-content/uploads/2016/11/estudio-chilecompra-genero-opinion.pdf, p.6) | Telefónica; universo 11.418 personas naturales; muestra 374 (187/187); ±5 %, 95 %; respuesta 96 %. 49,2 % de las proveedoras con responsabilidades de cuidado (p.4); 42,4 % de ellas entra al portal una vez por semana o más, frente a 50,3 % de los hombres (p.29) | Vieja (2015), personas naturales, centrado en género | 2 |
| ChileCompra, «Cifras EMT, 1.er semestre 2025» (https://www.chilecompra.cl/wp-content/uploads/2026/01/Cifras_EMT_semestre1_2025.pdf) | Administrativo: EMT = 83 % de los proveedores (61.338), 61 % de las transacciones; Compra Ágil: EMT 80,7 % de los montos y 88,1 % de las órdenes | No es encuesta. Según la ley 20.416 la micro llega a 2.400 UF; **el reporte no desglosa micro, pequeña y mediana** | 2 |
| ASECH + CobranzaOnline (jul-2025, n=372; https://blog.cobranzaonline.com/post/encuesta-nacional-de-morosidad-en-pymes) | Deudores que atrasan: grandes empresas 42,1 %, otras pymes 40,2 %, **organismos públicos 12 %**; 80 % dice que la ley de pago a 30 días no se cumple en sus operaciones; 91 % recibe pagos con más de 15 días de atraso; 28,92 % con más de 60 días; atraso medio 44 días | n=372, autoselección, vendedor de cobranza. Que el Estado sea 12 % de los deudores no dice cuántos pagos del Estado se atrasan | 2 |
| Propyme (28-31 jul 2026, n=1.728; https://revistaemprende.cl/pago-30-dias-mipymes-propyme/) | «93% manifestó que “Sí. El Estado debe Pagar a 30 Días por sus compras”»; 79 % «Todas las Empresas deben pagar a 30 Días por igual» | Es opinión sobre una regla, no experiencia con el Estado; autoselección; 78 % de la muestra es micro por trabajadores | 2 |
| Evaluación de la ley de pago a 30 días (Senado, mar-2020) | Administrativo (30.000 acuerdos de plazo de pago registrados); municipios y servicios de salud como «peores pagadores» | Datos a feb-2020, no encuesta | 2 |

- **Afirmaciones que circulan y no pude respaldar (R3):** «ChileCompra se hace cargo del 87% de los problemas manifestados por las micro y pequeñas empresas» (nota ChileCompra 2016, sin año, muestra ni autor del análisis); la lista de barreras de la OCDE 2018 («very large contracts; insufficient access to information…») que la propia OCDE cita a EBRD 2017 y que el extractor atribuyó a ChileCompra sin que el texto lo deje claro (OCDE, *SMEs in Public Procurement*, p.37); la respuesta de «Centros ChileCompra». Un estudio de FNE (2020) sobre compras públicas revisó a mano 400 licitaciones, 400 productos de convenio marco y 400 tratos directos: es análisis de bases, no encuesta a proveedores.
- **No encontrado con** «ChileCompra encuesta proveedores barreras micro pequeñas», «encuesta satisfacción proveedores Mercado Público resultados», «Compra Ágil proveedores encuesta dificultades», «estudio barreras participación mipymes compras públicas Chile»: ninguna encuesta con ranking de barreras. La medición de satisfacción de 2025 («63 %», MESU, de un resumen de búsqueda) **no la vi en el documento**: R3.

## 3. Contratar el primer trabajador

**No encontrado** ninguna encuesta que pregunte por qué una micro no contrata o qué le cuesta el primer contrato. Búsquedas: «microempresas Chile por qué no contratan trabajadores encuesta razones no contratar costo laboral», «Dirección del Trabajo estudio encuesta microempresas cumplimiento normativa laboral», más ENCLA (ya en la línea base: parte en 5 trabajadores).

Lo hallado, todo débil:
- **PUC + ACHS** (nota de Radio Agricultura, 31-may-2026): «Solo el 45% de las microempresas cuenta con protocolos laborales» (conflictos y cumplimiento, contexto Ley Karin). La nota **no da nombre del estudio, año, muestra ni método**; una segunda nota dice que fue un submuestreo de «más de 1.300 casos» de dependientes, independientes y trabajadoras de casa particular, es decir, no a empleadores. **R3.** URL: https://www.radioagricultura.cl/noticias/dato-practico/solo-el-45-de-las-microempresas-cuenta-con-protocolos-laborales_20260531/
- **Chubb + Artool** (La Tercera, 1-nov-2025; https://www.latercera.com/pulso/noticia/pymes-en-chile-la-mitad-tiene-menos-de-10-trabajadores-y-ven-como-principal-desafio-futuro-la-regulacion-del-estado/): n=202, panel online aleatorio, 29-ago a 4-sep 2025; «para el 30% de los encuestados el principal desafío futuro es la regulación del Estado»; 32 % crecer en ventas como desafío actual; 53 % alza de costos de producción; 50 % tiene menos de 10 trabajadores. **Vendedor (aseguradora), n pequeño; no usar como cifra.**
- Los datos de la línea base (EME 4 y 5 «alto costo de contratar», Propyme 60,1 %) siguen siendo lo único.

## 4. Postular a fondos

**No encontrado** una encuesta a micro y pequeñas sobre por qué no postulan, la carga de postular o la rendición de gastos. Búsquedas: «Sercotec estudio encuesta beneficiarios satisfacción», «Corfo encuesta beneficiarios Semilla Inicia evaluación», «emprendedores Chile por qué no postulan a fondos públicos encuesta razones», «Fosis Yo Emprendo evaluación encuesta beneficiarios».

| Fuente | Qué da | Límite | R |
|---|---|---|---|
| UGM + Black&White, X Encuesta Ecosistema Emprendedor (mar-2025) (https://www.ugm.cl/x-encuesta-ecosistema-emprendedor-ugm-principal-barrera-de-emprendedoras) | Razones por las que **mujeres con experiencia de emprendimiento** no han participado en **programas de mentoría**: no conoce los programas 43 %, cree que no califica 39 %, no sabe cómo postular 32 %; 66 % no ha participado | Son programas de mentoría, **no fondos**; panel online no probabilístico, 1.015 personas ≥18 años (los n de las submuestras no figuran); interés de la universidad | 2 |
| UGM + B&W, XIV edición (2026) (Emol, 23-mar-2026) | «58% cite lack of knowledge as the primary reason for non-application; 25% report insufficient information about application processes» (66 % no ha postulado a programas de apoyo); 55 % cree tener menos oportunidades de financiamiento que los hombres | Una sola nota secundaria; mismo panel; los 58 % y 25 % no los vi en la página UGM | 3 |
| Superir/UGM (ver 1.1) | 19,1 % menciona servicios públicos como fuente de información; 75 % desconoce las instituciones que apoyan MIPEs en crisis | Es sobre insolvencia, no fondos | 1 |
| DIPRES, Semilla Inicia (informe final 2023) (https://www.dipres.gob.cl/597/articles-316278_informe_final.pdf, anexo 5, p.14) | **Sin encuesta a beneficiarios.** Encuesta Typeform solo a entidades patrocinadoras (74 % de respuesta, 73 % de los emprendimientos); «16 de las 23 Entidades» dan asesoría técnica directa | No sirve para barreras de postulación | 2 |
| Fosis, Estudio de Satisfacción de Usuarios 2015 (consultora Acción) | Para Yo Emprendo Semilla, 303 encuestados de un marco de 667 (resumen de búsqueda, diapositivas en slideplayer.es) | De 2015, solo secundaria | 3 |
| Sercotec «Encuesta Situación de la Mipe 2023» | Un resumen de búsqueda atribuye: «el 19% de las Mipes recurriría o ha recurrido a fondos públicos»; financiamiento corriente por ingresos del negocio 77,8 %, ahorros 17 % | **No encontré el documento primario**; el explorador de Sercotec con etiqueta «encuesta» no lo lista; el PDF DIPRES que lo cita no lo contiene | 3 |
| Sercotec, base de clientes (DIPRES, programa Servicios Virtuales, 2023) | De 86.050 registros, 37,1 % Instagram, 36,5 % WhatsApp, 24,7 % Facebook, 16,2 % web propia; «48% de la Mipe no utiliza herramientas de marketing digital» | Declarativo en un registro, no encuesta; los usuarios ya buscaron a Sercotec | 2 |

## 5. ENI, CAF/BID/CEPAL/OIT, académicas, CASEN/ENE, gremios (qué busqué y qué salió)

### 5.1 ENI 2021-2022, cuadros de obstáculos por tamaño
- **Cuadros con porcentajes: no encontrados** con «ENI 2021-2022 obstáculos innovación cuadros por tamaño observa.minciencia». Las páginas de INE y Observa tienen secciones «Cuadros estadísticos», «Bases de datos», etc., pero los enlaces a los cuadros no se renderizaron en WebFetch ni r.jina.ai.
- **Bases de datos que sí aparecieron (R2, de r.jina.ai sobre https://observa.minciencia.gob.cl/encuesta/encuesta-nacional-de-innovacion):** CSV/Stata/txt «Macrozona» `https://api.observa.minciencia.gob.cl/api/datosabiertos/download/?uuid=14263132-cb52-4acc-9fe8-7ae9ab4dfb83`; «Sector económico» `…?uuid=e2c84250-06ef-42a3-8642-c27f60c50f73`; transversal por macrozona `…?uuid=6fff0ec8-b134-4e0d-93be-c4731ef8ee1d`; seguimiento (Excel) `…?uuid=ff1643c6-734e-4833-a577-c380d138a605`; descriptor de variables `…?uuid=2ff4bff5-3671-484d-9dc5-ab0084177346`. No las descargué. Con ellas se podría calcular obstáculos por tamaño.
- **Artículo académico** Pincheira y Araujo de la Mata (2025), *Revista de Ciencias Sociales* 31(1): 423-437, DOI 10.31876/RCS.V31I1.43520 (https://dialnet.unirioja.es/descarga/articulo/10020905.pdf): usa **ENI 2019-2020**, solo empresas innovadoras (1.192: 488 grandes, 277 medianas, 427 pequeñas; **sin micro**); «diez de las quince barreras» difieren por tamaño; las más altas son falta de fondos propios, falta de fondos externos y alto costo de la innovación (p.429); en las pequeñas pesan la capacidad de colaborar y la falta de personal calificado. Es Kruskal-Wallis, sin cuadro de porcentajes. R2.
- **Implicancia:** ENI no ayuda para micro ni para «operar»; confirma lo de la línea base.

### 5.2 CAF, BID, CEPAL, OIT
- **CAF + CMF:** la de MIPYMES (1.4) y la de personas, 2.ª Encuesta de Capacidades Financieras Chile 2023 (1.212 personas, 29-abr a 23-jun 2023, ±2,8 %; no es de empresas; https://www.cmfchile.cl/portal/prensa/615/w3-article-76235.html; R2).
- **BID:** **no encontrado** con «BID encuesta mipymes Chile pospandemia obstáculos digitalización». Lo que salió: la Estrategia de Digitalización de Economía (mar-2026) dice haber recogido «encuestas sectoriales y estudios del BID y la CEPAL», sin cifras citables.
- **CEPAL:** no encontrada una encuesta con muestra chilena de micro. Salió un documento CEPAL sobre políticas de apoyo a pymes en la pandemia (repositorio.cepal.org) con cifras de caída de ventas 2019-2020 que, por la nota de Economía correspondiente, provienen de **datos tributarios (SII)**, no de encuesta (https://www.economia.gob.cl/2021/07/29/boletin-analisis-descriptivo-del-impacto-de-la-pandemia-sobre-las-empresas-en-chile.htm). No usar «77,8 % falta de liquidez»: no hallé su fuente primaria. R3.
- **OIT:** serie de notas sobre formalización de micro y pequeñas (Brasil, Chile, Colombia, Costa Rica), con «60 %» de informalidad laboral en micro y pequeñas de América Latina (ILO nota). No es encuesta chilena y no vi cuadros de obstáculos. R2 solo de existencia.
- **Facebook/OCDE/Banco Mundial, Future of Business Survey:** «85 % de las pymes chilenas necesitará más apoyo del gobierno» (DF, ola de pandemia). Muestra: empresas con página de Facebook (autoselección); no leí el primario. R3.

### 5.3 Académicas
- **UGM + Black&White:** ver 4 y la tabla 0. Panel no probabilístico.
- **UDD (GEM Chile):** ya en la línea base.
- **Búsquedas sin resultado útil:** «encuesta nacional pymes Chile universidad probabilística muestra microempresas Clapes UC OR Centro de Políticas Públicas UC OR UDD OR UAI OR U. de Chile 2023 2024 2025» y «Universidad Adolfo Ibáñez OR UC OR U. de Chile OR Usach OR UDP encuesta a pymes chilenas 2024 2025». Salieron ELE-7, EME 8, Bicentenario UC (opinión general), Castillo-Vergara (ya en la línea base), Observatorio Grande Pyme (con UC, administrativo) y el Centro de Microdatos U. de Chile (coautor de EME/ELE antiguas; la nota que leí es de 2009). **No encontrado** una encuesta propia de Clapes, CPP UC o UAI a emprendedores o pymes.
- **ASECH, «Radiografía del Emprendedor Chileno»** (n=615; los blogs de 2016 sugieren ese año, **no verificado**): dos fuentes dan cifras distintas (financiamiento 46 % o 44,5 %; estructura tributaria 35 % o 31,3 %); no leí el primario. R3. Vieja.

### 5.4 Organismos públicos distintos de INE
- **SII:** ver 1.3. Satisfacción: la página de estudios del SII lista 1990-1999; en 2019 hubo encuesta (Activa Research); los resultados **no se hallaron** (como ya decía la línea base).
- **Dirección del Trabajo:** ENCLA 2023 (línea base). **No encontrado** una encuesta propia de la DT a micro distinta de ENCLA.
- **Superir:** ver 1.1.
- **Sercotec / Corfo / Fosis:** ver 4. Explorador de Sercotec: tableros administrativos, ninguno de obstáculos, el de «Indicadores de impacto Centros de Negocios» actualizado 2-oct-2026 (https://explorador.sercotec.cl/). DataEmprendimiento de Corfo redirige a https://www.corfo.cl/sites/dataemprendimiento/home, **no leído**.
- **ChileCompra:** ver 2.

### 5.5 CASEN, ENE, EPS
- **No encontrado** módulos de CASEN o ENE que pregunten dificultades del negocio. Búsquedas: «CASEN 2022 trabajadores por cuenta propia razón no cotiza OR no emite boleta OR dificultades», «INE módulo ENE trabajadores por cuenta propia razón … módulo ENE 2023 OR 2024 OR 2025». Salió: definiciones de informalidad de CASEN 2022 (incluye independientes sin registro en el SII y empleadores de microempresas con menos de 5 trabajadores) y boletines de informalidad de la ENE (ocupación informal cuenta propia ~65 % en resumen de búsqueda, R3; es medición de condición, no de razones).
- **EPS 2025** (Subsecretaría de Previsión Social): más de 17.000 entrevistas (12.000 de paneles históricos y más de 5.000 de muestra nueva joven); «más del 60% de los ocupados no cotiza regularmente», más crítico en cuenta propia; **el artículo no explica por qué** (R2; https://previsionsocial.gob.cl/encuesta-de-proteccion-social-eps-2025-revela-brechas-en-cotizacion-expectativas-y-conocimiento-del-sistema-de-seguridad-social/). Otra nota (Chócale) da «35,8 % de independientes cotiza» y «85,6 % de los que no cotizan no está obligado»: **no vi el primario; R3**.

### 5.6 Gremios — qué busqué y qué salió
Términos usados (todos con WebSearch): «ASECH encuesta emprendedores estado del emprendimiento muestra resultados principales problemas 2024 2025»; «CNC encuesta pymes comercio pequeños comerciantes muestra metodología resultados problemas 2025 2026»; «Sofofa OR Asexma OR Cámara de Comercio de Santiago OR CChC encuesta pymes ficha técnica muestra obstáculos 2025»; «Conapyme OR Multigremial Nacional OR Cámara Regional del Comercio OR Cámara de Comercio de Concepción OR Asociación de Industriales sondeo OR encuesta socios pymes 2025 2026 problemas»; «Libertad y Desarrollo OR IEP OR Fundación Sol OR Horizontal encuesta pymes trabas regulatorias».
- **Con método publicado hallado (distinto de lo que decía la línea base):** CNC (Victimización, 1.5; Adaptación Tecnológica, 505 empresas), ASECH + CobranzaOnline (n=372, 2). Ambas son temáticas (seguridad, digital, morosidad), no «principales problemas».
- **No encontrado:** encuesta propia con método de Conapyme, Multigremial, CChC (pymes), Sofofa/Asexma ni cámaras regionales. Conapyme aparece solo con declaraciones (el presidente dice que informalidad e inseguridad son los principales problemas, sin encuesta citada). Cámara de Comercio de Santiago: página de estudios (https://www.ccs.cl/estudios/) **no leída**; apareció una encuesta CCS con Almacenes Digitales sobre delitos (36 % de almacenes víctima en ene-2026), solo en resumen de búsqueda, R3.
- **Fundación Sol:** estudio «Emprendimiento y subsistencia» (2019, con datos EME): análisis, no encuesta nueva; no leído.

## 6. Qué agrega a la línea base

| Tema (guion del proyecto) | Qué agrega esta tanda | Fuerza | Cautela principal |
|---|---|---|---|
| **Dónde se informan** (guion 5, WhatsApp 7; línea base §B.4 decía «no encontrado») | Superir/UGM: Google 73,7 %, familiares y amigos 46,2 %, servicios públicos 19,1 %, municipios 3,9 % (R1) | Media-alta | CAWI y solo inscritas; inflan «Google» |
| **Trámites / razón de informalidad** (WhatsApp 3, bloque 2) | Cajas/OCEC: 60,8 % costo de cumplimiento tributario y 61,4 % dificultades de inicio de actividades, entre las 3 razones de informales independientes (R1) | Baja-media | n=171, panel, opción múltiple; no equivale a EME 8 |
| **Costo de cumplir con el SII** (§B.1) | SII hizo la encuesta de costo de cumplimiento 2024 (1.890 casos); **sin resultados hallados** | Pendiente | Vigilar publicación |
| **Vender al Estado** | Nada de ranking de barreras. Satisfacción con servicios ChileCompra (71 % y 56 % con 6 o 7); encuesta a proveedores de MAPS 2016 existe pero sin resultados leídos; organismos públicos = 12 % de los deudores (n=372); 93 % de Propyme quiere que el Estado pague a 30 días; admin: EMT 80,7 % de los montos de Compra Ágil | **Vacío confirmado** | Todo lateral; no responde «qué los frena» |
| **Contratar el primer trabajador** | Nada nuevo medido en empleadores. PUC-ACHS 45 % de protocolos (R3) | **Vacío confirmado** | Sin método |
| **Postular a fondos** | UGM: desconocimiento (43 %, 58 %) y no saber cómo postular (32 %, 25 %), solo mujeres y mentoría; Superir: 75 % desconoce instituciones; DIPRES Semilla Inicia sin encuesta a beneficiarios | Baja | Panel no probabilístico; programas de mentoría, no fondos |
| **Seguridad** (no estaba en la línea base) | CNC: 61,2 % de locales victimizados, 57 % no denuncia | Media | Gremio, solo 7 zonas urbanas y rubros de comercio |
| **Morosidad de clientes** (no estaba) | ASECH/CobranzaOnline: 91 % con pagos con más de 15 días de atraso, atraso medio de 44 días | Baja | n=372, vendedor de cobranza |
| **Digital** | Superir: 28,1 % usa software de gestión financiera; CMF: 29 % web propia; CNC (micro: bajo nivel tecnológico) | Media | Cada una con su universo |
| **Obstáculos a innovar** | ENI: cuadros no accesibles; bases con UUID anotadas; artículo con ENI 2019-2020 (pequeñas, medianas, grandes) | Baja | Sin micro |

**Lectura adversarial.** Dos de las tres cifras más útiles (Superir y Cajas) vienen de encuestas **online**: una con marco probabilístico de empresas inscritas, otra con panel de mercado. Ambas miden a quien responde cuestionarios por internet, que es justo el segmento más digital de las micro. Si el sitio dice «las micro buscan en Google», la salvedad es obligatoria. En cambio, ninguna de las dos mide a quien no tiene inicio de actividades ni correo registrado: ese sigue cubierto solo por la EME (cara a cara en hogares). Esta tanda **no desmiente** la conclusión de la línea base de que los trámites aparecen poco como «principal problema» en encuestas con muestra; la cifra de Cajas (opción múltiple, n=171) la matiza pero no la revierte.

## 7. Lista de no verificados

1. Superir/UGM: informe completo y base; tasa de respuesta; cómo se construyó la lista de contacto; resolver la inconsistencia 20,3 % (utilidades de unipersonales o dificultades de cubrir gastos).
2. SII, Encuesta de Costo de Cumplimiento 2024: resultados, muestra por tamaño, si se publicó.
3. MAPS Chile 2016: resultados de la encuesta a proveedores (el extractor solo mostró la mención de la metodología).
4. ChileCompra: MESU 2023 (p.35) en una segunda lectura; MESU 2025 «63 %» (no está en la página oficial leída); el «87 % de los problemas» y su estudio de origen.
5. ENI 2021-2022: cuadros de obstáculos por tamaño (no hallados) y bases (UUID anotados, sin descargar).
6. Sercotec «Encuesta Situación de la Mipe 2023»: documento primario no hallado; «19 % fondos públicos» y «77,8 %» son de un resumen de búsqueda.
7. CNC Victimización: tamaño de los locales y diseño de muestreo; CNC Adaptación Tecnológica y CNC-ChilePay (solo notas secundarias).
8. UGM XIV (2026): n, submuestra de emprendedoras y texto de la pregunta; el «88 % considera el financiamiento principal barrera» (página dl.cl dio 404).
9. ASECH «Radiografía del Emprendedor Chileno»: fecha, método y cifras exactas.
10. PUC-ACHS «45 % de protocolos»: nombre, año, método, a quién se preguntó.
11. EPS 2025: razones de no cotizar de independientes; «85,6 %» y «35,8 %» sin primario.
12. Facebook/OCDE/BM Future of Business Survey: ola, n y cifra de Chile.
13. CMF/CAF MIPYME: cifras de web, open banking y ventas online (una sola lectura) y existencia de microdatos.
14. Corfo DataEmprendimiento, página de estudios de la Cámara de Comercio de Santiago y estudio de la Fundación Sol: no leídos.
15. Nota DF «Las razones tras el freno a la contratación: gremios…» (https://www.df.cl/economia-y-politica/laboral-personas/las-razones-tras-el-freno-a-la-contratacion-gremios-apuntan-a-mayores): apareció en búsqueda, no leída; podría traer encuesta gremial sobre contratación.
