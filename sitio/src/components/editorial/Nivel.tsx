// Nivel de afirmación visible junto al dato (protocolo R7 del PLAN): N1 fuente literal oficial,
// N2 supuesto declarado. Es un enlace a la explicación de los niveles en Metodología; la fuente y la
// fecha van en el title. El nivel 3 no llega a la interfaz.
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Dato } from '../../data/tipos'
import { fechaCorta } from '../../data/fechas'

export function Nivel({ nivel, fuente, fecha, nota }: { nivel: 'N1' | 'N2'; fuente: string; fecha?: string; nota?: string }) {
  const t = [fuente, fecha && fechaCorta(fecha), nota].filter(Boolean).join(' · ')
  return (
    <Link
      to="/metodologia#niveles"
      className={'rc-nivel rc-nivel-' + nivel}
      title={t}
      aria-label={`${nivel}: ${nivel === 'N1' ? 'fuente oficial literal' : 'cálculo propio'}, qué significa`}
    >
      {nivel}
    </Link>
  )
}

/** Celda de dato: valor + nivel, o «por confirmar» cuando no hay fuente. */
export function Celda<T>({ d, render }: { d: Dato<T> | null; render?: (v: T) => ReactNode }) {
  if (!d) return <span className="rc-porconfirmar">Por confirmar</span>
  return (
    <span>
      {render ? render(d.valor) : String(d.valor)}
      <Nivel nivel={d.nivel} fuente={d.fuente} fecha={d.fecha} nota={d.nota} />
    </span>
  )
}

/** Leyenda de niveles. */
export function LeyendaNivel() {
  return (
    <ul className="rc-legend" aria-label="Niveles de afirmación">
      <li><span className="rc-nivel rc-nivel-N1" style={{ marginLeft: 0 }}>N1</span> fuente oficial literal</li>
      <li><span className="rc-nivel rc-nivel-N2" style={{ marginLeft: 0 }}>N2</span> cálculo propio o supuesto declarado, con el supuesto a la vista</li>
      <li><span className="rc-porconfirmar">Por confirmar</span> sin fuente; no se infiere</li>
    </ul>
  )
}
