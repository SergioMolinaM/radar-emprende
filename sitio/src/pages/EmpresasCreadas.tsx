// src/pages/EmpresasCreadas.tsx — sociedades constituidas por comuna (constituciones_comuna.json).
import { Link } from 'react-router-dom'
import { BarsH, Callout, EditorialTable, Figure, MenorQueN, N_MIN, PageHead, Rule, SectionTitle, type Column } from '../components/editorial'
import { ordenar, useFiltroComunas, useOrden } from '../components/FiltroComunas'
import { CONSTITUCIONES, FUENTES, REPO } from '../data/fuentes'
import { fechaCorta, llano, num } from '../data/fechas'

const M = CONSTITUCIONES._meta
const anios = Object.keys(CONSTITUCIONES.totales_por_anio).sort()
/** El primer y el último año del archivo son parciales (ver los límites que declara el archivo). */
const parciales = new Set([anios[0], anios[anios.length - 1]])
/** Año del campo por_mil_hab_2025 del JSON. */
const ANIO_TASA = '2025'
const RES = FUENTES.find((f) => f.id === 'res')!

const etiqueta = (a: string) => (parciales.has(a) ? `${a}*` : a)

function Spark({ serie }: { serie: Record<string, number> }) {
  const max = Math.max(...anios.map((a) => serie[a] ?? 0), 1)
  return (
    <span className="rc-spark" aria-hidden="true">
      {anios.map((a) => (
        <i key={a} className={parciales.has(a) ? 'is-parcial' : undefined} style={{ height: `${Math.max(1, (20 * (serie[a] ?? 0)) / max)}px` }} />
      ))}
    </span>
  )
}

export function EmpresasCreadas() {
  const { visibles, controles } = useFiltroComunas(CONSTITUCIONES.comunas)
  const { sort, onSort } = useOrden({ key: ANIO_TASA, dir: 'desc' })
  const valor = (c: (typeof visibles)[number]): number | string =>
    sort.key === 'comuna' ? c.comuna : sort.key === 'tasa' ? (c.constituciones[ANIO_TASA] >= N_MIN ? c.por_mil_hab_2025 : -1) : sort.key === 'pob' ? c.poblacion_censo_2024 : c.constituciones[sort.key] ?? 0
  const filas = ordenar(visibles, valor, sort.dir)

  const columnas: Column[] = [
    { label: 'Comuna', sortKey: 'comuna', align: 'left' },
    { label: 'Región' },
    { label: `Serie ${anios[0]}–${anios[anios.length - 1]}`, labelText: 'Serie' },
    ...anios.map((a): Column => ({ label: etiqueta(a), sortKey: a, align: 'right' })),
    { label: 'Población Censo 2024', sortKey: 'pob', align: 'right' },
    { label: `Por mil hab. ${ANIO_TASA}`, sortKey: 'tasa', align: 'right' },
  ]
  const rows = filas.map((c) => [
    c.comuna,
    c.region,
    <Spark serie={c.constituciones} />,
    ...anios.map((a) => num(c.constituciones[a] ?? 0)),
    num(c.poblacion_censo_2024),
    c.constituciones[ANIO_TASA] >= N_MIN ? num(c.por_mil_hab_2025, 2) : <MenorQueN n={c.constituciones[ANIO_TASA]} />,
  ])

  return (
    <article className="rc-screen">
      <PageHead
        kicker="Registro de Empresas y Sociedades"
        title="Empresas creadas por comuna"
        dek={M.descripcion}
        byline={`Datos generados el ${fechaCorta(M.generado)}`}
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
        <Figure
          n={1}
          title="Sociedades constituidas por año, todo el país"
          lede={`Los años marcados con * están incompletos y no se comparan con los demás.`}
          source={
            <>
              {M.fuente} <a href={RES.url}>{RES.url}</a>, consultado el {fechaCorta(RES.consulta)}.
            </>
          }
        >
          <BarsH
            unit=""
            data={anios.map((a) => ({
              label: etiqueta(a),
              value: CONSTITUCIONES.totales_por_anio[a],
              color: parciales.has(a) ? 'var(--c2)' : 'var(--ink)',
            }))}
          />
        </Figure>
      </section>

      <section className="rc-block">
        <SectionTitle kicker="Comuna tributaria: el domicilio ante el SII, que puede no ser donde opera el negocio">
          Por comuna
        </SectionTitle>
        <p className="rc-block-intro">
          La tasa por mil habitantes no se calcula en comunas con menos de {N_MIN} sociedades en {ANIO_TASA}; ahí se
          muestra el número (n). Los años con * están incompletos.
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
          caption="Sociedades constituidas por comuna tributaria y año de aprobación del SII"
        />
        <p className="rc-sourcenote">
          <b className="rc-src-k">Fuente:</b> {M.fuente} Método: {llano(M.metodo)} <a href={`${REPO}/blob/main/datos/constituciones_comuna.json`}>Descargar los datos de esta página (repositorio)</a>.{' '}
          <Link to="/metodologia">Metodología →</Link>
        </p>
      </section>
    </article>
  )
}
