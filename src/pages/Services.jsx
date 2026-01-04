import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Code, Smartphone, Cloud, Brain, Database, Shield, ArrowRight, CheckCircle } from 'lucide-react'
import AnimatedShape from '../components/ui/AnimatedShape'
import Button from '../components/ui/Button'
import SEO from '../components/SEO'

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies. From simple landing pages to complex enterprise solutions.',
      features: ['React, Vue, Angular', 'Node.js & Express', 'Responsive Design', 'SEO Optimization'],
      gradient: 'from-blue-500 to-cyan-500',
      path: '/services/web-development',
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. We build apps that users love and businesses rely on.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization'],
      gradient: 'from-purple-500 to-pink-500',
      path: '/services/app-development',
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration solutions. Move to the cloud with confidence and optimize your operations.',
      features: ['AWS, Azure, GCP', 'Cloud Migration', 'DevOps & CI/CD', 'Infrastructure as Code'],
      gradient: 'from-green-500 to-emerald-500',
      path: '/services/cloud-services',
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Machine learning and AI-powered business solutions. Leverage artificial intelligence to automate processes and gain insights.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      gradient: 'from-orange-500 to-red-500',
      path: '/services/ai-solutions',
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform data into actionable business insights. Make data-driven decisions with our comprehensive analytics solutions.',
      features: ['Business Intelligence', 'Data Warehousing', 'Real-time Analytics', 'Custom Dashboards'],
      gradient: 'from-indigo-500 to-purple-500',
      path: '/services/data-analytics',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with enterprise-grade security solutions. Stay ahead of threats with our comprehensive security services.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance & Governance', '24/7 Monitoring'],
      gradient: 'from-red-500 to-pink-500',
      path: '/services/cybersecurity',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We understand your business needs and create a comprehensive plan',
    },
    {
      step: '02',
      title: 'Design & Development',
      description: 'Our team builds your solution using best practices and modern technologies',
    },
    {
      step: '03',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your solution meets the highest standards',
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We launch your solution and provide ongoing support and maintenance',
    },
  ]

  return (
    <div className="relative overflow-x-hidden pt-16 md:pt-20 w-full bg-white">
      <SEO 
        title="IT Services - Web, Mobile, Cloud, AI & Cybersecurity"
        description="Comprehensive enterprise IT services: Web Development, Mobile Apps, Cloud Migration, AI/ML Solutions, Data Analytics & Cybersecurity. Custom solutions for business growth."
        keywords="IT services India, enterprise software development, web development services, mobile app development company, cloud migration services, AI ML solutions, cybersecurity services Bangalore"
        url="/services"
      />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedShape type="circle" className="absolute top-20 left-10 w-96 h-96" />
        <AnimatedShape type="blob" className="absolute top-40 right-20 w-80 h-80" />
        <AnimatedShape type="square" className="absolute bottom-20 left-1/3 w-72 h-72" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-24 md:pt-20 z-10">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Our <span className="text-gradient">Services</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Comprehensive IT solutions tailored to transform your business and drive growth
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.path}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group-hover:translate-x-2 transition-transform"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
                  <div className="text-5xl font-bold text-gradient mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business
            </p>
            <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
              Contact Us <ArrowRight className="inline ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services

