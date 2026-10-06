// src/data/socios.ts — sumas sobre las series mensuales del informe de Economía (socios y sociedades).
// Lo usan /quien-las-crea y la portada, para que una misma cifra salga siempre del mismo cálculo.
import { ECONOMIA as E } from './datos-economia'

export const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
export const EN_CURSO = String(E.corte.anio)
/** «enero a agosto»: los meses del año en curso que trae el corte. */
export const TRAMO = E.corte.mes === 1 ? 'enero' : `enero a ${MESES[E.corte.mes - 1]}`

/** Suma un campo de una serie mensual en un año, opcionalmente solo hasta el mes del corte. */
export function suma<T>(serie: Record<string, T>, anio: string, campo: (v: T) => number, hastaCorte = false) {
  return Object.entries(serie).reduce((s, [k, v]) => (k.startsWith(anio) && (!hastaCorte || Number(k.slice(5)) <= E.corte.mes) ? s + campo(v) : s), 0)
}
export const pct = (a: number, b: number) => (b > 0 ? (100 * a) / b : 0)

/** Porcentaje de mujeres entre los socios de un año (o hasta el mes del corte). */
export const mujeresSocios = (a: string, h = false) => pct(suma(E.socios_sexo, a, (v) => v.mujeres, h), suma(E.socios_sexo, a, (v) => v.total, h))

/** Primer año con los 12 meses en la serie de socios (el mismo que usa /quien-las-crea). */
export const PRIMER_ANIO_SOCIOS = Object.entries(
  Object.keys(E.socios_sexo).reduce<Record<string, number>>((acc, k) => ((acc[k.slice(0, 4)] = (acc[k.slice(0, 4)] ?? 0) + 1), acc), {}),
)
  .filter(([, n]) => n === 12)
  .map(([a]) => a)
  .sort()[0]
