// src/components/Footer.tsx — pie editorial: nota sobre los datos, licencias y marca.
import { Link } from 'react-router-dom'
import { RadarMark } from './editorial/RadarMark'

export function Footer() {
  return (
    <div className="rc-screen">
      <footer className="rc-foot">
        <hr className="rc-rule rc-rule-bold" />
        <div className="rc-foot-grid">
          <div className="rc-foot-brand">
            <RadarMark size={40} variant="monograma" />
            <div>
              <p className="rc-foot-name">Radar Emprende</p>
              <p className="rc-foot-tag">Datos públicos · Chile</p>
            </div>
          </div>
          <p className="rc-foot-src">
            <strong>Sobre los datos.</strong> Registros públicos del Estado de Chile (Registro de Empresas y Sociedades,
            nóminas del SII, Censo 2024 del INE) y proyectos de Corfo publicados en DataInnovación, con cálculo propio
            descrito y reproducible. Este sitio no es un medio oficial del Gobierno de Chile ni de ningún gremio.{' '}
            <Link to="/metodologia">Metodología y&nbsp;fuentes&nbsp;→</Link>
          </p>
        </div>
        <div className="rc-foot-cta">
          <p className="rc-foot-madeby">
            <a href="https://terceraletra.cl" target="_blank" rel="noopener">
              Tercera Letra
            </a>{' '}
            · familia Radar. Cálculo y textos bajo{' '}
            <a href="https://creativecommons.org/licenses/by/4.0/deed.es" target="_blank" rel="noopener">
              CC BY 4.0
            </a>
            ; código bajo licencia MIT. <Link to="/acerca">Acerca →</Link>
          </p>
        </div>
        <p className="rc-foot-legal">© {new Date().getFullYear()} Tercera Letra SpA · Radar Emprende</p>
      </footer>
    </div>
  )
}
