// Tabla editorial (.rc-itable): <caption> real, primera columna fija al desplazar, orden opcional
// por columna (el orden lo decide la página con `sortKey`; la tabla solo pinta el estado y avisa).
// Opciones de lectura: `align: 'right'` para números, `firstCol` para el ancho de la columna fija,
// `stack` para apilar las filas como ficha en pantallas angostas, `maxRows` para recortar y ofrecer
// «Ver las N filas».
import { useState, type CSSProperties, type ReactNode } from 'react'

export interface Column {
  label: ReactNode
  /** Texto plano de la etiqueta para el modo apilado (data-label); si falta y `label` es string, se usa `label`. */
  labelText?: string
  /** Alineación del contenido. Por defecto 'left'; 'center' para columnas cortas; 'right' para números (clase is-num). */
  align?: 'left' | 'center' | 'right'
  /** Clave de orden; si está, la cabecera es un botón. */
  sortKey?: string
}

function cellClass(align: Column['align']): string | undefined {
  if (align === 'right') return 'is-num'
  if (align === 'center') return 'is-center'
  if (align === 'left') return 'is-left'
  return undefined
}

export function EditorialTable({
  columns,
  rows,
  caption,
  sort,
  onSort,
  empty = 'Sin filas para este filtro.',
  firstCol,
  stack = false,
  maxRows,
}: {
  columns: Column[]
  /** Cada fila es un arreglo de celdas, en el mismo orden que las columnas. */
  rows: ReactNode[][]
  caption?: ReactNode
  sort?: { key: string; dir: 'asc' | 'desc' }
  onSort?: (key: string) => void
  empty?: ReactNode
  /** Ancho de la primera columna (fija): fija --fc-min / --fc-max en la tabla. Ej. { min: '18rem', max: '24rem' }. */
  firstCol?: { min?: string; max?: string }
  /** En ≤ 680 px cada fila pasa a lista etiqueta → valor (clase is-stack, data-label por celda). */
  stack?: boolean
  /** Muestra solo las primeras N filas y un botón «Ver las N filas →» que despliega el resto. */
  maxRows?: number
}) {
  const [expanded, setExpanded] = useState(false)
  const truncated = maxRows != null && !expanded && rows.length > maxRows
  const visible = truncated ? rows.slice(0, maxRows) : rows
  const style: CSSProperties | undefined = firstCol
    ? ({ '--fc-min': firstCol.min, '--fc-max': firstCol.max } as CSSProperties)
    : undefined
  const labelOf = (c: Column | undefined): string | undefined =>
    c?.labelText ?? (typeof c?.label === 'string' ? c.label : undefined)
  return (
    <>
      {/* región desplazable alcanzable por teclado; el nombre sale del caption */}
      <div className="rc-itable-wrap" role="region" aria-label={typeof caption === 'string' ? caption : 'Tabla'} tabIndex={0}>
        <table className={'rc-itable' + (stack ? ' is-stack' : '')} style={style}>
          {caption && <caption>{caption}</caption>}
          <thead>
            <tr>
              {columns.map((c, i) => {
                const active = c.sortKey && sort?.key === c.sortKey
                return (
                  <th
                    key={i}
                    scope="col"
                    className={cellClass(c.align)}
                    aria-sort={active ? (sort!.dir === 'asc' ? 'ascending' : 'descending') : undefined}
                  >
                    {c.sortKey && onSort ? (
                      <button type="button" onClick={() => onSort(c.sortKey!)}>
                        {c.label}
                        <span aria-hidden="true">{active ? (sort!.dir === 'asc' ? '↑' : '↓') : '↕'}</span>
                      </button>
                    ) : (
                      c.label
                    )}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="rc-empty">{empty}</td>
              </tr>
            ) : (
              visible.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} className={cellClass(columns[ci]?.align)} data-label={stack ? labelOf(columns[ci]) : undefined}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {truncated && (
        <div className="rc-itable-more">
          <button type="button" className="rc-btn" onClick={() => setExpanded(true)}>
            Ver las {rows.length.toLocaleString('es-CL')} filas →
          </button>
        </div>
      )}
    </>
  )
}
