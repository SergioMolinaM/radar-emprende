// src/components/Sidebar.tsx — barra lateral oscura editorial (familia Radar).
// Cajón lateral en ≤860px. Estilos .rc-side* en styles/editorial.css.
import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RadarMark } from './editorial/RadarMark'

interface NavItem {
  to: string
  label: string
  updatedAt?: string
}

const NAV_EXPLORAR: NavItem[] = [
  { to: '/empresas-creadas', label: 'Empresas creadas por comuna' },
  { to: '/quien-las-crea', label: 'Quién las crea y con cuánto capital' },
  { to: '/cohortes', label: 'Qué pasó con las empresas creadas' },
  { to: '/corfo', label: 'A qué comunas llega Corfo' },
  { to: '/formales-e-informales', label: 'Formales e informales' },
]
const NAV_REF: NavItem[] = [
  { to: '/metodologia', label: 'Metodología y fuentes' },
  { to: '/acerca', label: 'Acerca' },
]

const linkClass = ({ isActive }: { isActive: boolean }, extra = '') =>
  'rc-sidelink' + extra + (isActive ? ' is-active' : '')

const BADGE_DAYS = 30
const isRecent = (d?: string) => !!d && Date.now() - new Date(d).getTime() < BADGE_DAYS * 86_400_000

const MQ = '(max-width: 860px)'

export function Sidebar() {
  const [open, setOpen] = useState(false)
  const [movil, setMovil] = useState(() => typeof window !== 'undefined' && window.matchMedia(MQ).matches)
  const aside = useRef<HTMLElement>(null)
  const burger = useRef<HTMLButtonElement>(null)
  const close = () => setOpen(false)

  // En móvil el cajón cerrado queda inert (fuera del tab order); Escape lo cierra; el foco entra al abrir.
  useEffect(() => {
    const mq = window.matchMedia(MQ)
    const onMq = (e: MediaQueryListEvent) => setMovil(e.matches)
    mq.addEventListener('change', onMq)
    return () => mq.removeEventListener('change', onMq)
  }, [])
  // Cajón abierto = diálogo modal: Escape cierra, Tab circula dentro del cajón y, al cerrar, el foco vuelve al botón.
  useEffect(() => {
    if (!open) return
    const el = aside.current
    const btn = burger.current
    const focusables = () => [...(el?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [])]
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); return }
      if (e.key !== 'Tab') return
      const f = focusables()
      if (!f.length) return
      const first = f[0], last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    el?.querySelector<HTMLElement>('.rc-side-close')?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      btn?.focus()
    }
  }, [open])

  const inner = (
    <>
      <NavLink to="/" className="rc-brand" onClick={close} aria-label="Inicio">
        <RadarMark size={46} variant="ping" />
        <span className="rc-wordmark">
          <span className="rc-wm-radar">Radar</span>
          <span className="rc-wm-circular">Emprende</span>
        </span>
      </NavLink>
      <p className="rc-side-tag">Datos públicos · Chile</p>

      <nav className="rc-sidenav">
        <NavLink to="/" end className={(s) => linkClass(s, ' rc-sidelink-top')} onClick={close}>
          Inicio
        </NavLink>
        <span className="rc-sidegroup">Datos</span>
        {NAV_EXPLORAR.map((n) => (
          <NavLink key={n.to} to={n.to} className={(s) => linkClass(s)} onClick={close}>
            {n.label}
            {isRecent(n.updatedAt) && <span className="rc-badge-updated">Nuevo</span>}
          </NavLink>
        ))}
        <span className="rc-sidegroup">Referencia</span>
        {NAV_REF.map((n) => (
          <NavLink key={n.to} to={n.to} className={(s) => linkClass(s)} onClick={close}>
            {n.label}
          </NavLink>
        ))}
      </nav>

      <div className="rc-side-foot">
        <span className="rc-side-foot-sub">Tercera Letra · familia Radar</span>
      </div>
    </>
  )

  return (
    <>
      <header className="rc-topbar">
        <button ref={burger} className="rc-burger" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(true)}>
          <span />
          <span />
          <span />
        </button>
        <NavLink to="/" className="rc-topbrand" aria-label="Inicio">
          <RadarMark size={28} variant="monograma" spin={false} />
          <span className="rc-topbrand-name">Radar Emprende</span>
        </NavLink>
      </header>
      {open && <div className="rc-side-scrim" onClick={close} />}
      <aside ref={aside} className={'rc-side' + (open ? ' is-open' : '')} inert={movil && !open} aria-hidden={movil && !open} role={movil && open ? 'dialog' : undefined} aria-modal={movil && open ? true : undefined} aria-label={movil && open ? 'Menú' : undefined}>
        <button className="rc-side-close" aria-label="Cerrar menú" onClick={close}>
          ×
        </button>
        {inner}
      </aside>
    </>
  )
}
