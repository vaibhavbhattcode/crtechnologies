import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { throttle } from '../../utils/performance'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 20)
    }, 100)
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'App Development', path: '/services/app-development' },
    { name: 'Cloud Services', path: '/services/cloud-services' },
    { name: 'AI Solutions', path: '/services/ai-solutions' },
    { name: 'Data Analytics', path: '/services/data-analytics' },
    { name: 'Cybersecurity', path: '/services/cybersecurity' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 will-change-transform ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-black/30 backdrop-blur-md'
      }`}
      style={{ willChange: 'transform, background-color' }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-white font-bold text-xl">CR</span>
            </div>
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-gradient' : 'text-white'
            }`}>
              CR Technologies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${
                location.pathname === '/' 
                  ? (isScrolled ? 'text-blue-600 font-semibold' : 'text-white font-semibold')
                  : (isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white/90 hover:text-white')
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                location.pathname === '/about' 
                  ? (isScrolled ? 'text-blue-600 font-semibold' : 'text-white font-semibold')
                  : (isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white/90 hover:text-white')
              }`}
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={`flex items-center space-x-1 transition-colors duration-200 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600' 
                  : 'text-white/90 hover:text-white'
              }`}>
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 will-change-transform"
                    style={{ willChange: 'transform, opacity' }}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/careers"
              className={`transition-colors ${
                location.pathname === '/careers' 
                  ? (isScrolled ? 'text-blue-600 font-semibold' : 'text-white font-semibold')
                  : (isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white/90 hover:text-white')
              }`}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className={`px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all shadow-lg ${
                location.pathname === '/contact' ? 'scale-105' : ''
              }`}
              style={{ willChange: 'transform' }}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden mt-4 pb-4 border-t ${
                isScrolled ? 'border-gray-200' : 'border-white/20'
              }`}
            >
              <div className={`flex flex-col space-y-4 pt-4 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`transition-colors ${
                    isScrolled ? 'hover:text-blue-600' : 'hover:text-white'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`transition-colors ${
                    isScrolled ? 'hover:text-blue-600' : 'hover:text-white'
                  }`}
                >
                  About
                </Link>
                <Link
                  to="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`transition-colors ${
                    isScrolled ? 'hover:text-blue-600' : 'hover:text-white'
                  }`}
                >
                  Services
                </Link>
                <Link
                  to="/careers"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`transition-colors ${
                    isScrolled ? 'hover:text-blue-600' : 'hover:text-white'
                  }`}
                >
                  Careers
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-center shadow-lg"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header

