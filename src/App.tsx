import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { LegalPage } from './pages/LegalPage'
import { ProcessPage } from './pages/ProcessPage'
import { ServicesPage } from './pages/ServicesPage'
import { TeamPage } from './pages/TeamPage'
import { WorkPage } from './pages/WorkPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="process" element={<ProcessPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="legal" element={<LegalPage />} />
      </Route>
    </Routes>
  )
}
