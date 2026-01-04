import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy, memo } from 'react'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import LoadingSpinner from './components/ui/LoadingSpinner'

// Lazy load all pages for code splitting - improves initial load time
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/Privacy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))
const Careers = lazy(() => import('./pages/Careers'))
const Services = lazy(() => import('./pages/Services'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Blog = lazy(() => import('./pages/Blog'))
const Trust = lazy(() => import('./pages/Trust'))
const Technology = lazy(() => import('./pages/Technology'))

// Service pages - lazy loaded
const WebDevelopment = lazy(() => import('./pages/services/WebDevelopment'))
const AppDevelopment = lazy(() => import('./pages/services/AppDevelopment'))
const CloudServices = lazy(() => import('./pages/services/CloudServices'))
const AISolutions = lazy(() => import('./pages/services/AISolutions'))
const DataAnalytics = lazy(() => import('./pages/services/DataAnalytics'))
const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity'))

// Memoized main layout for performance
const MainLayout = memo(({ children }) => (
  <div className="min-h-screen flex flex-col bg-white">
    <Header />
    <main className="flex-grow relative z-0" >
      <Suspense fallback={<LoadingSpinner />}>
        {children}
      </Suspense>
    </main>
    <Footer />
  </div>
))

MainLayout.displayName = 'MainLayout'

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/trust" element={<Trust />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/cloud-services" element={<CloudServices />} />
          <Route path="/services/ai-solutions" element={<AISolutions />} />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App

