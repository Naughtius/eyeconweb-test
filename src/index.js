import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// Components
import App from 'components/App'
// Global styles
import 'react-multi-carousel/lib/styles.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'styles/reset.scss'
import 'styles/common.scss'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
