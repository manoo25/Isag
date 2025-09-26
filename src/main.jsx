import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'

// 👇 مهم جداً: استيراد وتعريف lord-icon
import lottie from 'lottie-web'
import { defineElement } from 'lord-icon-element'

// تسجيل العنصر مرة واحدة بس
defineElement(lottie.loadAnimation)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
