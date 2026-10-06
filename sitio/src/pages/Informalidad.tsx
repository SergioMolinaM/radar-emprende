// src/pages/Informalidad.tsx — microemprendedores formales e informales (EME 8, INE), por región y rama,
// y las razones para iniciar o no iniciar actividades en el SII. Todas las cifras salen de eme8_informalidad.json.
// Radar mide y no prescribe: la página no califica la informalidad ni recomienda formalizarse.
import { BarsH, Callout, Figure, KpiStrip, PageHead, Rule, SectionTitle, type BarDatum } from '../components/editorial'
import { FUENTES, REPO } from '../data/fuentes'
import { INFORMALIDAD } from '../data/datos-informalidad'
import { fechaCorta, num } from '../data/fechas'
import type { Calidad, Estimacion } from '../data/datos-informalidad'
import { SERVICIOS, SERVICIOS_CONSULTA } from '../data/servicios'

const D = INFORMALIDAD
const M = D._meta
const fuenteEme = FUENTES.find((f) => f.id === 'eme')!

/** «no fiable» no se publica; «poco fiable» se marca con asterisco y nota al pie. */
const publicable = (e: { calidad: Calidad }) => e.calidad !== 'no fiable'
const marca = (e: { calidad: Calidad }) => (e.calidad === 'poco fiable' ? ' *' : '')

function barras<T extends Estimacion>(xs: T[], label: (x: T) => string, destacar?: (x: T) => boolean): BarDatum[] {
  return xs
    .filter(publicable)
    .sort((a, b) => b.pct - a.pct)
    .map((x) => ({ label: label(x) + marca(x), value: x.pct, highlight: destacar?.(x), color: 'var(--c5)' }))
}

const razonesNo = Object.values(D.razones_no_inicio)
const razonesSi = Object.values(D.razones_inicio)
/** Código 3 de E6: el cuestionario y el diccionario le dan nombres distintos; no se grafica. */
const ambigua = D.razones_inicio['3']
const razonesSiGrafico = razonesSi.filter((x) => x !== ambigua)
const omitidasSi = razonesSiGrafico.filter((x) => !publicable(x)).map((x) => x.razon.toLowerCase())
const rangoCliente = [...razonesSi].sort((a, b) => b.pct - a.pct).indexOf(D.razones_inicio['5']) + 1
const anteriores = [...razonesSi].sort((a, b) => b.pct - a.pct).slice(0, rangoCliente - 1)
const ORDINAL = ['', 'Primera', 'Segunda', 'Tercera', 'Cuarta', 'Quinta']
const top = (xs: (Estimacion & { razon: string })[]) => [...xs].sort((a, b) => b.pct - a.pct)[0]
const noTop = top(razonesNo)
const siCliente = D.razones_inicio['5']
const regiones = Object.values(D.informalidad.region)
const ramas = Object.values(D.informalidad.rama)
const nac = D.informalidad.nacional
const nRazonesNo = razonesNo[0].n
const nRazonesSi = razonesSi[0].n
/** Misma escala en las dos figuras de razones, para que se puedan comparar. */
const maxRazones = Math.max(...razonesNo.map((x) => x.pct), ...razonesSi.map((x) => x.pct)) * 1.25

const NotaCalidad = () => (
  <>
    * Estimación poco fiable según el estándar del INE: leer con cautela. Las cifras no fiables no se muestran.
  </>
)

export function Informalidad() {
  return (
    <article className="rc-screen">
      <PageHead
        kicker="Encuesta de Microemprendimiento 2025 · INE"
        title="Formales e informales"
        dek="Cuántos microemprendedores trabajan con registro en el SII y cuántos sin él, por región y por rama, y las razones que dan unos y otros, según la VIII Encuesta de Microemprendimiento."
        byline={`Datos generados el ${fechaCorta(M.generado)} · nivel de afirmación ${M.nivel}`}
      />
      <Rule weight="bold" />

      <Callout variant="warning" title="Antes de leer estas cifras">
        <ul className="rc-limites">
          <li>
            Es una encuesta a personas, no un registro de empresas. Cubre a quienes trabajan por cuenta propia o emplean
            hasta 10 personas, con o sin registro. Las otras páginas de Radar Emprende cuentan sociedades del Registro de
            Empresas y Sociedades, que son formales por definición.
          </li>
          <li>Alcanza para región y rama de actividad. No tiene datos por comuna.</li>
          <li>{M.definicion_informalidad.replace('Síntesis de resultados VIII EME, p.18: ', 'Definición del INE: ')}</li>
          <li>
            No tener inicio de actividades en el SII no es lo mismo que ser informal: la definición también mira la
            contabilidad. Sin inicio de actividades, contando a quienes tienen el trámite en curso:{' '}
            {num(D.sin_inicio_actividades.pct, 1)} %; informales:{' '}
            {num(nac.pct, 1)} %.
          </li>
          <li>
            A cada cifra se le calculó su error de muestreo y se clasificó con el estándar de calidad del INE (el detalle
            está en el archivo de datos). Lo poco fiable va marcado con asterisco; lo no fiable no se publica.
          </li>
        </ul>
      </Callout>

      <section className="rc-block">
        <KpiStrip
          cols={3}
          items={[
            {
              valor: `${num(nac.pct, 1)} %`,
              label: 'De los microemprendedores es informal',
              detalle: `Según la definición del INE · ${num(nac.n)} entrevistas`,
            },
            {
              valor: `${num(noTop.pct, 1)} %`,
              label: `De quienes no tienen inicio de actividades da como razón principal: ${noTop.razon.toLowerCase()}`,
              detalle: 'La razón más mencionada',
              alt: true,
            },
            {
              valor: `${num(siCliente.pct, 1)} %`,
              label: 'De quienes tienen inicio de actividades da como razón principal la exigencia de clientes o proveedores',
              detalle: `${ORDINAL[rangoCliente]} razón más mencionada, después de ${anteriores.map((x) => `«${x.razon.toLowerCase()}» (${num(x.pct, 1)} %)`).join(' y ')}`,
              alt: true,
            },
          ]}
        />
      </section>

      <section className="rc-block">
        <SectionTitle kicker="Razón principal que da cada persona entrevistada">
          Por qué se inicia actividades en el SII, o no
        </SectionTitle>
        <Figure
          n={1}
          title="Razón principal para no haber iniciado actividades"
          lede={`Personas que respondieron que no tienen inicio de actividades en el SII (${num(nRazonesNo)} entrevistas; a quienes tienen el trámite en curso no se les hace la pregunta). Porcentaje de cada razón.`}
          source={<>Pregunta E4 del cuestionario. <NotaCalidad /></>}
        >
          <BarsH data={barras(razonesNo, (x) => x.razon)} max={maxRazones} unit=" %" />
        </Figure>
        <Figure
          n={2}
          title="Razón principal para haber iniciado actividades"
          lede={`Personas con inicio de actividades en el SII (${num(nRazonesSi)} entrevistas). Porcentaje de cada razón, en la misma escala que la figura 1.`}
          source={
            <>
              Pregunta E6 del cuestionario.{' '}
              {omitidasSi.length > 0 && <>No se muestran por no fiables: {omitidasSi.join(' y ')}. </>}
              Tampoco se muestra el código 3 ({num(ambigua.pct, 1)} %, {ambigua.calidad}): el cuestionario impreso lo
              llama «Para acceder a financiamiento (créditos)» y el diccionario de la base, «Para descontar IVA
              (descontar gastos)».{' '}
              <NotaCalidad />
            </>
          }
        >
          <BarsH data={barras(razonesSiGrafico, (x) => x.razon)} max={maxRazones} unit=" %" />
        </Figure>
        <p className="rc-sourcenote">
          El encuestador espera una respuesta espontánea y, si no la hay, lee las alternativas. Cada persona da una sola
          razón principal.
        </p>
      </section>

      <Rule weight="hair" />

      <section className="rc-block">
        <SectionTitle kicker="Porcentaje de microemprendedores informales">Por región y por rama</SectionTitle>
        <Figure
          n={3}
          title="Informalidad por región"
          lede={`La barra destacada es el total nacional (${num(nac.pct, 1)} %).`}
          source={<>Las mismas cifras publica la síntesis de resultados de la EME 8 (INE), p.20. <NotaCalidad /></>}
        >
          <BarsH
            data={barras([...regiones, { ...nac, nombre: 'Total nacional' }], (x) => x.nombre, (x) => x.nombre === 'Total nacional')}
            max={100}
            unit=" %"
          />
        </Figure>
        <Figure
          n={4}
          title="Informalidad por rama de actividad"
          lede="Sector primario incluye agricultura, pesca, minería y electricidad, gas y agua; servicios incluye hoteles, enseñanza y salud, entre otros."
          source={<>Las mismas cifras publica la síntesis de resultados de la EME 8 (INE), p.19.</>}
        >
          <BarsH data={barras(ramas, (x) => x.nombre)} max={100} unit=" %" />
        </Figure>
      </section>

      <Rule weight="hair" />

      {SERVICIOS.length > 0 && <section className="rc-block" id="fuentes-y-servicios">
        <SectionTitle kicker={`Servicios públicos relacionados con este tema · enlaces revisados el ${fechaCorta(SERVICIOS_CONSULTA)}`}>
          Fuentes y servicios
        </SectionTitle>
        <ul className="rc-servicios">
          {SERVICIOS.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {s.nombre}
              </a>
              <span className="rc-servicio-d">{s.que_hace}</span>
              <span className="rc-servicio-m">
                {s.cobertura}
                {s.inicio_actividades && ` · ${s.inicio_actividades}`}
              </span>
            </li>
          ))}
        </ul>
        <p className="rc-sourcenote">
          Radar Emprende no asesora casos particulares. La lista no es un orden de pasos ni una recomendación.
        </p>
      </section>}

      <section className="rc-block">
        <p className="rc-sourcenote">
          <b className="rc-src-k">Fuente:</b> {M.fuente} <b className="rc-src-k">Método:</b> {M.diseno} {M.calidad}{' '}
          {M.redondeo} <b className="rc-src-k">Control:</b> {M.control} Consulta:{' '}
          <a href={fuenteEme.url}>{fuenteEme.nombre}</a> ({fechaCorta(fuenteEme.consulta)}). Cálculo:{' '}
          <a href={`${REPO}/blob/main/${M.script}`}>{M.script}</a>.
        </p>
      </section>
    </article>
  )
}
