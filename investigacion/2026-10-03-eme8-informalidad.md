# EME 8: informalidad y por qué se inicia o no actividades en el SII

**Calculado:** 3-oct-2026, por Claude, con `scripts/eme8_informalidad.py` → `datos/eme8_informalidad.json`.
**Fuentes leídas en el original** (copias en `data-raw/eme/`, no versionado): diccionario de variables EME 8 (e3 p.111, e4 p.111, e4_otro p.112, e6 p.113, c1_caenes_1d_red p.25, informalidad p.215); cuestionario EME 8 pp.13-14 (texto de E3, E4 y E6); manual de usuario de la base §4 (diseño) y §5.3 (construcción de informalidad); INE (2020), *Estándar para la evaluación de la calidad de las estimaciones en encuestas de hogares*, pp.6, 9-10; síntesis de resultados VIII EME pp.18-20.

## Método

- **Informalidad** (síntesis, p.18): «quien no cuenta con registro ante el Servicio de Impuestos Internos y no lleva un sistema contable que les permita separar los gastos del negocio de los gastos del hogar». La variable de la base la construye el INE con e3, e1 y e2, y usa el lugar de trabajo cuando faltan datos (manual §5.3). **No es lo mismo que no tener inicio de actividades**: 54,2 % informal, 54,8 % sin inicio.
- **Errores estándar de diseño**: estrato, conglomerado y `factor_eme`, linealización de Taylor; estratos de un conglomerado sin aporte de varianza (equivale a `survey.lonely.psu = "certainty"` del manual).
- **Calidad**: estándar INE 2020 (n ≥ 60; gl ≥ 9; ee ≤ ∛(p²)/9, o ∛((1−p)²)/9 si p ≥ 0,5) **y además** coeficiente de variación del total de casos ≤ 15 %. Esa segunda condición no está escrita así en el estándar para proporciones; la adopté porque es la que reproduce la única marca oficial de «poco fiable» (Aysén: ee 5,25 contra un tope de 7,0, pero cv del total 17,7 %; ninguna otra región pasa de 15 %). Es la más estricta de las dos.
- **Redondeo**: a dos decimales y luego a uno (39,246 → 39,3). Con redondeo simple fallaban Servicios y La Araucanía por una décima.

## Control positivo

El script se detiene si no reproduce: tasa nacional 54,2 %; las 6 por rama (74,3 / 63,6 / 67,9 / 56,6 / 57,1 / 39,3); las 16 regionales; la marca «poco fiable» sólo en Aysén (50,0 %). **Pasa las 23 cifras y la marca.**

## Resultados

**Por qué no ha iniciado actividades** (e4; sólo quienes respondieron «No» en E3: a «No, estoy en proceso» no se le pregunta, cuestionario p.13; n = 3.797):

| Razón principal | % | Calidad |
|---|---|---|
| El negocio es demasiado pequeño o la actividad es poco frecuente | 52,9 | fiable |
| El registro no es esencial para el negocio | 20,4 | fiable |
| El registro es demasiado caro o toma mucho tiempo | 7,3 | fiable |
| No sabe cómo registrarse | 6,4 | fiable |
| No cumple los requisitos | 6,1 | fiable |
| Otra | 5,7 | fiable |
| Temor a ser fiscalizado o a perder beneficios sociales | 1,4 | poco fiable |

**Por qué inició actividades** (e6; quienes tienen inicio; n = 2.880):

| Razón principal | % | Calidad |
|---|---|---|
| Para cumplir la ley | 42,1 | fiable |
| Para formalizar el negocio | 26,9 | fiable |
| Por exigencia de clientes o proveedores | 26,1 | fiable |
| Para acceder a programas o beneficios | 2,2 | fiable |
| Código 3: «Para acceder a financiamiento (créditos)» en el cuestionario, «Para descontar IVA (descontar gastos)» en el diccionario | 1,6 | poco fiable; ambiguo, fuera del gráfico |
| Para cotizar en pensiones y salud | 0,5 | no fiable (no se publica) |
| Otra | 0,7 | no fiable (no se publica) |

Regiones y ramas: en el JSON, con ee, cv del total, n, gl y calidad.

## Lectura (adversarial)

- **«Muchos trámites» es razón de minoría.** Caro o lento, 7,3 %; no sabe cómo, 6,4 %. Juntas, 13,7 %. Tres de cada cuatro sin inicio dicen que su negocio es muy chico, poco frecuente o que el registro no le hace falta. Esto contradice la respuesta de las dos llamadas del 3-oct como diagnóstico general, y le quita base a reabrir la formalización como guía.
- **Encaja con la neutralidad del proyecto**: la mayoría de quienes no se registran lo explica por escala y conveniencia, no por obstáculo. Publicarlo así, sin calificarlo.
- **Un cuarto de quienes iniciaron lo hizo porque se lo pidió un cliente o proveedor** (26,1 %). Es el único punto donde la formalización toca la limitante n.º 1 (falta de clientes, `2026-10-02-eme8-limitantes.md`). Hipótesis, no medida: vender a empresas exige factura.
- La pregunta se responde espontáneamente y, si no hay respuesta, se leen alternativas (cuestionario): las categorías cerradas pesan en el resultado.

## No verificado

0. Qué significa el código 3 de e6: el cuestionario impreso (p.14) y el diccionario (p.113) no coinciden. Corregido el 3-oct tras el verificador; antes la nota citaba «E10» (es E6) y decía que E4 incluía a quienes están en proceso.

1. Si el INE aplica literalmente el cv del total para marcar proporciones: inferido de un solo caso (Aysén) que reproduce exacto.
2. `datos/eme8_limitantes.json` (2-oct) usa n < 60 como único criterio («criterio propio»). Falta recalcularlo con este método.
3. «Otra» en e4 (5,7 %) tiene recodificación en `e4_otro` (n = 171; incluye «no es rentable o no le conviene»): no tabulada.
