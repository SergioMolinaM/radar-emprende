// src/data/fuentes.ts — inventario de fuentes: URL, fechas de consulta y condiciones de uso, tomadas
// de los _meta y de investigacion/2026-10-02-datos-publicos.md. No importa datos: cada página importa
// su datos-*.ts. Las fechas que vienen de los JSON llegan en meta_fuentes.json (scripts/copiar-datos.mjs).
import META from './meta_fuentes.json'

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
    url: META.res_url,
    consulta: META.res_consulta,
    uso: 'Sociedades constituidas por comuna tributaria, año y mes (el Registro republica el archivo del año cerca de una vez al mes); base para seguir a las sociedades creadas entre 2020 y 2024.',
    condicion: 'CC BY (declarada en datos.gob.cl).',
  },
  {
    id: 'economia-res',
    nombre: 'Ministerio de Economía, informe mensual de creación de empresas y cooperativas (planilla de figuras y cuadros)',
    url: 'https://www.economia.gob.cl/category/estudios-encuestas/registro-de-empresas-y-sociedades',
    consulta: META.economia_generado,
    uso: 'Sociedades constituidas por escritura en el Diario Oficial, por mes; socios por sexo y sociedades según el sexo y la nacionalidad de sus socios.',
    condicion: 'Sin licencia declarada en el informe: se publican las series con cita de la fuente.',
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
    condicion: 'CC BY-SA 4.0 (términos de uso del INE, ine.gob.cl, leídos el 05-oct-2026). Obliga a distribuir lo derivado bajo la misma licencia: la población y la tasa por cada 1.000 habitantes se publican bajo CC BY-SA 4.0.',
  },
  {
    id: 'corfo',
    nombre: 'Corfo DataInnovación, proyectos adjudicados (descarga por su API pública)',
    url: 'https://datainnovacion.cl/api',
    consulta: '2026-10-02',
    uso: 'Proyectos con subsidio de innovación y emprendimiento por comuna del beneficiario; certificados de la Ley I+D aparte.',
    condicion: 'La página dice «todos los derechos reservados»: se publican solo agregados por comuna.',
  },
  {
    id: 'eme',
    nombre: 'INE y Ministerio de Economía, VIII Encuesta de Microemprendimiento (EME 8), base full, diccionario, cuestionario y manual',
    url: 'https://www.economia.gob.cl/2025/12/10/octava-encuesta-de-microemprendimiento-eme-8.htm',
    consulta: '2026-10-03',
    uso: 'Informalidad por región y rama y razones para iniciar o no iniciar actividades en el SII, con errores de diseño y el estándar de calidad del INE (2020).',
    condicion: 'El manual pide citar «Elaboración propia a partir de la base de datos de la VIII Encuesta de Microemprendimiento, 2025».',
  },
]
