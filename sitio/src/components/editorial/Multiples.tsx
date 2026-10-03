// Gráficos pequeños (small multiples): una serie por panel, misma escala en todos, rótulos dentro del SVG.
// Se usan cuando varias líneas en un mismo gráfico se confunden (por ejemplo, cinco cohortes).
const fmt1 = (n: number) => n.toLocaleString('es-CL', { minimumFractionDigits: 1, maximumFractionDigits: 1 })

export interface Panel {
  titulo: string
  /** Un valor por año de `anios`; null = sin dato. */
  valores: (number | null)[]
}

export function Multiples({ paneles, anios, yMax = 100, unidad = ' %', titulo }: { paneles: Panel[]; anios: string[]; yMax?: number; unidad?: string; titulo: string }) {
  const W = 290, H = 170, padL = 60, padR = 68, padT = 14, padB = 26
  const iw = W - padL - padR, ih = H - padT - padB
  const xs = (i: number) => padL + (anios.length === 1 ? 0 : (i / (anios.length - 1)) * iw)
  const ys = (v: number) => padT + ih - (v / yMax) * ih
  const grid = [0, yMax / 2, yMax]
  return (
    <div className="rc-multiples" role="group" aria-label={titulo}>
      {paneles.map((p) => {
        const pts = p.valores.flatMap((v, i) => (v == null ? [] : [{ i, v }]))
        const ult = pts[pts.length - 1]
        return (
          <figure className="rc-multiple" key={p.titulo}>
            <figcaption className="rc-multiple-t">{p.titulo}</figcaption>
            <svg viewBox={`0 0 ${W} ${H}`} className="rc-chart" role="img" aria-label={`${p.titulo}: ${pts.map(({ i, v }) => `${anios[i]} ${fmt1(v)}${unidad}`).join(', ')}`}>
              {grid.map((g) => (
                <g key={g}>
                  <line x1={padL} y1={ys(g)} x2={W - padR} y2={ys(g)} stroke="var(--line)" strokeWidth="1" />
                  <text x={padL - 6} y={ys(g)} className="rc-ax" textAnchor="end" dominantBaseline="middle">
                    {fmt1(g)}{unidad}
                  </text>
                </g>
              ))}
              {anios.map((a, i) => (
                <text key={a} x={xs(i)} y={H - 8} className="rc-ax" textAnchor="middle">
                  {a}
                </text>
              ))}
              <polyline points={pts.map(({ i, v }) => `${xs(i)},${ys(v)}`).join(' ')} fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
              {pts.map(({ i, v }) => (
                <circle key={i} cx={xs(i)} cy={ys(v)} r={i === ult.i ? 3.5 : 2} fill={i === ult.i ? 'var(--signal)' : 'var(--ink)'} />
              ))}
              {ult && (
                <text x={xs(ult.i) + 7} y={ys(ult.v)} className="rc-val" dominantBaseline="middle">
                  {fmt1(ult.v)}{unidad}
                </text>
              )}
            </svg>
          </figure>
        )
      })}
    </div>
  )
}
