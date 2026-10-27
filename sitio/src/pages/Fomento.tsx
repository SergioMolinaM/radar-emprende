// src/pages/Fomento.tsx — postulaciones y seleccionados de FOSIS y Sercotec por comuna (fomento_comuna.json).
import { Link } from 'react-router-dom'
import { Callout, EditorialTable, KpiStrip, MenorQueN, N_MIN, Nivel, PageHead, Pct, Rule, SectionTitle, type Column } from '../components/editorial'
import { ordenar, useFiltroComunas, useOrden } from '../components/FiltroComunas'
import { REPO } from '../data/fuentes'
import { FOMENTO } from '../data/datos-fomento'
import { fechaCorta, num } from '../data/fechas'

const M = FOMENTO._meta
const NIVEL = M.nivel === 1 ? 'N1' : 'N2'
const DESDE = M.anios[0]
const HASTA = M.anios[M.anios.length - 1]
const PERIODO = `${DESDE}–${HASTA}`

const suma = <T,>(xs: T[], f: (x: T) => number) => xs.reduce((s, x) => s + f(x), 0)
const fosisPost = suma(FOMENTO.fosis_programas, (p) => p.postulaciones)
const fosisSel = suma(FOMENTO.fosis_programas, (p) => p.seleccionadas)
// Totales de Sercotec desde las convocatorias (no desde el desglose comunal, que tiene una postulación menos).
const sercRegiones = FOMENTO.sercotec_regiones.filter((r) => r.programa !== 'Crece')
const sercPost = suma(sercRegiones, (r) => r.postulaciones)
const sercBen = suma(sercRegiones, (r) => r.beneficiarios)

/** Tasa con una cifra decimal, o «n = …» si la parte tiene menos de 5 casos; «—» sin postulaciones. */
const tasa = (parte: number, total: number) => {
  if (total === 0) return '—'
  if (parte < N_MIN || total < N_MIN) return <MenorQueN n={parte} />
  return <Pct parte={parte} total={total} />
}
const tasaOrden = (parte: number, total: number) => (parte >= N_MIN && total >= N_MIN ? parte / total : -1)

/* ----- FOSIS por programa: suma de los años del período ----- */
const programasFosis = (() => {
  const m = new Map<string, { postulaciones: number; cupos: number; seleccionadas: number; completaron: number }>()
  for (const p of FOMENTO.fosis_programas) {
    const a = m.get(p.programa) ?? { postulaciones: 0, cupos: 0, seleccionadas: 0, completaron: 0 }
    a.postulaciones += p.postulaciones
    a.cupos += p.cupos
    a.seleccionadas += p.seleccionadas
    a.completaron += p.completaron
    m.set(p.programa, a)
  }
  return [...m.entries()].sort((a, b) => b[1].postulaciones - a[1].postulaciones)
})()

/* ----- Sercotec por programa (nacional) y por región ----- */
const PROGRAMAS_SERCOTEC = ['Emprende', 'Crece', 'Almacenes']
const sercotecNacional = PROGRAMAS_SERCOTEC.map((p) => {
  const rs = FOMENTO.sercotec_regiones.filter((r) => r.programa === p)
  return {
    programa: p,
    postulaciones: suma(rs, (r) => r.postulaciones),
    admisibles: suma(rs, (r) => r.admisibles),
    seleccionados: suma(rs, (r) => r.seleccionados),
    beneficiarios: suma(rs, (r) => r.beneficiarios),
    renuncias: suma(rs, (r) => r.renuncias),
  }
})
const regionCorta = (r: string) => r.replace(/^Región (de |del )?/, '')
const sercotecRegiones = [...FOMENTO.sercotec_regiones].sort(
  (a, b) => regionCorta(a.region).localeCompare(regionCorta(b.region), 'es') || PROGRAMAS_SERCOTEC.indexOf(a.programa) - PROGRAMAS_SERCOTEC.indexOf(b.programa),
)
const NOMBRE_SERCOTEC: Record<string, string> = {
  Emprende: 'Emprende (Capital Semilla, Capital Abeja, Pioneras)',
  Crece: 'Crece',
  Almacenes: 'Almacenes (Digitaliza tu Almacén y Almacenes de Chile)',
}

export function Fomento() {
  const { visibles, controles } = useFiltroComunas(FOMENTO.comunas)
  const { sort, onSort } = useOrden({ key: 'fpost', dir: 'desc' })
  type F = (typeof visibles)[number]
  const valor = (c: F): number | string => {
    switch (sort.key) {
      case 'comuna': return c.comuna
      case 'fsel': return c.fosis_seleccionadas
      case 'ftasa': return tasaOrden(c.fosis_seleccionadas, c.fosis_postulaciones)
      case 'spost': return c.sercotec_postulaciones
      case 'sben': return c.sercotec_beneficiarios
      case 'stasa': return tasaOrden(c.sercotec_beneficiarios, c.sercotec_postulaciones)
      default: return c.fosis_postulaciones
    }
  }
  const filas = ordenar(visibles, valor, sort.dir)

  const columnas: Column[] = [
    { label: 'Comuna', sortKey: 'comuna', align: 'left' },
    { label: 'Región' },
    { label: 'FOSIS: postulaciones', sortKey: 'fpost', align: 'right' },
    { label: 'FOSIS: seleccionadas', sortKey: 'fsel', align: 'right' },
    { label: 'FOSIS: % seleccionadas', sortKey: 'ftasa', align: 'right' },
    { label: 'Sercotec: postulaciones', sortKey: 'spost', align: 'right' },
    { label: 'Sercotec: beneficiarios', sortKey: 'sben', align: 'right' },
    { label: 'Sercotec: % beneficiarios', sortKey: 'stasa', align: 'right' },
  ]
  const rows = filas.map((c) => [
    c.comuna,
    c.region,
    c.fosis_en_respuesta ? num(c.fosis_postulaciones) : '—',
    !c.fosis_en_respuesta ? '—' : c.fosis_seleccionadas === 0 ? <span className="rc-cero">0</span> : num(c.fosis_seleccionadas),
    c.fosis_en_respuesta ? tasa(c.fosis_seleccionadas, c.fosis_postulaciones) : '—',
    num(c.sercotec_postulaciones),
    c.sercotec_beneficiarios === 0 ? <span className="rc-cero">0</span> : num(c.sercotec_beneficiarios),
    tasa(c.sercotec_beneficiarios, c.sercotec_postulaciones),
  ])

  return (
    <article className="rc-screen">
      <PageHead
        kicker="FOSIS y Sercotec · Ley de Transparencia"
        title="Cuántos postulan y cuántos quedan"
        dek={`Postulaciones y personas seleccionadas en los programas de emprendimiento de FOSIS y Sercotec, ${PERIODO}, por comuna y región. Las cifras vienen de las respuestas de ambos servicios a solicitudes de acceso a la información.`}
        byline={`Datos generados el ${fechaCorta(M.generado)} · nivel de afirmación ${M.nivel}`}
      />
      <Rule weight="bold" />

      <Callout variant="warning" title="Antes de leer estas cifras">
        <ul className="rc-limites">
          {M.limites.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </Callout>

      <section className="rc-block">
        <KpiStrip
          items={[
            { valor: num(fosisPost), label: `Postulaciones a FOSIS, ${PERIODO}`, detalle: `${num(fosisSel)} personas seleccionadas en los cuatro programas Emprendamos.` },
            { valor: <Pct parte={fosisSel} total={fosisPost} />, label: 'De las postulaciones a FOSIS terminan en selección', detalle: 'Postulaciones, no personas: quien postula dos veces cuenta dos.' },
            { valor: num(sercPost), label: `Postulaciones a Sercotec Emprende y Almacenes, ${PERIODO}`, detalle: `${num(sercBen)} beneficiarios.` },
            { valor: <Pct parte={sercBen} total={sercPost} />, label: 'De las postulaciones a Sercotec Emprende y Almacenes terminan en beneficio', detalle: 'Crece aparte, más abajo.', alt: true },
          ]}
        />
      </section>

      <section className="rc-block">
        <SectionTitle kicker={`Suma de ${PERIODO}`}>
          FOSIS por programa <Nivel nivel={NIVEL} fuente="FOSIS, respuesta AI004T0002258" fecha="2026-10-22" />
        </SectionTitle>
        <EditorialTable
          columns={[
            { label: 'Programa', align: 'left' },
            { label: 'Postulaciones', align: 'right' },
            { label: 'Cupos', align: 'right' },
            { label: 'Seleccionadas', align: 'right' },
            { label: '% seleccionadas', align: 'right' },
            { label: 'Completaron', align: 'right' },
          ]}
          rows={programasFosis.map(([p, v]) => [p, num(v.postulaciones), num(v.cupos), num(v.seleccionadas), tasa(v.seleccionadas, v.postulaciones), num(v.completaron)])}
          firstCol={{ min: '12rem' }}
          caption={`Programas de emprendimiento de FOSIS, ${PERIODO}`}
        />
      </section>

      <section className="rc-block">
        <SectionTitle kicker={`Suma de ${PERIODO}, todas las regiones`}>
          Sercotec por programa <Nivel nivel={NIVEL} fuente="Sercotec, respuesta AH012T0003197" fecha="2026-10-23" />
        </SectionTitle>
        <EditorialTable
          columns={[
            { label: 'Programa', align: 'left' },
            { label: 'Postulaciones', align: 'right' },
            { label: 'Admisibles', align: 'right' },
            { label: 'Seleccionados', align: 'right' },
            { label: 'Beneficiarios', align: 'right' },
            { label: '% beneficiarios', align: 'right' },
            { label: 'Renuncias o restituciones', align: 'right' },
          ]}
          rows={sercotecNacional.map((p) => [
            NOMBRE_SERCOTEC[p.programa],
            num(p.postulaciones),
            num(p.admisibles),
            num(p.seleccionados),
            num(p.beneficiarios),
            tasa(p.beneficiarios, p.postulaciones),
            num(p.renuncias),
          ])}
          firstCol={{ min: '14rem' }}
          caption={`Programas de Sercotec, ${PERIODO}`}
        />
        <p className="rc-sourcenote">
          El porcentaje se calcula sobre las postulaciones enviadas. En Crece, la mayoría de las postulaciones no pasa la
          admisibilidad; en Emprende, casi todas pasan.
        </p>
      </section>

      <section className="rc-block">
        <SectionTitle kicker={`Suma de ${PERIODO}, por región de la convocatoria`}>
          Sercotec por región <Nivel nivel={NIVEL} fuente="Sercotec, respuesta AH012T0003197" fecha="2026-10-23" />
        </SectionTitle>
        <EditorialTable
          columns={[
            { label: 'Región', align: 'left' },
            { label: 'Programa' },
            { label: 'Postulaciones', align: 'right' },
            { label: 'Beneficiarios', align: 'right' },
            { label: '% beneficiarios', align: 'right' },
          ]}
          rows={sercotecRegiones.map((r) => [regionCorta(r.region), r.programa, num(r.postulaciones), num(r.beneficiarios), tasa(r.beneficiarios, r.postulaciones)])}
          maxRows={18}
          firstCol={{ min: '10rem' }}
          caption={`Programas de Sercotec por región, ${PERIODO}`}
        />
      </section>

      <section className="rc-block">
        <SectionTitle kicker="Por comuna del postulante, según cada servicio">
          Postulaciones y seleccionados por comuna <Nivel nivel={NIVEL} fuente="FOSIS y Sercotec, Ley de Transparencia" fecha={M.generado} />
        </SectionTitle>
        <p className="rc-block-intro">
          Sercotec incluye solo Emprende y Almacenes. El porcentaje no se calcula si las postulaciones, o los
          seleccionados o beneficiarios, son menos de {N_MIN}; ahí se muestra el número (n). «—» en FOSIS: la comuna no aparece en su respuesta.
        </p>
        {controles}
        <p className="rc-count">{num(filas.length)} comunas</p>
        <EditorialTable
          columns={columnas}
          rows={rows}
          sort={sort}
          onSort={onSort}
          maxRows={40}
          firstCol={{ min: '9rem' }}
          caption={`Postulaciones y seleccionados de FOSIS y Sercotec por comuna, ${PERIODO}`}
        />
        {M.sercotec_postulaciones_sin_comuna > 0 && (
          <p className="rc-sourcenote">
            Postulaciones a Sercotec sin comuna («Otro lugar»): {num(M.sercotec_postulaciones_sin_comuna)}.
          </p>
        )}
      </section>

      <section className="rc-block" id="sin-seleccionados">
        <SectionTitle kicker={`FOSIS no informa personas seleccionadas ni Sercotec (Emprende y Almacenes) beneficiarios en ${PERIODO}`}>
          Las {num(FOMENTO.comunas_sin_seleccionados.length)} comunas sin seleccionados
        </SectionTitle>
        <p>{FOMENTO.comunas_sin_seleccionados.join(', ')}.</p>
        <p className="rc-sourcenote">
          FOSIS no informa filas para {num(M.fosis_comunas_sin_filas.length)} comunas: {M.fosis_comunas_sin_filas.join(', ')}.
          Que una comuna no tenga seleccionados no prueba que el programa no llegue: puede no haber postulantes, o haberlos
          con domicilio registrado en otra comuna. Corfo va en <Link to="/corfo">su propia página</Link>, con otro período.
        </p>
      </section>

      <section className="rc-block">
        <p className="rc-sourcenote">
          <b className="rc-src-k">Fuente:</b> {M.fuentes.join(' ')} <b className="rc-src-k">Control:</b> {M.control}{' '}
          <a href={`${REPO}/blob/main/datos/fomento_comuna.json`}>Descargar los datos de esta página (repositorio)</a>.{' '}
          <Link to="/metodologia">Metodología →</Link>
        </p>
      </section>
    </article>
  )
}
