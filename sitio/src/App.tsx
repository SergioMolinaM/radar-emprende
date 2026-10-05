// src/App.tsx — rutas del radar. Shell editorial (sidebar + main) en Layout.
import { lazy, Suspense, type ComponentType } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { RouteMeta } from './components/RouteMeta'
import { Layout } from './components/Layout'

const carga = (p: Promise<Record<string, unknown>>, k: string) =>
  p.then((m) => ({ default: m[k] as ComponentType }))
const Portada = lazy(() => carga(import('./pages/Portada'), 'Portada'))
const EmpresasCreadas = lazy(() => carga(import('./pages/EmpresasCreadas'), 'EmpresasCreadas'))
const Cohortes = lazy(() => carga(import('./pages/Cohortes'), 'Cohortes'))
const QuienLasCrea = lazy(() => carga(import('./pages/QuienLasCrea'), 'QuienLasCrea'))
const Corfo = lazy(() => carga(import('./pages/Corfo'), 'Corfo'))
const Informalidad = lazy(() => carga(import('./pages/Informalidad'), 'Informalidad'))
const Metodologia = lazy(() => carga(import('./pages/Metodologia'), 'Metodologia'))
const Acerca = lazy(() => carga(import('./pages/Acerca'), 'Acerca'))
const NoEncontrada = lazy(() => carga(import('./pages/NoEncontrada'), 'NoEncontrada'))

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteMeta />
      <Suspense
        fallback={
          <div className="rc-screen" style={{ paddingTop: 60 }}>
            <p style={{ fontFamily: 'var(--mono)', color: 'var(--muted)', fontSize: '0.8rem' }}>Cargando…</p>
          </div>
        }
      >
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Portada />} />
            <Route path="empresas-creadas" element={<EmpresasCreadas />} />
            <Route path="quien-las-crea" element={<QuienLasCrea />} />
            <Route path="cohortes" element={<Cohortes />} />
            <Route path="corfo" element={<Corfo />} />
            <Route path="formales-e-informales" element={<Informalidad />} />
            <Route path="metodologia" element={<Metodologia />} />
            <Route path="acerca" element={<Acerca />} />
            <Route path="*" element={<NoEncontrada />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
