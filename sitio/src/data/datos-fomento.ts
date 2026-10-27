// Copia de ../datos/fomento_comuna.json hecha por `npm run datos`; no se edita a mano.
import raw from './fomento_comuna.json'
import type { FomentoJson } from './tipos'

export const FOMENTO = raw as unknown as FomentoJson
