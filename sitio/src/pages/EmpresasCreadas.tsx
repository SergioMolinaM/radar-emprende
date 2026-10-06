// src/pages/EmpresasCreadas.tsx — sociedades constituidas por comuna (constituciones_comuna.json).
import { Link } from 'react-router-dom'
import { BarsH, Callout, Columnas, EditorialTable, Figure, KpiStrip, MenorQueN, N_MIN, PageHead, Rule, SectionTitle, type Column, type KpiItem } from '../components/editorial'
import { ordenar, useFiltroComunas, useOrden } from '../components/FiltroComunas'
import { FUENTES, REPO } from '../data/fuentes'
import { CONSTITUCIONES } from '../data/datos-constituciones'
import { ECONOMIA } from '../data/datos-economia'
import { fechaCorta, llano, num } from '../data/fechas'

const M = CONSTITUCIONES._meta
/** Los límites que cambian la lectura de la cifra van a la vista; el resto, en Metodología. Si el JSON cambia
 *  la redacción y alguno no se encuentra, se muestran todos. */
const CLAVE_LIMITES = ['Solo sociedades', 'La comuna es', 'El mes es']
const elegidos = CLAVE_LIMITES.map((c) => M.limites.find((l) => l.startsWith(c)))
const LIMITES_VISIBLES = elegidos.every(Boolean) ? (elegidos as string[]) : M.limites
const anios = Object.keys(CONSTITUCIONES.totales_por_anio).sort()
/** El primer y el último año del archivo son parciales (ver los límites que declara el archivo). */
const parciales = new Set([anios[0], anios[anios.length - 1]])
/** Último año completo del archivo: el de la tasa por mil habitantes. */
const ANIO_TASA = String(CONSTITUCIONES.corte.anio_tasa)
const RES = FUENTES.find((f) => f.id === 'res')!

const etiqueta = (a: string) => (parciales.has(a) ? `${a}*` : a)

/* ----- Mes a mes: el último mes publicado contra el mismo mes del año anterior ----- */
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
const K = CONSTITUCIONES.corte
const clave = (anio: number, mes: number) => `${anio}-${String(mes).padStart(2, '0')}`
const nombreMes = (k: string) => `${MESES[Number(k.slice(5)) - 1]} de ${k.slice(0, 4)}`
const ULTIMO = clave(K.anio, K.mes)
const PREVIO = clave(K.anio - 1, K.mes)
const AC = CONSTITUCIONES.acumulado
const tramo = AC.meses === 1 ? 'enero' : `enero a ${MESES[AC.meses - 1]}`
const variacion = (a: number, b: number) => (b > 0 ? (100 * (a - b)) / b : null)
const conSigno = (v: number | null) => (v === null ? '—' : `${v > 0 ? '+' : v < 0 ? '−' : ''}${num(Math.abs(v), 1)} %`)
const claves = Object.keys(CONSTITUCIONES.mensual).sort()
/** Los últimos 25 meses: el mes del corte y el mismo mes del año anterior quedan en los extremos. */
const ventana = claves.slice(-25)
const SERIE_MES = ventana.map((k) => ({
  label: nombreMes(k),
  eje: k.endsWith('-01') ? `’${k.slice(2, 4)}` : MESES[Number(k.slice(5)) - 1][0].toUpperCase(),
  value: CONSTITUCIONES.mensual[k],
  highlight: k === ULTIMO,
  rotular: k === ULTIMO || k === PREVIO,
}))
/** Diario Oficial en el mismo tramo del año en curso, si el informe de Economía llega hasta el corte del Registro. */
const doAcumulado = Array.from({ length: AC.meses }, (_, i) => ECONOMIA.diario_oficial[clave(AC.anio, i + 1)] ?? 0).reduce((a, b) => a + b, 0)
const doCubre = ECONOMIA.corte.anio * 12 + ECONOMIA.corte.mes >= AC.anio * 12 + AC.meses
const KPIS_MES: KpiItem[] = [
  {
    valor: num(CONSTITUCIONES.mensual[ULTIMO]),
    label: `Sociedades constituidas en ${nombreMes(ULTIMO)}`,
    detalle: `${conSigno(variacion(CONSTITUCIONES.mensual[ULTIMO], CONSTITUCIONES.mensual[PREVIO] ?? 0))} respecto de ${nombreMes(PREVIO)} (${num(CONSTITUCIONES.mensual[PREVIO] ?? 0)})`,
  },
  {
    valor: num(AC.valor),
    label: `De ${tramo} de ${AC.anio}`,
    detalle: `${conSigno(variacion(AC.valor, AC.valor_anterior))} respecto de los mismos meses de ${AC.anio_anterior} (${num(AC.valor_anterior)}).${doCubre ? ` Aparte, ${num(doAcumulado)} por escritura en el Diario Oficial (informe de Economía).` : ''}`,
  },
  {
    valor: fechaCorta(K.publicado),
    label: 'Publicación del archivo usado',
    detalle: 'El Registro publica el archivo del año en curso cerca de una vez al mes. Las cifras de esta página usan el archivo de esa fecha.',
    alt: true,
  },
]
const REGIONES = [...new Map(CONSTITUCIONES.comunas.map((c) => [String(c.codigo_region), c.region])).entries()]
  .sort((a, b) => Number(a[0]) - Number(b[0]))
const sumaRegion = (r: string, anio: number) =>
  Array.from({ length: AC.meses }, (_, i) => CONSTITUCIONES.mensual_region[r]?.[clave(anio, i + 1)] ?? 0).reduce((x, y) => x + y, 0)

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
    sort.key === 'comuna' ? c.comuna : sort.key === 'tasa' ? (c.constituciones[ANIO_TASA] >= N_MIN ? c.por_mil_hab : -1) : sort.key === 'pob' ? c.poblacion_censo_2024 : c.constituciones[sort.key] ?? 0
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
    c.constituciones[ANIO_TASA] >= N_MIN ? num(c.por_mil_hab, 2) : <MenorQueN n={c.constituciones[ANIO_TASA]} />,
  ])

  const filasRegion = REGIONES.map(([r, nombre]) => {
    const mr = CONSTITUCIONES.mensual_region[r] ?? {}
    const a = sumaRegion(r, AC.anio)
    const b = sumaRegion(r, AC.anio_anterior)
    return [
      nombre,
      num(mr[ULTIMO] ?? 0),
      num(mr[PREVIO] ?? 0),
      num(a),
      num(b),
      a >= N_MIN && b >= N_MIN ? conSigno(variacion(a, b)) : <MenorQueN n={Math.min(a, b)} />,
    ]
  })

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
          {LIMITES_VISIBLES.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
        {LIMITES_VISIBLES.length < M.limites.length && (
          <p>
            <Link to="/metodologia#constituciones_comuna">Los demás límites de esta serie, en Metodología →</Link>
          </p>
        )}
      </Callout>

      <section className="rc-block">
        <SectionTitle kicker={`Último mes publicado: ${nombreMes(ULTIMO)}`}>Mes a mes</SectionTitle>
        <KpiStrip items={KPIS_MES} cols={3} />
        <Figure
          n={1}
          title="Sociedades constituidas por mes, todo el país"
          lede={`Últimos 25 meses, de ${nombreMes(ventana[0])} a ${nombreMes(ULTIMO)}. Mes de aprobación del SII. Los meses tienen distinto número de días hábiles: la comparación útil es con el mismo mes del año anterior.`}
          source={
            <>
              {M.fuente} <a href={RES.url}>{RES.url}</a>, archivo publicado el {fechaCorta(K.publicado)} y consultado el {fechaCorta(RES.consulta)}.
            </>
          }
        >
          <Columnas corto data={SERIE_MES} titulo={`Sociedades constituidas por mes, ${nombreMes(ventana[0])} a ${nombreMes(ULTIMO)}`} />
        </Figure>
        <EditorialTable
          columns={[
            { label: 'Región', align: 'left' },
            { label: nombreMes(ULTIMO), align: 'right' },
            { label: nombreMes(PREVIO), align: 'right' },
            { label: `${tramo[0].toUpperCase()}${tramo.slice(1)} ${AC.anio}`, align: 'right' },
            { label: `${tramo[0].toUpperCase()}${tramo.slice(1)} ${AC.anio_anterior}`, align: 'right' },
            { label: 'Variación', align: 'right' },
          ]}
          rows={filasRegion}
          stack
          firstCol={{ min: '10rem' }}
          caption={`Sociedades constituidas por región tributaria: último mes y acumulado del año contra el mismo periodo de ${AC.anio_anterior}`}
        />
      </section>

      <section className="rc-block">
        <Figure
          n={2}
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
              color: parciales.has(a) ? 'var(--c5)' : 'var(--ink)',
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
