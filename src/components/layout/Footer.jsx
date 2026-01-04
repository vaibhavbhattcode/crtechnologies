import { Link } from 'react-router-dom'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight, Globe, Award, Shield, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { memo, useMemo } from 'react'

const Footer = memo(() => {
  // Memoize static data to prevent recreation
  const services = useMemo(() => [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'App Development', path: '/services/app-development' },
    { name: 'Cloud Services', path: '/services/cloud-services' },
    { name: 'AI Solutions', path: '/services/ai-solutions' },
    { name: 'Data Analytics', path: '/services/data-analytics' },
    { name: 'Cybersecurity', path: '/services/cybersecurity' },
  ], [])

  const company = useMemo(() => [
    { name: 'About Us', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ], [])

  const resources = useMemo(() => [
    { name: 'Pricing', path: '/pricing' },
    { name: 'Technology Stack', path: '/technology' },
    { name: 'Trust & Security', path: '/trust' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ], [])

  const socialLinks = useMemo(() => [
    { icon: Facebook, href: 'https://facebook.com/crtechnologies', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: 'https://twitter.com/crtechnologies', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Linkedin, href: 'https://linkedin.com/company/cr-technologies', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Instagram, href: 'https://instagram.com/crtechnologies', label: 'Instagram', color: 'hover:bg-pink-600' },
  ], [])

  const achievements = useMemo(() => [
    { icon: Award, text: 'ISO 27001 Certified' },
    { icon: Shield, text: 'SOC 2 Compliant' },
    { icon: Globe, text: 'AWS Partner' },
    { icon: Clock, text: '24/7 Support' },
  ], [])

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300">
      {/* Newsletter Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=400&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Ready to Transform Your Business?</h3>
            <p className="mb-8 text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
              Join 200+ companies that trust CR Technologies for their digital transformation. Get expert insights delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your business email"
                className="flex-1 px-5 py-3.5 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30 bg-white/95 backdrop-blur-sm placeholder:text-gray-500"
                required
              />
              <button 
                type="submit"
                className="px-8 py-3.5 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-all hover:shadow-lg flex items-center justify-center space-x-2 group"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
            <p className="mt-4 text-sm text-blue-200">No spam, unsubscribe anytime. By subscribing, you agree to our Privacy Policy.</p>
          </motion.div>
        </div>
      </div>

      {/* Achievements Bar */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center space-x-2 text-gray-400"
              >
                <item.icon className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
                <span className="text-white font-bold text-xl">CR</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white block">CR Technologies</span>
                <span className="text-xs text-gray-500">Premium IT Solutions</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Leading IT solutions provider delivering innovative technology services
              to transform businesses worldwide. Trusted by 200+ clients across 50+ countries.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold text-lg mb-5 flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mr-3"></span>
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold text-lg mb-5 flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mr-3"></span>
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h3 className="text-white font-semibold text-lg mb-5 flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mr-3"></span>
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold text-lg mb-5 flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mr-3"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-colors">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <span className="text-sm text-gray-400 leading-relaxed block">
                    123 Innovation Drive,<br />
                    Tech Park, Bangalore,<br />
                    Karnataka 560001, India
                  </span>
                </div>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-colors">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <a href="tel:+912212345678" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +91 (22) 1234-5678
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <a href="mailto:contact@crtechnologies.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  contact@crtechnologies.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} CR Technologies. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/trust" className="text-gray-500 hover:text-white transition-colors">
                Security
              </Link>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer

