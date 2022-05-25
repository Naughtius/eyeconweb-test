import { Routes, Route } from 'react-router-dom'
// Pages
import MainPage from 'pages/MainPage'

const Router = () => (
  <Routes>
    <Route index element={<MainPage />} />
    <Route path="*" element={<div>404</div>} />
  </Routes>
)

export default Router
