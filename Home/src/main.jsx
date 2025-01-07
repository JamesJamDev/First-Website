import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Projects from '../Projects/projects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Projects />
  </StrictMode>,
)
