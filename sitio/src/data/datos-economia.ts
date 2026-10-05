// Copia de ../datos/economia_res.json hecha por `npm run datos`; no se edita a mano.
import raw from './economia_res.json'

type PorMes<T> = Record<string, T>
export interface EconomiaJson {
  _meta: {
    descripcion: string
    fuente: string
    fuente_url: string
    archivo_url: string
    metodo: string
    nivel: number
    control: string
    limites: string[]
    generado: string
    script: string
    licencia: string
  }
  corte: { anio: number; mes: number; actualizado: string }
  /** Sociedades constituidas por escritura publicada en el Diario Oficial, clave «AAAA-MM». */
  diario_oficial: PorMes<number>
  socios_sexo: PorMes<{ total: number; hombres: number; mujeres: number; sin_dato: number }>
  sociedades_sexo: PorMes<{ solo_mujeres: number; solo_hombres: number; mixtas: number; sin_dato: number }>
  sociedades_nacionalidad: PorMes<{ solo_chilenas: number; solo_extranjeras: number; mixtas: number; total: number }>
}

export const ECONOMIA = raw as unknown as EconomiaJson
