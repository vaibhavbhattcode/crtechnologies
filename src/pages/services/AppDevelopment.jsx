import { motion } from 'framer-motion'
import { Smartphone, Apple, Tablet, Zap, CheckCircle, ArrowRight, Code, Rocket, Shield } from 'lucide-react'
import AnimatedShape from '../../components/ui/AnimatedShape'
import Button from '../../components/ui/Button'
import SEO from '../../components/SEO'

const AppDevelopment = () => {
  const platforms = [
    { icon: Apple, name: 'iOS Development', description: 'Native iOS apps using Swift and SwiftUI' },
    { icon: Tablet, name: 'Android Development', description: 'Native Android apps using Kotlin and Jetpack Compose' },
    { icon: Code, name: 'Cross-Platform', description: 'React Native and Flutter for unified codebase' },
  ]

  const technologies = [
    {
      name: 'React Native',
      description: 'Cross-platform mobile app framework',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      bgColor: 'bg-cyan-50'
    },
    {
      name: 'Flutter',
      description: 'Google\'s UI toolkit for building apps',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Swift',
      description: 'Apple\'s programming language for iOS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
      bgColor: 'bg-orange-50'
    },
    {
      name: 'Kotlin',
      description: 'Modern language for Android development',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
      bgColor: 'bg-purple-50'
    },
    {
      name: 'Dart',
      description: 'Programming language for Flutter',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Ionic',
      description: 'Hybrid mobile app framework',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
      bgColor: 'bg-indigo-50'
    },
  ]

  const services = [
    {
      title: 'Native Mobile Apps',
      description: 'High-performance apps built specifically for iOS or Android platforms',
      features: ['Platform-specific UI/UX', 'Native performance', 'Full API access', 'App Store optimization'],
    },
    {
      title: 'Cross-Platform Apps',
      description: 'Single codebase for both iOS and Android, reducing development time and cost',
      features: ['React Native', 'Flutter', 'Code reusability', 'Faster time to market'],
    },
    {
      title: 'App Maintenance',
      description: 'Ongoing support, updates, and improvements to keep your app running smoothly',
      features: ['Bug fixes', 'Feature updates', 'Performance optimization', 'Security patches'],
    },
    {
      title: 'App Store Optimization',
      description: 'Maximize your app\'s visibility and downloads in app stores',
      features: ['Keyword optimization', 'Visual assets', 'User reviews', 'Conversion optimization'],
    },
  ]

  const process = [
    'Discovery and requirements analysis',
    'UI/UX design and prototyping',
    'Development and coding',
    'Testing and quality assurance',
    'App store submission',
    'Launch and marketing support',
    'Post-launch maintenance',
  ]

  return (
    <div className="relative overflow-hidden pt-20">
      <SEO 
        title="Mobile App Development Services"
        description="Professional mobile app development for iOS and Android. Native and cross-platform apps using React Native, Flutter, Swift, and Kotlin."
        keywords="mobile app development, iOS app development, Android app development, React Native, Flutter, mobile applications"
      />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedShape type="blob" className="absolute top-20 right-10 w-96 h-96" />
        <AnimatedShape type="circle" className="absolute bottom-20 left-10 w-80 h-80" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 z-10">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              App <span className="text-gradient">Development</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Create powerful mobile applications that engage users and drive business growth
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
                Start Your App <ArrowRight className="inline ml-2 w-5 h-5" />
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
            >
              <h2 className="text-4xl font-bold mb-6">Mobile-First Solutions</h2>
              <p className="text-gray-600 text-lg mb-4">
                With over 6 billion smartphone users worldwide, mobile apps have become essential for business success.
                We create mobile applications that not only look great but also deliver exceptional user experiences.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Whether you need a native iOS app, an Android application, or a cross-platform solution, our team
                has the expertise to bring your mobile vision to life.
              </p>
              <p className="text-gray-600 text-lg">
                From concept to app store, we handle every aspect of mobile app development to ensure your success.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose Our App Development?</h3>
                <ul className="space-y-4">
                  {['Expert mobile developers', 'Native & cross-platform', 'App store expertise', 'User-centered design', 'Agile methodology', 'Ongoing support'].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Platforms We Support</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Native and cross-platform solutions for all mobile needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{platform.name}</h3>
                <p className="text-gray-600">{platform.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our App Development Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end mobile app development solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern tools and frameworks for mobile app development
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
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              From concept to app store launch
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
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's turn your app idea into a reality that users will love
            </p>
            <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
              Start Your Project <ArrowRight className="inline ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AppDevelopment

