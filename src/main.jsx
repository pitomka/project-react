import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/normalize.css'
import './styles/components/header.css'
import './styles/components/main.css'
import './styles/components/footer.css'
import './styles/PathPage.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
