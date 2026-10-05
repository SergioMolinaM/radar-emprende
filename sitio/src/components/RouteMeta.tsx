// src/components/RouteMeta.tsx — título y meta description por ruta (SPA).
// Sin dominio propio todavía (no inscrito al 2-oct-2026): mientras ORIGEN sea null no se emiten
// canónica ni og:url. Cuando exista el dominio, se fija aquí y en scripts/prerender.py.
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type Meta = { title: string; description: string }
const SITIO = 'Radar Emprende'
/** Dominio propio: pendiente. No inventar. */
const ORIGEN = null as string | null

const HOME: Meta = {
  title: `${SITIO} — Chile`,
  description:
    'Empresas creadas por comuna, qué pasó con ellas y a qué comunas llegan los proyectos de Corfo, con datos públicos, fuente y método.',
}
const META: Record<string, Meta> = {
  '/': HOME,
  '/quien-las-crea': {
    title: `Quién crea sociedades y con cuánto capital — ${SITIO}`,
    description: 'Mujeres y extranjeros entre los socios de las sociedades constituidas en el Registro de Empresas y Sociedades, por año, y capital declarado al constituirse.',
  },
  '/empresas-creadas': {
    title: `Empresas creadas por comuna — ${SITIO}`,
    description: 'Sociedades constituidas en el Registro de Empresas y Sociedades mes a mes, por región y por comuna tributaria desde 2013, y por cada mil habitantes en el último año completo.',
  },
  '/cohortes': {
    title: `Qué pasó con las empresas creadas cada año — ${SITIO}`,
    description: 'Estado a agosto de 2026 de las sociedades creadas entre 2020 y 2024: con término de giro, en la nómina del SII o fuera de ella. No es una tasa de supervivencia.',
  },
  '/corfo': {
    title: `A qué comunas llega Corfo — ${SITIO}`,
    description: 'Proyectos de innovación y emprendimiento de Corfo adjudicados entre 2016 y 2025 por comuna del beneficiario, y las comunas sin ningún proyecto.',
  },
  '/formales-e-informales': {
    title: `Formales e informales — ${SITIO}`,
    description: 'Microemprendedores con y sin registro en el SII por región y rama, y las razones para iniciar o no iniciar actividades, según la VIII Encuesta de Microemprendimiento (INE, 2025).',
  },
  '/metodologia': {
    title: `Metodología y fuentes — ${SITIO}`,
    description: 'Fuentes con fecha de consulta, niveles de afirmación, regla de menos de cinco casos, correcciones y cómo reproducir cada cálculo.',
  },
  '/acerca': {
    title: `Acerca — ${SITIO}`,
    description: 'Qué es Radar Emprende, quién lo hace, su independencia, sus licencias y qué hace el sitio con los datos.',
  },
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function RouteMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const m = META[pathname] ?? { title: `Página no encontrada — ${SITIO}`, description: HOME.description }
    document.title = m.title
    upsertMeta('name', 'description', m.description)
    upsertMeta('property', 'og:title', m.title)
    upsertMeta('property', 'og:description', m.description)
    if (ORIGEN) {
      const url = ORIGEN + (pathname === '/' ? '/' : pathname.replace(/\/$/, ''))
      upsertMeta('property', 'og:url', url)
      let canon = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (!canon) {
        canon = document.createElement('link')
        canon.setAttribute('rel', 'canonical')
        document.head.appendChild(canon)
      }
      canon.setAttribute('href', url)
    }
  }, [pathname])
  return null
}
