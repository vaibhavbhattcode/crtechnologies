import { motion } from 'framer-motion'
import { Target, Users, Award, Zap, Globe, Heart } from 'lucide-react'
import AnimatedShape from '../components/ui/AnimatedShape'
import Button from '../components/ui/Button'
import SEO from '../components/SEO'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with clients to understand and exceed their expectations',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in every project we undertake',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical practices',
      color: 'from-orange-500 to-red-500',
    },
  ]

  const milestones = [
    { year: '2010', title: 'Company Founded', description: 'Started with a vision to transform businesses through technology' },
    { year: '2015', title: '100+ Projects', description: 'Reached milestone of 100 successful project deliveries' },
    { year: '2018', title: 'Global Expansion', description: 'Expanded operations to serve clients worldwide' },
    { year: '2023', title: '500+ Projects', description: 'Celebrated 500+ completed projects and 200+ happy clients' },
  ]

  const team = [
    { name: 'John Smith', role: 'CEO & Founder', image: '👨‍💼' },
    { name: 'Sarah Johnson', role: 'CTO', image: '👩‍💻' },
    { name: 'Michael Chen', role: 'Head of Development', image: '👨‍🔧' },
    { name: 'Emily Davis', role: 'Head of Design', image: '👩‍🎨' },
  ]

  return (
    <div className="relative overflow-hidden pt-20">
      <SEO 
        title="About Us"
        description="Learn about CR Technologies - Leading IT solutions provider since 2010. Our mission, values, team, and commitment to transforming businesses through technology."
        keywords="about CR Technologies, IT company, technology solutions, software development company, digital transformation experts"
      />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedShape type="blob" className="absolute top-20 right-10 w-96 h-96" />
        <AnimatedShape type="circle" className="absolute bottom-20 left-10 w-80 h-80" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 z-10">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            About <span className="text-gradient">CR Technologies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
          >
            Leading the digital transformation revolution since 2010
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                alt="Team collaboration at CR Technologies"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 text-lg">
                Founded in 2010, CR Technologies began with a simple mission: to help
                businesses leverage technology to achieve their goals. What started as
                a small team of passionate developers has grown into a global technology
                solutions provider.
              </p>
              <p className="text-gray-600 mb-4 text-lg">
                Over the years, we've worked with startups, mid-size companies, and
                Fortune 500 enterprises, delivering innovative solutions that drive
                real business value. Our commitment to excellence and client success has
                made us a trusted partner in digital transformation.
              </p>
              <p className="text-gray-600 text-lg">
                Today, we continue to push boundaries, exploring emerging technologies
                and methodologies to stay at the forefront of the industry.
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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                  alt="Global technology services"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="relative z-10">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Globe className="w-12 h-12" />
                    <div>
                      <div className="text-3xl font-bold">50+</div>
                      <div className="text-blue-100">Countries Served</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Zap className="w-12 h-12" />
                    <div>
                      <div className="text-3xl font-bold">500+</div>
                      <div className="text-blue-100">Projects Delivered</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Users className="w-12 h-12" />
                    <div>
                      <div className="text-3xl font-bold">200+</div>
                      <div className="text-blue-100">Happy Clients</div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 transform md:-translate-x-1/2"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} text-center md:text-left`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-3xl font-bold text-gradient mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center z-10 border-4 border-white shadow-lg">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries leading CR Technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all text-center"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
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
              Join Us on Our Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's work together to create something extraordinary
            </p>
            <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About

