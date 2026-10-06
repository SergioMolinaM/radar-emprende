// src/components/ScrollToTop.tsx — arriba al cambiar de página; con #ancla, a esa sección.
// Las páginas cargan en diferido: se espera a que el ancla exista (hasta ~1 s) antes de bajar.
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    let intentos = 0
    let id = 0
    const buscar = () => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) el.scrollIntoView()
      else if (intentos++ < 60) id = requestAnimationFrame(buscar)
    }
    buscar()
    return () => cancelAnimationFrame(id)
  }, [pathname, hash])
  return null
}
