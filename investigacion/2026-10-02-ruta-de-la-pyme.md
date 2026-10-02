# Ruta de la Pyme y la propuesta archivada al GORE RM

Agregado el 2-oct-2026 a pedido de Sergio. **El benchmark del mismo día no la encontró**, y la propuesta archivada de Tercera Letra sobre el tema no se leyó antes de planificar.

## Ruta de la Pyme (rutadelapyme.cl)

- Proyecto del Gobierno de Santiago (GORE RM), ejecutado por la Universidad Adolfo Ibáñez. Lanzado el 3-abr-2024 ([Emol, 9-abr-2024](https://www.emol.com/noticias/Economia/2024/04/09/1127286/la-ruta-de-la-pyme.html); [UAI](https://www.uai.cl/noticias/negocios/ruta-de-la-pyme-presentan-1-plataforma-online-que-guia-la-formalizacion-de-un-emprendimiento)).
- **Sitio vivo el 2-oct-2026** (HTTP 200, Laravel). Portada literal: «Formalizar tu emprendimiento ahora es más fácil. Con la Ruta de la Pyme puedes dar el salto al éxito hoy. Crea una cuenta y sigue tu paso a paso personalizado.» «Ruta de la Pyme es un proyecto del Gobierno de Santiago, ejecutado por la Universidad Adolfo Ibáñez.»
- Etapas de contenido: Servicio de Impuestos Internos, Constituye tu empresa, Seremi de Salud, Patentes Municipales, Servicio Agrícola y Ganadero, Información complementaria. Según la prensa: ruta personalizada por preguntas, lista de fondos concursables y cursos gratuitos.
- El paso a paso exige crear cuenta. No se revisó por dentro ni la vigencia de su lista de fondos.

**Consecuencia para Radar Emprende:** la formalización está cubierta por el Estado dos veces (Ruta de la Pyme para la RM, ChileAtiende y el Registro de Empresas para todo el país). «Formalizarse» deja de ser buen candidato a núcleo; se enlaza.

## Propuesta archivada de Tercera Letra al GORE RM (12-jun-2026)

Carpeta `_propuestas-archivadas/lobby-gore-rm/` (propuesta HTML/PDF y deck). Dirigida a Fernando Court Silva, jefe de la División de Fomento e Industria (DIFOI), y Pilar Julio.

- Diagnóstico de la propuesta: «La Ruta de la Pyme cumple su función y ahí termina: formaliza a la empresa y la deja en la puerta.» Además, el código y los datos quedan en el ejecutor y no en el GORE.
- Tres módulos sobre una sola base de datos:
  1. **Propiedad y continuidad:** la Ruta de la Pyme como activo propio del GORE.
  2. **Ruta del Crecimiento:** itinerario tras la formalización (fondos, compras públicas, certificaciones), con derivación al Hub Metropolitano.
  3. **Radar de Fomento RM:** registro único de beneficiarios, mapa de las 52 comunas, trazabilidad de cada pyme y tablero del Eje 6 de la ERD 2035.
- Caso del deck: un almacén en Renca que se formaliza, postula a Sercotec y al Sello Mujer, vende por ChileCompra y se deriva al Hub. Preguntas que «hoy nadie responde»: si la pyme formalizada volvió a postular a algún programa; a qué comunas no llega ningún programa de fomento.

**Lo que esto le aporta a Radar Emprende (producto, no comercial):**
- La tesis «la ruta termina en la formalización» es el punto de partida del núcleo: Radar Emprende empieza donde termina la Ruta de la Pyme (contratar, fondos, vender al Estado, sobrevivir).
- El Módulo 3 es casi la capa de datos ya verificada (constituciones por comuna del RES, supervivencia RES × SII). La pregunta «a qué comunas no llega ningún programa» necesitaría beneficiarios por comuna de Sercotec, Corfo y Fosis: es lo que piden las solicitudes de transparencia, que habría que ampliar a «por comuna».

## Radar Pyme en Vercel (radar-publico-delta.vercel.app)

Sitio que Sergio envió el 2-oct. Título «Radar Pyme | Alertas de Mercado Público para pymes»; hecho con Astro; correo hola@radarpyme.cl (el mismo dominio del RadarPyme de «Marcos»). Ofrece alertas de Compra Ágil y Mercado Público por WhatsApp: beta de 7 días gratis, luego $9.990 y $19.990 al mes + IVA (precio de lanzamiento; después $14.990 y $29.990). «Servicio independiente. No afiliado a ChileCompra ni Mercado Público.» Pide nombre, WhatsApp, comuna y rubro. **Quién lo hizo: no verificado.** No se encontró en los repos de GitHub de Sergio (61 repos listados; ninguno con «pyme» salvo radar-emprende).
