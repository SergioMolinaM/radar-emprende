# EME 8 por dentro: qué limita a los microemprendedores y cuánto usan los fondos

**Calculado:** 2-oct-2026, por Claude, desde la base full de la EME 8 (`data-raw/eme/base-de-datos-full-eme8-csv.csv`), con `scripts/eme8.py` → `datos/eme8_limitantes.json`.
**Códigos:** diccionario de variables EME 8 (economía.gob.cl, dic-2025), pp.148-152 (K1) y siguientes (K9, K12-K15). Texto de la pregunta K1 leído en el cuestionario EME 8, p.18.
**Ponderador:** `factor_eme`. **Control positivo:** con el mismo ponderador la base reproduce el 54,2 % de informalidad de la síntesis oficial (variable `informalidad`, 1 informal, 0 formal). Población expandida: 1.998.178 microemprendedores.
**Universo:** cuenta propia y empleadores con hasta 10 trabajadores, formales e informales. **No** cubre pymes más grandes.

Esto cierra el punto 1 de «No verificado» de `2026-10-02-encuestas-previas.md` y el punto 1 de `2026-10-02-desafios-empresas.md`: **la pregunta de limitantes sigue en la EME 8** (la síntesis no la publica, la base sí).

## 1. Limitantes del crecimiento (K1)

Pregunta: «¿Cuáles son los dos aspectos más importantes que usted cree limitan al crecimiento de su negocio?» Respuesta espontánea; si no la hay, el encuestador lee las alternativas. n = 6.755 (8 no responden).

| Limitante | 1.º lugar | 1.º o 2.º | Formales, 1.º | Empleadores, 1.º |
|---|---|---|---|---|
| Falta de clientes | **26,9** | 38,1 | 26,3 | 22,5 |
| Falta de financiamiento | **14,1** | 23,4 | 12,1 | 11,9 |
| Incertidumbre sobre la economía | 13,0 | 22,9 | 18,0 | 16,9 |
| Otro | 9,5 | 15,1 | 9,9 | 11,8 |
| Altos costos de insumos | 7,3 | 17,0 | 7,1 | 9,4 |
| No cree que haya limitantes | 6,9 | — | 7,5 | 7,6 |
| Responsabilidades familiares | 5,8 | 10,4 | 4,6 | 2,4 |
| Razones de salud | 5,7 | 9,7 | 3,5 | 1,7 |
| Costo de regulaciones y/o impuestos | **3,3** | 6,8 | 4,8 | 7,0 (15,3 en 1.º o 2.º) |
| Factores naturales y climáticos | 2,9 | 5,6 | 1,5 | 1,7 |
| Falta de insumos | 2,5 | 4,8 | 1,3 | 1,2 |
| Trabajadores capacitados / costo de contratar | **2,0** | 4,0 | 3,5 | 5,6 (10,0 en 1.º o 2.º) |

n: formales 2.916, informales 3.839, empleadores 873. Todas las celdas tienen n ≥ 60.

**Comparación con la EME 5 (2017: clientes 29,5 %, financiamiento 25,4 %, «no cree» 10,7 %): no directa.** La lista de alternativas cambió (la EME 8 agrega salud, clima y costo de insumos, y junta regulaciones con impuestos y trabajadores con costo de contratar), y no verifiqué si la cifra de 2017 es primera mención. El orden se mantiene (clientes primero); la caída de financiamiento de 25 a 14 puede ser real o efecto de las categorías nuevas. **No afirmarla como tendencia.**

## 2. Fosis, Sercotec y Corfo (K12-K14)

Porcentaje sobre **todos** los microemprendedores (n = 6.753). «Postuló» y «recibió» sólo se preguntan a quien conoce la institución, así que son tasas sobre el total.

| | Conoce | Postuló | Recibió |
|---|---|---|---|
| Fosis | 44,0 | 12,4 | 6,9 |
| Sercotec | 33,1 | 7,6 | 3,4 |
| Corfo | 24,2 | **2,0** | **0,9** |

Entre formales: Sercotec 43,1 / 11,7 / 5,8; Corfo 34,1 / 3,8 / 1,8. Entre informales: Corfo 15,8 / 0,5 / 0,1.

Programas que conocen (K15, total): Capital Semilla, Abeja y/o Pioneras 36,8 %; Fogape Chile Apoya 14,6 %; subsidio al sueldo mínimo 13,7 %; Digitaliza tu Pyme 9,9 %; Centros de Desarrollo de Negocios 6,3 %; medidas de alivio tributario 2,8 %.

## 3. A quién venden (K9)

Ventas dirigidas principalmente a: público en general 87,9 %; empresa o cooperativa 10,4 %; **instituciones del Estado u otras organizaciones 1,7 %** (formales 3,3 %; empleadores 3,0 %). La categoría mezcla al Estado con «otras organizaciones».

## 4. Qué le dice esto a la guía (adversarial)

- **Trámites e impuestos no son lo que los microemprendedores nombran.** 3,3 % los pone primero. Entre empleadores sube a 7,0 % (15,3 % en cualquiera de los dos lugares). La tesis «la burocracia es el gran freno» no sale de esta encuesta.
- **Contratar es un problema de minoría.** 2,0 % en total; entre empleadores 5,6 % primero y 10 % en cualquier lugar. Y 73 % trabaja sin ayudantes (síntesis). Un módulo de la guía sobre contratar le sirve a una fracción pequeña; si se mantiene, debe ser por el costo de equivocarse, no por la demanda.
- **Fondos es el tema con más brecha.** Financiamiento es la 2.ª limitante (14,1 %), y de cada 100 microemprendedores 24 conocen Corfo, 2 postularon y 1 recibió algo. Con Sercotec: 33, 8 y 3. La distancia entre conocer y postular es donde una guía puede hacer algo. Lo que la encuesta no dice es **por qué** no postulan: eso es lo que el sondeo de WhatsApp tiene que preguntar.
- **Vender al Estado: casi nadie.** 1,7 % vende principalmente a instituciones del Estado u otras organizaciones. Puede ser porque no les sirve o porque no saben cómo; la encuesta no distingue. Como canal de clientes (la limitante n.º 1), es una apuesta, no una necesidad medida.
- **La limitante n.º 1, falta de clientes, ninguna parte de la guía la ataca de frente.** Es lo que más se repite en todas las ediciones.

## 5. No verificado

1. Si el 29,5 % de la EME 5 es primera mención o suma de menciones.
2. Errores estándar: no calculados (la base trae `estrato`, no se usó el diseño complejo). Las diferencias de 1 o 2 puntos entre grupos no deben leerse como significativas.
3. Qué hay en «Otro» (9,5 %): está en `k1_otro`, texto libre, no revisado.
