# Plan — Radar Pyme

**Fecha:** 2-oct-2026 · **Reparto:** Sergio hace el sondeo y las entrevistas; Claude arma la base de datos verificada en paralelo.

## 0. Decisiones cerradas (no se reabren)

| Fecha | Decisión | Respaldo |
|---|---|---|
| 2-oct-2026 | Información, no software de impuestos (ni ERP, ni facturador, ni remuneraciones). | README; `investigacion/2026-10-02-barrido-open-source.md` |
| 2-oct-2026 | Entrevistas antes de escribir la guía. | README |
| 2-oct-2026 | Abierto y libre: sitio gratis, contenido CC BY 4.0, código MIT, repo público. Fichas de entrevistas fuera de git. | README; `LICENSE`, `LICENSE-CONTENIDO.md` |
| 2-oct-2026 | Núcleo angosto. Candidatos: **contratar al primer trabajador** y **formalizarse**. Radar de Compra Ágil y fondos solo si las entrevistas lo piden. Sin radar de cambios normativos. | README |
| 22-jul-2026 (Radar Circular) | Protocolo de veracidad R1–R8, adoptado y adaptado en §2. | `radar-circular/PROTOCOLO-VERACIDAD-VEREDICTOS.md` |

## 1. Cómo se empieza antes de las entrevistas sin contradecir la decisión

**2-oct-2026 — La base de datos verificada empieza ya; el texto de la guía espera.**
- **Elegido:** reunir ahora los valores oficiales vigentes que necesita *cualquiera* de los dos núcleos (costos de contratar, pasos y costos de formalizarse, calendario de vencimientos, herramientas gratuitas oficiales), cada uno con fuente, fecha de vigencia y fecha de consulta. No se escribe prosa de la guía hasta tener las fichas.
- **Descartado:** esperar las entrevistas sin hacer nada, o escribir la guía ahora y ajustarla después.
- **Por qué es mejor para el producto:** los dos núcleos comparten la misma base de datos, así que reunirla no prejuzga cuál gana; y una guía escrita antes de escuchar a nadie fija el enfoque que las entrevistas tenían que decidir.
- **Costo para nosotros (no es criterio):** parte de los datos puede quedar sin usar si el núcleo resulta otro.

## 2. Protocolo de veracidad (R1–R8 de Radar Circular, adaptado)

- **R1 — Radar Pyme no asesora casos particulares.** Explica qué dice la norma y qué herramienta oficial usar. Lenguaje permitido: «la ley establece», «en general», «consulta tu caso con…». Prohibido: «tú debes», «no te corresponde pagar», «estás exento».
- **R2 — Ningún valor sin su vigencia.** Cada cifra lleva desde cuándo rige, y si es gradual (por ejemplo la Ley 21.720), la tabla completa de etapas con sus fechas.
- **R3 — Lo verificado vive en datos.** Valores en `datos/*.json` con `valor`, `unidad`, `vigente_desde`, `fuente_url`, `fuente_cita` (literal), `consultado`. La guía y las calculadoras leen de ahí; ningún valor se escribe a mano en un texto.
- **R6 — La ambigüedad se publica como ambigüedad**, con el literal citado.
- **R7 — Tres niveles:** 1, fuente literal → se publica; 2, supuesto declarado → se publica con el supuesto a la vista; 3, no afirmable → no sale.
- **R8 — Correcciones a la vista**, con registro de qué decía, qué dice y por qué.
- **Agregado:** cada dato tiene **fecha de reverificación**. Un valor vencido se marca en el sitio como «por verificar», no se deja callado.
- Las citas de los subagentes las relee Claude contra la fuente antes de pasar a `datos/`.

## 3. Fases

| Fase | Qué | Quién | Sale de la fase cuando |
|---|---|---|---|
| **F0** | Base de datos verificada (§4) | Claude, ya | Cada valor tiene fuente literal releída, o está marcado nivel 3 |
| **F1** | Sondeo WhatsApp (15–20) y cinco entrevistas largas | Sergio | Cinco fichas llenas el mismo día de cada entrevista |
| **F2** | Síntesis: qué aparece en 3+ fichas con caso concreto, qué pagaron por no saber, qué creían saber mal | Claude con las fichas | Núcleo elegido por Sergio con la síntesis delante |
| **F3** | Contenido del núcleo: guía en lenguaje llano + calculadora si el núcleo la necesita | Claude; Sergio lee | Revisor (si hay calculadora con datos de personas) y verificador pasan |
| **F4** | Sitio estático, diseño de la familia Radar | Claude | Borrador de Netlify verificado; un solo deploy de producción con autorización expresa |
| **F5** | Difusión a quienes repiten la información: contadores, oficinas municipales de fomento productivo, Centros de Negocios Sercotec, cámaras de comercio | Sergio | — |
| **F6** | *Condicional:* radar de Compra Ágil y fondos sobre el motor de `radar-licitaciones` | Claude | Solo si F2 lo justifica |

## 4. F0 — qué datos se reúnen

**A. Contratar a un trabajador** (costo total para el empleador y líquido para el trabajador)
- Ingreso mínimo mensual vigente y próximos reajustes ya legislados.
- Topes imponibles (AFP/salud, seguro de cesantía) en UF.
- Cotización AFP por administradora (10 % + comisión) y SIS.
- Seguro de cesantía: aporte de empleador y trabajador según tipo de contrato.
- Ley 21.720: aporte del empleador, calendario completo de etapas.
- Seguro de accidentes del trabajo (Ley 16.744): tasa básica y adicional.
- Salud 7 %, gratificación legal y su tope, asignación familiar por tramo.
- Impuesto único de segunda categoría: tramos vigentes.
- Contrato por escrito, plazos, LRE: qué exige la Dirección del Trabajo y cuándo.

**B. Formalizarse**
- Inicio de actividades en el SII: cómo, costo, plazos.
- Persona natural con boleta de honorarios vs. empresa (EIRL, SpA): diferencias que importan al emprendedor; Registro de Empresas y Sociedades.
- Regímenes tributarios para pymes (14 D N°3 y 14 D N°8): qué son, a quién aplican.
- Retención de boletas de honorarios: tasa 2026 y calendario de alza.
- IVA, boleta electrónica obligatoria y el facturador gratuito del SII.
- Patente municipal y permisos sectoriales más comunes (por ejemplo resolución sanitaria): qué son y dónde se piden, sin prometer exhaustividad.

**C. Calendario de vencimientos:** F29, Previred, LRE, F22, declaraciones juradas, patente municipal.

**D. Catálogo de herramientas gratuitas oficiales:** qué hace cada una, para quién, URL.

**E. Catálogo de herramientas libres para no pagar software** (pedido de Sergio, 2-oct)

**2-oct-2026 — Se recomienda, no se instala ni se soporta.**
- **Elegido:** catálogo de herramientas libres y gratuitas, separado en (1) las que tocan cumplimiento (facturas, boletas, sueldos), donde primero van las oficiales gratuitas y lo libre solo con advertencia, y (2) las que no lo tocan (oficina, contabilidad interna, inventario, tienda web, contraseñas, respaldos). Cada ficha dice para quién es, qué exige operarla y qué no hace.
- **Descartado:** distribuir o instalar nosotros un paquete de software, o recomendar un ERP libre sin decir lo que cuesta operarlo.
- **Por qué es mejor para la gente:** libre no es gratis de operar; un ERP mal instalado o una «factura» de un programa extranjero (que en Chile no es documento tributario) le genera a la pyme un costo o una multa. La advertencia vale tanto como la recomendación.
- **Costo para nosotros (no es criterio):** el catálogo hay que reverificarlo (mantención, licencia) igual que los datos.
- Criterios de entrada: licencia libre real (OSI), actividad en los últimos 12 meses, uso en español, y una línea honesta de qué exige (escritorio, servidor, conocimiento técnico).

**F. Benchmark** — quién ya publica guías y calculadoras para pymes (oficiales y privados), qué está resuelto (se enlaza, no se duplica), qué es contradictorio, qué nadie con interés comercial puede publicar. Dominio candidato. → `investigacion/2026-10-02-benchmark.md`

**G. Capa de datos (nivel Radar)** — inventario de series públicas sobre empresas, emprendimiento e informalidad por región y comuna (SII, INE EME y ENE, ELE, Registro de Empresas y Sociedades, ChileCompra, Sercotec/Corfo), con archivo abierto y período real. → `investigacion/2026-10-02-datos-publicos.md`

**H. Sistema de la familia Radar** — tipografía, paleta base, estructura de páginas, componentes con fuente y nivel de afirmación, stack y cómo se sirven los datos, para heredarlo en F4.

**I. Fondos y apoyos para pymes** (2-oct, Sergio: «es hiper necesario, la gente no sabe; hay tipos en Instagram que viven de decir lo que Corfo concursa»)
- La investigación sube a F0 sin esperar las entrevistas: reunir datos no decide nada. La pregunta 6 del sondeo mide si la gente postula y cómo se entera.
- Lo que Radar Pyme agrega frente a quien difunde convocatorias en redes: **tasa de adjudicación** cuando esté publicada, requisitos duros, aporte propio, **rendición de gastos** y calendario histórico de apertura. Quien vende asesoría para postular no tiene incentivo para publicar cuántos pierden.
- Riesgo principal: la información de fondos caduca. Ningún fondo se publica sin fecha de verificación; el aviso automático de apertura (F6, motor de `radar-licitaciones`) deja de ser condicional si el sondeo confirma la demanda.
- Parte del mapa ya verificado en `financiamiento/` (sept-2026). → `investigacion/2026-10-02-f0i-fondos.md`

## 5. Mantención

Cada dato de `datos/` tiene fecha de reverificación según cómo cambia (mensual, anual, por ley). Antes de publicar se define quién lo revisa y cuándo; un sitio de referencia con un valor vencido hace más daño que no tenerlo.
