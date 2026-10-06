// src/pages/Corfo.tsx — proyectos Corfo de innovación y emprendimiento por comuna (corfo_comuna.json).
import { Link } from 'react-router-dom'
import { Callout, EditorialTable, KpiStrip, MenorQueN, N_MIN, Nivel, PageHead, Rule, SectionTitle, type Column } from '../components/editorial'
import { ordenar, useFiltroComunas, useOrden } from '../components/FiltroComunas'
import { FUENTES, REPO } from '../data/fuentes'
import { CORFO } from '../data/datos-corfo'
import { fechaCorta, llano, millones, num } from '../data/fechas'

const M = CORFO._meta
const NIVEL = M.nivel === 1 ? 'N1' : 'N2'
const sinComunaTotal = Object.values(M.sin_comuna).reduce((s, n) => s + n, 0)
const fuentes = FUENTES.filter((f) => ['corfo', 'sii-nomina', 'sii-empresas'].includes(f.id))

/** Comunas sin proyectos agrupadas por región (región y orden desde la lista de comunas del mismo JSON). */
const sinProyectos = (() => {
  const set = new Set(CORFO.comunas_sin_proyectos)
  const grupos = new Map<number, { region: string; comunas: string[] }>()
  for (const c of [...CORFO.comunas].sort((a, b) => a.codigo - b.codigo)) {
    if (!set.has(c.comuna)) continue
    const g = grupos.get(c.codigo_region) ?? { region: c.region, comunas: [] }
    g.comunas.push(c.comuna)
    grupos.set(c.codigo_region, g)
  }
  return [...grupos.entries()].sort((a, b) => a[0] - b[0]).map(([, g]) => g)
})()
const listadas = sinProyectos.reduce((s, g) => s + g.comunas.length, 0)

export function Corfo() {
  const { visibles, controles } = useFiltroComunas(CORFO.comunas)
  const { sort, onSort } = useOrden({ key: 'proyectos', dir: 'desc' })
  type F = (typeof visibles)[number]
  const valor = (c: F): number | string => {
    switch (sort.key) {
      case 'comuna': return c.comuna
      case 'tasa': return c.proyectos >= N_MIN ? c.proyectos_por_mil_empresas : -1
      case 'monto': return c.monto_aprobado_corfo
      case 'empresas': return c.empresas_sii_2024
      case 'ley': return c.certificados_ley_id
      case 'micro': return c.proyectos_micro_pequena
      case 'benef': return c.beneficiarios
      default: return c.proyectos
    }
  }
  const filas = ordenar(visibles, valor, sort.dir)

  const columnas: Column[] = [
    { label: 'Comuna', sortKey: 'comuna', align: 'left' },
    { label: 'Región' },
    { label: 'Proyectos con subsidio', sortKey: 'proyectos', align: 'right' },
    { label: 'Beneficiarios', sortKey: 'benef', align: 'right' },
    { label: 'Proyectos de micro y pequeñas', sortKey: 'micro', align: 'right' },
    { label: 'Monto aprobado Corfo (nominal)', sortKey: 'monto', align: 'right' },
    { label: 'Empresas SII 2024', sortKey: 'empresas', align: 'right' },
    { label: 'Proyectos por mil empresas', sortKey: 'tasa', align: 'right' },
    { label: 'Certificados Ley I+D (aparte)', sortKey: 'ley', align: 'right' },
  ]
  const rows = filas.map((c) => [
    c.comuna,
    c.region,
    c.proyectos === 0 ? <span className="rc-cero">0</span> : num(c.proyectos),
    num(c.beneficiarios),
    num(c.proyectos_micro_pequena),
    c.proyectos === 0 ? '—' : millones(c.monto_aprobado_corfo),
    num(c.empresas_sii_2024),
    c.proyectos >= N_MIN ? num(c.proyectos_por_mil_empresas, 2) : <MenorQueN n={c.proyectos} />,
    num(c.certificados_ley_id),
  ])

  return (
    <article className="rc-screen">
      <PageHead
        kicker="Corfo DataInnovación y SII"
        title="A qué comunas llega Corfo"
        dek={M.descripcion}
        byline={`Datos generados el ${fechaCorta(M.generado)} · nivel de afirmación ${M.nivel}`}
      />
      <Rule weight="bold" />

      <Callout variant="warning" title="Antes de leer estas cifras">
        <ul className="rc-limites">
          {M.limites.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </Callout>

      <section className="rc-block">
        <KpiStrip
          items={[
            { valor: num(M.proyectos_en_rango), label: 'Proyectos con subsidio', detalle: 'Entre 2016 y 2025, con o sin comuna asignada.' },
            { valor: num(sinComunaTotal), label: 'Proyectos sin comuna', detalle: 'Beneficiarios sin domicilio vigente en la nómina del SII.' },
            { valor: num(M.comunas_sin_proyectos), label: 'Comunas sin proyectos', detalle: `De ${num(CORFO.comunas.length)} comunas.` },
            { valor: num(M.certificados_ley_id_en_rango), label: 'Certificados Ley I+D', detalle: 'Crédito tributario, no subsidio: se cuentan aparte.' },
          ]}
        />
        <p className="rc-sourcenote">
          Proyectos sin comuna, por tipo de beneficiario:{' '}
          {Object.entries(M.sin_comuna)
            .map(([k, n]) => `${k.toLowerCase().replace('chile', 'Chile')}, ${num(n)}`)
            .join('; ')}
          . Certificados de la Ley I+D sin comuna: {num(M.certificados_ley_id_sin_comuna)}.
        </p>
      </section>

      <section className="rc-block">
        <SectionTitle kicker="Por comuna del domicilio vigente del beneficiario">
          Proyectos por comuna <Nivel nivel={NIVEL} fuente="Cálculo de Radar Emprende" fecha={M.generado} nota="Domicilio vigente a agosto de 2026" />
        </SectionTitle>
        <p className="rc-block-intro">
          La tasa por mil empresas no se calcula en comunas con menos de {N_MIN} proyectos; ahí se muestra el número (n).
        </p>
        {controles}
        <p className="rc-count">{num(filas.length)} comunas</p>
        <EditorialTable
          columns={columnas}
          rows={rows}
          sort={sort}
          onSort={onSort}
          maxRows={40}
          firstCol={{ min: '9rem' }}
          caption="Proyectos Corfo de innovación y emprendimiento por comuna del beneficiario"
        />
      </section>

      <section className="rc-block" id="sin-proyectos">
        <SectionTitle kicker="Ningún beneficiario con domicilio vigente en la comuna obtuvo un proyecto con subsidio entre 2016 y 2025">
          Las {num(CORFO.comunas_sin_proyectos.length)} comunas sin proyectos
        </SectionTitle>
        <ul className="rc-cols">
          {sinProyectos.flatMap((g) => [
            <li key={'r-' + g.region} className="rc-cols-reg">{g.region}</li>,
            ...g.comunas.map((c) => <li key={g.region + c}>{c}</li>),
          ])}
        </ul>
        {listadas !== CORFO.comunas_sin_proyectos.length && (
          <p className="rc-sourcenote rc-cero">
            Aviso: {num(CORFO.comunas_sin_proyectos.length - listadas)} comunas de la lista no calzan con la tabla comunal.
          </p>
        )}
        <p className="rc-sourcenote">
          Una comuna sin proyectos puede tener personas o empresas que ejecutaron proyectos con domicilio en otra comuna, o
          beneficiarios que quedaron sin comuna; ver los límites arriba.
        </p>
      </section>

      <section className="rc-block">
        <p className="rc-sourcenote">
          <b className="rc-src-k">Fuente:</b> {M.fuentes.map(llano).join(' ')} Consultas:{' '}
          {fuentes.map((f, i) => (
            <span key={f.id}>
              {i > 0 && '; '}
              <a href={f.url}>{f.url}</a> ({fechaCorta(f.consulta)})
            </span>
          ))}
          . <a href={`${REPO}/blob/main/datos/corfo_comuna.json`}>Descargar los datos de esta página (repositorio)</a>.{' '}
          <Link to="/metodologia">Metodología →</Link>
        </p>
      </section>
    </article>
  )
}
