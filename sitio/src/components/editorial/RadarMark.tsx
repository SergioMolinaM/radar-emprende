// Símbolo de marca: radar con 3 anillos, barrido animado y blip detectado.
// Portado del prototipo (rc/ui.jsx RadarMark). Variante 'ping' por defecto.
// Recoloreado a --side-fg cuando vive dentro del sidebar (ver editorial.css).

type Variant = 'ping' | 'orbita' | 'monograma'

interface RadarMarkProps {
  size?: number
  variant?: Variant
  spin?: boolean
}

export function RadarMark({ size = 46, variant = 'ping', spin = true }: RadarMarkProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 48 48',
    fill: 'none',
    className: 'rc-mark',
    'aria-hidden': true as const,
  }

  if (variant === 'orbita') {
    return (
      <svg {...common}>
        <circle cx="24" cy="24" r="21" stroke="var(--accent)" strokeWidth="1.1" opacity="0.24" />
        <circle cx="24" cy="24" r="14" stroke="var(--accent)" strokeWidth="1.1" opacity="0.34" />
        <circle cx="24" cy="24" r="7" stroke="var(--accent)" strokeWidth="1.1" opacity="0.5" />
        <line x1="24" y1="3" x2="24" y2="45" stroke="var(--accent)" strokeWidth="0.8" opacity="0.16" />
        <line x1="3" y1="24" x2="45" y2="24" stroke="var(--accent)" strokeWidth="0.8" opacity="0.16" />
        <g className={spin ? 'rc-orbit' : ''} style={{ transformOrigin: '24px 24px' }}>
          <circle cx="24" cy="10" r="3.1" fill="var(--accent-2)" />
          <circle cx="24" cy="10" r="6" fill="var(--accent-2)" opacity="0.16" />
        </g>
        <circle cx="24" cy="24" r="2.8" fill="var(--accent)" />
      </svg>
    )
  }

  if (variant === 'monograma') {
    return (
      <svg {...common}>
        <path d="M 36.86 8.68 A 20 20 0 1 0 36.86 39.32" stroke="var(--accent)" strokeWidth="3.1" strokeLinecap="round" />
        <circle cx="24" cy="24" r="10.5" stroke="var(--accent)" strokeWidth="1.1" opacity="0.32" />
        <circle className="rc-blip-halo" cx="34" cy="15" r="3" fill="none" stroke="var(--accent-2)" strokeWidth="1.4" />
        <circle className="rc-blip" cx="34" cy="15" r="3" fill="var(--accent-2)" />
        <circle cx="24" cy="24" r="2.8" fill="var(--accent)" />
      </svg>
    )
  }

  // 'ping' — radar vivo con blip detectado
  return (
    <svg {...common}>
      <circle cx="24" cy="24" r="21" stroke="var(--accent)" strokeWidth="1.1" opacity="0.28" />
      <circle cx="24" cy="24" r="14" stroke="var(--accent)" strokeWidth="1.1" opacity="0.34" />
      <circle cx="24" cy="24" r="7" stroke="var(--accent)" strokeWidth="1.1" opacity="0.5" />
      <line x1="24" y1="3" x2="24" y2="45" stroke="var(--accent)" strokeWidth="0.8" opacity="0.18" />
      <line x1="3" y1="24" x2="45" y2="24" stroke="var(--accent)" strokeWidth="0.8" opacity="0.18" />
      <g style={{ transformOrigin: '24px 24px' }} className={spin ? 'rc-sweep' : ''}>
        <path d="M24 24 L24 3 A21 21 0 0 1 42.4 13.5 Z" fill="var(--accent)" opacity="0.16" />
        <line x1="24" y1="24" x2="24" y2="3" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" />
      </g>
      <circle className="rc-blip-halo" cx="34" cy="15" r="3" fill="none" stroke="var(--accent-2)" strokeWidth="1.4" />
      <circle className="rc-blip" cx="34" cy="15" r="3" fill="var(--accent-2)" />
      <circle cx="24" cy="24" r="2.8" fill="var(--accent)" />
    </svg>
  )
}
