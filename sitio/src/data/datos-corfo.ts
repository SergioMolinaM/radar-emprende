// Copia de ../datos/corfo_comuna.json hecha por `npm run datos`; no se edita a mano.
import raw from './corfo_comuna.json'
import type { CorfoJson } from './tipos'

export const CORFO = raw as unknown as CorfoJson
