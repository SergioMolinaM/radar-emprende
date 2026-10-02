# F0-A — Valores oficiales vigentes para contratar a un trabajador dependiente (Chile)

**Consultado:** 2-oct-2026. **Alcance:** costo total del empleador y líquido del trabajador, remuneraciones de septiembre-octubre 2026 pagadas en octubre-noviembre 2026.
**Niveles R7:** 1 = fuente oficial con cita literal; 2 = valor derivado o fuente oficial leída solo en resumen, con supuesto declarado; 3 = no verificado, no sale.

## Cómo se leyó cada fuente (para que Claude relea antes de pasar a `datos/`)

- **Leído completo por mí (texto real, no resumen):** Ley 21.735 (copia BCN impresa el 3-feb-2026, 73 págs.), Nota Técnica SPS de la reforma (jul-2025), PDF de indicadores Previred de agosto 2026.
- **Leído a través de WebFetch (modelo resumidor, citas de hasta 125 caracteres):** todo lo demás. Esas citas son literales según la herramienta, pero no las releí contra el HTML. **Claude debe releerlas** (R: citas de subagentes se releen).
- `spensiones.cl`, `fonasa.gob.cl` y `bcn.cl` dan 403 o carga vacía directo; funcionó `https://r.jina.ai/<url>`.
- Previred no es organismo del Estado. Cada vez que lo uso como respaldo único lo digo.

## Trampas y cambios recientes (leer antes de codificar)

1. **La reforma de pensiones es la Ley 21.735, no la 21.720.** La Ley 21.720 (DO 17-dic-2024) es la de dispositivos inhibidores de señal (BCN idNorma 1209400). El encargo inicial decía «Ley 21.720» por un error del prompt (confirmado por el coordinador); todo lo de abajo corresponde a la 21.735 (idNorma 1212060). Contrastada contra su texto y transitorios (leídos) y contra la página de la SP sobre cotización del empleador. **La norma de carácter general de la SP sobre recaudación (anunciada en https://www.spensiones.cl/portal/institucional/594/w3-article-16615.html) no la leí** (nivel 3 para sus detalles operativos).
2. **Desde las remuneraciones de agosto 2026 el SIS ya no es una cotización aparte.** Está dentro del 3,5 % del empleador. Sumar SIS + 3,5 % duplica el costo. Arts. 8° transitorio y 4° transitorio, literales abajo.
3. **Conflicto de fuentes sobre la tasa SIS:** la página de la Superintendencia de Pensiones dice 1,62 % «desde abril de 2026»; Previred (citando el Oficio Ord. 15.295 de la SP, 18-ago-2026) dice 1,78 % para remuneraciones agosto-octubre 2026. No cambia el costo total (el 2,5 % del Seguro Social es fijo; solo cambia cómo se reparte entre SIS y compensación por expectativa de vida: 1,78 + 0,72 = 2,50), pero no codificar la tasa SIS como dato del trabajador.
4. **La tasa del empleador sube cada 1 de agosto.** 3,5 % hoy, 4,25 % desde el 1-ago-2027. Una calculadora con valor fijo queda mala en 10 meses.
5. **Rama alternativa dentro del art. 4° transitorio:** si la evaluación externa de la Ley 21.713 muestra menor recaudación no compensada, las tasas desde 2029 se reemplazan (5,5 % en vez de 5,7 %, etc., y el 8,5 % se alcanza en 2035). Un decreto de Hacienda «así lo señalará». **No verifiqué si ese decreto existe** (nivel 3).
6. **IMM:** $553.553 desde el 1-may-2026 (Ley 21.830, DO 22-jun-2026). Cualquier fuente que diga $539.000 está vencida. El 1-ene-2027 se reajusta por IPC (monto desconocido hoy).
7. **El valor UTM cambia cada mes** y el impuesto único se calcula con la UTM del mes de pago: octubre = $72.151; septiembre = $71.721.
8. **Gratificación legal:** el tope de 4,75 IMM se calcula con el IMM vigente al 31-dic del año (DT). Para 2026 ese IMM es $553.553, porque el reajuste por IPC parte el 1-ene-2027.
9. **Libro de Remuneraciones Electrónico:** las páginas de la DT no se contradicen en el plazo (15 días hábiles) pero sí en el tono sobre desde cuándo es obligatorio. Ver nota R6 en la sección 9.

---

## 1. Ingreso mínimo mensual (IMM)

| Dato | Valor | Vigente desde | Fuente | Cita literal | R7 |
|---|---|---|---|---|---|
| IMM 18 a 65 años | $553.553 | 1-may-2026 | https://www.bcn.cl/leychile/navegar?idNorma=1225354 (Ley 21.830, DO 22-jun-2026) | «A contar del 1 de mayo de 2026, elévase a $553.553 el ingreso mínimo mensual para los trabajadores mayores de 18 años» | 1 |
| IMM menores de 18 y mayores de 65 | $412.938 | 1-may-2026 | idem; https://www.dt.gob.cl/portal/1628/w3-article-60141.html | «$412.938 para trabajadores menores de 18 años y mayores de 65 años» | 1 |
| IMM para fines no remuneracionales | $356.815 | 1-may-2026 | idem | «$356.815 para fines no remuneracionales» | 1 |
| Reajuste ya legislado | Mecanismo: variación acumulada del IPC entre 1-may-2026 y 31-dic-2026 | 1-ene-2027 | https://www.bcn.cl/leychile/navegar?idNorma=1225354 | «A contar del 1 de enero de 2027, reajústese el ingreso mínimo mensual conforme a la variación acumulada por el Índice de Precios al Consumidor» | 1 (mecanismo) |
| Monto del IMM desde 1-ene-2027 | Desconocido | — | — | El IPC de mayo-dic 2026 se publica en enero 2027 | 3 |
| Reajuste posterior | El Presidente debe enviar proyecto a más tardar en junio 2027, para vigencia desde julio 2027 | jul-2027 (si se legisla) | idem | «A más tardar en el mes de junio de 2027, el Presidente de la República deberá enviar al Congreso Nacional un proyecto de ley» | 2 (cita vía resumen; no es reajuste legislado) |

Fuentes DT: ficha «¿Cuál es el valor del ingreso mínimo mensual?» dice «Ley N°21.830 (Diario Oficial de fecha 22.06.2026)». Renta mínima imponible: $553.553 (Previred, indicadores agosto 2026, leído en PDF).

## 2. Topes imponibles 2026

| Dato | Valor | Unidad | Vigente desde | Fuente | Cita literal | R7 |
|---|---|---|---|---|---|---|
| Tope AFP / salud / accidentes del trabajo | 90,0 | UF mensuales | Pago de cotizaciones de remuneraciones de **febrero 2026** | https://www.spensiones.cl/portal/institucional/594/w3-article-16921.html (10-feb-2026) | «90,0 UF» (pensiones, salud y accidentes del trabajo); «Se aplicarán a partir del pago de las cotizaciones previsionales correspondientes a las remuneraciones de febrero de 2026» | 1 |
| Tope seguro de cesantía | 135,2 | UF mensuales | idem | idem | «135,2 UF» | 1 |
| Tope en pesos, octubre 2026 | 90 UF = $3.695.148; 135,2 UF = $5.550.933 | $ | pago en oct-2026 (UF 30-sep-2026 = $41.057,20) | https://www.previred.com/indicadores-previsionales/ ; UF: https://www.sii.cl/valores_y_fechas/uf/uf2026.htm | UF 30-sep-2026 = 41.057,20 (SII). 90 × 41.057,20 = 3.695.148; 135,2 × 41.057,20 = 5.550.933 | 2 (producto derivado; coincide con Previred) |

Para remuneraciones de enero 2026 regía el tope anterior (87,8 UF; 131,9 UF según la SP; no afirmo el 131,9, aparece en mi lectura sin cita directa). Tope 2027: aún no publicado (nivel 3).

## 3. Cotización AFP y SIS

| Dato | Valor | Vigente desde | Fuente | Cita literal | R7 |
|---|---|---|---|---|---|
| Cotización obligatoria del trabajador | 10 % de la remuneración imponible | permanente | https://www.spensiones.cl/portal/institucional/594/w3-propertyvalue-9897.html | «Cotización obligatoria del 10% de las remuneraciones y rentas imponibles mensuales con un tope de 90 Unidades de Fomento (UF)» | 1 |
| Comisión AFP Uno | 0,46 % | 1-oct-2025 | idem; https://www.spensiones.cl/portal/institucional/594/w3-article-16714.html | «Desde el 1 de octubre de 2025, AFP Uno tiene la comisión más baja, de 0,46% de la remuneración o renta imponible» | 1 |
| Comisión Modelo / PlanVital / Habitat / Capital / Cuprum / Provida | 0,58 / 1,16 / 1,27 / 1,44 / 1,44 / 1,45 % | vigentes oct-2026 | SP página «Sistema de AFP» (sin fecha visible); confirmado por PDF Previred ago-2026 (leído) y web Previred oct-2026 | Previred: columna «Cargo del Trabajador»: Capital 11,44 %, Cuprum 11,44 %, Habitat 11,27 %, PlanVital 11,16 %, Provida 11,45 %, Modelo 10,58 %, Uno 10,46 % (= 10 % + comisión) | 1 (comisiones por AFP según SP; tasa total del trabajador según Previred) |
| Aporte 0,1 % del empleador a la cuenta individual | 0,1 % | 1-ago-2025 | Ley 21.735 art. 4° transitorio (ver sección 5) y tabla Previred «Cargo del Empleador 0,1 %» | — | 1 |
| SIS: quién la paga desde ago-2026 | El empleador, dentro del 3,5 % de la Ley 21.735; ya no hay SIS separada a cargo del empleador | 1-ago-2026 | Ley 21.735, art. 8° transitorio, último inciso | «A partir del primer día del décimo séptimo mes siguiente a la publicación de esta ley, el seguro de invalidez y sobrevivencia ... pasará a ser una de las prestaciones del Seguro Social ... será financiado por el Fondo Autónomo de Protección Previsional, mediante la cotización que realicen los empleadores ... y sustituirá la cotización que establece el decreto ley N° 3.500» | 1 |
| Tasa SIS (parte del 2,5 %) | 1,78 % (aug-oct 2026) | remuneraciones ago-oct 2026 | Previred PDF ago-2026 citando «Oficio Ordinario N.° 15.295 publicado el 18 de agosto de 2026» | «Seguro de Invalidez y Sobrevivencia (SIS): 1,78%»; «Expectativa de Vida: 0,72%» | 2 (no leí el oficio de la SP) |
| Tasa SIS según página SP | 1,62 % | abr-2026 | https://www.spensiones.cl/portal/institucional/594/w3-propertyvalue-9917.html | «desde abril de 2026, la tasa vigente del SIS para empleadores, afiliadas y afiliados independientes y voluntarios es de 1,62%» | 1 (como cita), pero **posiblemente superada** por el oficio de agosto (ver trampa 3) |

Nota: la SP además publica 1,49 % de SIS para independientes que cotizan por retención de impuestos, año tributario 2026 (no aplica a dependientes).

## 4. Seguro de cesantía (Ley 19.728)

| Dato | Valor | Fuente | Cita literal | R7 |
|---|---|---|---|---|
| Contrato indefinido: empleador / trabajador | 2,4 % / 0,6 % de la remuneración imponible | https://www.suseso.gob.cl/613/w3-propertyvalue-122245.html (Ley 19.728 art. 5) | «Un 0,6% de las remuneraciones imponibles, de cargo del trabajador»; «Un 2,4% de las remuneraciones imponibles, en el caso de los trabajadores con contrato de duración indefinida y un 3% ... para los trabajadores con contrato a plazo fijo» | 1 |
| Plazo fijo / obra: empleador / trabajador | 3,0 % / 0 % | idem; Previred ago-2026 (leído): «Plazo Fijo 3,0% R.I. -» | idem | 1 |
| Tope | 135,2 UF | SP art. 16921 (sección 2) | — | 1 |
| Conversión plazo fijo a indefinido | Pasa a tasas del indefinido «a contar de la fecha en que se hubiere producido tal transformación, o a contar del día siguiente al vencimiento del período de quince meses» | SUSESO art. 5 | idem | 1 (cita vía resumen) |
| Indefinido de 11 años o más: empleador 0,8 % | — | solo Previred ago-2026 | «Plazo Indefinido 11 años o más (*) 0,8% R.I. -» | 3 (no verificado en la ley; no aplica a primer trabajador) |

## 5. Ley 21.735 (reforma de pensiones): aporte del empleador

Fuente primaria leída completa: https://www.bcn.cl/leychile/navegar?idNorma=1212060 (copia impresa el 3-feb-2026 en https://previsionsocial.gob.cl/traspaso-gobierno/Ley_Chile_Ley_21735_Biblioteca_del_Congreso_Nacional.pdf). Publicación DO 26-mar-2025. **Lo que no pude comprobar es si la ley fue modificada después del 3-feb-2026** (nivel 3 para cambios posteriores). Complementos oficiales: https://www.spensiones.cl/portal/institucional/594/w3-propertyvalue-10906.html y la Nota Técnica SPS (jul-2025): https://previsionsocial.gob.cl/wp-content/uploads/2025/08/Nota-Tecnica-Reforma-de-Pensiones-Ley-N%C2%B021.735.pdf (Tabla 1, p. 11).

**Quién paga y sobre qué.** Art. 1: «Establécese una cotización de cargo de los empleadores de un 8,5% de la remuneración imponible del trabajador o trabajadora afiliada al Sistema de Pensiones establecido en el decreto ley N° 3.500». Art. 2: «la remuneración mensual tendrá como límite máximo imponible el señalado en el artículo 16 del decreto ley N° 3.500» (90 UF). No se descuenta al trabajador. Nivel 1.

**A qué se destina cada fracción** (art. 1 y art. 4° transitorio):
- **CCI** = «literal a) del numeral 1»: «Un 4,5% ... destinado a su cuenta de capitalización individual» (llega a 6 % después, art. 1 N° 1 a).
- **CRP** = «literal b) del numeral 1»: «Un 1,5% ... como una cotización con rentabilidad protegida para contribuir al financiamiento del beneficio por años cotizados a través del Fondo Autónomo de Protección Previsional» (baja 0,15 pt por año desde el mes 241).
- **Seguro Social permanente** = «numeral 2»: «Un 2,5% ... destinado al Fondo Autónomo de Protección Previsional para efectos de financiar la compensación por diferencias de expectativas de vida y la parte de la cotización adicional destinada al financiamiento del seguro de invalidez y sobrevivencia».

**Tabla de etapas — art. 4° transitorio, rama base** (literal: «A partir del primer día del quinto mes siguiente a la publicación de esta ley, la tasa de cotización será de 1,0% ...»; «A partir del primer día del mes décimo séptimo ... 3,5% ... 0,1%, 0,9% y 2,5%»). Nivel 1.

| Letra | Mes desde publicación | Vigente desde | Total | CCI | CRP | Seguro Social (compensación + SIS) |
|---|---|---|---|---|---|---|
| a) | 5° | 1-ago-2025 | 1,0 % | 0,1 % | 0 % (0,9 va al Seguro Social) | 0,9 % |
| b) | 17° | **1-ago-2026 (vigente hoy)** | **3,5 %** | 0,1 % | 0,9 % | 2,5 % |
| c) | 29° | 1-ago-2027 | 4,25 % | 0,25 % | 1,5 % | 2,5 % |
| d) | 41° | 1-ago-2028 | 5,0 % | 1,0 % | 1,5 % | 2,5 % |
| e) | 53° | 1-ago-2029 | 5,7 % | 1,7 % | 1,5 % | 2,5 % |
| f) | 65° | 1-ago-2030 | 6,4 % | 2,4 % | 1,5 % | 2,5 % |
| g) | 77° | 1-ago-2031 | 7,1 % | 3,1 % | 1,5 % | 2,5 % |
| h) | 89° | 1-ago-2032 | 7,8 % | 3,8 % | 1,5 % | 2,5 % |
| i) | 101° | 1-ago-2033 | 8,5 % | 4,5 % | 1,5 % | 2,5 % |

Las fechas calendario las confirma la Tabla 1 de la Nota Técnica SPS (Agosto 2025 / 2026 / 2027 / ... / 2033) y la página de la SP para ago-2026.

**Rama alternativa** (misma norma: «en caso de que la evaluación externa a que refiere el artículo final transitorio de la ley N° 21.713 dé cuenta de un menor efecto recaudatorio ... las tasas de cotización contempladas en las letras e), f), g), h) e i) se reemplazarán»). Se activa por «un decreto dictado por el Ministerio de Hacienda bajo la fórmula "Por orden del Presidente de la República"». **No verificado si ya se dictó.** Nivel 1 como texto, nivel 3 como estado.

| Letra | Vigente desde | Total | CCI | CRP | Seguro Social |
|---|---|---|---|---|---|
| e) | 1-ago-2029 | 5,5 % | 1,5 % | 1,5 % | 2,5 % |
| f) | 1-ago-2030 | 6,0 % | 2,0 % | 1,5 % | 2,5 % |
| g) | 1-ago-2031 | 6,5 % | 2,5 % | 1,5 % | 2,5 % |
| h) | 1-ago-2032 | 7,0 % | 3,0 % | 1,5 % | 2,5 % |
| i) | 1-ago-2033 | 7,5 % | 3,5 % | 1,5 % | 2,5 % |
| j) | mes 113: 1-ago-2034 | 8,0 % | 4,0 % | 1,5 % | 2,5 % |
| k) | mes 125: 1-ago-2035 | 8,5 % | 4,5 % | 1,5 % | 2,5 % |

(Las fechas j) y k) son aritmética mía sobre «mes 113» y «mes 125» contados desde la publicación; la Nota Técnica SPS confirma «extenderse a 11 años (hasta 2035)». Nivel 2.)

**Después del 8,5 %:** el art. 1 dice que el CCI sube 0,15 pt cada 12 meses y la CRP baja lo mismo «a partir del primer día del mes 241, contado desde la fecha señalada en la letra a) del artículo cuarto transitorio». La Nota Técnica SPS lo fecha en septiembre 2045 (CCI 4,65 %) hasta septiembre 2054 (CCI 6,0 %, CRP 0 %). Ambigüedad R6: la ley dice «mes 241 contado desde» la letra a) (1-ago-2025), que da agosto 2045; la SPS lee septiembre 2045. Nivel 2, fuera del horizonte de la guía.

**Otras reglas de la misma ley que afectan el costo:**
- Art. 4: «En caso de incapacidad laboral del trabajador, la cotización establecida en el numeral 2 del artículo 1 continuará siendo de cargo del empleador», y la del numeral 1 «será de cargo de las entidades pagadoras de subsidio». Nivel 1.
- Art. 5: «Cesará la obligación de los empleadores de enterar la cotización establecida en el artículo 1 al momento en que el trabajador se pensione por vejez o invalidez total ... o al cumplimiento de los 65 años de edad, lo que sea primero.» Nivel 1.
- Art. 6: sujetos al Seguro Social «los trabajadores dependientes con contrato vigente o que inicien o reinicien actividades laborales a contar del primer día del quinto mes siguiente de la publicación». Todo trabajador contratado hoy cotiza. Nivel 1.
- Declaración y pago por Previred, mismos plazos de las demás cotizaciones (SP, w3-propertyvalue-10906): «El empleador debe pagar las cotizaciones del Seguro Social Previsional (SSP) hasta el día 10 del mes siguiente». Nivel 1 (vía resumen).
- Pendiente legislativo: proyecto de ley SIS (Boletín 17.628-13, ingresado 24-jun-2025) sigue en trámite según lo último que leí; no sé su estado en oct-2026 (nivel 3).

## 6. Ley 16.744 (accidentes del trabajo)

| Dato | Valor | Fuente | Cita literal | R7 |
|---|---|---|---|---|
| Cotización básica | 0,90 % de la remuneración imponible, a cargo del empleador | https://www.suseso.gob.cl/613/w3-propertyvalue-68980.html (art. 15) ; https://www.suseso.gob.cl/613/w3-propertyvalue-136002.html | «una cotización básica general del 0,90% de las remuneraciones imponibles, de cargo del empleador» | 1 |
| Cotización adicional diferenciada | Depende de actividad y siniestralidad; evaluada cada dos años; vigente 1-ene-2026 a 31-dic-2027 | https://www.suseso.gob.cl/613/w3-propertyvalue-136005.html | «regirá a contar del 1º de enero del año siguiente al del respectivo proceso de evaluación y hasta el 31 de diciembre del año subsiguiente» | 1 (regla); la tasa de una empresa concreta no está verificada (3) |
| Empresa que recién inicia | Paga la tasa del D.S. 110/1968 según su actividad | https://www.suseso.gob.cl/613/w3-propertyvalue-136006.html | «La tasa de cotización adicional establecida en el D.S. N°110, de 1968 ... debe ser pagada por los trabajadores independientes y por las entidades empleadoras que inician sus actividades.» | 1 (regla); la tabla actividad-tasa **no la obtuve** (3) |
| Tabla por siniestralidad (empresas ya evaluadas) | 0 % (0-32), 0,34 % (33-64), 0,68 % (65-96), 1,02 % (97-128), 1,36 % (129-160), 1,70 % (161-192), 2,04 % (193-224), 2,38 % (225-272) ... 6,80 % (981 y más) | SUSESO w3-propertyvalue-136006 y 136005 | Tabla 3 del compendio | 2 (vía resumen, filas intermedias omitidas) |
| Cotización extraordinaria | **Eliminada** | https://www.suseso.gob.cl/613/w3-propertyvalue-135999.html | Estado: «Eliminada». SUSESO histórico: regía hasta el 31-dic-2019 | 1 |
| Seguro SANNA (Ley 21.063) | 0,03 % de la remuneración imponible, adicional a la básica | idem | «0,03% que además deberán enterar» | 1 (tasa); el pagador «empleador» viene de fuentes secundarias, no leí la ley (2) |

**Ambigüedad R6 (límite de la adicional):** el art. 15 de la ley dice que la adicional «no podrá exceder de un 3,4% de las remuneraciones imponibles» (cita de https://www.suseso.gob.cl/613/w3-propertyvalue-68980.html), pero la Tabla 3 del Compendio SUSESO (D.S. 67/1999) llega a 6,80 %. No pude resolver cuál rige para qué caso. Para un primer trabajador lo relevante es la tasa de inicio de actividades del D.S. 110, que no obtuve. **Total típico de la mutual = 0,90 % + adicional + 0,03 %**; el piso de una empresa en categoría 0 es 0,93 %.

## 7. Salud, gratificación, asignación familiar

| Dato | Valor | Vigente desde | Fuente | Cita literal | R7 |
|---|---|---|---|---|---|
| Salud obligatoria | 7 % de la remuneración imponible, descontada al trabajador (tope 90 UF) | permanente | https://r.jina.ai/https://www.fonasa.gob.cl/empleadores/recaudacion-de-cotizaciones/ ; https://www.chileatiende.gob.cl/fichas/5390-declarar-y-pagar-el-7-de-las-cotizaciones-de-salud-de-fonasa | «corresponde el descuento de un 7% de la renta imponible para todos los cotizantes afiliados a FONASA»; «tu empleador debe declarar y pagar el 7 % obligatorio» | 1 |
| Aporte del empleador a salud | No encontré aporte patronal de salud en las fuentes leídas | — | — | Ausencia no afirmada (la búsqueda no es prueba). Previred distribuye el 7 % entre CCAF 4,2 % y Fonasa 2,8 % solo si el empleador está afiliado a caja | 3 |
| Gratificación legal, art. 50 CT | 25 % de lo devengado en el ejercicio por remuneraciones mensuales, con tope de 4,75 IMM anuales por trabajador | art. 50 CT | https://www.dt.gob.cl/portal/1626/w3-article-99034.html ; https://www.dt.gob.cl/portal/1628/w3-article-60162.html (mod. 19-dic-2023) | «el empleador se exime de la obligación de pagar gratificación en proporción a las utilidades» pagando «el 25% de lo devengado en el mismo período por concepto de remuneraciones», tope «4,75 Ingresos Mínimos Mensuales equivalente al Ingreso Mínimo Mensual vigente al 31 de diciembre del año respectivo» | 1 |
| Tope mensual de gratificación 2026 | 4,75 × 553.553 / 12 = **$219.114,73** al mes | ejercicio 2026 | cálculo mío sobre las dos fuentes anteriores | — | 2 (derivado; supone IMM al 31-dic-2026 = $553.553) |
| Asignación familiar, tramo A | $22.601 por carga, renta ≤ $649.039 | 1-may-2026 | https://www.suseso.gob.cl/606/w3-article-498133.html (Oficio SUSESO O-01-S-02728-2026) ; Ley 21.830 arts. 4 y 5 | Ley 21.830: «Sustitúyenses en su letra a) los guarismos 22.007 por 22.601» | 1 |
| Tramo B | $13.870, renta > $649.039 y ≤ $947.990 | 1-may-2026 | idem | «los guarismos 13.505 por 13.870» | 1 |
| Tramo C | $4.382, renta > $947.990 y ≤ $1.478.539 | 1-may-2026 | idem | «los guarismos 4.267 por 4.382» | 1 |
| Tramo D | $0, renta > $1.478.539 | 1-may-2026 | idem | «el guarismo 1.412.957 por 1.478.539» | 1 |

**R6 gratificación:** la obligación legal nace solo para empresas con fines de lucro, con contabilidad, que obtengan utilidad líquida (DT: «provided they obtain liquid earnings» en mi lectura; cita textual de la ficha: «establecimientos mineros, industriales, comerciales o agrícolas, empresas y cualesquiera otros» que persigan fin de lucro y lleven libros). El art. 50 es una opción que reemplaza el reparto proporcional a utilidades. La guía no debe presentar la gratificación como costo automático sin ese matiz. Interpretación mía: no afirmar el caso de una pyme sin utilidades (nivel 3).

**R6 asignación familiar:** la página SUSESO muestra «Valid Period: 01-05-2026 a 30-06-2026» y «Reference Period for Income: January to June 2025» (según la herramienta). Los mismos montos aparecen en Previred de agosto y octubre 2026, pero no comprobé que no exista una tabla SUSESO nueva desde el 1-jul-2026 (los montos se mantienen «hasta que se modifiquen por ley»). Es un beneficio que paga el Estado vía empleador, no un costo del empleador.

## 8. Impuesto único de segunda categoría y UTM

| Dato | Valor | Vigente | Fuente | R7 |
|---|---|---|---|---|
| UTM octubre 2026 | $72.151 (UTA $865.812) | oct-2026 | https://www.sii.cl/valores_y_fechas/utm/utm2026.htm | 1 |
| UTM septiembre 2026 | $71.721 | sep-2026 | idem | 1 |
| UF 30-sep / 1-oct / 2-oct-2026 | 41.057,20 / 41.065,38 / 41.073,57 | — | https://www.sii.cl/valores_y_fechas/uf/uf2026.htm | 1 |

Tabla mensual de octubre 2026, literal del SII (https://www.sii.cl/valores_y_fechas/impuesto_2da_categoria/impuesto2026.htm), en pesos. Mi columna UTM es la división exacta por $72.151 (cuadra al peso en las 15 cifras). La ley (LIR art. 43 N° 1) no la releí, por eso la columna UTM es nivel 2.

| Renta líquida imponible mensual (desde - hasta) | Factor | Cantidad a rebajar | Tramo en UTM (derivado) | Rebaja en UTM (derivada) |
|---|---|---|---|---|
| hasta $974.038,50 | exento | — | 13,5 | — |
| $974.038,51 - $2.164.530,00 | 0,04 | $38.961,54 | 13,5 a 30 | 0,54 |
| $2.164.530,01 - $3.607.550,00 | 0,08 | $125.542,74 | 30 a 50 | 1,74 |
| $3.607.550,01 - $5.050.570,00 | 0,135 | $323.957,99 | 50 a 70 | 4,49 |
| $5.050.570,01 - $6.493.590,00 | 0,23 | $803.762,14 | 70 a 90 | 11,14 |
| $6.493.590,01 - $8.658.120,00 | 0,304 | $1.284.287,80 | 90 a 120 | 17,80 |
| $8.658.120,01 - $22.366.810,00 | 0,35 | $1.682.561,32 | 120 a 310 | 23,32 |
| desde $22.366.810,01 | 0,4 | $2.800.901,82 | 310 y más | 38,82 |

Nivel 1 para los pesos del SII. Usar la UTM del mes de pago de la remuneración. «Renta líquida imponible» = remuneración imponible menos cotizaciones previsionales y de salud obligatorias del trabajador; **esa definición no la verifiqué en la ley** (nivel 3 hasta releer LIR art. 42 N° 1 y 43 N° 1).

## 9. Dirección del Trabajo y cotizaciones

| Dato | Valor | Fuente | Cita literal | R7 |
|---|---|---|---|---|
| Plazo para escriturar el contrato | 15 días desde la incorporación; 5 días si es por obra, trabajo determinado o de duración menor a 30 días | https://www.dt.gob.cl/portal/1628/w3-article-60780.html (art. 9 CT; «Última modificación: 07/10/2021») | «El empleador dispone de un plazo de 15 días para escriturar el contrato de trabajo, desde la incorporación del trabajador»; «el plazo se reduce a 5 días» | 1 (la ficha no dice si son días corridos; no releí el art. 9) |
| Sanción por no escriturar | Multa de 1 a 5 UTM; presunción a favor del trabajador | idem | «La no escrituración del contrato importa una infracción que es sancionada con multa de una a cinco UTM»; «La falta de contrato escrito hace presumir legalmente que son estipulaciones del contrato las que declare el trabajador» | 1 |
| Registro del contrato en el sitio de la DT | 15 días hábiles desde su celebración | https://dt.gob.cl/portal/1626/w3-article-121013.html (arts. 9 bis, 10 y 515 CT; D.S. 14/2023) | «Debes registrar el contrato en el sitio web de la DT dentro de los 15 días hábiles siguientes a su celebración.» | 1 (vía resumen; sanción no encontrada, 3) |
| Libro de Remuneraciones: quién | Empleadores con 5 o más trabajadores (art. 62 CT) | https://www.dt.gob.cl/portal/1628/w3-article-60232.html (mod. 07/10/2021); https://www.dt.gob.cl/legislacion/1624/w3-article-119830.html (ORD. 877/6) | «El empleador se encuentra obligado a llevar un libro de remuneraciones cuando cuenta con cinco o más trabajadores.» | 1 |
| LRE: plazo mensual | Dentro de los 15 días hábiles del mes siguiente al pago | https://www.dt.gob.cl/portal/1626/w3-article-119843.html ; https://www.chileatiende.gob.cl/fichas/90679-libro-de-remuneraciones-electronico | «dentro de los 15 días hábiles del mes siguiente al respectivo pago» | 1 |
| Plazo de pago de cotizaciones, planilla papel | Hasta el día 10 del mes siguiente (o hábil siguiente) | https://r.jina.ai/https://www.fonasa.gob.cl/empleadores/recaudacion-de-cotizaciones/ ; SP w3-propertyvalue-10906 | «hasta el día 10 o hábil siguiente del mes siguiente» | 1 |
| Plazo de pago por Previred (electrónico) | Hasta el día 13, aunque sea inhábil; si el 13 es hábil, transferencia antes de las 13:45 | idem | «Si el pago se realiza por internet, el plazo se amplía hasta el día 13 del mes»; «el plazo se extiende hasta las 13:45 del día 13 de cada mes» | 1 |

**R6 sobre el LRE:** la DT dice en una ficha (27-jun-2023) que «La obligatoriedad en el uso del LRE está supeditada a la entrada en vigencia de la ley de modernización»; la ficha de ChileAtiende lo presenta como obligación equivalente en soporte digital al art. 62 CT. Varias fuentes privadas lo fechan al 1-oct-2021 (Ley 21.327), pero **no hallé el texto oficial que fije esa fecha**. Para la guía: «el libro auxiliar de remuneraciones es obligatorio desde 5 trabajadores (art. 62); la DT lo recibe electrónicamente en Mi DT dentro de 15 días hábiles». Con 1 trabajador, no aplica el art. 62; no afirmo desde qué número el LRE electrónico es exigible (nivel 3).

---

## Datos no confirmados (no codificar)

1. Monto del IMM desde 1-ene-2027 (depende del IPC mayo-dic 2026). Nivel 3.
2. Si el decreto de Hacienda que activa la rama alternativa del art. 4° transitorio (Ley 21.735) existe. Nivel 3.
3. Si la Ley 21.735 o la tasa SIS cambiaron después del 3-feb-2026 / 18-ago-2026 más allá de lo leído; texto del Oficio SP 15.295. Nivel 3 / 2.
4. Cotización adicional de la Ley 16.744 que paga una empresa nueva según su actividad (tabla D.S. 110); resolución del conflicto 3,4 % vs 6,80 %. Nivel 3.
5. Quién es el sujeto pagador legal del SANNA (ley no leída). Nivel 2.
6. Tope imponible 2027 y tasa de cesantía/cotización de casa particular (3 % empleador, solo Previred). Nivel 3.
7. Aporte patronal de salud: no encontré ninguno; no se afirma ausencia. Nivel 3.
8. Si el LRE electrónico es exigible a empleadores de menos de 5 trabajadores y desde qué fecha. Nivel 3.
9. Definición de renta líquida imponible del impuesto único en la ley (LIR art. 42 N° 1). Nivel 3.
10. Si hay tabla de asignación familiar SUSESO posterior al 30-jun-2026. Nivel 2.

## Implicancias para la lógica del proyecto

- **Costo del empleador sobre remuneración imponible (hasta 90 UF, oct-2026), contrato indefinido:** 3,5 % (Ley 21.735, incluye SIS) + 2,4 % (cesantía) + 0,90 % + adicional + 0,03 % (mutual y SANNA) = **6,83 % + adicional**; con plazo fijo, 3,0 % de cesantía en vez de 2,4 % (7,43 % + adicional). Más la gratificación si corresponde. Suma mía de valores nivel 1; la adicional queda como parámetro del usuario.
- **El trabajador paga:** 10 % + comisión de su AFP (por ejemplo 10,46 % con Uno), 7 % de salud, 0,6 % de cesantía si es indefinido, más impuesto único. No paga SIS desde agosto 2026.
- **La tasa del empleador debe ser una tabla por fecha,** no una constante: 3,5 % hasta jul-2027; 4,25 % desde el 1-ago-2027. Guardar también la rama alternativa como «condicional, no activada según lo verificado».
- **Fecha de reverificación sugerida:** mensual para UTM/UF/impuesto único (SII); cada 1 de febrero para topes; cada 1 de agosto (Ley 21.735) y cada vez que cambie la mutual (enero de años impares por la adicional); anual para IMM y asignación familiar (1-may y 1-ene-2027).
- Lenguaje R1: explicar «la ley establece» y remitir a calculadoras o a la mutual para la adicional; no decir «tú debes pagar la gratificación» sin la condición de utilidades.
