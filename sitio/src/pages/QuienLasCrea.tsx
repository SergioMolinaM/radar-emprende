// src/pages/QuienLasCrea.tsx — socios por sexo y nacionalidad (informe mensual de Economía) y capital declarado (CSV del RES).
import { Link } from 'react-router-dom'
import { Callout, Columnas, EditorialTable, Figure, KpiStrip, MenorQueN, N_MIN, PageHead, Rule, SectionTitle, type KpiItem } from '../components/editorial'
import { CONSTITUCIONES, ECONOMIA, FUENTES, REPO } from '../data/fuentes'
import { fechaCorta, num } from '../data/fechas'

const E = ECONOMIA
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
const FUENTE_ECO = FUENTES.find((f) => f.id === 'economia-res')!
const RES = FUENTES.find((f) => f.id === 'res')!

/* ----- Años: completos (12 meses) y el año en curso hasta el corte ----- */
const mesesPorAnio = Object.keys(E.socios_sexo).reduce<Record<string, number>>((acc, k) => {
  acc[k.slice(0, 4)] = (acc[k.slice(0, 4)] ?? 0) + 1
  return acc
}, {})
const completos = Object.keys(mesesPorAnio).filter((a) => mesesPorAnio[a] === 12).sort()
const EN_CURSO = String(E.corte.anio)
const tramo = E.corte.mes === 1 ? 'enero' : `enero a ${MESES[E.corte.mes - 1]}`
const ANTERIOR = String(E.corte.anio - 1)
/** Suma un campo de una serie mensual en un año, opcionalmente solo hasta el mes del corte. */
function suma<T>(serie: Record<string, T>, anio: string, campo: (v: T) => number, hastaCorte = false) {
  return Object.entries(serie).reduce((s, [k, v]) => (k.startsWith(anio) && (!hastaCorte || Number(k.slice(5)) <= E.corte.mes) ? s + campo(v) : s), 0)
}
const pct = (a: number, b: number) => (b > 0 ? (100 * a) / b : 0)

const mujeresSocios = (a: string, h = false) => pct(suma(E.socios_sexo, a, (v) => v.mujeres, h), suma(E.socios_sexo, a, (v) => v.total, h))
const sociedadesSexo = (a: string, h = false) => suma(E.sociedades_sexo, a, (v) => v.solo_mujeres + v.solo_hombres + v.mixtas + v.sin_dato, h)
const soloMujeres = (a: string, h = false) => pct(suma(E.sociedades_sexo, a, (v) => v.solo_mujeres, h), sociedadesSexo(a, h))
const conMujer = (a: string, h = false) => pct(suma(E.sociedades_sexo, a, (v) => v.solo_mujeres + v.mixtas, h), sociedadesSexo(a, h))
const soloExtranjeras = (a: string, h = false) => pct(suma(E.sociedades_nacionalidad, a, (v) => v.solo_extranjeras, h), suma(E.sociedades_nacionalidad, a, (v) => v.total, h))
const conExtranjero = (a: string, h = false) =>
  pct(suma(E.sociedades_nacionalidad, a, (v) => v.solo_extranjeras + v.mixtas, h), suma(E.sociedades_nacionalidad, a, (v) => v.total, h))

const serieAnual = (f: (a: string) => number, etiqueta: string) => [
  ...completos.map((a, i) => ({
    label: a,
    value: f(a),
    rotular: i === 0 || i === completos.length - 1,
    highlight: i === completos.length - 1,
    texto: `${a}: ${num(f(a), 1)} % ${etiqueta}`,
  })),
]
const ULT = completos[completos.length - 1]

const KPIS_SOCIOS: KpiItem[] = [
  {
    valor: `${num(mujeresSocios(EN_CURSO, true), 1)} %`,
    label: `De los socios son mujeres (${tramo} de ${EN_CURSO})`,
    detalle: `${num(mujeresSocios(ANTERIOR, true), 1)} % en los mismos meses de ${ANTERIOR} · ${num(mujeresSocios(completos[0]), 1)} % en ${completos[0]}`,
  },
  {
    valor: `${num(soloMujeres(EN_CURSO, true), 1)} %`,
    label: `De las sociedades tienen solo socias (${tramo} de ${EN_CURSO})`,
    detalle: `${num(conMujer(EN_CURSO, true), 1)} % tiene al menos una mujer entre sus socios`,
  },
  {
    valor: `${num(soloExtranjeras(EN_CURSO, true), 1)} %`,
    label: `De las sociedades tienen solo socios extranjeros (${tramo} de ${EN_CURSO})`,
    detalle: `${num(conExtranjero(EN_CURSO, true), 1)} % tiene al menos un socio extranjero · ${num(soloExtranjeras(completos[0]), 1)} % en ${completos[0]}`,
    alt: true,
  },
]

/* ----- Capital declarado (CSV del Registro) ----- */
const CAP = CONSTITUCIONES.capital
const ANIO_TASA = String(CONSTITUCIONES.corte.anio_tasa)
const ANIO_CURSO = String(CONSTITUCIONES.corte.anio)
const TRAMOS: [string, string][] = [
  ['hasta_500_mil', 'Hasta $500.000'],
  ['hasta_1_millon', 'Más de $500.000 y hasta $1 millón'],
  ['hasta_5_millones', 'Más de $1 millón y hasta $5 millones'],
  ['hasta_10_millones', 'Más de $5 millones y hasta $10 millones'],
  ['mas_de_10_millones', 'Más de $10 millones'],
]
const millonesTexto = (v: number) => {
  if (v < 1_000_000) return `$${num(v)}`
  const m = v / 1_000_000
  const cifra = Number.isInteger(m) ? num(m) : num(m, 1)
  return `$${cifra} ${m === 1 ? 'millón' : 'millones'}`
}
const NOMBRE_TIPO: Record<string, string> = {
  SpA: 'Sociedad por acciones (SpA)',
  EIRL: 'Empresa individual de responsabilidad limitada (EIRL)',
  SRL: 'Sociedad de responsabilidad limitada (SRL)',
  SA: 'Sociedad anónima (SA)',
}
const tipos = [...new Set([...Object.keys(CAP[ANIO_TASA].por_tipo), ...Object.keys(CAP[ANIO_CURSO].por_tipo)])].sort(
  (a, b) => (CAP[ANIO_TASA].por_tipo[b]?.n ?? 0) - (CAP[ANIO_TASA].por_tipo[a]?.n ?? 0),
)
const celdaMediana = (anio: string, t: string) => {
  const x = CAP[anio].por_tipo[t]
  if (!x) return '—'
  return x.n >= N_MIN ? millonesTexto(x.mediana) : <MenorQueN n={x.n} />
}
const tramoCorte = CONSTITUCIONES.corte.mes === 1 ? 'enero' : `enero a ${MESES[CONSTITUCIONES.corte.mes - 1]}`

export function QuienLasCrea() {
  return (
    <article className="rc-screen">
      <PageHead
        kicker="Registro de Empresas y Sociedades · Ministerio de Economía"
        title="Quién crea sociedades y con cuánto capital"
        dek="Sexo y nacionalidad de los socios de las sociedades constituidas en el Registro, y el capital que declaran al constituirse."
        byline={`Informe de Economía de ${MESES[E.corte.mes - 1]} de ${E.corte.anio}, actualizado el ${fechaCorta(E.corte.actualizado)}`}
      />
      <Rule weight="bold" />

      <Callout variant="warning" title="Antes de leer estas cifras">
        <ul className="rc-limites">
          {E._meta.limites.map((l) => (
            <li key={l}>{l}</li>
          ))}
          <li>
            Las sociedades del Diario Oficial no entran en esta página: el informe no publica sus socios y el archivo del
            Registro es el único que trae el capital.
          </li>
        </ul>
      </Callout>

      <section className="rc-block">
        <SectionTitle kicker={`${tramo[0].toUpperCase()}${tramo.slice(1)} de ${EN_CURSO}`}>Los socios</SectionTitle>
        <KpiStrip items={KPIS_SOCIOS} cols={3} />
        <Figure
          n={1}
          title="Mujeres entre los socios de las sociedades constituidas, por año"
          lede={`Porcentaje de mujeres sobre el total de socios de las sociedades constituidas cada año en el Registro, años completos ${completos[0]} a ${ULT}.`}
          source={
            <>
              {E._meta.fuente} <a href={E._meta.fuente_url}>{E._meta.fuente_url}</a>, consultado el {fechaCorta(FUENTE_ECO.consulta)}. Porcentajes: cálculo propio.
            </>
          }
        >
          <Columnas data={serieAnual(mujeresSocios, 'de mujeres entre los socios')} decimales={1} sufijo=" %" titulo={`Porcentaje de mujeres entre los socios, ${completos[0]} a ${ULT}`} />
        </Figure>
        <Figure
          n={2}
          title="Sociedades con solo socios extranjeros, por año"
          lede={`Porcentaje de las sociedades constituidas cada año en el Registro cuyos socios son todos extranjeros, años completos ${completos[0]} a ${ULT}.`}
          source={
            <>
              {E._meta.fuente} <a href={E._meta.fuente_url}>{E._meta.fuente_url}</a>. Porcentajes: cálculo propio.
            </>
          }
        >
          <Columnas data={serieAnual(soloExtranjeras, 'de sociedades con solo socios extranjeros')} decimales={1} sufijo=" %" titulo={`Porcentaje de sociedades con solo socios extranjeros, ${completos[0]} a ${ULT}`} />
        </Figure>
      </section>

      <Rule weight="hair" />

      <section className="rc-block">
        <SectionTitle kicker="Pesos de cada año, sin ajustar por inflación">Capital declarado al constituirse</SectionTitle>
        <KpiStrip
          cols={3}
          items={[
            { valor: millonesTexto(CAP[ANIO_TASA].mediana), label: `Capital mediano en ${ANIO_TASA}`, detalle: `La mitad de las ${num(CAP[ANIO_TASA].n)} sociedades declaró esa cifra o menos` },
            { valor: millonesTexto(CAP[ANIO_CURSO].mediana), label: `Capital mediano, ${tramoCorte} de ${ANIO_CURSO}`, detalle: `${num(CAP[ANIO_CURSO].n)} sociedades` },
            {
              valor: `${num(pct(CAP[ANIO_TASA].tramos.hasta_1_millon + CAP[ANIO_TASA].tramos.hasta_500_mil, CAP[ANIO_TASA].n), 1)} %`,
              label: `Declaró $1 millón o menos en ${ANIO_TASA}`,
              detalle: 'Capital declarado al constituirse; el archivo no dice cuánto está pagado',
              alt: true,
            },
          ]}
        />
        <EditorialTable
          stack
          firstCol={{ min: '14rem' }}
          caption={`Sociedades constituidas en el Registro por tramo de capital declarado, ${ANIO_TASA} y ${tramoCorte} de ${ANIO_CURSO}`}
          columns={[
            { label: 'Capital declarado', align: 'left' },
            { label: `${ANIO_TASA}`, align: 'right' },
            { label: `% ${ANIO_TASA}`, align: 'right' },
            { label: `${tramoCorte[0].toUpperCase()}${tramoCorte.slice(1)} ${ANIO_CURSO}`, align: 'right' },
            { label: `% ${ANIO_CURSO}`, align: 'right' },
          ]}
          rows={TRAMOS.map(([k, label]) => [
            label,
            num(CAP[ANIO_TASA].tramos[k]),
            `${num(pct(CAP[ANIO_TASA].tramos[k], CAP[ANIO_TASA].n), 1)} %`,
            num(CAP[ANIO_CURSO].tramos[k]),
            `${num(pct(CAP[ANIO_CURSO].tramos[k], CAP[ANIO_CURSO].n), 1)} %`,
          ])}
        />
        <EditorialTable
          stack
          firstCol={{ min: '14rem' }}
          caption="Capital mediano declarado según el tipo de sociedad"
          columns={[
            { label: 'Tipo de sociedad', align: 'left' },
            { label: `Sociedades ${ANIO_TASA}`, align: 'right' },
            { label: `Mediana ${ANIO_TASA}`, align: 'right' },
            { label: `Sociedades ${ANIO_CURSO}`, align: 'right' },
            { label: `Mediana ${ANIO_CURSO}`, align: 'right' },
          ]}
          rows={tipos.map((t) => [
            NOMBRE_TIPO[t] ?? `Otro tipo (código ${t} del archivo)`,
            num(CAP[ANIO_TASA].por_tipo[t]?.n ?? 0),
            celdaMediana(ANIO_TASA, t),
            num(CAP[ANIO_CURSO].por_tipo[t]?.n ?? 0),
            celdaMediana(ANIO_CURSO, t),
          ])}
        />
        <p className="rc-sourcenote">
          <b className="rc-src-k">Fuente:</b> {CONSTITUCIONES._meta.fuente.split('. Población')[0]}, columna «Capital» del archivo de cada año,{' '}
          <a href={RES.url}>{RES.url}</a>. Medianas y tramos: cálculo propio.{' '}
          <a href={`${REPO}/blob/main/datos/constituciones_comuna.json`}>Datos (repositorio)</a> · <Link to="/metodologia">Metodología →</Link>
        </p>
      </section>
    </article>
  )
}
