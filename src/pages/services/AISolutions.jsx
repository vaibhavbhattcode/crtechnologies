import { motion } from 'framer-motion'
import { Brain, Sparkles, Target, CheckCircle, ArrowRight, Eye, MessageSquare, BarChart } from 'lucide-react'
import AnimatedShape from '../../components/ui/AnimatedShape'
import Button from '../../components/ui/Button'

const AISolutions = () => {
  const solutions = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Custom ML models to solve your specific business challenges',
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Chatbots, sentiment analysis, and text understanding solutions',
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Image recognition, object detection, and visual analytics',
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Forecast trends and make data-driven decisions',
    },
    {
      icon: Target,
      title: 'AI Automation',
      description: 'Automate repetitive tasks and streamline workflows',
    },
    {
      icon: Sparkles,
      title: 'AI Strategy Consulting',
      description: 'Develop AI roadmaps aligned with your business goals',
    },
  ]

  const useCases = [
    'Customer service automation',
    'Fraud detection and prevention',
    'Demand forecasting',
    'Personalized recommendations',
    'Document processing',
    'Quality control and inspection',
  ]

  const technologies = [
    {
      name: 'TensorFlow',
      description: 'Open-source ML framework',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      bgColor: 'bg-orange-50'
    },
    {
      name: 'PyTorch',
      description: 'Deep learning framework',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
      bgColor: 'bg-orange-50'
    },
    {
      name: 'Python',
      description: 'Primary AI programming language',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Scikit-learn',
      description: 'Machine learning library',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
      bgColor: 'bg-orange-50'
    },
    {
      name: 'OpenCV',
      description: 'Computer vision library',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Jupyter',
      description: 'Interactive data science',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
      bgColor: 'bg-orange-50'
    },
  ]

  return (
    <div className="relative overflow-x-hidden pt-16 md:pt-20 w-full bg-white">
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
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              AI <span className="text-gradient">Solutions</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Leverage artificial intelligence to automate processes, gain insights, and transform your business
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
                Explore AI Solutions <ArrowRight className="inline ml-2 w-5 h-5" />
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
              <h2 className="text-4xl font-bold mb-6">Unlock the Power of AI</h2>
              <p className="text-gray-600 text-lg mb-4">
                Artificial Intelligence is transforming industries, enabling businesses to automate processes,
                make better decisions, and create new opportunities. We help organizations harness the power
                of AI to drive innovation and competitive advantage.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Our team of AI experts combines deep technical knowledge with business acumen to deliver
                practical AI solutions that deliver real value.
              </p>
              <p className="text-gray-600 text-lg">
                From machine learning models to intelligent automation, we help you navigate the AI landscape
                and implement solutions that work.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">AI Use Cases</h3>
                <ul className="space-y-4">
                  {useCases.map((useCase, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0" />
                      <span>{useCase}</span>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our AI Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI services to transform your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-50px' }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">AI Technologies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge tools and frameworks for AI development
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

      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform with AI?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how AI can revolutionize your business processes
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

export default AISolutions

