// Copia de ../datos/cohortes_comuna.json hecha por `npm run datos`; no se edita a mano.
import raw from './cohortes_comuna.json'
import type { CohortesJson } from './tipos'

export const COHORTES = raw as unknown as CohortesJson
