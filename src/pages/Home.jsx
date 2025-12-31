import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Smartphone, Cloud, Brain, Database, Shield, CheckCircle, Star, Quote, TrendingUp } from 'lucide-react'
import AnimatedShape from '../components/ui/AnimatedShape'
import Button from '../components/ui/Button'
import SEO from '../components/SEO'

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies',
      gradient: 'from-blue-500 to-cyan-500',
      path: '/services/web-development',
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications',
      gradient: 'from-purple-500 to-pink-500',
      path: '/services/app-development',
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration solutions',
      gradient: 'from-green-500 to-emerald-500',
      path: '/services/cloud-services',
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Machine learning and AI-powered business solutions',
      gradient: 'from-orange-500 to-red-500',
      path: '/services/ai-solutions',
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform data into actionable business insights',
      gradient: 'from-indigo-500 to-purple-500',
      path: '/services/data-analytics',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with enterprise-grade security',
      gradient: 'from-red-500 to-pink-500',
      path: '/services/cybersecurity',
    },
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '15+', label: 'Years of Experience' },
  ]

  const features = [
    '24/7 Support & Maintenance',
    'Agile Development Methodology',
    'Cutting-Edge Technology Stack',
    'Dedicated Project Managers',
    'Quality Assurance & Testing',
    'Scalable Solutions',
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp Inc.',
      company: 'Fortune 500 Company',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
      quote: 'CR Technologies transformed our digital infrastructure. Their expertise in cloud migration saved us 40% in operational costs.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateLabs',
      company: 'Tech Startup',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      quote: 'The mobile app they developed exceeded our expectations. User engagement increased by 300% in the first quarter.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director, Global Solutions',
      company: 'Enterprise Client',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      quote: 'Outstanding AI solutions that revolutionized our customer service. Response time improved by 85%.',
      rating: 5,
    },
  ]

  const caseStudies = [
    {
      title: 'E-commerce Platform Transformation',
      industry: 'Retail',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      results: ['300% increase in sales', '50% reduction in load time', '99.9% uptime'],
      description: 'Modernized legacy e-commerce platform with microservices architecture',
    },
    {
      title: 'Cloud Migration Success',
      industry: 'Finance',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      results: ['40% cost reduction', '60% faster deployments', 'Enhanced security'],
      description: 'Migrated entire infrastructure to AWS with zero downtime',
    },
    {
      title: 'AI-Powered Analytics',
      industry: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      results: ['85% faster insights', '90% accuracy improvement', 'Real-time analytics'],
      description: 'Implemented machine learning models for predictive analytics',
    },
  ]

  const technologies = [
    { 
      name: 'React', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      bgColor: 'bg-cyan-50',
      logoColor: 'text-cyan-600'
    },
    { 
      name: 'Node.js', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      bgColor: 'bg-green-50',
      logoColor: 'text-green-600'
    },
    { 
      name: 'AWS', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      bgColor: 'bg-orange-50',
      logoColor: 'text-orange-600',
      altLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
    },
    { 
      name: 'Docker', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      bgColor: 'bg-blue-50',
      logoColor: 'text-blue-600'
    },
    { 
      name: 'Kubernetes', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      bgColor: 'bg-blue-50',
      logoColor: 'text-blue-700'
    },
    { 
      name: 'TensorFlow', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      bgColor: 'bg-orange-50',
      logoColor: 'text-orange-600'
    },
  ]

  return (
    <div className="relative overflow-hidden">
      <SEO 
        title="Home"
        description="Transform your business with cutting-edge IT solutions. Professional web development, mobile apps, cloud services, AI solutions, data analytics, and cybersecurity services."
        keywords="IT solutions, web development, mobile apps, cloud services, AI solutions, digital transformation"
      />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedShape type="circle" className="absolute top-20 left-10 w-96 h-96" />
        <AnimatedShape type="blob" className="absolute top-40 right-20 w-80 h-80" />
        <AnimatedShape type="square" className="absolute bottom-20 left-1/3 w-72 h-72" />
      </div>

      {/* Hero Section with Image */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop" 
            alt="Modern technology workspace with digital transformation concept"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/70"></div>
          {/* Light overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/10"></div>
        </div>
        
        <div className="container mx-auto text-center z-10 relative">
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
              <span className="text-white drop-shadow-2xl">Transforming Ideas</span>
              <br />
              <span className="text-white drop-shadow-2xl">Into Digital Reality</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Leading IT solutions provider delivering innovative technology services
              to transform businesses worldwide
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button to="/contact" variant="primary" className="text-lg px-8 py-4 shadow-2xl">
                Get Started <ArrowRight className="inline ml-2 w-5 h-5" />
              </Button>
              <Button to="/services" variant="outline" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 shadow-xl">
                Our Services
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-200 group"
                style={{ willChange: 'transform' }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`} style={{ willChange: 'transform' }}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
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

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-yellow-300">CR Technologies?</span>
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                We combine innovation, expertise, and dedication to deliver
                exceptional results that drive your business forward.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">Client Satisfaction</span>
                    <span className="text-4xl font-bold text-yellow-300">98%</span>
                  </div>
                  <div className="h-4 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-yellow-300 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '98%' }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                    />
                  </div>
                  <div className="pt-6 border-t border-white/20">
                    <p className="text-blue-100 mb-4">
                      "CR Technologies transformed our digital presence. Their
                      expertise and dedication are unmatched."
                    </p>
                    <p className="font-semibold">— CEO, Fortune 500 Company</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by leading companies worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                    <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from real projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-200 group"
                style={{ willChange: 'transform, opacity' }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                    loading="lazy"
                    decoding="async"
                    style={{ willChange: 'transform' }}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {study.industry}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="space-y-2">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technologies We <span className="text-gradient">Work With</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge tools and frameworks for modern development
            </p>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 group border border-gray-100"
                style={{ willChange: 'transform' }}
              >
                <div className={`w-20 h-20 ${tech.bgColor || 'bg-gray-50'} rounded-xl mb-4 flex items-center justify-center p-4 group-hover:scale-110 transition-transform duration-200`} style={{ willChange: 'transform' }}>
                  <img 
                    src={tech.logo} 
                    alt={`${tech.name} logo`}
                    className={`w-full h-full object-contain filter group-hover:brightness-110 transition-all ${
                      tech.name === 'AWS' ? 'p-1.5' : ''
                    }`}
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      ...(tech.name === 'AWS' && { 
                        filter: 'none',
                        objectFit: 'contain'
                      })
                    }}
                    onError={(e) => {
                      // Try alternate logo for AWS if main one fails
                      if (tech.name === 'AWS' && tech.altLogo && e.target.src !== tech.altLogo) {
                        e.target.src = tech.altLogo;
                        return;
                      }
                      // Fallback if image fails to load
                      const parent = e.target.parentElement;
                      parent.innerHTML = `<div class="${tech.logoColor} font-bold text-2xl">${tech.name.charAt(0)}</div>`;
                    }}
                  />
                </div>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">{tech.name}</p>
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
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white relative overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop" 
              alt="Business collaboration"
              className="absolute inset-0 w-full h-full object-cover opacity-10"
            />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our innovative solutions can drive your success. Schedule a free consultation today.
              </p>
              <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
                Get In Touch <ArrowRight className="inline ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

