import { motion } from 'framer-motion'
import { Code, Globe, Smartphone, Zap, CheckCircle, ArrowRight, Layers, Rocket } from 'lucide-react'
import AnimatedShape from '../../components/ui/AnimatedShape'
import Button from '../../components/ui/Button'
import SEO from '../../components/SEO'

const WebDevelopment = () => {
  const technologies = [
    { 
      name: 'React', 
      description: 'Modern UI library for building interactive interfaces',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      bgColor: 'bg-cyan-50'
    },
    { 
      name: 'Vue.js', 
      description: 'Progressive framework for building user interfaces',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      bgColor: 'bg-green-50'
    },
    { 
      name: 'Angular', 
      description: 'Platform for building mobile and desktop web applications',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      bgColor: 'bg-red-50'
    },
    { 
      name: 'Next.js', 
      description: 'React framework for production with server-side rendering',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      bgColor: 'bg-gray-50'
    },
    { 
      name: 'Node.js', 
      description: 'JavaScript runtime for building scalable backend services',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      bgColor: 'bg-green-50'
    },
    { 
      name: 'TypeScript', 
      description: 'Typed superset of JavaScript for better code quality',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      bgColor: 'bg-blue-50'
    },
  ]

  const services = [
    {
      icon: Globe,
      title: 'Custom Web Applications',
      description: 'Tailored web solutions built to your exact specifications and business needs',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first designs that work seamlessly across all devices and screen sizes',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast load times and optimized user experiences',
    },
    {
      icon: Layers,
      title: 'E-commerce Solutions',
      description: 'Full-featured online stores with payment integration and inventory management',
    },
    {
      icon: Rocket,
      title: 'Progressive Web Apps',
      description: 'Web apps that feel like native applications with offline capabilities',
    },
    {
      icon: Code,
      title: 'API Development',
      description: 'RESTful and GraphQL APIs for seamless data integration',
    },
  ]

  const process = [
    'Requirements gathering and analysis',
    'UI/UX design and prototyping',
    'Frontend and backend development',
    'Third-party integrations',
    'Testing and quality assurance',
    'Deployment and launch',
    'Ongoing maintenance and support',
  ]

  return (
    <div className="relative overflow-hidden pt-20">
      <SEO 
        title="Web Development Services"
        description="Professional web development services. Modern, responsive websites and web applications built with React, Vue, Angular, Node.js. Custom web solutions for your business."
        keywords="web development, website development, web application development, React development, Node.js development, custom websites"
      />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedShape type="circle" className="absolute top-20 left-10 w-96 h-96" />
        <AnimatedShape type="blob" className="absolute bottom-20 right-10 w-80 h-80" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 z-10">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Code className="w-10 h-10 text-white" />
            </div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Web <span className="text-gradient">Development</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Build modern, scalable web applications that drive business growth and deliver exceptional user experiences
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
                Get Started <ArrowRight className="inline ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                alt="Professional web development and coding workspace"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Transform Your Digital Presence</h2>
              <p className="text-gray-600 text-lg mb-4">
                In today's digital-first world, your website is often the first impression customers have of your business.
                We create web experiences that not only look stunning but also drive results.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Our team of expert developers uses the latest technologies and best practices to build websites and
                web applications that are fast, secure, scalable, and user-friendly.
              </p>
              <p className="text-gray-600 text-lg">
                From simple landing pages to complex enterprise applications, we have the expertise to bring your
                vision to life.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop" 
                  alt="Web development technologies and frameworks"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Why Choose Our Web Development Services?</h3>
                <ul className="space-y-4">
                  {['Modern tech stack', 'Mobile-responsive design', 'SEO optimized', 'Fast load times', 'Secure & scalable', '24/7 support'].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Web Development Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for all your web development needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-50px' }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="h-32 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <service.icon className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge tools and frameworks for modern web development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-50px' }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className={`w-16 h-16 ${tech.bgColor || 'bg-gray-50'} rounded-xl mb-4 flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300`}>
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

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              A structured approach to ensure successful project delivery
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-50px' }}
                  className="flex items-start space-x-4 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <div className="w-8 h-8 bg-yellow-300 text-gray-900 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-lg">{step}</p>
                </motion.div>
              ))}
            </div>
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
              Ready to Build Your Web Application?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a web solution that drives results
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

export default WebDevelopment

