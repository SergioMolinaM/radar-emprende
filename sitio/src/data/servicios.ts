// Servicios públicos de la sección «Fuentes y servicios» (página Formales e informales).
// Cada fila, verificada contra la página oficial en la fecha de consulta: investigacion/2026-10-03-fuentes-servicios.md.
// Neutral: describe qué hace cada servicio; no ordena pasos ni recomienda formalizarse.
export interface Servicio {
  nombre: string
  url: string
  que_hace: string
  cobertura: string
  /** Si exige inicio de actividades en el SII, con la fuente revisada; vacío si no aplica. */
  inicio_actividades?: string
}

export const SERVICIOS_CONSULTA = '2026-10-05'
export const SERVICIOS: Servicio[] = [
  {
    nombre: 'Encuesta de Microemprendimiento (INE)',
    url: 'https://www.ine.gob.cl/estadisticas-por-tema/mercado-laboral/microemprendimiento',
    que_hace: 'Encuesta del INE a unidades económicas pequeñas, formales o informales, de todo el país. Es la fuente de esta página.',
    cobertura: 'Nacional y regional',
  },
  {
    nombre: 'Inicio de actividades, persona natural (ChileAtiende)',
    url: 'https://www.chileatiende.gob.cl/fichas/3025-inicio-de-actividades-persona-natural',
    que_hace: 'Ficha del trámite ante el SII: la declaración que autoriza a realizar operaciones que pueden producir rentas afectas a impuestos.',
    cobertura: 'Nacional',
  },
  {
    nombre: 'Inicio de actividades como Microempresa Familiar (ChileAtiende)',
    url: 'https://www.chileatiende.gob.cl/fichas/3268',
    que_hace: 'Aviso al SII del inicio de actividades como Microempresa Familiar, que se hace después de inscribirse en el registro municipal.',
    cobertura: 'Municipal y SII',
  },
  {
    nombre: 'Registro de Empresas y Sociedades',
    url: 'https://www.registrodeempresasysociedades.cl/',
    que_hace: 'Portal del Ministerio de Economía donde se constituyen sociedades en línea. De él salen las cifras de empresas creadas de este sitio.',
    cobertura: 'Nacional',
  },
  {
    nombre: 'Ruta de la Pyme',
    url: 'https://www.rutadelapyme.cl/',
    que_hace: 'Guía en línea de los trámites de formalización, con cuenta de usuario. Proyecto del Gobierno de Santiago ejecutado por la Universidad Adolfo Ibáñez.',
    cobertura: 'Gobierno de Santiago',
  },
  {
    nombre: 'Capital Semilla Emprende (Sercotec)',
    url: 'https://www.sercotec.cl/programas/capital-semilla-emprende/',
    que_hace: 'Fondo concursable de Sercotec para crear nuevos negocios.',
    cobertura: 'Nacional, con bases por región',
    inicio_actividades: 'Para postular: sin inicio de actividades en primera categoría. Quien resulta seleccionado debe iniciarlas (bases RM 2026, p. 4)',
  },
  {
    nombre: 'Capital Abeja Emprende (Sercotec)',
    url: 'https://www.sercotec.cl/programas/capital-abeja-emprende/',
    que_hace: 'Fondo concursable de Sercotec para emprendedoras que crean un negocio.',
    cobertura: 'Nacional, con bases por región',
    inicio_actividades: 'Para postular: sin inicio de actividades en primera categoría',
  },
  {
    nombre: 'Emprendamos Semilla (Fosis)',
    url: 'https://www.fosis.gob.cl/es/programas/emprendimiento-y-empleabilidad/emprendamos-semilla/',
    que_hace: 'Programa de Fosis para personas de los tramos de menores ingresos del Registro Social de Hogares, sin trabajo o con empleo precario, que tienen una idea de negocio o un negocio pequeño.',
    cobertura: 'Comunas donde se ejecuta el programa',
  },
  {
    nombre: 'Emprendamos (Fosis)',
    url: 'https://www.fosis.gob.cl/es/programas/emprendimiento-y-empleabilidad/emprendamos/',
    que_hace: 'Programa de Fosis para potenciar un negocio en funcionamiento, en versión básica y avanzada.',
    cobertura: 'Comunas donde se ejecuta el programa',
    inicio_actividades: 'Pide inicio de actividades en el SII (requisitos publicados)',
  },
  {
    nombre: 'Centros de Negocios (Sercotec)',
    url: 'https://sitios.sercotec.cl/centros-de-negocios/',
    que_hace: 'Red de centros de Sercotec en cada región para emprendedores y pymes.',
    cobertura: 'Nacional, por región',
  },
]
