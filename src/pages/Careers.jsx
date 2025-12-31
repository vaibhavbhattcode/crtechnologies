import { motion } from 'framer-motion'
import { Briefcase, Users, Heart, Zap, ArrowRight, MapPin, Clock, DollarSign } from 'lucide-react'
import AnimatedShape from '../components/ui/AnimatedShape'
import Button from '../components/ui/Button'
import SEO from '../components/SEO'

const Careers = () => {
  const benefits = [
    { icon: Zap, title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
    { icon: Heart, title: 'Health Insurance', description: 'Comprehensive medical, dental, and vision coverage' },
    { icon: Briefcase, title: 'Remote Work', description: 'Flexible work-from-home options' },
    { icon: Users, title: 'Team Building', description: 'Regular team events and activities' },
    { icon: Zap, title: 'Learning Budget', description: 'Annual budget for professional development' },
    { icon: Heart, title: 'Unlimited PTO', description: 'Take time off when you need it' },
  ]

  const openPositions = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $180k',
      description: 'We are looking for an experienced Full Stack Developer to join our engineering team...',
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$90k - $130k',
      description: 'Join our design team to create beautiful and intuitive user experiences...',
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$110k - $160k',
      description: 'Help us build and maintain scalable cloud infrastructure...',
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$130k - $190k',
      description: 'Lead product strategy and work with cross-functional teams...',
    },
    {
      title: 'Data Scientist',
      department: 'Data',
      location: 'Remote / Boston, MA',
      type: 'Full-time',
      salary: '$140k - $200k',
      description: 'Apply machine learning and AI to solve complex business problems...',
    },
    {
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$100k - $150k',
      description: 'Bridge the gap between technical solutions and client needs...',
    },
  ]

  const values = [
    {
      title: 'Innovation First',
      description: 'We encourage creative thinking and embrace new technologies',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Work-Life Balance',
      description: 'We believe in sustainable productivity and personal well-being',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Growth Mindset',
      description: 'Continuous learning and professional development are core to our culture',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Diversity & Inclusion',
      description: 'We celebrate diverse perspectives and create an inclusive environment',
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <div className="relative overflow-hidden pt-20">
      <SEO 
        title="Careers - Join Our Team"
        description="Join CR Technologies and build your career with a leading IT solutions provider. Explore open positions in development, design, engineering, and more."
        keywords="careers, jobs, IT jobs, software development jobs, technology careers, join CR Technologies"
      />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedShape type="circle" className="absolute top-20 left-10 w-96 h-96" />
        <AnimatedShape type="blob" className="absolute top-40 right-20 w-80 h-80" />
        <AnimatedShape type="square" className="absolute bottom-20 left-1/3 w-72 h-72" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 z-10">
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
              Build Your <span className="text-gradient">Career</span>
              <br />
              With Us
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Join a team of passionate innovators working on cutting-edge technology solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
                View Open Positions <ArrowRight className="inline ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Join <span className="text-gradient">CR Technologies?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're building the future of technology, and we want you to be part of it
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Benefits & Perks</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              We take care of our team so you can focus on doing your best work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all"
              >
                <benefit.icon className="w-10 h-10 mb-4 text-yellow-300" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Open <span className="text-gradient">Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore opportunities to join our growing team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {position.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                      {position.department}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{position.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm">{position.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm">{position.type}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <DollarSign className="w-5 h-5" />
                    <span className="text-sm">{position.salary}</span>
                  </div>
                </div>
                <Button
                  to="/contact"
                  variant="primary"
                  className="w-full group-hover:scale-105 transition-transform"
                >
                  Apply Now <ArrowRight className="inline ml-2 w-4 h-4" />
                </Button>
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
              Don't See a Role That Fits?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
              Send Us Your Resume <ArrowRight className="inline ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Careers

