// src/data/fuentes.ts — carga tipada de los JSON (copiados por `npm run datos` desde ../datos/)
// e inventario de fuentes. Las cifras salen de los JSON; aquí solo hay URL, fechas de consulta y
// condiciones de uso, tomadas de los _meta y de investigacion/2026-10-02-datos-publicos.md.
// Cada JSON vive en su propio módulo (datos-*.ts) para que cada página cargue solo el que usa.
import { CONSTITUCIONES } from './datos-constituciones'
export { CONSTITUCIONES } from './datos-constituciones'
export { COHORTES } from './datos-cohortes'
export { CORFO } from './datos-corfo'

/** Repositorio público del proyecto (scripts/ y datos/). */
export const REPO = 'https://github.com/SergioMolinaM/radar-emprende'

export interface Fuente {
  id: string
  nombre: string
  url: string
  /** Fecha de consulta o descarga, ISO. */
  consulta: string
  uso: string
  condicion: string
}

export const FUENTES: Fuente[] = [
  {
    id: 'res',
    nombre: 'Registro de Empresas y Sociedades (RES), Ministerio de Economía, en datos.gob.cl',
    url: CONSTITUCIONES._meta.fuente_url,
    consulta: '2026-10-02',
    uso: 'Sociedades constituidas por comuna tributaria y año; base para seguir a las sociedades creadas entre 2020 y 2024.',
    condicion: 'CC BY (declarada en datos.gob.cl).',
  },
  {
    id: 'sii-nomina',
    nombre: 'SII, nómina de personas jurídicas',
    url: 'https://www.sii.cl/sobre_el_sii/nominapersonasjuridicas.html',
    consulta: '2026-10-02',
    uso: 'Término de giro vigente y presencia en la nómina de cada año comercial de las sociedades creadas cada año; domicilio vigente de los beneficiarios de Corfo.',
    condicion: 'Sin licencia declarada en la página: se publican solo agregados por comuna.',
  },
  {
    id: 'sii-empresas',
    nombre: 'SII, estadísticas de empresas por comuna',
    url: 'https://www.sii.cl/sobre_el_sii/estadisticas_de_empresas.html',
    consulta: '2026-10-02',
    uso: 'Número de empresas por comuna, denominador de los proyectos Corfo por cada mil empresas.',
    condicion: 'Sin licencia declarada en la página; la columna conserva las condiciones del SII.',
  },
  {
    id: 'censo',
    nombre: 'INE, Censo 2024, población censada por comuna (tabla D1)',
    url: 'https://censo2024.ine.gob.cl/wp-content/uploads/2025/03/D1_Poblacion-censada-por-sexo-y-edad-en-grupos-quinquenales.xlsx',
    consulta: '2026-10-02',
    uso: 'Población por comuna, denominador de las sociedades creadas por cada mil habitantes.',
    condicion: 'La columna conserva las condiciones del INE (licencia no verificada en la página).',
  },
  {
    id: 'corfo',
    nombre: 'Corfo DataInnovación, proyectos adjudicados (descarga por su API pública)',
    url: 'https://datainnovacion.cl/api',
    consulta: '2026-10-02',
    uso: 'Proyectos con subsidio de innovación y emprendimiento por comuna del beneficiario; certificados de la Ley I+D aparte.',
    condicion: 'La página dice «todos los derechos reservados»: se publican solo agregados por comuna.',
  },
]
