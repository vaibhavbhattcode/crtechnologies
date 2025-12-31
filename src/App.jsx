import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Careers from './pages/Careers'
import Services from './pages/Services'
import WebDevelopment from './pages/services/WebDevelopment'
import AppDevelopment from './pages/services/AppDevelopment'
import CloudServices from './pages/services/CloudServices'
import AISolutions from './pages/services/AISolutions'
import DataAnalytics from './pages/services/DataAnalytics'
import Cybersecurity from './pages/services/Cybersecurity'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/app-development" element={<AppDevelopment />} />
            <Route path="/services/cloud-services" element={<CloudServices />} />
            <Route path="/services/ai-solutions" element={<AISolutions />} />
            <Route path="/services/data-analytics" element={<DataAnalytics />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

