import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
    <Analytics />
  </BrowserRouter>
)
