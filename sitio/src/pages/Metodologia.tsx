// src/pages/Metodologia.tsx — fuentes, niveles de afirmación, regla n < 5, correcciones y reproducibilidad.
import { EditorialTable, N_MIN, PageHead, Rule, SectionTitle } from '../components/editorial'
import { CONSTITUCIONES, COHORTES, CORFO, FUENTES, REPO } from '../data/fuentes'
import { fechaCorta, llano } from '../data/fechas'

/** Registro de correcciones (PLAN §2, R8). Formato: fecha ISO, qué decía, qué dice, por qué. */
const CORRECCIONES: { fecha: string; decia: string; dice: string; porque: string }[] = []

const SERIES = [
  { nombre: 'Empresas creadas por comuna', archivo: 'datos/constituciones_comuna.json', m: CONSTITUCIONES._meta, fuentes: [CONSTITUCIONES._meta.fuente], metodo: CONSTITUCIONES._meta.metodo, nivel: CONSTITUCIONES._meta.nivel },
  { nombre: 'Qué pasó con las empresas creadas cada año', archivo: 'datos/cohortes_comuna.json', m: COHORTES._meta, fuentes: COHORTES._meta.fuentes, metodo: null as string | null, nivel: COHORTES._meta.nivel },
  { nombre: 'A qué comunas llega Corfo', archivo: 'datos/corfo_comuna.json', m: CORFO._meta, fuentes: CORFO._meta.fuentes, metodo: null as string | null, nivel: CORFO._meta.nivel },
]

const SCRIPTS = [
  { s: 'scripts/descargar.py', q: 'Baja las bases oficiales a data-raw/ (no versionado: son pesadas y traen RUT).' },
  { s: 'scripts/comunas.py', q: 'Tabla maestra de comunas del Censo 2024 y homologación de nombres entre RES, SII y Corfo.' },
  { s: 'scripts/constituciones.py', q: 'Genera datos/constituciones_comuna.json.' },
  { s: 'scripts/cohortes.py', q: 'Genera datos/cohortes_comuna.json.' },
  { s: 'scripts/corfo.py', q: 'Genera datos/corfo_comuna.json.' },
]

export function Metodologia() {
  return (
    <article className="rc-screen">
      <PageHead
        kicker="Metodología y fuentes"
        title="Metodología, fuentes y correcciones"
        dek="De dónde sale cada cifra y cómo se calcula."
      />
      <Rule weight="bold" />

      <section className="rc-block">
        <SectionTitle kicker="URL y fecha de consulta de cada fuente">Fuentes</SectionTitle>
        <EditorialTable
          stack
          firstCol={{ min: '14rem', max: '18rem' }}
          columns={[{ label: 'Fuente', align: 'left' }, { label: 'Para qué se usa' }, { label: 'Condición de uso' }, { label: 'Consulta' }]}
          rows={FUENTES.map((f) => [
            <span>
              {f.nombre}
              <br />
              <a href={f.url} style={{ fontWeight: 400, fontSize: '0.8rem', overflowWrap: 'anywhere' }}>{f.url}</a>
            </span>,
            f.uso,
            f.condicion,
            fechaCorta(f.consulta),
          ])}
        />
      </section>

      <Rule weight="hair" />

      <section className="rc-block">
        <SectionTitle kicker="Lo que declara cada archivo de datos sobre sí mismo">Las tres series</SectionTitle>
        {SERIES.map((x) => (
          <div className="rc-prose" key={x.archivo} style={{ maxWidth: '72ch' }}>
            <h3>{x.nombre}</h3>
            <p>{x.m.descripcion}</p>
            <p>
              <strong>Fuentes:</strong> {x.fuentes.map(llano).join(' ')}
            </p>
            {x.metodo && (
              <p>
                <strong>Método:</strong> {llano(x.metodo)}
              </p>
            )}
            <p>
              <strong>Nivel de afirmación:</strong> {x.nivel}.{' '}
              <strong>Generado:</strong> {fechaCorta(x.m.generado)} (el script está en «Cómo reproducir el cálculo»).{" "}
              <a href={`${REPO}/blob/main/${x.archivo}`}>Ver los datos en el repositorio</a>.
            </p>
            <p>
              <strong>Licencia:</strong> {llano(x.m.licencia)}
            </p>
          </div>
        ))}
      </section>

      <Rule weight="hair" />

      <section className="rc-block">
        <SectionTitle kicker="Protocolo de veracidad del proyecto">Niveles de afirmación</SectionTitle>
        <div className="rc-prose">
          <ul>
            <li><strong>Nivel 1.</strong> Fuente literal: la cifra o el texto está tal cual en la fuente oficial. Se publica.</li>
            <li><strong>Nivel 2.</strong> Supuesto declarado: la cifra es un cálculo propio o depende de un supuesto. Se publica con el supuesto y los límites a la vista.</li>
            <li><strong>Nivel 3.</strong> No afirmable. No sale al sitio.</li>
          </ul>
          <p>
            Cuando una lectura es una hipótesis no verificada (por ejemplo, que los domicilios tributarios se concentren en
            ciertas comunas, o que parte de los términos de giro sean de oficio), se publica como hipótesis, con esa
            palabra. La ambigüedad de una fuente se publica como ambigüedad, con el texto citado. Radar Emprende no asesora
            casos particulares.
          </p>
        </div>
      </section>

      <Rule weight="hair" />

      <section className="rc-block" id="regla-n5">
        <SectionTitle kicker="Regla de presentación">Menos de {N_MIN} casos: el número, sin porcentaje</SectionTitle>
        <div className="rc-prose">
          <p>
            Cuando una celda tiene menos de {N_MIN} casos (sociedades creadas en un año en una comuna, sociedades creadas en
            el año de la tasa, proyectos de Corfo en una comuna) el sitio muestra el número, marcado «n =», y no calcula
            porcentajes ni tasas. Es una regla estadística: los registros de origen ya publican esos datos por RUT, pero un
            «100,0 %» sobre una o dos sociedades se lee como un juicio sobre ellas.
          </p>
        </div>
      </section>

      <Rule weight="hair" />

      <section className="rc-block" id="correcciones">
        <SectionTitle kicker="Qué decía, qué dice y por qué">Correcciones</SectionTitle>
        {CORRECCIONES.length === 0 ? (
          <p className="rc-block-intro">
            Sin correcciones registradas. Cada corrección se anotará aquí con su fecha, lo que decía el sitio, lo que dice
            ahora y el motivo.
          </p>
        ) : (
          <ol className="rc-timeline">
            {CORRECCIONES.map((c) => (
              <li className="rc-tl-item" key={c.fecha + c.dice}>
                <span className="rc-tl-tag">{fechaCorta(c.fecha)}</span>
                <div>
                  <p className="rc-tl-t">{c.dice}</p>
                  <p className="rc-tl-d">Decía: {c.decia}. Por qué: {c.porque}</p>
                </div>
              </li>
            ))}
          </ol>
        )}
      </section>

      <Rule weight="hair" />

      <section className="rc-block" id="reproducir">
        <SectionTitle kicker="Código público, licencia MIT">Cómo reproducir el cálculo</SectionTitle>
        <div className="rc-prose">
          <p>
            Todo el cálculo está en la carpeta <code>scripts/</code> del{' '}
            <a href={REPO}>repositorio del proyecto</a>. Se corre con Python en este orden:
          </p>
          <ol>
            {SCRIPTS.map((x) => (
              <li key={x.s}>
                <a href={`${REPO}/blob/main/${x.s}`}><code>{x.s}</code></a>: {x.q}
              </li>
            ))}
          </ol>
          <p>
            <strong>Corfo:</strong> {CORFO._meta.reproducibilidad}
          </p>
          <p>
            El sitio no calcula las series: <code>npm run datos</code> copia los JSON de <code>datos/</code> a{' '}
            <code>sitio/src/data/</code> y las páginas solo los leen y les dan formato.
          </p>
        </div>
      </section>

      <Rule weight="hair" />

      <section className="rc-block">
        <SectionTitle kicker="Cómo se leen fechas y números">Convenciones</SectionTitle>
        <div className="rc-prose">
          <ul>
            <li><strong>Fechas</strong> en día-mes-año (02-oct-2026). «Consulta» es la fecha en que se leyó o descargó la fuente; «generado», la fecha en que el script produjo el archivo.</li>
            <li><strong>Números</strong> con punto de miles y coma decimal. Montos en pesos nominales de cada año, en millones.</li>
            <li><strong>Comuna</strong> es la que trae cada fuente (tributaria en el Registro, domicilio vigente en el SII), con los nombres igualados a los del Censo 2024.</li>
          </ul>
        </div>
      </section>
    </article>
  )
}
