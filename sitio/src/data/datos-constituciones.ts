// Copia de ../datos/constituciones_comuna.json hecha por `npm run datos`; no se edita a mano.
import raw from './constituciones_comuna.json'
import type { ConstitucionesJson } from './tipos'

export const CONSTITUCIONES = raw as unknown as ConstitucionesJson
