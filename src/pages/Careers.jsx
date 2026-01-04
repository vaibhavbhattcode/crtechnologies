import { motion } from 'framer-motion'
import { Briefcase, Users, Heart, Zap, ArrowRight, MapPin, Clock, DollarSign, Coffee, BookOpen, Globe, Sparkles, Building2 } from 'lucide-react'
import AnimatedShape from '../components/ui/AnimatedShape'
import Button from '../components/ui/Button'
import SEO from '../components/SEO'

const Careers = () => {
  const benefits = [
    { icon: DollarSign, title: 'Competitive Salary', description: 'Industry-leading compensation packages with annual bonuses' },
    { icon: Heart, title: 'Health Insurance', description: 'Comprehensive medical, dental, and vision coverage for you & family' },
    { icon: Globe, title: 'Remote Work', description: 'Flexible work-from-home options with collaborative office spaces' },
    { icon: Users, title: 'Team Building', description: 'Monthly team events, retreats, and networking opportunities' },
    { icon: BookOpen, title: 'Learning Budget', description: '$2,500 annual budget for courses, certifications, and conferences' },
    { icon: Coffee, title: 'Unlimited PTO', description: 'Generous time off to rest, recharge, and pursue your passions' },
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
    <div className="relative overflow-hidden pt-16 lg:pt-20">
      <SEO 
        title="Careers - Join Our Team | CR Technologies"
        description="Build your career at CR Technologies. Explore job opportunities in software development, design, engineering, and more. Competitive benefits, remote work options, and growth opportunities available."
        keywords="careers, jobs, IT jobs, software development jobs, remote work, tech careers, CR Technologies careers, developer jobs, designer jobs"
        url="/careers"
      />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedShape type="circle" className="absolute top-20 left-10 w-96 h-96" />
        <AnimatedShape type="blob" className="absolute top-40 right-20 w-80 h-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-purple-50/30"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-28 z-10">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 font-semibold text-sm mb-8"
            >
              <Sparkles className="w-4 h-4" />
              We're Hiring! {openPositions.length} Open Positions
            </motion.div>
            
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Build Your <span className="text-gradient">Career</span>
              <br className="hidden sm:block" />
              With Us
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Join a team of 200+ passionate innovators working on cutting-edge technology solutions for global clients
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button to="#positions" variant="gradient" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                View Open Positions
              </Button>
              <Button to="/about" variant="outline" size="lg">
                Learn About Us
              </Button>
            </motion.div>
            
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto"
            >
              {[
                { number: '200+', label: 'Team Members' },
                { number: '50+', label: 'Countries' },
                { number: '4.8★', label: 'Glassdoor Rating' },
                { number: '95%', label: 'Employee Retention' },
              ].map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100">
                  <div className="text-xl md:text-2xl font-bold text-gradient">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 lg:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6">
              <Building2 className="w-4 h-4" />
              Why CR Technologies
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why Join <span className="text-gradient">CR Technologies?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're building the future of technology, and we want you to be part of it
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-transparent group hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-blue-300 font-semibold text-sm mb-6">
              <Heart className="w-4 h-4" />
              Benefits & Perks
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Benefits & Perks</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We take care of our team so you can focus on doing your best work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Open Positions Section */}
      <section id="positions" className="py-16 lg:py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 font-semibold text-sm mb-6">
              <Briefcase className="w-4 h-4" />
              {openPositions.length} Open Positions
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Open <span className="text-gradient">Positions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore opportunities to join our growing team of innovators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all group border border-gray-100 hover:border-blue-200"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {position.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold">
                      {position.department}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gradient">{position.salary}</div>
                    <div className="text-sm text-gray-500">{position.type}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 text-sm">{position.description}</p>
                <div className="flex flex-wrap gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span>{position.type}</span>
                  </div>
                </div>
                <Button
                  to="/contact"
                  variant="gradient"
                  className="w-full"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Apply Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 rounded-3xl p-8 md:p-12 lg:p-16 text-white text-center relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Don't See a Role That Fits?
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Button to="/contact" variant="primary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Send Us Your Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Careers