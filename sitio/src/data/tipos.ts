// src/data/tipos.ts — tipos del dato del radar y de los JSON que generan los scripts/ del repo.
// Niveles (PLAN §2, R7): N1 fuente literal · N2 supuesto declarado · nivel 3 no sale al sitio.
export type NivelAfirmacion = 'N1' | 'N2'

export interface Dato<T> {
  valor: T
  nivel: NivelAfirmacion
  fuente: string
  /** Fecha del dato o de la consulta, ISO. */
  fecha: string
  nota?: string
}

/** Serie por año: claves '2013'…'2026'. */
export type PorAnio = Record<string, number>

export interface ComunaBase {
  codigo: number
  comuna: string
  region: string
  codigo_region: number
}

/* ----- constituciones_comuna.json (scripts/constituciones.py) ----- */
export interface ConstitucionesJson {
  _meta: {
    descripcion: string
    fuente: string
    fuente_url: string
    metodo: string
    nivel: number
    limites: string[]
    generado: string
    script: string
    licencia: string
  }
  totales_por_anio: PorAnio
  tipo_societario_por_anio: Record<string, Record<string, number>>
  comunas: (ComunaBase & { poblacion_censo_2024: number; constituciones: PorAnio; por_mil_hab_2025: number })[]
}

/* ----- cohortes_comuna.json (scripts/cohortes.py) ----- */
export type Estado = 'termino_giro' | 'en_nomina_2024' | 'fuera_nomina_2024'
export interface Cohorte {
  constituidas: number
  termino_giro: number
  en_nomina_2024: number
  fuera_nomina_2024: number
}
export interface CohortesJson {
  _meta: {
    descripcion: string
    fuentes: string[]
    estados: Record<Estado, string>
    nivel: number
    limites: string[]
    no_encontradas_en_sii: number
    generado: string
    script: string
    licencia: string
  }
  nacional: Record<string, Cohorte & { pct: Record<Estado, number>; en_nomina_por_anio_comercial: PorAnio }>
  comunas: (ComunaBase & { cohortes: Record<string, Cohorte> })[]
}

/* ----- corfo_comuna.json (scripts/corfo.py) ----- */
export interface CorfoComuna extends ComunaBase {
  proyectos: number
  beneficiarios: number
  proyectos_micro_pequena: number
  monto_aprobado_corfo: number
  certificados_ley_id: number
  empresas_sii_2024: number
  proyectos_por_mil_empresas: number
}
export interface CorfoJson {
  _meta: {
    descripcion: string
    fuentes: string[]
    nivel: number
    limites: string[]
    proyectos_en_rango: number
    certificados_ley_id_en_rango: number
    certificados_ley_id_sin_comuna: number
    sin_comuna: Record<string, number>
    comunas_sin_proyectos: number
    generado: string
    script: string
    licencia: string
    reproducibilidad: string
  }
  comunas_sin_proyectos: string[]
  comunas: CorfoComuna[]
}
