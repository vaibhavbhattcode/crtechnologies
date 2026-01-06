import { useState, useEffect, useMemo, useCallback, memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowRight, Mail, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setMobileServicesOpen(false)
    setMobileMoreOpen(false)
  }, [location.pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isMobileMenuOpen])

  // Simple scroll handler - more reliable
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    // Check initial scroll position
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Memoized navigation data
  const services = useMemo(() => [
    { name: 'Web Development', path: '/services/web-development', desc: 'Modern websites & web apps' },
    { name: 'App Development', path: '/services/app-development', desc: 'iOS & Android apps' },
    { name: 'Cloud Services', path: '/services/cloud-services', desc: 'AWS, Azure, GCP solutions' },
    { name: 'AI Solutions', path: '/services/ai-solutions', desc: 'Machine learning & AI' },
    { name: 'Data Analytics', path: '/services/data-analytics', desc: 'Business intelligence' },
    { name: 'Cybersecurity', path: '/services/cybersecurity', desc: 'Enterprise security' },
  ], [])

  const moreLinks = useMemo(() => [
    { name: 'Portfolio', path: '/portfolio', desc: 'Our work' },
    { name: 'Pricing', path: '/pricing', desc: 'Transparent pricing' },
    { name: 'Blog', path: '/blog', desc: 'Latest insights' },
    { name: 'Technology Stack', path: '/technology', desc: 'Tools we use' },
    { name: 'Trust & Security', path: '/trust', desc: 'Our commitments' },
  ], [])

  // Memoized NavLink component
  const NavLink = useCallback(({ to, children }) => {
    const isActive = location.pathname === to
    return (
      <Link
        to={to}
        className={`relative px-3 xl:px-4 py-2 font-medium text-sm xl:text-[15px] transition-colors duration-150 rounded-lg whitespace-nowrap ${
          isActive 
            ? (isScrolled ? 'text-blue-600 bg-blue-50' : 'text-white bg-white/15')
            : (isScrolled 
              ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50' 
              : 'text-white/90 hover:text-white hover:bg-white/10')
        }`}
      >
        {children}
      </Link>
    )
  }, [location.pathname, isScrolled])

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 `backdrop-blur-md shadow-lg shadow-black/5 border-b border-gray-100'
            : 'bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm'
        }`}
      >
        <nav className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-16 sm:h-18' : 'h-18 sm:h-20 lg:h-22'
          }`}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
              <div className={`relative flex items-center justify-center transition-all duration-300 ${
                isScrolled ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-600 rounded-lg sm:rounded-xl shadow-lg shadow-blue-500/30"></div>
                <span className="relative text-white font-bold text-base sm:text-lg">CR</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className={`font-bold tracking-tight transition-all duration-300 truncate ${
                  isScrolled 
                    ? 'text-base sm:text-lg lg:text-xl text-gray-900' 
                    : 'text-lg sm:text-xl lg:text-2xl text-white'
                }`}>
                  CR Technologies
                </span>
                <span className={`hidden sm:block text-[10px] lg:text-[11px] font-medium tracking-wide uppercase transition-colors ${
                  isScrolled ? 'text-gray-500' : 'text-white/70'
                }`}>
                  Premium IT Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className={`flex items-center gap-1 px-3 xl:px-4 py-2 font-medium text-sm xl:text-[15px] rounded-lg transition-all duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}>
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 xl:w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[9999]"
                    >
                      <div className="px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Our Services</p>
                      </div>
                      <div className="py-1">
                        {services.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            onClick={() => setIsServicesOpen(false)}
                            className="flex items-center justify-between px-4 py-2.5 hover:bg-blue-50 transition-colors group"
                          >
                            <div>
                              <p className="text-gray-900 font-semibold text-sm group-hover:text-blue-600 transition-colors">{service.name}</p>
                              <p className="text-xs text-gray-500">{service.desc}</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                          </Link>
                        ))}
                      </div>
                      <div className="px-4 py-2.5 bg-gradient-to-r from-blue-50 to-purple-50 border-t border-gray-100">
                        <Link to="/services" onClick={() => setIsServicesOpen(false)} className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                          Explore All Services <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink to="/careers">Careers</NavLink>

              {/* More Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsMoreOpen(true)}
                onMouseLeave={() => setIsMoreOpen(false)}
              >
                <button className={`flex items-center gap-1 px-3 xl:px-4 py-2 font-medium text-sm xl:text-[15px] rounded-lg transition-all duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}>
                  <span>More</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMoreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 mt-2 w-56 xl:w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[9999]"
                    >
                      <div className="py-1">
                        {moreLinks.map((link) => (
                          <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMoreOpen(false)}
                            className="flex items-center justify-between px-4 py-2.5 hover:bg-blue-50 transition-colors group"
                          >
                            <div>
                              <p className="text-gray-900 font-semibold text-sm group-hover:text-blue-600 transition-colors">{link.name}</p>
                              <p className="text-xs text-gray-500">{link.desc}</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="ml-2 xl:ml-3 inline-flex items-center gap-1.5 px-4 xl:px-5 py-2 xl:py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-sm xl:text-[15px] hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:-translate-y-0.5"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isMobileMenuOpen
                  ? 'bg-gray-100 text-gray-900'
                  : isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[320px] bg-white z-[10001] lg:hidden flex flex-col shadow-2xl"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white">
                <Link 
                  to="/" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="flex items-center gap-2"
                >
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">CR</span>
                  </div>
                  <span className="font-bold text-gray-900">CR Technologies</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Menu Content */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                <div className="p-4 space-y-1">
                  {/* Main Links */}
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl font-semibold transition-colors ${
                      location.pathname === '/' 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Home
                  </Link>
                  
                  <Link
                    to="/about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl font-semibold transition-colors ${
                      location.pathname === '/about' 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    About
                  </Link>

                  {/* Services Accordion */}
                  <div className="pt-2 mt-2 border-t border-gray-100">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 font-semibold text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <span>Services</span>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="py-2 pl-4 space-y-1">
                            {services.map((service) => (
                              <Link
                                key={service.path}
                                to={service.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <span className="font-medium text-gray-800 text-sm">{service.name}</span>
                                <span className="text-xs text-gray-500 block">{service.desc}</span>
                              </Link>
                            ))}
                            <Link
                              to="/services"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-1 px-4 py-2.5 text-blue-600 font-semibold text-sm"
                            >
                              View All <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    to="/careers"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl font-semibold transition-colors ${
                      location.pathname === '/careers' 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Careers
                  </Link>

                  {/* More Accordion */}
                  <div className="pt-2 mt-2 border-t border-gray-100">
                    <button
                      onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 font-semibold text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <span>More</span>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${mobileMoreOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {mobileMoreOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="py-2 pl-4 space-y-1">
                            {moreLinks.map((link) => (
                              <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <span className="font-medium text-gray-800 text-sm">{link.name}</span>
                                <span className="text-xs text-gray-500 block">{link.desc}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Fixed Bottom CTA */}
              <div className="p-4 border-t border-gray-100 bg-gray-50/80 backdrop-blur-sm">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/20"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
                
                <div className="flex items-center justify-center gap-4 mt-4">
                  <a 
                    href="tel:+918320810061" 
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="font-medium">Call</span>
                  </a>
                  <a 
                    href="mailto:crtechnologies24@gmail.com" 
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="font-medium">Email</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
})

Header.displayName = 'Header'

export default Header

