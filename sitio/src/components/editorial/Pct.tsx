// Regla de presentación n < 5 (PLAN §4, revisor 2-oct-2026): si la celda tiene menos de 5 casos,
// se muestra el número y no un porcentaje ni una tasa. Regla estadística, no legal.
import { num } from '../../data/fechas'

export const N_MIN = 5

/** Porcentaje de `parte` sobre `total` con una cifra decimal; nada si la base o la parte tienen menos de 5 casos. */
export function Pct({ parte, total }: { parte: number; total: number }) {
  if (total < N_MIN || parte < N_MIN) return null
  return <>{num((100 * parte) / total, 1)} %</>
}

/** Marca que reemplaza una tasa cuando la base tiene menos de 5 casos. */
export function MenorQueN({ n }: { n: number }) {
  return (
    <span className="rc-nmenor" title={`Base de ${n}: con menos de ${N_MIN} casos no se calcula porcentaje ni tasa`}>
      n = {n}
    </span>
  )
}
