import { motion } from 'framer-motion'
import { Target, Users, Award, Zap, Globe, Heart, Shield, Lightbulb, Clock, CheckCircle, ArrowRight, Building2 } from 'lucide-react'
import AnimatedShape from '../components/ui/AnimatedShape'
import Button from '../components/ui/Button'
import SEO from '../components/SEO'

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that drive your business forward',
      color: 'from-blue-500 to-cyan-500',
      stat: '50+ Patents',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with clients to understand and exceed their expectations through partnership',
      color: 'from-purple-500 to-pink-500',
      stat: '200+ Partners',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in every project we undertake with attention to detail',
      color: 'from-green-500 to-emerald-500',
      stat: '99% Success',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical practices in everything we do',
      color: 'from-orange-500 to-red-500',
      stat: 'ISO Certified',
    },
  ]

  const certifications = [
    { name: 'ISO 27001', description: 'Information Security' },
    { name: 'SOC 2 Type II', description: 'Security Compliance' },
    { name: 'AWS Partner', description: 'Advanced Tier' },
    { name: 'Google Cloud', description: 'Premier Partner' },
    { name: 'Microsoft', description: 'Gold Partner' },
  ]

  const milestones = [
    { year: '2010', title: 'Company Founded', description: 'Started with a vision to transform businesses through technology', icon: Building2 },
    { year: '2015', title: '100+ Projects', description: 'Reached milestone of 100 successful project deliveries', icon: CheckCircle },
    { year: '2018', title: 'Global Expansion', description: 'Expanded operations to serve clients worldwide', icon: Globe },
    { year: '2023', title: '500+ Projects', description: 'Celebrated 500+ completed projects and 200+ happy clients', icon: Award },
    { year: '2024', title: 'AI Innovation Labs', description: 'Launched dedicated AI/ML research and development center', icon: Lightbulb },
  ]

  const team = [
    { 
      name: 'Jainam Seth', 
      role: 'CEO & Founder', 
      image: '👨‍💼',
      bio: 'Strategic visionary with 18+ years in technology and business transformation. MBA from IIT Delhi, Jainam spearheaded CR Technologies from a small startup to a 200+ member organization. Expertise in enterprise architecture and digital innovation strategy.',
      expertise: ['Business Strategy', 'Enterprise Leadership', 'Digital Transformation', 'P&L Management', 'Client Relations']
    },
    { 
      name: 'Vaibhav Sonar', 
      role: 'CTO & Co-Founder', 
      image: '👨‍💻',
      bio: 'Principal technology architect with 16+ years in cloud infrastructure and system design. BTech from BITS Pilani, Vaibhav leads all technical innovation at CR Technologies. Certified AWS Solutions Architect and Google Cloud Professional.',
      expertise: ['Cloud Architecture (AWS/GCP/Azure)', 'Kubernetes & DevOps', 'Microservices Design', 'System Design', 'AI/ML Engineering', 'Technical Leadership']
    },
    { 
      name: 'Vaibhav Bhatt', 
      role: 'Head of Development', 
      image: '👨‍🔧',
      bio: 'Full-stack development leader with 15+ years building enterprise applications. BS in Computer Science, Vaibhav oversees 80+ developers across multiple global teams. Specializes in scalable architecture and agile team management.',
      expertise: ['Full-Stack Development', 'React & Node.js', 'Scalable Architecture', 'Team Leadership', 'Agile Methodology', 'Code Quality & DevEx']
    },
    { 
      name: 'Priya Sharma', 
      role: 'VP of Product & Innovation', 
      image: '👩‍💼',
      bio: 'Product strategy expert with 14 years at leading tech companies including Google and Microsoft. MTech from IISc Bangalore, Priya drives product vision and innovation initiatives across CR Technologies.',
      expertise: ['Product Management', 'User Experience Design', 'Market Research', 'Innovation Strategy', 'Agile Product Development']
    },
    { 
      name: 'Rajesh Kumar', 
      role: 'VP of Sales & Partnerships', 
      image: '👨‍💼',
      bio: 'Enterprise sales veteran with 17+ years closing deals with Fortune 500 companies. Based in New York with offices in London and Singapore, Rajesh leads global business development and strategic partnerships.',
      expertise: ['Enterprise Sales', 'Strategic Partnerships', 'Account Management', 'Business Development', 'Sales Strategy']
    },
    { 
      name: 'Dr. Arun Kapoor', 
      role: 'Head of Research & AI Labs', 
      image: '👨‍🔬',
      bio: 'PhD in Machine Learning from Stanford, with 12+ years in AI/ML research and application. Former researcher at DeepMind, Dr. Kapoor leads our AI innovation labs developing next-gen solutions.',
      expertise: ['Machine Learning', 'Deep Learning', 'NLP & Computer Vision', 'AI Research', 'Algorithm Design', 'Data Science']
    },
  ]

  return (
    <div className="relative overflow-hidden pt-16 lg:pt-20">
      <SEO 
        title="About Us | CR Technologies - Leading IT Solutions Provider Since 2010"
        description="Discover CR Technologies - Your trusted partner in digital transformation since 2010. 500+ projects delivered, 200+ happy clients, and a team of 200+ experts ready to transform your business."
        keywords="about CR Technologies, IT company India, technology solutions provider, software development company, digital transformation experts, enterprise IT services, tech consulting firm"
      />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedShape type="blob" className="absolute top-20 right-10 w-96 h-96" />
        <AnimatedShape type="circle" className="absolute bottom-20 left-10 w-80 h-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-purple-50/30"></div>
      </div>

      {/* Hero Section - Premium Design */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-16 lg:py-24 z-10">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-semibold text-sm mb-8"
            >
              <Building2 className="w-4 h-4" />
              Trusted by 200+ Global Enterprises
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              About <span className="text-gradient">CR Technologies</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              Leading the digital transformation revolution since 2010 with innovation, expertise, and unwavering commitment to excellence
            </motion.p>
            
            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto"
            >
              {[
                { number: '14+', label: 'Years Experience' },
                { number: '500+', label: 'Projects Delivered' },
                { number: '200+', label: 'Happy Clients' },
                { number: '50+', label: 'Countries Served' },
              ].map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100">
                  <div className="text-2xl md:text-4xl font-bold text-gradient mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                  alt="Team collaboration at CR Technologies"
                  className="rounded-2xl shadow-2xl w-full"
                />
                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                  <div className="text-4xl font-bold">14+</div>
                  <div className="text-blue-100">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6">
                <Clock className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Building the Future of <span className="text-gradient">Technology</span></h2>
              <p className="text-gray-600 mb-4 text-base md:text-lg leading-relaxed">
                Founded in 2010 by Jainam Seth, CR Technologies began with a simple mission: to help
                businesses leverage technology to achieve their goals. With the expertise of our co-founders Vaibhav Sonar (CTO) 
                and Vaibhav Bhatt (Head of Development), what started as a small team of passionate developers 
                has grown into a global technology solutions provider.
              </p>
              <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
                Under the visionary leadership of Jainam Seth, guided by the technical excellence of 
                Vaibhav Sonar, and powered by the development expertise of Vaibhav Bhatt, we've worked 
                with startups, mid-size companies, and Fortune 500 enterprises, delivering innovative 
                solutions that drive real business value.
              </p>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-100">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <div>
                      <span className="font-semibold text-gray-900 text-sm">{cert.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mt-12 lg:mt-0"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                    alt="Global technology services"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-6">Global Impact</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <Globe className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl md:text-3xl font-bold">50+</div>
                        <div className="text-gray-400">Countries Served</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl md:text-3xl font-bold">500+</div>
                        <div className="text-gray-400">Projects Delivered</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl md:text-3xl font-bold">200+</div>
                        <div className="text-gray-400">Team Members</div>
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
      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 font-semibold text-sm mb-6">
              <Heart className="w-4 h-4" />
              Core Values
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
                className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2"
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{value.stat}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-28 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-600 font-semibold text-sm mb-6">
              <Clock className="w-4 h-4" />
              Our Journey
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Milestones That <span className="text-gradient">Define Us</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A decade of growth, innovation, and unwavering commitment to excellence
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-green-600 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5 }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                      <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">{milestone.year}</div>
                      <h3 className="text-lg md:text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm md:text-base">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:relative w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center z-10 border-4 border-white shadow-lg">
                    <milestone.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 font-semibold text-sm mb-6">
              <Users className="w-4 h-4" />
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Leadership Team</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries leading CR Technologies to new heights
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-blue-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300">{member.image}</div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold">{member.name}</h3>
                    <p className="text-blue-600 font-semibold text-sm">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.slice(0, 4).map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded-full text-xs font-semibold border border-blue-100">
                      {skill}
                    </span>
                  ))}
                  {member.expertise.length > 4 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-semibold">
                      +{member.expertise.length - 4} more
                    </span>
                  )}
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
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 lg:p-16 text-white text-center relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-blue-300 font-semibold text-sm mb-6">
                <ArrowRight className="w-4 h-4" />
                Let's Work Together
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join 200+ companies that trust CR Technologies for their digital transformation journey
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button to="/contact" variant="gradient" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Start Your Project
                </Button>
                <Button to="/portfolio" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  View Our Work
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About