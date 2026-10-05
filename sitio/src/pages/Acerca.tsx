// src/pages/Acerca.tsx — independencia, licencias, privacidad y quién lo hace.
import { Link } from 'react-router-dom'
import { PageHead, Rule, SectionTitle } from '../components/editorial'
import { REPO } from '../data/fuentes'

export function Acerca() {
  return (
    <article className="rc-screen">
      <PageHead
        kicker="Acerca"
        title="Qué es Radar Emprende y quién lo hace"
        dek="Datos públicos sobre la creación de empresas en Chile, con fuente, método y límites."
      />
      <Rule weight="bold" />

      <section className="rc-block">
        <SectionTitle kicker="Sin encargo de organismos, gremios ni empresas">Independencia</SectionTitle>
        <div className="rc-prose">
          <p>
            Radar Emprende reúne y verifica datos dispersos en registros públicos sobre la creación de empresas y los
            apoyos al emprendimiento en Chile. Mantiene la independencia editorial como condición: ningún cliente ni
            patrocinador interviene en lo que se publica, en los datos ni en su lectura. No representa al Ministerio de
            Economía, al SII, al INE ni a Corfo, cuyos registros cita como fuente, ni recibe encargo de ellos.
          </p>
          <p>
            Ningún software, asesoría ni fondo figura por haber pagado o pedido figurar. El sitio es gratuito y de acceso
            abierto.
          </p>
        </div>
      </section>

      <Rule weight="hair" />

      <section className="rc-block">
        <SectionTitle kicker="Qué se puede copiar y con qué condición">Licencias</SectionTitle>
        <div className="rc-prose">
          <p>
            <strong>Cálculo, selección y textos:</strong>{' '}
            <a href="https://creativecommons.org/licenses/by/4.0/deed.es">Creative Commons Atribución 4.0 (CC BY 4.0)</a>.
            Se pueden copiar, adaptar y redistribuir, incluso con fines comerciales, citando «Radar Emprende — Tercera
            Letra SpA» con enlace al sitio o al repositorio, e indicando si hubo cambios.
          </p>
          <p>
            <strong>Excepción:</strong> la población del Censo 2024 y la tasa de sociedades por cada 1.000 habitantes,
            que se calcula con ella, van bajo{' '}
            <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.es">CC BY-SA 4.0</a>, porque es la licencia del
            INE y exige la misma licencia para lo derivado. Quien las reutilice debe publicarlas bajo esa licencia.
          </p>
          <p>
            Cada columna copiada de una fuente oficial conserva la condición de su fuente; el detalle por archivo está en{' '}
            <Link to="/metodologia">Metodología</Link>.
          </p>
          <p>
            <strong>Código:</strong> licencia MIT, en el <a href={REPO}>repositorio público</a>. Las fuentes de cada
            serie, con su fecha de consulta, están en <Link to="/metodologia">Metodología</Link>.
          </p>
        </div>
      </section>

      <Rule weight="hair" />

      <section className="rc-block" id="privacidad">
        <SectionTitle kicker="Qué hace este sitio con los datos">Privacidad</SectionTitle>
        <div className="rc-prose">
          <p>
            <strong>Responsable:</strong> Tercera Letra SpA, <a href="mailto:contacto@terceraletra.cl">contacto@terceraletra.cl</a>.
          </p>
          <p>
            <strong>Lo que se publica.</strong> Solo cifras agregadas por comuna, región o país. El sitio no publica
            nombres, RUT, razones sociales ni direcciones, aunque los registros de origen los traigan. Las bases con RUT se
            usan para contar y cruzar en el computador de quien corre los scripts y no se suben al repositorio.
          </p>
          <p>
            <strong>Lo que el sitio no hace.</strong> No usa cookies ni analítica, no tiene formularios ni cuentas y no
            carga recursos de terceros: las tipografías se sirven desde el mismo sitio. El proveedor que aloje el sitio
            recibirá la dirección IP y el navegador de cada visita para servir la página, como cualquier servidor web.
          </p>
          <p>
            Este aviso se revisará cuando entre en vigencia la Ley 21.719 (01-dic-2026).
          </p>
        </div>
      </section>

      <Rule weight="hair" />

      <section className="rc-block">
        <SectionTitle kicker="Tercera Letra, estudio de tecnología, inteligencia y comunicación">Quién lo hace</SectionTitle>
        <div className="rc-prose">
          <p>
            Lo desarrolla y mantiene <a href="https://terceraletra.cl">Tercera Letra</a>, estudio chileno que publica
            también <a href="https://radar-circular.cl">Radar Circular</a> (Ley REP) y{' '}
            <a href="https://radarconstruccionindustrializada.cl">Radar Construcción Industrializada</a>.
          </p>
          <p>
            Contacto: <a href="mailto:contacto@terceraletra.cl">contacto@terceraletra.cl</a>. Las correcciones y fuentes
            adicionales son bienvenidas; toda corrección aplicada queda en el{' '}
            <Link to="/metodologia#correcciones">registro de correcciones</Link>.
          </p>
        </div>
      </section>
    </article>
  )
}
