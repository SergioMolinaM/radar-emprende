// Primitivos editoriales — tipografía, badges, figuras, KPIs, callouts.
// Estilos en src/styles/editorial.css (clases .rc-*). Portado de rc/ui.jsx.
import type { ReactNode } from 'react'

/* ===== Tipografía ===== */
export function Kicker({ children, accent = true }: { children: ReactNode; accent?: boolean }) {
  return <p className={'rc-kicker' + (accent ? ' is-accent' : '')}>{children}</p>
}

export function Hed({
  children,
  as: Tag = 'h1',
  className = '',
}: {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}) {
  return <Tag className={'rc-hed ' + className}>{children}</Tag>
}

export function Dek({ children }: { children: ReactNode }) {
  return <p className="rc-dek">{children}</p>
}

export function Byline({ children }: { children: ReactNode }) {
  return <p className="rc-byline">{children}</p>
}

export function Rule({ weight = 'hair' }: { weight?: 'hair' | 'bold' }) {
  return <hr className={'rc-rule rc-rule-' + weight} />
}

export function SectionTitle({ kicker, children, alt }: { kicker?: ReactNode; children: ReactNode; alt?: boolean }) {
  return (
    <div className="rc-sectitle">
      {kicker && <span className="rc-sec-kicker">{kicker}</span>}
      <h2 className={'rc-sec-hed' + (alt ? ' is-alt' : '')}>{children}</h2>
    </div>
  )
}

/** Cabecera de pantalla: kicker + título + bajada + byline. */
export function PageHead({
  kicker,
  kickerAccent = true,
  title,
  dek,
  byline,
  children,
}: {
  kicker?: ReactNode
  kickerAccent?: boolean
  title: ReactNode
  dek?: ReactNode
  byline?: ReactNode
  children?: ReactNode
}) {
  return (
    <header className="rc-pagehead rc-anim-in">
      {kicker && <Kicker accent={kickerAccent}>{kicker}</Kicker>}
      <Hed>{title}</Hed>
      {dek && <Dek>{dek}</Dek>}
      {byline && <Byline>{byline}</Byline>}
      {children}
    </header>
  )
}

/* ===== Badge ===== */
type Tone = 'pos' | 'warn' | 'info' | 'neg' | 'mute'
export function Badge({ tone = 'mute', children }: { tone?: Tone; children: ReactNode }) {
  return <span className={'rc-badge rc-badge-' + tone}>{children}</span>
}

// [E38] Se eliminó el componente Verdict ('Cumple'/'No cumple'): estaba sin uso y su
// lenguaje viola el Protocolo de veredictos (R1) — Radar no emite veredictos legales.

/* ===== KPIs ===== */
export interface KpiItem {
  valor: ReactNode
  label: ReactNode
  detalle?: ReactNode
  /** acero azulado para cifras que no salen del registro Minvu (INE, Censo) */
  alt?: boolean
}
export function KpiStrip({ items, cols }: { items: KpiItem[]; cols?: 3 | 4 }) {
  return (
    <div className={'rc-kpis' + (cols === 3 ? ' rc-kpis-3' : '')}>
      {items.map((k, i) => (
        <div className="rc-kpi" key={i}>
          <div className={'rc-kpi-val' + (k.alt ? ' is-alt' : '')}>{k.valor}</div>
          <div className="rc-kpi-label">{k.label}</div>
          {k.detalle != null && <div className="rc-kpi-det">{k.detalle}</div>}
        </div>
      ))}
    </div>
  )
}

/* ===== Figura (gráfico con número, título, fuente) ===== */
export function Figure({
  n,
  title,
  lede,
  source,
  children,
}: {
  n: ReactNode
  title: ReactNode
  lede?: ReactNode
  source?: ReactNode
  children: ReactNode
}) {
  // ancla referenciable: <a className="rc-figref" href="#fig-1">Fig. 1</a>
  const id = typeof n === 'number' || typeof n === 'string' ? `fig-${n}` : undefined
  return (
    <figure className="rc-figure" id={id}>
      <figcaption className="rc-fig-head">
        <span className="rc-fig-n">Fig. {n}</span>
        <span className="rc-fig-title">{title}</span>
      </figcaption>
      {lede && <p className="rc-fig-lede">{lede}</p>}
      <div className="rc-fig-body">{children}</div>
      {source && (
        <p className="rc-fig-src">
          <b className="rc-src-k">Fuente:</b> {source}
        </p>
      )}
    </figure>
  )
}

/* ===== Callout ===== */
export function Callout({
  variant = 'note',
  title,
  children,
}: {
  variant?: 'note' | 'warning' | 'explainer'
  title?: ReactNode
  children: ReactNode
}) {
  return (
    <aside className={'rc-callout rc-callout-' + variant}>
      {title && <p className="rc-callout-title">{title}</p>}
      <div className="rc-callout-body">{children}</div>
    </aside>
  )
}

/* ===== Nota de fuente ===== */
export function SourceNote({ children }: { children: ReactNode }) {
  return <p className="rc-sourcenote">{children}</p>
}
