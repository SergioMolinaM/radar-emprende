// Filtro por región y buscador de comuna, compartido por las tablas comunales.
import { useMemo, useState } from 'react'
import type { ComunaBase } from '../data/tipos'

const norm = (t: string) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

export function useFiltroComunas<T extends ComunaBase>(filas: T[]) {
  const [region, setRegion] = useState<number | 'todas'>('todas')
  const [texto, setTexto] = useState('')
  const regiones = useMemo(() => {
    const m = new Map<number, string>()
    for (const f of filas) m.set(f.codigo_region, f.region)
    return [...m.entries()].sort((a, b) => a[0] - b[0])
  }, [filas])
  const visibles = useMemo(() => {
    const q = norm(texto.trim())
    return filas.filter((f) => (region === 'todas' || f.codigo_region === region) && (!q || norm(f.comuna).includes(q)))
  }, [filas, region, texto])

  const controles = (
    <div className="rc-filters">
      <label className="rc-filter-group">
        <span className="rc-filter-lbl">Región</span>
        <select
          className="rc-select"
          value={region}
          onChange={(e) => setRegion(e.target.value === 'todas' ? 'todas' : Number(e.target.value))}
        >
          <option value="todas">Todas ({filas.length} comunas)</option>
          {regiones.map(([cod, nombre]) => (
            <option key={cod} value={cod}>
              {nombre}
            </option>
          ))}
        </select>
      </label>
      <label className="rc-search">
        <span className="rc-filter-lbl">Comuna</span>
        <input type="search" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Buscar por nombre" aria-label="Buscar comuna" />
        {texto && (
          <button type="button" className="rc-search-clear" aria-label="Borrar búsqueda" onClick={() => setTexto('')}>
            ×
          </button>
        )}
      </label>
    </div>
  )
  return { visibles, controles, region }
}

/** Orden de tabla: clave + dirección, con alternancia al pulsar la misma columna. */
export function useOrden(inicial: { key: string; dir: 'asc' | 'desc' }) {
  const [sort, setSort] = useState(inicial)
  const onSort = (key: string) =>
    setSort((s) => (s.key === key ? { key, dir: s.dir === 'asc' ? 'desc' : 'asc' } : { key, dir: key === 'comuna' ? 'asc' : 'desc' }))
  return { sort, onSort }
}

export function ordenar<T>(filas: T[], valor: (f: T) => number | string, dir: 'asc' | 'desc') {
  const k = dir === 'asc' ? 1 : -1
  return [...filas].sort((a, b) => {
    const x = valor(a), y = valor(b)
    if (typeof x === 'string' && typeof y === 'string') return k * x.localeCompare(y, 'es')
    return k * ((x as number) - (y as number))
  })
}
