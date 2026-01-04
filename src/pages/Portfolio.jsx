import { motion } from 'framer-motion'
import { ExternalLink, Github, TrendingUp, Users, Zap, Award, Filter, ArrowRight, CheckCircle, Building2 } from 'lucide-react'
import AnimatedShape from '../components/ui/AnimatedShape'
import Button from '../components/ui/Button'
import SEO from '../components/SEO'
import { useState } from 'react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const filters = ['All', 'E-Commerce', 'AI/ML', 'Cloud', 'Healthcare', 'Manufacturing']
  const caseStudies = [
    {
      id: 1,
      title: 'E-Commerce Platform Transformation',
      industry: 'Retail & E-Commerce',
      category: 'E-Commerce',
      client: 'Global Fashion Brand',
      description: 'Complete platform redesign and migration to microservices architecture',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80',
      challenge: 'Legacy system causing 40% cart abandonment rate and slow checkout process',
      solution: 'Rebuilt using React, Node.js, and AWS cloud infrastructure with real-time inventory management',
      results: [
        { metric: '85%', description: 'Cart abandonment rate reduced' },
        { metric: '3.5x', description: 'Faster checkout process' },
        { metric: '200%', description: 'Revenue increase in first year' },
        { metric: '99.9%', description: 'System uptime achieved' },
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL'],
      timeline: '6 months',
      budget: 'Enterprise',
      testimonial: {
        name: 'Sarah Johnson',
        role: 'CEO',
        company: 'Global Fashion Brand',
        quote: 'CR Technologies transformed our digital presence. The new platform has exceeded all our expectations in terms of performance and user experience.',
      },
      link: 'https://example-ecommerce.com',
      github: 'https://github.com/example',
    },
    {
      id: 2,
      title: 'AI-Powered Customer Service Platform',
      industry: 'SaaS & Enterprise',
      category: 'AI/ML',
      client: 'FinTech Startup',
      description: 'Intelligent chatbot and customer support automation system',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&q=80',
      challenge: 'Processing 10,000+ customer queries daily with only 15-person support team',
      solution: 'Built AI chatbot using NLP, trained on company knowledge base with human escalation workflow',
      results: [
        { metric: '80%', description: 'Queries resolved automatically' },
        { metric: '24/7', description: 'Customer support availability' },
        { metric: '95%', description: 'Customer satisfaction rate' },
        { metric: '60%', description: 'Support cost reduction' },
      ],
      technologies: ['Python', 'TensorFlow', 'NLP', 'React', 'Firebase', 'Cloud AI'],
      timeline: '4 months',
      budget: 'Mid-Range',
      testimonial: {
        name: 'Michael Chen',
        role: 'CTO',
        company: 'FinTech Startup',
        quote: 'The AI solution has revolutionized our customer service. Response times are instant and customer satisfaction has never been higher.',
      },
      link: 'https://example-chatbot.com',
      github: 'https://github.com/example',
    },
    {
      id: 3,
      title: 'Cloud Migration & Infrastructure Optimization',
      industry: 'Healthcare',
      category: 'Healthcare',
      client: 'Hospital Chain Network',
      description: 'Enterprise-wide migration from on-premise to cloud with zero downtime',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80',
      challenge: 'Legacy infrastructure causing compliance issues and 40+ manual processes',
      solution: 'Migrated to AWS with automated CI/CD pipeline, containerization, and infrastructure-as-code',
      results: [
        { metric: '40%', description: 'Operational cost reduction' },
        { metric: '0 hrs', description: 'Downtime during migration' },
        { metric: '100%', description: 'HIPAA compliance achieved' },
        { metric: '10x', description: 'Faster deployment cycles' },
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Prometheus'],
      timeline: '8 months',
      budget: 'Enterprise',
      testimonial: {
        name: 'Dr. Emily Rodriguez',
        role: 'Hospital IT Director',
        company: 'Hospital Chain Network',
        quote: 'The cloud migration was flawless. Our systems are now more reliable, secure, and our staff can focus on patient care.',
      },
      link: null,
      github: null,
    },
    {
      id: 4,
      title: 'Real-Time Data Analytics Dashboard',
      industry: 'Manufacturing',
      category: 'Manufacturing',
      client: 'Industrial Equipment Manufacturer',
      description: 'IoT-connected dashboard for real-time production monitoring and predictive maintenance',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
      challenge: 'Manual monitoring causing equipment downtime, maintenance costs, and production delays',
      solution: 'IoT sensors with real-time data pipeline, ML-based predictive maintenance, and interactive dashboards',
      results: [
        { metric: '45%', description: 'Equipment downtime reduced' },
        { metric: '30%', description: 'Maintenance cost savings' },
        { metric: '25%', description: 'Production efficiency increase' },
        { metric: '2 days', description: 'Early equipment failure prediction' },
      ],
      technologies: ['IoT', 'Python', 'Apache Kafka', 'InfluxDB', 'Grafana', 'Machine Learning'],
      timeline: '5 months',
      budget: 'Enterprise',
      testimonial: {
        name: 'John Smith',
        role: 'Operations Manager',
        company: 'Industrial Equipment Manufacturer',
        quote: 'The predictive maintenance system has transformed our operations. We now fix problems before they become critical.',
      },
      link: null,
      github: null,
    },
  ]
  
  const filteredStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter)

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: Award },
    { number: '200+', label: 'Happy Clients', icon: Users },
    { number: '$50M+', label: 'Client Value Created', icon: TrendingUp },
    { number: '98%', label: 'Client Satisfaction', icon: Zap },
  ]

  return (
    <div className="relative overflow-hidden pt-16 lg:pt-20">
      <SEO
        title="Portfolio & Case Studies | CR Technologies - Success Stories"
        description="Explore our portfolio of 500+ successful projects. See how CR Technologies transformed businesses with web development, AI solutions, cloud services, and digital transformation strategies."
        keywords="case studies, portfolio, web development projects, AI projects, cloud migration, digital transformation success stories, CR Technologies portfolio"
      />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedShape type="blob" className="absolute top-20 right-10 w-96 h-96" />
        <AnimatedShape type="circle" className="absolute bottom-20 left-10 w-80 h-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-purple-50/30"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-32 z-10">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-semibold text-sm mb-8"
            >
              <Award className="w-4 h-4" />
              500+ Projects Delivered Successfully
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Our <span className="text-gradient">Portfolio</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              Transforming businesses through innovative technology solutions that drive measurable results
            </motion.p>
            
            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-5 md:p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold mb-1 text-gradient">{stat.number}</div>
                  <div className="text-gray-600 font-semibold text-sm md:text-base">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 lg:py-28 px-4">
        <div className="container mx-auto">
          <div className="space-y-16 lg:space-y-24">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                layout
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group sticky top-24">
                    <img
                      src={study.image}
                      alt={study.title}
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                        e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect fill="%23667eea" width="100%" height="100%"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="24" font-family="system-ui">CR Technologies</text></svg>';
                      }}
                      className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 md:p-8">
                      <div className="text-white">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-3">
                          <Building2 className="w-4 h-4" />
                          {study.industry}
                        </div>
                        <p className="text-sm text-gray-300">Client: {study.client}</p>
                        <div className="flex gap-2 mt-3">
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold">
                            {study.timeline}
                          </span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold">
                            {study.budget}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{study.title}</h2>
                    <p className="text-gray-600 text-base md:text-lg mb-6">{study.description}</p>

                    {/* Challenge & Solution */}
                    <div className="space-y-4 mb-8">
                      <div className="bg-red-50 rounded-xl p-5 border-l-4 border-red-500">
                        <h3 className="text-lg font-bold mb-2 text-red-700 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-sm">!</span>
                          Challenge
                        </h3>
                        <p className="text-gray-700 text-sm md:text-base">{study.challenge}</p>
                      </div>
                      <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-500">
                        <h3 className="text-lg font-bold mb-2 text-green-700 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          Solution
                        </h3>
                        <p className="text-gray-700 text-sm md:text-base">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold mb-4 text-gradient flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        Key Results
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100">
                            <div className="text-xl md:text-2xl font-bold text-gradient">{result.metric}</div>
                            <div className="text-xs md:text-sm text-gray-600">{result.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-5 md:p-6 mb-6 border-l-4 border-blue-500">
                      <p className="text-gray-700 italic mb-4 text-sm md:text-base">"{study.testimonial.quote}"</p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                          {study.testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">{study.testimonial.name}</p>
                          <p className="text-xs text-gray-600">{study.testimonial.role} at {study.testimonial.company}</p>
                        </div>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      {study.link && (
                        <a
                          href={study.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Live
                        </a>
                      )}
                      {study.github && (
                        <a
                          href={study.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-semibold transition-colors text-sm"
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* CTA Section */}
      <section className="py-20 lg:py-28 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] animate-gradient rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join 200+ successful companies that trusted us to transform their digital presence
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button to="/contact" variant="primary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Start Your Project
                </Button>
                <Button to="/services" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  View Services
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio