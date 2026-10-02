# Canales de acceso a la información pública: Corfo, Sercotec, Fosis

Fecha de la verificación: 2-oct-2026. Herramienta: WebFetch/WebSearch (sin shell, sin navegador). Un "200" abajo significa que WebFetch trajo el contenido; no tengo códigos HTTP crudos.

## Resumen

| Organismo | Canal | Enlace | Verificado |
|---|---|---|---|
| Corfo | Portal de Transparencia (SAI) | https://www.portaltransparencia.cl/PortalPdT/ingreso-sai-v2?idOrg=undefined (el que enlaza ChileAtiende; el formulario es genérico y se elige el organismo dentro) | Ficha ChileAtiende 200; portal NO verificado (403 a bots) |
| Sercotec | Portal de Transparencia (SAI) | https://www.portaltransparencia.cl/PortalPdT/ingreso-sai-v2?idOrg=58300 (enlace publicado por transparencia.sercotec.cl) | Sitio Sercotec 200; portal NO verificado (403) |
| Fosis | Portal de Transparencia (SAI) | https://www.portaltransparencia.cl/PortalPdT/web/guest/directorio-de-organismos-regulados?p_p_id=pdtorganismos_WAR_pdtorganismosportlet&orgcode=39f4300dda82d33787c7ccef0d5eae39 (enlace "Ley de Transparencia" del home de Fosis) | Home Fosis 200; portal NO verificado (403) |

El portal `portaltransparencia.cl` devolvió 403 a todo acceso automatizado (WebFetch directo y vía r.jina.ai), con cualquier URL. Por eso no pude abrir ningún formulario ni comprobar qué organismo queda preseleccionado ni qué campos exige. Sergio debe abrir los tres enlaces en su navegador.

## Marco legal común (Ley 20.285)

- Texto: BCN, https://www.bcn.cl/leychile/navegar?idNorma=276363. La página de BCN no se dejó leer con WebFetch (cargó "Este proceso demora demasiado"; también 429 en el endpoint XML). Las citas de abajo vienen de un espejo (iura.cl) y de las fichas de ChileAtiende, NO de BCN. Confianza media. Cotejar contra BCN a mano antes de citar en un documento formal.
- Art. 14 (plazo): fragmentos verificados en espejo iura.cl/20285/14: la autoridad "deberá pronunciarse sobre la solicitud, sea entregando la información solicitada o negándose a ello, en un plazo máximo de veinte días hábiles" y el plazo "podrá ser prorrogado excepcionalmente por otros diez días hábiles" si hay circunstancias que dificulten reunir la información, comunicando antes del vencimiento la prórroga y sus motivos. El inicio del cómputo ("contado desde la recepción de la solicitud que cumpla con los requisitos del artículo 12") lo confirma el resultado de búsqueda, no una transcripción completa. Cita literal íntegra desde BCN: no verificada.
- Art. 12 (requisitos): la solicitud se formula "por escrito o por sitios electrónicos" y contiene: identificación del solicitante (nombre, apellidos y dirección), identificación clara de la información, firma por medio habilitado, y órgano al que se dirige. Si falta algo, 5 días para subsanar. Se puede optar por notificación electrónica indicando un correo. Fuente: iura.cl/20285/12 (resumen) y resultado de búsqueda. Texto literal de BCN: no verificado.
- Art. 17 (formato): literal en iura.cl/20285/17: "La información solicitada se entregará en la forma y por el medio que el requirente haya señalado, siempre que ello no importe un costo excesivo o un gasto no previsto en el presupuesto institucional, casos en que la entrega se hará en la forma y a través de los medios disponibles." Es decir, sí se puede pedir formato electrónico, con la salvedad del costo excesivo. El orden de los artículos fue consistente entre fuentes.
- Reclamo: 15 días ante el Consejo para la Transparencia si no hay respuesta o es insatisfactoria (ChileAtiende, fichas 66661 y 68188).
- Datos que piden las fichas ChileAtiende: nombre completo y correo o dirección postal. Registro opcional (con correo y contraseña); se puede pedir sin registrarse eligiendo tipo de persona (natural/jurídica) e ingresando apellidos. Al ingresar llega por correo un código de seguimiento. No mencionan Clave Única como exigencia. Seguimiento: https://www.portaltransparencia.cl/PortalPdT/ingreso-sai-v2?ver=seguimiento. Esto sale de la ficha de ChileAtiende, no de ver el formulario.

## 1. Corfo

- Sujeción: servicio público descentralizado; órgano de la Administración, art. 2 inc. 1 de la ley. Sin ambigüedad.
- Canales (ChileAtiende ficha 66661, https://www.chileatiende.gob.cl/fichas/66661-solicitar-informacion-publica-a-la-corporacion-de-fomento-de-la-produccion-ley-de-transparencia): web (portal), presencial en oficinas de atención regionales de Corfo, y carta por correo (con datos personales, identificación de la información y firma).
- Enlace oficial desde corfo.gob.cl (home, trae "Ley de Transparencia"): https://www.portaltransparencia.cl/PortalPdT/web/guest/directorio-de-organismos-regulados?p_p_id=pdtorganismos_WAR_pdtorganismosportlet&orgcode=db36f23eb58da1bdd56e2a2226238885 (portal 403, no abierto). Transparencia activa: https://www.portaltransparencia.cl/PortalPdT/pdtta?codOrganismo=AH004.
- Soporte: unidaddetransparencia@corfo.cl; teléfono 101 (L-J 8:00-20:00, V 8:00-18:00); código de trámite 66661.
- Nota: la página corfo.gob.cl/sites/cpp/transparencia da 404; wapp.corfo.cl y www2.corfo.cl/transparencia son sitios antiguos (www2 rechazó la conexión). No usarlos.
- Registro / Clave Única: registro opcional según ficha; Clave Única no mencionada. No verificado en el formulario.
- Plazo: 20 días hábiles + 10 de prórroga (art. 14).
- Formato electrónico: sí, a solicitud (art. 17).

## 2. Sercotec

- Naturaleza: corporación de derecho privado, filial de Corfo.
- Sujeción: SÍ responde a transparencia pasiva, por vía judicial y administrativa. Fuente: Corte de Apelaciones de Santiago, rol 12-2023 (31-oct-2023), noticia Poder Judicial https://www.pjud.cl/prensa-y-comunicaciones/noticias-del-poder-judicial/100697: confirma resolución del CPLT que ordenó a Sercotec entregar información sobre viáticos; razonamiento citado: el art. 2 del DL 1263 de 1975 "considera a SERCOTEC como parte del sector público, pues integra el sistema de administración financiera del Estado", cumple "una función de orden público" y por ello queda sujeto a la Ley de Transparencia (resumen del WebFetch; texto del fallo no leído).
- Matiz importante: en la búsqueda aparece también una línea del CPLT que dice que para ciertas entidades (empresas, art. 2 inc. 3) la ley extiende solo transparencia activa. Eso aplica a empresas públicas y sociedades con >50% estatal, no a Sercotec según el fallo anterior. No pude abrir la decisión del CPLT (jurisprudencia.cplt.cl dio 404; boletín 2024 N°38 en PDF de imagen ilegible). Hay además decisiones amparo del CPLT contra Sercotec (p. ej. 18-may-2020, parcialmente acogido) citadas en el buscador, no leídas. Confianza: alta en que hoy responde por Ley 20.285; media en el fundamento exacto.
- Sercotec lo asume en su propio sitio: sitio "Gobierno Transparente Ley N° 20.285 - Instructivo Presidencial" https://transparencia.sercotec.cl/ (200). Declara base legal Ley 20.285 e Instructivo Presidencial 008/2006, y enlace de solicitud https://www.portaltransparencia.cl/PortalPdT/ingreso-sai-v2?idOrg=58300 (el valor 58300 lo extrajo WebFetch del sitio; no lo vi con mis ojos ni abrí el portal: confianza media). Transparencia activa en el portal: codOrganismo AH012.
- ChileAtiende ficha 68188: https://www.chileatiende.gob.cl/fichas/68188-solicitud-de-informacion-publica-a-sercotec-ley-de-transparencia (200). Canales: portal, o presencial en una oficina de Sercotec. Datos: nombre completo y correo o dirección. Sin cuenta obligatoria. Soporte técnico: dai@sercotec.cl; teléfono 101; código 68188. Contacto central en sitio de transparencia: +56 2 2481 8500, Huérfanos 1117, piso 9, Santiago.
- Plazo: 20 + 10 días hábiles (art. 14). Formato electrónico: sí (art. 17).
- Canal alternativo: no hace falta, pero no queda fuera de duda el alcance. Si Sercotec rechazara por no ser órgano de la Administración, el camino es amparo ante el CPLT (15 días) citando el rol 12-2023, y pedir los mismos antecedentes a Corfo si los tuviera (Corfo transfiere recursos a Sercotec; lo que Corfo posea es información suya). No encontré fuente sobre un canal OIRS específico de Sercotec; no lo afirmo.
- La página sercotec.cl/participacion-ciudadana/acceso-a-la-informacion-relevante/ aparece en buscador pero dio 404 hoy.

## 3. Fosis

- Sujeción: servicio público (Ministerio de Desarrollo Social y Familia). Sin ambigüedad.
- Enlace "Ley de Transparencia / Solicitudes de información" tal como figura en https://www.fosis.gob.cl/es/ (200): https://www.portaltransparencia.cl/PortalPdT/web/guest/directorio-de-organismos-regulados?p_p_id=pdtorganismos_WAR_pdtorganismosportlet&orgcode=39f4300dda82d33787c7ccef0d5eae39 (portal 403, no abierto). Transparencia activa Fosis: https://www.portaltransparencia.cl/PortalPdT/pdtta?codOrganismo=AI004.
- No encontré ficha ChileAtiende específica de Fosis para este trámite (la búsqueda no la devolvió): no verificado. Los datos solicitados (nombre, correo o dirección) y el registro opcional se infieren del mismo formulario nacional de las otras fichas; no verificado para Fosis.
- Canal complementario: Atención Ciudadana en línea (SIAC) https://bpms.fosis.gob.cl/Visitor.aspx?4jDtK0fyBc0enaB7qg9+NmMjR90cj08h/KdKfeg8W+8YXH62SyFsQg== (token en URL, puede caducar; no abierto). Es un canal de consultas y reclamos, no sustituye una solicitud Ley 20.285 con plazo legal.
- Plazo: 20 + 10 días hábiles (art. 14). Formato electrónico: sí (art. 17).
- Ojo: https://www.fosis.gob.cl/es/transparencia/ da 404.

## No verificado

- Comportamiento real del formulario del portal (preselección del organismo, campos exactos, Clave Única, opción de formato): portal 403.
- Si `idOrg=58300` abre Sercotec y cuál es el idOrg de Corfo y Fosis (el enlace de ChileAtiende para Corfo usa `idOrg=undefined`, que carga el formulario sin organismo).
- Texto literal de los arts. 12 y 14 desde BCN (BCN no se dejó leer).
- Texto íntegro del fallo rol 12-2023 y de las decisiones del CPLT sobre Sercotec.
- Ficha ChileAtiende de Fosis y su OIRS presencial.

## Implicancia

- Los tres se piden por el mismo formulario nacional; la carga de trabajo es la misma. Sercotec es el único con riesgo jurídico, y está resuelto en favor de pedir (rol 12-2023).
- Para la verificación final: abrir los 3 enlaces en navegador, confirmar organismo preseleccionado y campos, y cotejar el art. 14 en BCN antes de citarlo en entregables.
