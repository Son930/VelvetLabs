import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { LegalPage } from './pages/LegalPage'

function RedirectHome() {
  return <Navigate to="/" replace />
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="legal" element={<LegalPage />} />
        <Route path="about" element={<RedirectHome />} />
        <Route path="team" element={<RedirectHome />} />
        <Route path="work" element={<RedirectHome />} />
        <Route path="process" element={<RedirectHome />} />
        <Route path="services" element={<RedirectHome />} />
      </Route>
    </Routes>
  )
}
