// Copia los JSON publicados de ../datos/ (generados por los scripts Python del repo) a src/data/.
// El sitio lee sólo estas copias; ninguna cifra se escribe a mano en las páginas.
// Uso: npm run datos (lo llaman también dev y build).
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const SITIO = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const ORIGEN = resolve(SITIO, '..', 'datos')
const DESTINO = join(SITIO, 'src', 'data')
const ARCHIVOS = ['constituciones_comuna.json', 'cohortes_comuna.json', 'corfo_comuna.json', 'eme8_informalidad.json', 'economia_res.json']

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

// Las pocas fechas y URL que cita el inventario de fuentes van en un JSON chico: así fuentes.ts no
// arrastra los datos completos a páginas que no los muestran (Acerca, Corfo, Cohortes...).
const leer = (f) => JSON.parse(readFileSync(join(DESTINO, f), 'utf-8'))
const cons = leer('constituciones_comuna.json')
const eco = leer('economia_res.json')
const meta = { res_url: cons._meta.fuente_url, res_consulta: cons.corte.consulta, economia_generado: eco._meta.generado }
for (const [k, v] of Object.entries(meta)) {
  if (!v) {
    console.error(`datos: meta_fuentes sin ${k}`)
    process.exit(1)
  }
}
writeFileSync(join(DESTINO, 'meta_fuentes.json'), JSON.stringify(meta, null, 2) + '\n')
console.log('datos: meta_fuentes.json')
