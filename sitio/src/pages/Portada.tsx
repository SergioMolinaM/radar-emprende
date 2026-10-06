// src/pages/Portada.tsx — portada al modo de Radar Circular: portada, cifras, un hallazgo y el índice.
// Todas las cifras salen de los JSON.
import { Link } from 'react-router-dom'
import { Byline, Columnas, Dek, Hed, Kicker, KpiStrip, Rule, SectionTitle, SplitBar, type KpiItem } from '../components/editorial'
import { CONSTITUCIONES } from '../data/datos-constituciones'
import { COHORTES } from '../data/datos-cohortes'
import { CORFO } from '../data/datos-corfo'
import { ECONOMIA } from '../data/datos-economia'
import { fechaCorta, num } from '../data/fechas'
import { EN_CURSO, PRIMER_ANIO_SOCIOS, TRAMO, mujeresSocios } from '../data/socios'
import type { Estado } from '../data/tipos'

const anios = Object.keys(CONSTITUCIONES.totales_por_anio).sort()
/** Último año completo del archivo; es también el año de la tasa por mil habitantes. */
const ANIO = String(CONSTITUCIONES.corte.anio_tasa)
const total = CONSTITUCIONES.totales_por_anio[ANIO]
const poblacion = CONSTITUCIONES.comunas.reduce((s, c) => s + c.poblacion_censo_2024, 0)
const porMil = (1000 * total) / poblacion
/** Años completos del archivo: 2013 empieza en mayo y el último año llega solo hasta el corte (límites del JSON). */
const aniosCompletos = anios.slice(1, -1)
const A0 = aniosCompletos[0]
/** Sociedades constituidas por escritura en el Diario Oficial (informe mensual de Economía), suma del año. */
const diarioOficial = (a: string) =>
  Object.entries(ECONOMIA.diario_oficial).reduce((s, [k, v]) => (k.startsWith(a) ? s + v : s), 0)
const totalCon = (a: string) => CONSTITUCIONES.totales_por_anio[a] + diarioOficial(a)
/** Años completos en las dos fuentes: el informe de Economía puede ir un mes detrás del Registro. */
const conDO = aniosCompletos.filter((a) => Object.keys(ECONOMIA.diario_oficial).filter((k) => k.startsWith(a)).length === 12)
/** Último año completo en ambas fuentes: el del gráfico y el titular (puede ser anterior a ANIO en enero). */
const ANIO_T = conDO[conDO.length - 1]
const serie = conDO.map((a) => ({
  label: a,
  value: totalCon(a),
  parte: diarioOficial(a),
  highlight: a === ANIO_T,
  rotular: a === ANIO_T,
  texto: `${a}: ${num(totalCon(a))} (${num(CONSTITUCIONES.totales_por_anio[a])} en el Registro y ${num(diarioOficial(a))} en el Diario Oficial)`,
}))
const veces = totalCon(ANIO_T) / totalCon(A0)
const vecesRegistro = CONSTITUCIONES.totales_por_anio[ANIO_T] / CONSTITUCIONES.totales_por_anio[A0]
const cohortes = Object.keys(COHORTES.nacional).sort()
const C0 = cohortes[0]
const c0 = COHORTES.nacional[C0]

const KPIS: KpiItem[] = [
  {
    valor: num(totalCon(ANIO_T)),
    label: `Sociedades constituidas en ${ANIO_T}`,
    detalle: `${num(CONSTITUCIONES.totales_por_anio[ANIO_T])} en el Registro de Empresas y Sociedades y ${num(diarioOficial(ANIO_T))} por escritura en el Diario Oficial · todo el país`,
  },
  {
    valor: num(porMil, 2),
    label: `Sociedades del Registro por cada 1.000 habitantes en ${ANIO}`,
    detalle: 'Constituciones del Registro sobre la población del Censo 2024 (INE) · nacional',
  },
  {
    valor: `${num(mujeresSocios(EN_CURSO, true), 1)} %`,
    label: `De los socios de las sociedades nuevas son mujeres (${TRAMO} de ${EN_CURSO})`,
    detalle: `Informe mensual de creación de empresas del Ministerio de Economía · ${num(mujeresSocios(PRIMER_ANIO_SOCIOS), 1)} % en ${PRIMER_ANIO_SOCIOS}`,
  },
  {
    valor: num(CORFO.comunas_sin_proyectos.length),
    label: 'Comunas sin proyectos de Corfo 2016–2025',
    detalle: `De ${num(CORFO.comunas.length)} · Corfo DataInnovación cruzado con el domicilio vigente en el SII`,
  },
]

const ESTADOS: { e: Estado; label: string; color: string }[] = [
  { e: 'en_nomina_2024', label: 'Figura en la nómina del SII de 2024', color: 'var(--accent)' },
  { e: 'fuera_nomina_2024', label: 'Sin término de giro y fuera de esa nómina', color: 'var(--c5)' },
  { e: 'termino_giro', label: 'Con término de giro ante el SII', color: 'var(--accent-2)' },
]

const SECCIONES = [
  { to: '/empresas-creadas', go: 'Ver la serie →', t: 'Empresas creadas por comuna', d: `Sociedades constituidas en cada comuna, ${anios[0]}–${anios[anios.length - 1]}, y por cada mil habitantes.` },
  { to: '/quien-las-crea', go: 'Ver los datos →', t: 'Quién las crea y con cuánto capital', d: 'Mujeres y extranjeros entre los socios de las sociedades nuevas, y el capital que declaran al constituirse.' },
  { to: '/cohortes', go: 'Ver la serie →', t: 'Qué pasó con las empresas creadas', d: `Las sociedades creadas cada año entre ${cohortes[0]} y ${cohortes[cohortes.length - 1]}, según su situación ante el SII, en todo el país y por comuna.` },
  { to: '/corfo', go: 'Ver la serie →', t: 'A qué comunas llega Corfo', d: 'Proyectos de innovación y emprendimiento por comuna del beneficiario, y las comunas sin ninguno.' },
  { to: '/formales-e-informales', go: 'Ver los datos →', t: 'Formales e informales', d: 'Microemprendedores con y sin registro en el SII por región y rama, y las razones que dan para iniciar actividades o no.' },
  { to: '/metodologia', go: 'Leer la metodología →', t: 'Metodología y fuentes', d: 'Fuentes con fecha de consulta, niveles de afirmación, regla de menos de cinco casos y cómo reproducir el cálculo.' },
]

export function Portada() {
  return (
    <article className="rc-screen">
      <section className="rc-cover rc-anim-in">
        <div className="rc-cover-lead">
          <Kicker>Emprendimiento y pymes · Chile</Kicker>
          <Hed className="rc-cover-hed">
            Las empresas que nacen en cada comuna de Chile
            <span className="rc-cover-ask"> y lo que pasa con ellas.</span>
          </Hed>
          <Dek>
            Radar Emprende reúne datos oficiales sobre las empresas que se crean en Chile: cuántas nacen cada mes y en
            cada comuna, quiénes son sus socios y con cuánto capital parten, su situación ante el SII en los años
            siguientes y los proyectos de Corfo que llegan a cada territorio, con la fuente y los límites de cada cifra.
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
        <aside className="rc-cover-fig" aria-labelledby="fig-portada">
          <p className="rc-cover-fig-k" id="fig-portada">
            Sociedades constituidas por año · todo el país
          </p>
          <p className="rc-cover-fig-cap">
            En {ANIO_T} se constituyeron <strong>{num(totalCon(ANIO_T))}</strong> sociedades, {num(veces, 1)} veces las{' '}
            {num(totalCon(A0))} de {A0}. Contando solo el Registro, el alza es de {num(vecesRegistro, 1)} veces; en esos
            años las constituidas por escritura en el Diario Oficial bajaron de {num(diarioOficial(A0))} a{' '}
            {num(diarioOficial(ANIO_T))}.
          </p>
          <Columnas data={serie} titulo={`Sociedades constituidas por año, Registro de Empresas y Sociedades y Diario Oficial, ${A0} a ${ANIO_T}`} />
          <p className="rc-key" aria-hidden="true">
            <span><i />Registro de Empresas y Sociedades</span>
            <span><i className="is-p" />Diario Oficial (escritura pública)</span>
          </p>
          <p className="rc-sourcenote">
            Registro de Empresas y Sociedades (datos.gob.cl) y Ministerio de Economía (informe mensual de creación de
            empresas, Diario Oficial), años completos {A0}–{ANIO_T}. <Link to="/empresas-creadas">Por comuna y mes a mes →</Link>
          </p>
        </aside>
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
