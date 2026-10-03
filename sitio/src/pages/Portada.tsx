// src/pages/Portada.tsx — portada al modo de Radar Circular: portada, cifras, un hallazgo y el índice.
// Todas las cifras salen de los JSON. La guía espera las entrevistas.
import { Link } from 'react-router-dom'
import { Byline, Dek, Hed, Kicker, KpiStrip, Rule, SectionTitle, SplitBar, type KpiItem } from '../components/editorial'
import { CONSTITUCIONES, COHORTES, CORFO } from '../data/fuentes'
import { fechaCorta, num } from '../data/fechas'
import type { Estado } from '../data/tipos'

const anios = Object.keys(CONSTITUCIONES.totales_por_anio).sort()
/** Año del campo por_mil_hab_2025 del JSON; también es el último año completo del archivo. */
const ANIO = '2025'
const total = CONSTITUCIONES.totales_por_anio[ANIO]
const poblacion = CONSTITUCIONES.comunas.reduce((s, c) => s + c.poblacion_censo_2024, 0)
const porMil = (1000 * total) / poblacion
const cohortes = Object.keys(COHORTES.nacional).sort()
const C0 = cohortes[0]
const c0 = COHORTES.nacional[C0]

const KPIS: KpiItem[] = [
  {
    valor: num(total),
    label: `Sociedades constituidas en ${ANIO}`,
    detalle: 'Registro de Empresas y Sociedades (datos.gob.cl) · todo el país',
  },
  {
    valor: num(porMil, 2),
    label: `Sociedades por cada 1.000 habitantes en ${ANIO}`,
    detalle: 'Constituciones del Registro sobre la población del Censo 2024 (INE) · nacional',
  },
  {
    valor: `${num(c0.pct.en_nomina_2024, 1)} %`,
    label: `De las sociedades creadas en ${C0}, en la nómina del SII de 2024`,
    detalle: 'Cruce del Registro con la nómina de personas jurídicas del SII · no es tasa de supervivencia',
    alt: true,
  },
  {
    valor: num(CORFO.comunas_sin_proyectos.length),
    label: 'Comunas sin proyectos de Corfo 2016–2025',
    detalle: `De ${num(CORFO.comunas.length)} · Corfo DataInnovación cruzado con el domicilio vigente en el SII`,
    alt: true,
  },
]

const ESTADOS: { e: Estado; label: string; color: string }[] = [
  { e: 'en_nomina_2024', label: 'Figura en la nómina del SII de 2024', color: 'var(--accent)' },
  { e: 'fuera_nomina_2024', label: 'Sin término de giro y fuera de esa nómina', color: 'var(--c2)' },
  { e: 'termino_giro', label: 'Con término de giro ante el SII', color: 'var(--accent-2)' },
]

const SECCIONES = [
  { to: '/empresas-creadas', go: 'Ver la serie →', t: 'Empresas creadas por comuna', d: `Sociedades constituidas en cada comuna, ${anios[0]}–${anios[anios.length - 1]}, y por cada mil habitantes.` },
  { to: '/cohortes', go: 'Ver la serie →', t: 'Qué pasó con las empresas creadas', d: `Las sociedades creadas cada año entre ${cohortes[0]} y ${cohortes[cohortes.length - 1]}, según su situación ante el SII, en todo el país y por comuna.` },
  { to: '/corfo', go: 'Ver la serie →', t: 'A qué comunas llega Corfo', d: 'Proyectos de innovación y emprendimiento por comuna del beneficiario, y las comunas sin ninguno.' },
  { to: '/metodologia', go: 'Leer la metodología →', t: 'Metodología y fuentes', d: 'Fuentes con fecha de consulta, niveles de afirmación, regla de menos de cinco casos y cómo reproducir el cálculo.' },
]

export function Portada() {
  return (
    <article className="rc-screen">
      <section className="rc-cover rc-anim-in">
        <div className="rc-cover-lead">
          <Kicker>Emprendimiento y pymes · Chile</Kicker>
          <Hed className="rc-cover-hed">
            Cuántas empresas nacen en cada comuna
            <span className="rc-cover-ask"> y qué pasa con ellas.</span>
          </Hed>
          <Dek>
            Radar Emprende reúne datos oficiales sobre empresas por comuna: las sociedades que se crean, su situación
            ante el SII en los años siguientes y los proyectos de Corfo que llegan a cada territorio, con la fuente y los
            límites de cada cifra.
          </Dek>
          <Dek>
            La guía para emprendedores se preparará a partir de entrevistas con dueños de negocios.
          </Dek>
          <Byline>Datos generados el {fechaCorta(CONSTITUCIONES._meta.generado)} · cortes de cada fuente en Metodología</Byline>
          <div className="rc-cover-cta">
            <Link className="rc-cta-primary" to="/empresas-creadas">
              Ver los datos →
            </Link>
            <Link className="rc-cta-ghost" to="/metodologia">
              Metodología
            </Link>
          </div>
        </div>
      </section>

      <section className="rc-block">
        <KpiStrip items={KPIS} />
      </section>

      <Rule weight="hair" />

      <section className="rc-block">
        <SectionTitle kicker="Registro de Empresas y SII">
          Las sociedades creadas en {C0}, según el SII
        </SectionTitle>
        <aside className="rc-cover-fig">
          <div className="rc-bignum">
            <span className="rc-bignum-val">
              {num(c0.pct.en_nomina_2024, 1)}
              <span className="rc-bignum-u">{' '}%</span>
            </span>
            <span className="rc-bignum-cap">
              de las {num(c0.constituidas)} sociedades constituidas en {C0} figura en la nómina de personas jurídicas
              del SII del año comercial 2024
              <span className="rc-bignum-note"> (cruce del Registro de Empresas y Sociedades con el SII; cálculo propio, nivel {COHORTES._meta.nivel})</span>
            </span>
          </div>
          <Rule weight="hair" />
          <p className="rc-cover-hallazgo">
            Otro <strong>{num(c0.pct.termino_giro, 1)} %</strong> tiene término de giro ante el SII y el{' '}
            <strong>{num(c0.pct.fuera_nomina_2024, 1)} %</strong> restante no tiene término de giro ni figura en esa
            nómina. Estar fuera de la nómina no equivale a haber cerrado:{' '}
            <Link to="/cohortes">por qué esto no es una tasa de supervivencia →</Link>
          </p>
          <div className="rc-cover-split">
            <SplitBar
              unit=""
              segments={ESTADOS.map((x) => ({ label: x.label, pct: c0.pct[x.e], value: c0[x.e], color: x.color }))}
            />
          </div>
        </aside>
      </section>

      <Rule weight="hair" />

      <section className="rc-block">
        <SectionTitle kicker="Las series">Dentro del radar</SectionTitle>
        <div className="rc-readmore">
          {SECCIONES.map((c) => (
            <Link key={c.to} to={c.to} className="rc-rmcard">
              <span className="rc-rmcard-t">{c.t}</span>
              <span className="rc-rmcard-d">{c.d}</span>
              <span className="rc-rmcard-go">{c.go}</span>
            </Link>
          ))}
        </div>
      </section>
    </article>
  )
}
