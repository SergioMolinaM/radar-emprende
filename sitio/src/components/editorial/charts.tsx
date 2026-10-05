// Gráficos editoriales. Las barras van en HTML (el texto es texto: legible en móvil, seleccionable,
// con separador decimal chileno); solo la serie temporal usa SVG, con viewBox angosto en pantallas chicas.
import { useEffect, useState, type KeyboardEvent } from 'react'

const fmt = (n: number, d = 1) => n.toLocaleString('es-CL', { maximumFractionDigits: d })
/** Porcentajes: siempre un decimal (35,0 %). */
const fmt1 = (n: number) => n.toLocaleString('es-CL', { minimumFractionDigits: 1, maximumFractionDigits: 1 })

/** true bajo 680 px; se usa para elegir un viewBox angosto en los SVG. */
function useCompact() {
  const [c, setC] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 680px)').matches)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 680px)')
    const on = (e: MediaQueryListEvent) => setC(e.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return c
}

/* ---------- Barra 100 % partida + leyenda ---------- */
export interface SplitSegment {
  label: string
  pct: number
  value: number
  color: string
}
/** `unit`: sufijo fijo (' m²') o función que pluraliza según el valor ((n) => n === 1 ? ' planta' : ' plantas'). */
export type Unit = string | ((n: number) => string)
const unitOf = (u: Unit, n: number) => (typeof u === 'function' ? u(n) : u)

export function SplitBar({ segments, unit = '' }: { segments: SplitSegment[]; unit?: Unit }) {
  const total = segments.reduce((s, x) => s + x.value, 0)
  return (
    <div>
      <div className="rc-split" role="img" aria-label={segments.map((s) => `${s.label} ${fmt1(s.pct)} %`).join(', ')}>
        {segments.map((s) => (
          <div key={s.label} className="rc-split-seg" style={{ width: `${(100 * s.value) / total}%`, background: s.color }} />
        ))}
      </div>
      <ul className="rc-legend">
        {segments.map((s) => (
          <li key={s.label}>
            <i style={{ background: s.color }} />
            <b style={{ whiteSpace: 'nowrap' }}>{fmt1(s.pct)} %</b> {s.label} ({fmt(s.value, 0)}{unitOf(unit, s.value)})
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ---------- Barras horizontales (ranking) ---------- */
export interface BarDatum {
  label: string
  value: number
  color?: string
  highlight?: boolean
}
/* Rellenos sobre los que el rótulo blanco alcanza ≥ 4,5:1 (paleta «Diario», medidos): negro 18,9:1, rojo 5,9:1, gris --c4 6,9:1.
   Con cualquier otro relleno (--c2 1,9:1, --c5 3,5:1, escala --seq-2 a --seq-5) el rótulo va fuera de la barra, en tinta. */
const DARK_FILLS = new Set(['var(--ink)', 'var(--accent)', 'var(--accent-2)', 'var(--seq-1)', 'var(--c1)', 'var(--c3)', 'var(--c4)', 'var(--pos)', 'var(--warn)', 'var(--neg)', 'var(--signal)'])

export function BarsH({ data, max, unit = '%' }: { data: BarDatum[]; max?: number; unit?: Unit }) {
  // 1,25: la barra más larga ocupa el 80 % de la pista y deja sitio al rótulo cuando va fuera (medido a 320 y 390 px).
  const mx = max || Math.max(...data.map((d) => d.value)) * 1.25
  return (
    <ol className="rc-bars">
      {data.map((d) => {
        const w = Math.max(0.4, (100 * d.value) / mx)
        const fill = d.highlight ? 'var(--accent)' : d.color || 'var(--ink)'
        const dentro = w > 22 && DARK_FILLS.has(fill)
        return (
          <li key={d.label} className={'rc-bar' + (d.highlight ? ' is-hi' : '')}>
            <span className="rc-bar-l">{d.label}</span>
            <span className="rc-bar-t">
              <span className="rc-bar-f" style={{ width: `${w}%`, background: fill }} />
              <span className={'rc-bar-v' + (dentro ? ' is-in' : '')} style={{ left: `${w}%` }}>
                {typeof unit === 'string' && unit.includes('%') ? fmt1(d.value) : fmt(d.value)}{unitOf(unit, d.value)}
              </span>
            </span>
          </li>
        )
      })}
    </ol>
  )
}

/* ---------- Líneas en el tiempo (etiqueta al final) ---------- */
export interface LineSeries {
  name: string
  /** null = sin dato en ese año (la línea empieza o termina donde hay dato). */
  values: (number | null)[]
  color: string
  width?: number
  dash?: string
}
export function LineMetas({
  series,
  years,
  yMax = 100,
  unit = '%',
  title,
}: {
  series: LineSeries[]
  years: (number | string)[]
  yMax?: number
  unit?: string
  title: string
}) {
  const compact = useCompact()
  const W = compact ? 400 : 760,
    H = compact ? 260 : 380,
    padL = 44,
    padR = compact ? 96 : 132,
    padT = 24,
    padB = 40
  const iw = W - padL - padR,
    ih = H - padT - padB
  const xs = (i: number) => padL + (i / (years.length - 1)) * iw
  const ys = (v: number) => padT + ih - (v / yMax) * ih
  const step = yMax <= 10 ? 2.5 : yMax <= 20 ? 5 : 25
  const grid: number[] = []
  for (let g = 0; g <= yMax; g += step) grid.push(g)
  const GAP = 30
  const puntos = (s: LineSeries) => s.values.flatMap((v, i) => (v == null ? [] : [{ i, v }]))
  const labs = series
    .filter((s) => puntos(s).length > 0)
    .map((s) => {
      const u = puntos(s).at(-1)!
      return { name: s.name, color: s.color, last: u.v, y: ys(u.v) }
    })
    .sort((a, b) => a.y - b.y)
  for (let i = 1; i < labs.length; i++) if (labs[i].y - labs[i - 1].y < GAP) labs[i].y = labs[i - 1].y + GAP
  const over = labs.length ? Math.max(0, labs[labs.length - 1].y - (padT + ih)) : 0
  const labels = over > 0 ? labs.map((l) => ({ ...l, y: l.y - over })) : labs
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="rc-chart" preserveAspectRatio="xMidYMid meet" role="img" aria-label={title}>
      <title>{title}</title>
      {grid.map((g) => (
        <g key={g}>
          <line x1={padL} y1={ys(g)} x2={W - padR} y2={ys(g)} stroke="var(--line)" strokeWidth="1" opacity={g === 0 ? 0.9 : 0.45} />
          <text x={padL - 10} y={ys(g)} className="rc-ax" textAnchor="end" dominantBaseline="middle">
            {unit.includes('%') ? fmt1(g) : fmt(g)}{unit}
          </text>
        </g>
      ))}
      {years.map((yr, i) => (
        <text key={`${yr}-${i}`} x={xs(i)} y={H - padB + 20} className="rc-ax" textAnchor="middle">
          {String(yr)}
        </text>
      ))}
      {series.map((s) => {
        const p = puntos(s)
        if (!p.length) return null
        const u = p[p.length - 1]
        return (
          <g key={s.name}>
            <polyline points={p.map(({ i, v }) => `${xs(i)},${ys(v)}`).join(' ')} fill="none" stroke={s.color} strokeWidth={s.width || 2.5} strokeDasharray={s.dash || 'none'} strokeLinejoin="round" strokeLinecap="round" />
            {p.map(({ i, v }) => (
              <circle key={i} cx={xs(i)} cy={ys(v)} r={i === u.i ? 3.5 : 2.2} fill={s.color} />
            ))}
          </g>
        )
      })}
      {labels.map((l) => (
        <g key={l.name}>
          <text x={W - padR + 10} y={l.y - 6} className="rc-lbl" dominantBaseline="middle" style={{ fill: l.color, fontWeight: 600, fontSize: '12.5px' }}>
            {l.name}
          </text>
          <text x={W - padR + 10} y={l.y + 9} className="rc-ax" dominantBaseline="middle" style={{ fill: l.color, opacity: 0.9 }}>
            {l.last.toLocaleString('es-CL', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}{unit}
          </text>
        </g>
      ))}
    </svg>
  )
}

/* ---------- Columnas por año (una serie) ---------- */
export interface ColDatum {
  label: string
  value: number
  highlight?: boolean
  /** Muestra la cifra sobre la columna. Se rotulan pocas: el resto queda en el título emergente. */
  rotular?: boolean
  /** Rótulo corto del eje; por omisión, el año abreviado (’25). */
  eje?: string
  /** Parte de `value` que se pinta como segmento inferior en otro tono (columnas apiladas). */
  parte?: number
  /** Texto para el título emergente y lectores de pantalla; por omisión, «etiqueta: valor». */
  texto?: string
}
/** Columnas en HTML: una serie, sin leyenda (el título la nombra). Cada columna lleva su cifra en el título emergente,
 *  en el foco y para lectores de pantalla. Teclado: una sola parada de tabulación; las flechas recorren las columnas. */
/** `corto`: rótulos de eje de una o tres letras (meses); quedan centrados también en las columnas de los extremos. */
export function Columnas({ data, titulo, corto = false, decimales = 0, sufijo = '' }: { data: ColDatum[]; titulo: string; corto?: boolean; decimales?: number; sufijo?: string }) {
  const f = (v: number) => `${fmt(v, decimales)}${sufijo}`
  const mx = Math.max(...data.map((d) => d.value))
  const [activa, setActiva] = useState(data.length - 1)
  const mover = (e: KeyboardEvent<HTMLOListElement>) => {
    const paso = { ArrowRight: 1, ArrowLeft: -1, Home: -data.length, End: data.length }[e.key]
    if (paso === undefined) return
    e.preventDefault()
    const i = Math.min(data.length - 1, Math.max(0, activa + paso))
    setActiva(i)
    ;(e.currentTarget.children[i] as HTMLElement).focus()
  }
  return (
    <ol className={'rc-colchart' + (corto ? ' is-corto' : '')} aria-label={titulo} onKeyDown={mover}>
      {data.map((d, i) => (
        <li
          key={d.label}
          className={'rc-col' + (d.highlight ? ' is-hi' : '') + (d.eje?.startsWith('’') ? ' is-marca' : '')}
          title={d.texto ?? `${d.label}: ${f(d.value)}`}
          tabIndex={i === activa ? 0 : -1}
          onFocus={() => setActiva(i)}
        >
          <span className="rc-col-t">
            <span className="rc-col-f" style={{ height: `${(100 * d.value) / mx}%` }}>
              {d.parte != null && <span className="rc-col-p" style={{ height: `${(100 * d.parte) / d.value}%` }} />}
              <span className={'rc-col-v' + (d.rotular ? ' is-on' : '')} aria-hidden="true">{f(d.value)}</span>
            </span>
          </span>
          <span className="rc-col-l" aria-hidden="true">{d.eje ?? `’${d.label.slice(2)}`}</span>
          <span className="rc-sr">{d.texto ?? `${d.label}: ${f(d.value)}`}</span>
        </li>
      ))}
    </ol>
  )
}
