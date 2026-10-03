// src/pages/NoEncontrada.tsx — 404 dentro del shell.
import { Link } from 'react-router-dom'
import { PageHead, Rule } from '../components/editorial'

export function NoEncontrada() {
  return (
    <article className="rc-screen">
      <PageHead kicker="No encontrada" title="Esta página no existe" dek="La dirección no existe o la sección cambió de nombre." />
      <Rule weight="bold" />
      <p className="rc-block-intro">
        <Link to="/">Volver al inicio →</Link>
      </p>
    </article>
  )
}
