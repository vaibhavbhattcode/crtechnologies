import { motion } from 'framer-motion'
import { Shield, Lock, Eye, CheckCircle, ArrowRight, AlertTriangle, Key, Network } from 'lucide-react'
import AnimatedShape from '../../components/ui/AnimatedShape'
import Button from '../../components/ui/Button'

const Cybersecurity = () => {
  const services = [
    {
      icon: Shield,
      title: 'Security Audits',
      description: 'Comprehensive security assessments to identify vulnerabilities',
    },
    {
      icon: Lock,
      title: 'Penetration Testing',
      description: 'Simulated attacks to test your security defenses',
    },
    {
      icon: Key,
      title: 'Identity & Access Management',
      description: 'Secure user authentication and authorization systems',
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'Protect your network infrastructure from threats',
    },
    {
      icon: Eye,
      title: '24/7 Monitoring',
      description: 'Continuous security monitoring and threat detection',
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: 'Rapid response to security incidents and breaches',
    },
  ]

  const threats = [
    'Ransomware attacks',
    'Phishing and social engineering',
    'Data breaches',
    'DDoS attacks',
    'Malware infections',
    'Insider threats',
  ]

  const technologies = [
    {
      name: 'OWASP',
      description: 'Security standards',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      bgColor: 'bg-gray-50'
    },
    {
      name: 'Kali Linux',
      description: 'Security testing',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kalilinux/kalilinux-original.svg',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Wireshark',
      description: 'Network analysis',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      bgColor: 'bg-yellow-50'
    },
    {
      name: 'Metasploit',
      description: 'Penetration testing',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      bgColor: 'bg-red-50'
    },
    {
      name: 'Nmap',
      description: 'Network scanning',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Burp Suite',
      description: 'Web security testing',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      bgColor: 'bg-purple-50'
    },
  ]

  return (
    <div className="relative overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedShape type="blob" className="absolute top-20 right-10 w-96 h-96" />
        <AnimatedShape type="circle" className="absolute bottom-20 left-10 w-80 h-80" />
      </div>

      <section className="relative min-h-[60vh] flex items-center justify-center px-4 z-10">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-gradient">Cybersecurity</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Protect your business with enterprise-grade security solutions and stay ahead of evolving threats
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
                Secure Your Business <ArrowRight className="inline ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Stay Protected in a Digital World</h2>
              <p className="text-gray-600 text-lg mb-4">
                Cybersecurity threats are evolving rapidly, and businesses of all sizes are at risk. A single
                security breach can result in significant financial losses, reputational damage, and legal
                consequences.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                We provide comprehensive cybersecurity services to protect your digital assets, ensure compliance,
                and give you peace of mind.
              </p>
              <p className="text-gray-600 text-lg">
                Our team of security experts stays current with the latest threats and technologies to keep
                your business secure.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-red-600 to-pink-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Common Threats We Protect Against</h3>
                <ul className="space-y-4">
                  {threats.map((threat, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <AlertTriangle className="w-6 h-6 text-yellow-300 flex-shrink-0" />
                      <span>{threat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Security Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions for modern businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-50px' }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Security Technologies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tools and platforms for cybersecurity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-50px' }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className={`w-16 h-16 ${tech.bgColor || 'bg-gray-50'} rounded-xl mb-4 flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-200`} style={{ willChange: 'transform' }}>
                  <img 
                    src={tech.logo} 
                    alt={`${tech.name} logo`}
                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto'
                    }}
                    onError={(e) => {
                      const parent = e.target.parentElement;
                      parent.innerHTML = `<div class="text-gray-600 font-bold text-xl">${tech.name.charAt(0)}</div>`;
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-red-600 to-pink-600 text-white px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Let's assess your security posture and protect what matters most
            </p>
            <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
              Get Started <ArrowRight className="inline ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Cybersecurity

