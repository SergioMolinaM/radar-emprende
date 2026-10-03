// Copia de ../datos/eme8_informalidad.json hecha por `npm run datos`; no se edita a mano.
import raw from './eme8_informalidad.json'

export type Calidad = 'fiable' | 'poco fiable' | 'no fiable'
export interface Estimacion {
  pct: number
  ee_pct: number
  cv_total_pct: number
  n: number
  gl: number
  calidad: Calidad
}
export interface InformalidadJson {
  _meta: {
    descripcion: string
    fuente: string
    universo: string
    definicion_informalidad: string
    diseno: string
    calidad: string
    redondeo: string
    control: string
    preguntas: { e4: string; e6: string }
    nota_e3: string
    generado: string
    script: string
    nivel: number
    licencia: string
  }
  informalidad: {
    nacional: Estimacion
    region: Record<string, Estimacion & { nombre: string }>
    rama: Record<string, Estimacion & { nombre: string }>
  }
  sin_inicio_actividades: Estimacion
  razones_no_inicio: Record<string, Estimacion & { razon: string }>
  razones_inicio: Record<string, Estimacion & { razon: string }>
}

export const INFORMALIDAD = raw as unknown as InformalidadJson
