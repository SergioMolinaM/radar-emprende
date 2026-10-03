import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Tipografías autohospedadas (sin transferencia a Google Fonts): Newsreader con eje óptico,
// Libre Franklin y Spline Sans Mono variables.
import '@fontsource-variable/newsreader/opsz.css'
import '@fontsource-variable/newsreader/opsz-italic.css'
import '@fontsource-variable/libre-franklin'
import '@fontsource-variable/spline-sans-mono'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
