import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import '../ui.css'
import '../styles.css'

// If you keep common.js/dashboard.js at repo root, import them here as side-effects:
// import '../common.js'
// import '../dashboard.js'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
