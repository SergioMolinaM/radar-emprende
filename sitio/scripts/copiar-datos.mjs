// Copia los JSON publicados de ../datos/ (generados por los scripts Python del repo) a src/data/.
// El sitio lee sólo estas copias; ninguna cifra se escribe a mano en las páginas.
// Uso: npm run datos (lo llaman también dev y build).
import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const SITIO = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const ORIGEN = resolve(SITIO, '..', 'datos')
const DESTINO = join(SITIO, 'src', 'data')
const ARCHIVOS = ['constituciones_comuna.json', 'cohortes_comuna.json', 'corfo_comuna.json']

mkdirSync(DESTINO, { recursive: true })
let fallas = 0
for (const f of ARCHIVOS) {
  const de = join(ORIGEN, f)
  if (!existsSync(de)) {
    console.error(`datos: falta ${de}`)
    fallas++
    continue
  }
  copyFileSync(de, join(DESTINO, f))
  console.log(`datos: ${f} (${statSync(de).size.toLocaleString('es-CL')} B)`)
}
if (fallas) process.exit(1)
