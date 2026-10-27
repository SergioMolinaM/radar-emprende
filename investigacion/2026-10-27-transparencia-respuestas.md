# Respuestas de transparencia: Sercotec y FOSIS (cotejo del 27-oct-2026)

Originales en `data-raw/transparencia/sercotec/` y `data-raw/transparencia/fosis/`, que no van a git. Se bajaron de Gmail el 27-oct. Lo que se pidió está en `solicitudes-transparencia.md`. Corfo AH004T0008055 sigue sin respuesta: el acuse es del 2-oct y el plazo vence alrededor del 2-nov.

Ninguna planilla trae RUT ni nombres de personas. El detector de patrón RUT dio 30 aciertos en Mejora Negocios, y los 30 son montos en pesos (enteros de 8 o 9 dígitos, sin guion). `proyecto_nombre` es el nombre de la convocatoria. Muchas celdas por comuna valen entre 1 y 4: Sercotec tiene 5.127 de 11.687 en postulaciones y 1.913 de 2.384 en beneficiarios, y FOSIS tiene 91 de seleccionados. Ninguno las agrupó como se pidió, así que al publicar se aplica la regla n<5.

## FOSIS AI004T0002258 (notificada el 22-oct)

La carta N° 167 y la respuesta de la Subdirección de Usuarios entregan `Base_Datos_AI004T002258.xlsx`, con la hoja `datos` (3.624 filas: año × región × comuna × programa) y la hoja `tabla` (resumen y criterios). La fuente es el Sistema de Postulación a Programas (SPP); «completaron» sale del Sistema Nacional de Usuarios (SNU).

**Respuesta completa.** Trae los cuatro puntos pedidos, por año (2023–2026), región y comuna (336 comunas).

**Control positivo:** la suma de `datos` por año y programa reproduce exacto las 16 filas y el total de `tabla` (552.663 postulaciones, 108.714 cupos, 118.675 seleccionadas, 81.632 completaron).

Cosas a tener en cuenta antes de publicar:
- En `datos`, «EMPRENDAMOS» y «EMPRENDAMOS » (con espacio al final) son dos programas distintos: Básico y Avanzado, según las cifras de `tabla`.
- Hay más personas seleccionadas que cupos en todos los programas y años; por ejemplo, Emprendamos Básico 2023 tiene 6.417 seleccionadas para 6.076 cupos. La carta no lo explica, y una lectura propia (reemplazos por renuncias) **no está verificada**.
- «Completaron» vale 0 en 2026, porque la ejecución sigue en curso.
- Las postulaciones cuentan registros del SPP, no personas distintas. Que una persona postule a más de un programa **no está verificado**.

## Sercotec AH012T0003197 (notificada el 26-oct; carta G.G. N° 283 del 23-oct)

Entrega dos planillas:
- `Datos_Emprende_Crece_Almacen_Modo_Empleo_2023_al_2026.xlsx`. Las hojas EMPRENDE, CRECE y ALMACEN traen una fila por convocatoria y región (482 convocatorias). Las hojas `Postulaciones_comuna` y `Beneficiarios_comuna` traen el desglose por comuna. Según la carta, «Emprende» incluye Capital Semilla Emprende, Capital Abeja Emprende, Pioneras y Semilla Modo Empleo.
- `Datos_Mejora_Negocios_2023_2024_2025.xlsx`, con una tabla por año en formato de reporte. La hoja de 2025 lleva el título «MN 2024», que parece un error de rótulo.

Contra lo pedido:
1. Postulaciones recibidas: sí, por convocatoria, región y comuna.
2. Admisibles: sí, por convocatoria y región. **No vienen por comuna.**
3. Seleccionados o adjudicados: sí, por convocatoria y región, con hombres y mujeres. Por comuna, ver la falla de Crece más abajo.
4. **Monto total adjudicado: no viene.** La columna `Monto` es, según la carta, el «monto máximo adjudicado por beneficiario». Multiplicarlo por los beneficiarios sería una inferencia y no se hace. Mejora Negocios sí trae monto total adjudicado y ejecutado.
5. Renuncias: sí (`Renunciado`). **Terminados con rendición aprobada: no viene**, y la carta no dice que no exista.

**Falla en el desglose comunal de Crece.**
- `Beneficiarios_comuna` cubre 240 de las 482 convocatorias. Faltan las 106 convocatorias de Crece con beneficiarios: 1.648 en 2023, 1.325 en 2024, 1.386 en 2025 y 42 en 2026.
- En 144 de las 146 convocatorias de Crece, la suma de `Postulaciones_comuna` es exactamente postulaciones más beneficiarios, y 104 tienen la misma comuna repetida. Por ejemplo, la convocatoria 661989 (Tamarugal) tiene 81 postulaciones y 23 beneficiarios, y trae Pica 20 + 4 y Huara 6 + 1.
- Lectura: los beneficiarios de Crece se pegaron en la hoja de postulaciones. Separarlos por el orden de las filas sería una inferencia; no se hace.
- Fuera de Crece, las postulaciones por comuna calzan con la convocatoria en todos los casos menos 10. Uno es de Emprende 2023 (−1). Los otros 9 son de Emprende 2026 y suman −16; una lectura no verificada es que esas convocatorias siguen abiertas.

## Publicación y regla n<5 (revisor, 27-oct-2026: aprobado con observaciones)

- Ocho comunas tienen menos de 5 postulaciones a Sercotec. Con 0 beneficiarios: Antártica, Ollagüe, San Gregorio y General Lagos. Con 1: Laguna Blanca, Río Verde, Timaukel y Torres del Paine.
  - Elegido: publicarlas con «n = k» y sin porcentaje, igual que el resto de la regla n<5.
  - Descartado: agruparlas en una fila «comunas con menos de 5 postulaciones».
  - Por qué es mejor para el producto: agrupar borra justo las comunas extremas que el sitio quiere mostrar, y no baja el riesgo cuando hay 0 beneficiarios, porque igual se sabe que nadie quedó. Para identificar a alguien hay que saber de antemano quién postuló, y lo único que se aprende es el resultado de un concurso.
  - Costo para nosotros (no es criterio): ninguno.
- Los conteos de 1 a 4 beneficiarios por comuna (69 comunas) se muestran como número, sin porcentaje.
- FOSIS por comuna se publica solo sumado entre programas. El cruce comuna × programa tiene 91 celdas de 1 a 4 personas, y Semilla SyO atiende a personas en extrema pobreza. `fomento.py` lo controla.
- Los originales se quedan en `data-raw/transparencia/`: son la única fuente del nivel 1 y la evidencia para un eventual reclamo. Los acuses traen nombre, correo y teléfono del solicitante, y por eso no van a git.

Plazos para reclamar al Consejo para la Transparencia (15 días hábiles desde la notificación, sin sábados ni domingos; cálculo propio: entre las dos fechas no hay feriados en día hábil, porque el 31-oct cae sábado y el 1-nov domingo):
- FOSIS: hasta el 12-nov.
- Sercotec: hasta el 16-nov.
