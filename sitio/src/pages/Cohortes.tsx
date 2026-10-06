// src/pages/Cohortes.tsx — estado de las sociedades creadas cada año (cohortes_comuna.json).
// Regla n < 5: con menos de 5 sociedades en la cohorte de una comuna se muestran números, no porcentajes.
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Callout, EditorialTable, Figure, MenorQueN, Multiples, N_MIN, Nivel, PageHead, Pct, Rule, SectionTitle, SplitBar, type Column } from '../components/editorial'
import { ordenar, useFiltroComunas, useOrden } from '../components/FiltroComunas'
import { FUENTES, REPO } from '../data/fuentes'
import { COHORTES } from '../data/datos-cohortes'
import { fechaCorta, llano, num } from '../data/fechas'
import type { Cohorte, Estado } from '../data/tipos'

const M = COHORTES._meta
const NIVEL = M.nivel === 1 ? 'N1' : 'N2'
const cohortes = Object.keys(COHORTES.nacional).sort()
const aniosComerciales = [...new Set(cohortes.flatMap((c) => Object.keys(COHORTES.nacional[c].en_nomina_por_anio_comercial)))].sort()
const ultimoComercial = aniosComerciales[aniosComerciales.length - 1]
const ORDEN: Estado[] = ['en_nomina_2024', 'fuera_nomina_2024', 'termino_giro']
const NOMBRE: Record<Estado, string> = {
  en_nomina_2024: 'En la nómina 2024',
  fuera_nomina_2024: 'Fuera de la nómina 2024',
  termino_giro: 'Con término de giro',
}
const COLOR: Record<Estado, string> = {
  en_nomina_2024: 'var(--accent)',
  fuera_nomina_2024: 'var(--c5)',
  termino_giro: 'var(--signal)',
}
const fuentesSii = FUENTES.filter((f) => f.id === 'res' || f.id === 'sii-nomina')

function CeldaEstado({ c, e }: { c: Cohorte; e: Estado }) {
  return (
    <>
      {num(c[e])}
      {c.constituidas >= N_MIN && c[e] >= N_MIN && (
        <span className="rc-nmenor"> · <Pct parte={c[e]} total={c.constituidas} /></span>
      )}
    </>
  )
}

export function Cohortes() {
  const [cohorte, setCohorte] = useState(cohortes[0])
  const { visibles, controles } = useFiltroComunas(COHORTES.comunas)
  const { sort, onSort } = useOrden({ key: 'constituidas', dir: 'desc' })
  const de = (x: (typeof visibles)[number]): Cohorte =>
    x.cohortes[cohorte] ?? { constituidas: 0, termino_giro: 0, en_nomina_2024: 0, fuera_nomina_2024: 0 }
  const valor = (x: (typeof visibles)[number]): number | string => {
    if (sort.key === 'comuna') return x.comuna
    const c = de(x)
    if (sort.key === 'constituidas') return c.constituidas
    const e = sort.key as Estado
    return c[e] / c.constituidas
  }
  // Al ordenar por estado, las filas sin porcentaje (base o parte < 5) van al final, ordenadas por número.
  const sinTasa = (x: (typeof visibles)[number]) => {
    if (sort.key === 'comuna' || sort.key === 'constituidas') return false
    const c = de(x)
    return c.constituidas < N_MIN || c[sort.key as Estado] < N_MIN
  }
  const filas = [
    ...ordenar(visibles.filter((x) => !sinTasa(x)), valor, sort.dir),
    ...ordenar(visibles.filter(sinTasa), (x) => de(x)[sort.key as Estado] ?? 0, 'desc'),
  ]

  const columnas: Column[] = [
    { label: 'Comuna', sortKey: 'comuna', align: 'left' },
    { label: 'Región' },
    { label: `Creadas en ${cohorte}`, sortKey: 'constituidas', align: 'right' },
    ...ORDEN.map((e): Column => ({ label: NOMBRE[e], sortKey: e, align: 'right' })),
  ]
  const rows = filas.map((x) => {
    const c = de(x)
    return [
      x.comuna,
      x.region,
      c.constituidas < N_MIN ? <MenorQueN n={c.constituidas} /> : num(c.constituidas),
      ...ORDEN.map((e) => <CeldaEstado c={c} e={e} />),
    ]
  })

  return (
    <article className="rc-screen">
      <PageHead
        kicker="Registro de Empresas y Sociedades y SII"
        title="Qué pasó con las empresas creadas cada año"
        dek={M.descripcion}
        byline={`Datos generados el ${fechaCorta(M.generado)} · nivel de afirmación ${M.nivel}`}
      />
      <Rule weight="bold" />

      <Callout variant="warning" title="Esto no es una tasa de supervivencia">
        <p>
          <strong>{M.limites[0]}</strong>
        </p>
        <p>{M.limites[1]}</p>
      </Callout>

      <section className="rc-block">
        <SectionTitle kicker="Qué significa cada estado, según el cruce con el SII">Los tres estados</SectionTitle>
        <ul className="rc-legend" style={{ flexDirection: 'column', gap: 6 }}>
          {ORDEN.map((e) => (
            <li key={e}>
              <i style={{ background: COLOR[e] }} />
              <span><strong>{NOMBRE[e]}.</strong> {M.estados[e]}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rc-block">
        <Figure
          n={1}
          title={<>Situación de las sociedades creadas cada año, todo el país <Nivel nivel={NIVEL} fuente="Cálculo de Radar Emprende" fecha={M.generado} nota="Ver límites" /></>}
          lede="Sociedades constituidas en cada año, según su situación ante el SII a la fecha de los datos."
          source={<>{M.fuentes.map(llano).join(' ')} Cálculo de Radar Emprende.</>}
        >
          {cohortes.map((a) => {
            const n = COHORTES.nacional[a]
            return (
              <div key={a} style={{ marginBottom: 14 }}>
                <p className="rc-count" style={{ color: 'var(--ink)' }}>
                  Creadas en {a} · {num(n.constituidas)} sociedades
                </p>
                <SplitBar
                  segments={ORDEN.map((e) => ({ label: NOMBRE[e], pct: n.pct[e], value: n[e], color: COLOR[e] }))}
                  unit=""
                />
              </div>
            )
          })}
        </Figure>
      </section>

      <section className="rc-block">
        <Figure
          n={2}
          title={<>Parte de las sociedades creadas cada año que figura en la nómina del SII, por año comercial <Nivel nivel={NIVEL} fuente="Cálculo de Radar Emprende" fecha={M.generado} /></>}
          lede="Porcentaje de las sociedades constituidas cada año que aparece en la nómina de personas jurídicas de cada año comercial. Un panel por año de creación, todos con la misma escala; cada línea empieza en el año en que se crearon las sociedades."
          source={<>{llano(M.fuentes[2])} {llano(M.fuentes[0])} Cálculo de Radar Emprende.</>}
        >
          <Multiples
            titulo="Porcentaje de las sociedades creadas cada año en la nómina del SII, por año comercial"
            anios={aniosComerciales}
            paneles={cohortes.map((a) => {
              const n = COHORTES.nacional[a]
              return {
                titulo: `Creadas en ${a}`,
                valores: aniosComerciales.map((y) => {
                  const v = n.en_nomina_por_anio_comercial[y]
                  return v == null || v < N_MIN || n.constituidas < N_MIN ? null : (100 * v) / n.constituidas
                }),
              }
            })}
          />
          <p className="rc-fig-lede" style={{ marginTop: 12 }}>
            Esta figura y la Fig. 1 usan definiciones distintas. Aquí cuenta toda sociedad que figura en la nómina de cada
            año comercial, aunque después haya hecho término de giro. En la Fig. 1, «en la nómina 2024» cuenta solo a las
            que figuran en esa nómina y no tienen término de giro. Por eso las sociedades creadas en {cohortes[0]} dan{' '}
            {num((100 * COHORTES.nacional[cohortes[0]].en_nomina_por_anio_comercial[ultimoComercial]) / COHORTES.nacional[cohortes[0]].constituidas, 1)} % en {ultimoComercial} aquí y{' '}
            {num(COHORTES.nacional[cohortes[0]].pct.en_nomina_2024, 1)} % en la Fig. 1.
          </p>
          <EditorialTable
            caption="Sociedades creadas cada año que figuran en la nómina del SII, por año comercial"
            columns={[{ label: 'Creadas en', align: 'left' }, { label: 'Constituidas', align: 'right' }, ...aniosComerciales.map((y): Column => ({ label: `Año com. ${y}`, align: 'right' }))]}
            rows={cohortes.map((a) => {
              const n = COHORTES.nacional[a]
              return [
                a,
                num(n.constituidas),
                ...aniosComerciales.map((y) => {
                  const v = n.en_nomina_por_anio_comercial[y]
                  return v == null ? '—' : v < N_MIN || n.constituidas < N_MIN ? num(v) : <>{num(v)} <span className="rc-nmenor">· <Pct parte={v} total={n.constituidas} /></span></>
                }),
              ]
            })}
          />
        </Figure>
      </section>

      <section className="rc-block">
        <SectionTitle kicker="Comuna tributaria al constituirse; la sociedad pudo cambiar de domicilio después">
          Por comuna
        </SectionTitle>
        <p className="rc-block-intro">
          Cada celda trae el número de sociedades y, cuando tanto la comuna como el grupo tienen {N_MIN} sociedades o más, el porcentaje. Con menos
          de {N_MIN} se muestra solo el número (n).
        </p>
        <div className="rc-filters">
          <span className="rc-filter-group">
            <span className="rc-filter-lbl">Año de creación</span>
            {cohortes.map((a) => (
              <button key={a} type="button" className="rc-filter" aria-pressed={a === cohorte} onClick={() => setCohorte(a)}>
                {a}
              </button>
            ))}
          </span>
        </div>
        {controles}
        <p className="rc-count">{num(filas.length)} comunas · creadas en {cohorte}</p>
        <EditorialTable
          columns={columnas}
          rows={rows}
          sort={sort}
          onSort={onSort}
          maxRows={40}
          firstCol={{ min: '9rem' }}
          caption={`Situación de las sociedades creadas en ${cohorte}, por comuna`}
        />
        <div className="rc-notas">
          <p className="rc-notas-t">Otros límites de esta serie</p>
          <ol>
            {M.limites.slice(2).map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ol>
        </div>
        <p className="rc-sourcenote">
          <b className="rc-src-k">Fuente:</b>{' '}
          {fuentesSii.map((f, i) => (
            <span key={f.id}>
              {i > 0 && '; '}
              {f.nombre}, <a href={f.url}>{f.url}</a>, consultado el {fechaCorta(f.consulta)}
            </span>
          ))}
          . <a href={`${REPO}/blob/main/datos/cohortes_comuna.json`}>Descargar los datos de esta página (repositorio)</a>.{' '}
          <Link to="/metodologia">Metodología →</Link>
        </p>
      </section>
    </article>
  )
}
