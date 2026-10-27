import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Tipografías autohospedadas (sin transferencia a Google Fonts): Libre Caslon Text para titulares
// (elegida por Sergio el 27-oct-2026, más de diario que Newsreader), Public Sans y Spline Sans Mono variables.
import '@fontsource/libre-caslon-text/latin-400.css'
import '@fontsource/libre-caslon-text/latin-400-italic.css'
import '@fontsource/libre-caslon-text/latin-700.css'
import '@fontsource-variable/public-sans'
import '@fontsource-variable/spline-sans-mono'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
