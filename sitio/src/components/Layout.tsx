// src/components/Layout.tsx — shell editorial: sidebar oscuro + main claro.
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'

export function Layout() {
  return (
    <div className="rc-shell">
      <a className="rc-skip" href="#contenido">Saltar al contenido</a>
      <Sidebar />
      <main className="rc-main" id="contenido" tabIndex={-1}>
        <Outlet />
        <Footer />
      </main>
    </div>
  )
}
