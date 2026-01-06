import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Smartphone, Cloud, Brain, Database, Shield, CheckCircle, Star, Quote, TrendingUp } from 'lucide-react'
import AnimatedShape from '../components/ui/AnimatedShape'
import Button from '../components/ui/Button'
import SEO from '../components/SEO'

const Home = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isClient, setIsClient] = useState(false) // Renamed for clarity

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)

    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    // Mark as client-side hydrated
    setIsClient(true)
  }, [])

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
      name: 'Ananya Iyer',
      role: 'COO, FinNest Payments',
      company: 'Bengaluru · Digital payments scale-up',
      quote: 'CR Technologies stabilised our UPI stack before the festive rush. Checkout failures dropped by 62% and we crossed 8M daily transactions without downtime.',
      rating: 5,
    },
    {
      name: 'Rohan Mehta',
      role: 'Head of Engineering, Swastik Retail',
      company: 'Mumbai · Omni-channel retail',
      quote: 'Their headless commerce rollout cut page loads to 1.3s and improved conversion by 28%. The team shipped every sprint on time.',
      rating: 5,
    },
    {
      name: 'Priya Nambiar',
      role: 'VP Technology, Vistara Logistics',
      company: 'Delhi NCR · B2B logistics',
      quote: 'The control-tower dashboard they built gives real-time lane visibility. SLA breaches are down 41% and on-time deliveries are up to 97%.',
      rating: 5,
    },
    {
      name: 'Arjun Kulkarni',
      role: 'CTO, HealthBridge Clinics',
      company: 'Pune · Healthcare network',
      quote: 'Their HIPAA-ready data lake unified 120+ clinics. Claims processing time reduced from days to hours and analytics are now self-serve.',
      rating: 5,
    },
    {
      name: 'Neha Sinha',
      role: 'Product Director, BharatRide Mobility',
      company: 'Hyderabad · Mobility & EV',
      quote: 'We launched our driver super-app in 12 weeks. Crash rates fell by 70% and app store rating improved from 3.6 to 4.5.',
      rating: 5,
    },
    {
      name: 'Karthik Narayanan',
      role: 'Chief Data Officer, Shakti Insurance',
      company: 'Chennai · InsurTech',
      quote: 'CR Technologies productionised our pricing models with full observability. Quote TAT dropped to under 45 seconds and loss ratios improved.',
      rating: 5,
    },
    {
      name: 'Meera Deshpande',
      role: 'CEO, Ujjwal Microfinance',
      company: 'Ahmedabad · Financial inclusion',
      quote: 'Their multilingual onboarding and eKYC stack increased rural activation by 33%. Support tickets reduced because the UX is genuinely intuitive.',
      rating: 5,
    },
    {
      name: 'Siddharth Rao',
      role: 'Co-founder, Klassroom EdTech',
      company: 'Bengaluru · EdTech',
      quote: 'Live-class latency dropped below 200ms after their edge optimisation. Completion rates for our STEM courses jumped by 24%.',
      rating: 5,
    },
  ]

  const marqueeTestimonials = [...testimonials, ...testimonials]

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
        title="Global IT Solutions & Digital Transformation Worldwide"
        description="CR Technologies: Global IT solutions provider serving clients worldwide from India. Enterprise web development, mobile apps, cloud services, AI/ML, data analytics & cybersecurity. 200+ international clients across USA, UK, Canada, Australia, UAE. ISO 27001 certified."
        keywords="global IT solutions, international web development, enterprise software development worldwide, offshore development India, IT outsourcing, cloud migration services worldwide, AI ML solutions, data analytics international, cybersecurity services global, digital transformation, React development, Node.js experts, AWS partners"
        url="/"
      />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedShape type="circle" className="absolute top-20 left-10 w-96 h-96" />
        <AnimatedShape type="blob" className="absolute top-40 right-20 w-80 h-80" />
        <AnimatedShape type="square" className="absolute bottom-20 left-1/3 w-72 h-72" />
      </div>

      {/* Hero Section with Image */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background Image with Overlay - Full bleed */}
        <div className="absolute inset-0 z-0 -top-20 lg:-top-24">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80" 
            alt="Modern technology workspace with digital transformation concept"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          {/* Premium gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/60 to-purple-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto relative z-10 pt-20 lg:pt-24">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-white/90">Trusted by 200+ enterprises worldwide</span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <span className="text-white block">Transform Your Vision</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Into Digital Excellence</span>
              </motion.h1>
              
              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Enterprise-grade IT solutions engineered for growth. From web & mobile development 
                to AI-powered analytics — we deliver technology that drives results.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Button to="/contact" variant="primary" size="lg" className="shadow-2xl shadow-blue-500/25">
                  Start Your Project <ArrowRight className="inline ml-2 w-5 h-5" />
                </Button>
                <Button to="/portfolio" variant="outline" size="lg" className="bg-white/5 backdrop-blur-sm border-white/30 hover:bg-white/20">
                  View Our Work
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-wrap justify-center items-center gap-6"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-gray-200">
              <span className="text-2xl">🏆</span>
              <span className="font-semibold text-gray-700">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-gray-200">
              <span className="text-2xl">🔒</span>
              <span className="font-semibold text-gray-700">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-gray-200">
              <span className="text-2xl">☁️</span>
              <span className="font-semibold text-gray-700">AWS & Google Cloud Partner</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-gray-200">
              <span className="text-2xl">✅</span>
              <span className="font-semibold text-gray-700">GDPR Compliant</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.03, duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
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
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
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
              Trusted by leading Indian enterprises & high-growth startups
            </p>
          </motion.div>
        </div>
        
        {/* Full-width marquee container */}
        <div className="relative w-full">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />
          
          <Marquee
            speed={50}
            gradient={false}
            className="py-4"
            autoFill={true}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="mx-4 w-[360px] bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100/80"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-600/80" />
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed min-h-[80px]">"{testimonial.quote}"</p>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-500 text-white flex items-center justify-center font-semibold shadow-md">
                    {testimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600 leading-tight">{testimonial.role}</p>
                    <p className="text-xs text-gray-500 leading-tight">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
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

      {/* About Our Services - SEO Content Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Global IT Solutions for Modern Businesses
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              CR Technologies is a <strong>global IT solutions provider with offices in Surat and Ahmedabad, India</strong>, delivering enterprise-grade 
              technology services to businesses worldwide. With over 15 years of international experience and 200+ clients across 
              North America, Europe, Asia, and beyond, we specialize in transforming businesses through innovative technology solutions.
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Service Overview Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Web Development Services</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our <strong>enterprise web development services</strong> delivered from our offices in Surat and Ahmedabad serve clients worldwide, 
                focusing on creating responsive, user-friendly websites that drive business growth. We build modern web applications using React, Node.js, and other cutting-edge 
                technologies, ensuring your site ranks well in search engines globally and delivers exceptional user experiences.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Responsive web design optimized for all devices</li>
                <li>✓ SEO-friendly architecture for better Google rankings</li>
                <li>✓ Fast-loading sites that improve user engagement</li>
                <li>✓ E-commerce platforms and custom web applications</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">International Mobile App Development</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We develop <strong>mobile app solutions for global markets</strong>, serving clients across iOS and Android platforms worldwide. 
                Our international team creates engaging apps that connect you with customers globally. Our mobile-first approach ensures your 
                application works seamlessly across all devices and markets, optimized for international app stores and search rankings.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Native iOS and Android app development</li>
                <li>✓ Cross-platform solutions with React Native and Flutter</li>
                <li>✓ User-centric design and intuitive interfaces</li>
                <li>✓ App store optimization and performance monitoring</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Cloud Services & Digital Transformation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our <strong>enterprise cloud migration and management services</strong> help businesses worldwide scale efficiently. We provide 
                AWS, Azure, and Google Cloud expertise with 24/7 global support, enabling you to modernize your infrastructure across multiple 
                regions while reducing costs and improving reliability for international operations.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Cloud migration with zero downtime</li>
                <li>✓ AWS, Azure, and Google Cloud expertise</li>
                <li>✓ Infrastructure optimization and cost reduction</li>
                <li>✓ DevOps practices and CI/CD pipelines</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI & Machine Learning Solutions</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement <strong>AI and machine learning solutions</strong> that help businesses make data-driven decisions. 
                From predictive analytics to natural language processing, we build intelligent systems that drive innovation 
                and competitive advantage.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Predictive analytics and business intelligence</li>
                <li>✓ Machine learning model development and deployment</li>
                <li>✓ Computer vision and image recognition</li>
                <li>✓ Natural language processing applications</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Analytics & Business Intelligence</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our <strong>data analytics services</strong> transform raw data into actionable insights. We help businesses 
                understand customer behavior, optimize operations, and identify new growth opportunities through advanced 
                analytics and visualization tools.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Data warehouse design and implementation</li>
                <li>✓ Business intelligence dashboards</li>
                <li>✓ Advanced analytics and reporting</li>
                <li>✓ Data visualization and storytelling</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cybersecurity & Data Protection</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We provide comprehensive <strong>cybersecurity services</strong> to protect your business from evolving threats. 
                Our ISO 27001 certified team implements security best practices, conducts audits, and ensures compliance with 
                industry standards.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Security assessments and penetration testing</li>
                <li>✓ ISO 27001 compliance and certifications</li>
                <li>✓ Incident response and threat management</li>
                <li>✓ Employee security training and awareness</li>
              </ul>
            </motion.div>
          </div>

          {/* Why Choose CR Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-gray-200"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose CR Technologies?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-gray-700"><strong>Projects Successfully Delivered</strong> across various industries</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-600 mb-2">200+</div>
                <p className="text-gray-700"><strong>Happy Clients Worldwide</strong> trusting our expertise</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-600 mb-2">15+</div>
                <p className="text-gray-700"><strong>Years of Experience</strong> in IT solutions and innovation</p>
              </div>
            </div>
            <p className="text-center text-gray-700 mt-8 leading-relaxed text-lg">
              As a <strong>global technology partner with headquarters in India (Surat and Ahmedabad)</strong>, we combine technical expertise with business acumen 
              to deliver solutions that create real value worldwide. Whether you're looking for enterprise web development, mobile app solutions, 
              cloud services, or AI/ML implementation anywhere in the world, CR Technologies is your trusted partner for digital transformation and international business growth.
            </p>
          </motion.div>
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
                      if (tech.name === 'AWS' && tech.altLogo && e.target.src !== tech.altLogo) {
                        e.target.src = tech.altLogo;
                        return;
                      }
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