// Fechas día-mes-año (convención de la familia Radar) y formato numérico chileno.
const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']

export const fechaCorta = (iso: string | null | undefined) => {
  if (!iso) return '—'
  const [a, m, d] = iso.slice(0, 10).split('-')
  const mes = m ? MESES[Number(m) - 1] : undefined
  return [d && String(Number(d)).padStart(2, '0'), mes, a].filter(Boolean).join('-')
}

export const num = (n: number, decimales = 0) =>
  n.toLocaleString('es-CL', { minimumFractionDigits: decimales, maximumFractionDigits: decimales })

/** Millones de pesos con una cifra decimal. */
export const millones = (pesos: number) => `$ ${num(pesos / 1_000_000, 1)} mill.`

/** Cambia los nombres de campo que asoman en los textos del _meta por palabras para el lector. */
const CAMPOS: [RegExp, string][] = [
  [/la columna poblacion_censo_2024/g, 'la columna de población del Censo 2024'],
  [/la columna empresas_sii_2024/g, 'la columna de número de empresas del SII de 2024'],
  [/poblacion_censo_2024/g, 'población del Censo 2024'],
  [/empresas_sii_2024/g, 'número de empresas del SII de 2024'],
  [/ con scripts\/comunas\.py/g, ''],
  [/«Comuna Tributaria»/g, 'la comuna tributaria'],
  [/«Anio» \(= año de aprobación del SII\)/g, 'el año de aprobación del SII'],
  [/«Anio»/g, 'el año'],
  // Códigos de archivo del SII y rutas de descarga: quedan solo en la sección de reproducibilidad.
  [/https:\/\/datainnovacion\.cl\/api\/v1\/proyectos, descargada con scripts\/descargar\.py; /g, ''],
  [/ \(PUB_[A-Z_]+, /g, ' ('],
  [/ \(PUB_[A-Z_]+\)/g, ''],
  [/ PUB_[A-Z_]+/g, ''],
]
export const llano = (t: string) => CAMPOS.reduce((s, [re, p]) => s.replace(re, p), t)
