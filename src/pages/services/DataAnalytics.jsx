import { motion } from 'framer-motion'
import { Database, BarChart, TrendingUp, CheckCircle, ArrowRight, PieChart, LineChart, Target } from 'lucide-react'
import AnimatedShape from '../../components/ui/AnimatedShape'
import Button from '../../components/ui/Button'

const DataAnalytics = () => {
  const services = [
    {
      icon: Database,
      title: 'Data Warehousing',
      description: 'Centralized data storage and management solutions',
    },
    {
      icon: BarChart,
      title: 'Business Intelligence',
      description: 'Transform data into actionable business insights',
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Interactive dashboards and reports for better decision-making',
    },
    {
      icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Monitor and analyze data as it happens',
    },
    {
      icon: LineChart,
      title: 'Predictive Analytics',
      description: 'Forecast trends and identify opportunities',
    },
    {
      icon: Target,
      title: 'Custom Analytics Solutions',
      description: 'Tailored analytics platforms for your specific needs',
    },
  ]

  const benefits = [
    'Data-driven decision making',
    'Improved operational efficiency',
    'Better customer insights',
    'Competitive advantage',
    'Risk identification and mitigation',
    'Revenue optimization',
  ]

  const technologies = [
    {
      name: 'Tableau',
      description: 'Data visualization platform',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Power BI',
      description: 'Business analytics tool',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerbi/powerbi-original.svg',
      bgColor: 'bg-yellow-50'
    },
    {
      name: 'Python',
      description: 'Data analysis and ML',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Apache Spark',
      description: 'Big data processing',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg',
      bgColor: 'bg-orange-50'
    },
    {
      name: 'MongoDB',
      description: 'NoSQL database',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      bgColor: 'bg-green-50'
    },
    {
      name: 'PostgreSQL',
      description: 'Advanced database',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      bgColor: 'bg-blue-50'
    },
  ]

  return (
    <div className="relative overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedShape type="circle" className="absolute top-20 left-10 w-96 h-96" />
        <AnimatedShape type="blob" className="absolute bottom-20 right-10 w-80 h-80" />
      </div>

      <section className="relative min-h-[60vh] flex items-center justify-center px-4 z-10">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Database className="w-10 h-10 text-white" />
            </div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Data <span className="text-gradient">Analytics</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transform data into actionable insights that drive business growth and innovation
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

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Unlock the Value in Your Data</h2>
              <p className="text-gray-600 text-lg mb-4">
                In today's data-driven world, organizations that can effectively analyze and act on their data
                gain a significant competitive advantage. We help businesses transform raw data into strategic
                insights.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Our analytics solutions enable you to understand your customers better, optimize operations,
                identify new opportunities, and make informed decisions.
              </p>
              <p className="text-gray-600 text-lg">
                From data warehousing to real-time dashboards, we provide end-to-end analytics solutions
                tailored to your business needs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Analytics Benefits</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0" />
                      <span>{benefit}</span>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Analytics Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive data analytics solutions for modern businesses
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
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
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
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Analytics Technologies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tools and platforms for data analytics
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

      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Harness Your Data?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let's turn your data into a competitive advantage
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

export default DataAnalytics

