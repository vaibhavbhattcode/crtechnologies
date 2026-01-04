import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import AnimatedShape from '../components/ui/AnimatedShape'
import SEO from '../components/SEO'

const Technology = () => {
  const technologies = [
    {
      category: 'Frontend',
      icon: '⚛️',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 'Expert', percentage: 95 },
        { name: 'Next.js', level: 'Advanced', percentage: 90 },
        { name: 'Vue.js', level: 'Advanced', percentage: 85 },
        { name: 'Tailwind CSS', level: 'Expert', percentage: 95 },
        { name: 'TypeScript', level: 'Advanced', percentage: 88 },
      ]
    },
    {
      category: 'Backend',
      icon: '🚀',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', level: 'Expert', percentage: 95 },
        { name: 'Python', level: 'Advanced', percentage: 90 },
        { name: '.NET', level: 'Advanced', percentage: 85 },
        { name: 'Java', level: 'Intermediate', percentage: 80 },
        { name: 'Go', level: 'Advanced', percentage: 88 },
      ]
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS', level: 'Expert', percentage: 95 },
        { name: 'Google Cloud', level: 'Advanced', percentage: 90 },
        { name: 'Azure', level: 'Advanced', percentage: 88 },
        { name: 'Docker', level: 'Expert', percentage: 92 },
        { name: 'Kubernetes', level: 'Advanced', percentage: 88 },
      ]
    },
    {
      category: 'Databases',
      icon: '💾',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'PostgreSQL', level: 'Expert', percentage: 95 },
        { name: 'MongoDB', level: 'Advanced', percentage: 90 },
        { name: 'MySQL', level: 'Expert', percentage: 92 },
        { name: 'Redis', level: 'Advanced', percentage: 88 },
        { name: 'Elasticsearch', level: 'Advanced', percentage: 85 },
      ]
    },
    {
      category: 'AI & ML',
      icon: '🤖',
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'TensorFlow', level: 'Advanced', percentage: 85 },
        { name: 'PyTorch', level: 'Advanced', percentage: 88 },
        { name: 'NLP', level: 'Advanced', percentage: 85 },
        { name: 'Computer Vision', level: 'Intermediate', percentage: 80 },
        { name: 'Machine Learning', level: 'Advanced', percentage: 88 },
      ]
    },
    {
      category: 'Mobile',
      icon: '📱',
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'React Native', level: 'Expert', percentage: 92 },
        { name: 'Flutter', level: 'Advanced', percentage: 88 },
        { name: 'Swift', level: 'Intermediate', percentage: 80 },
        { name: 'Kotlin', level: 'Intermediate', percentage: 78 },
        { name: 'PWA', level: 'Advanced', percentage: 88 },
      ]
    },
  ]

  const certifications = [
    { name: 'AWS Certified Solutions Architect', icon: '🏆' },
    { name: 'Kubernetes Certified Application Developer', icon: '🎯' },
    { name: 'Google Cloud Professional', icon: '⭐' },
    { name: 'ISO 27001 Information Security', icon: '🔒' },
    { name: 'Scrum Master Certified', icon: '🚀' },
    { name: 'Azure Solutions Architect', icon: '☁️' },
  ]

  return (
    <div className="relative overflow-hidden pt-16 lg:pt-20">
      <SEO
        title="Technology Stack - CR Technologies"
        description="Explore CR Technologies' expertise in web, mobile, cloud, AI/ML, and enterprise technologies. We master 50+ technologies and frameworks."
        keywords="technology stack, programming languages, frameworks, cloud platforms, CR Technologies"
      />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedShape type="blob" className="absolute top-20 right-10 w-96 h-96" />
        <AnimatedShape type="circle" className="absolute bottom-20 left-10 w-80 h-80" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 pt-24 md:pt-20 z-10">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Technology <span className="text-gradient">Stack</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
          >
            Master craftsmen of modern technologies and frameworks
          </motion.p>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="space-y-16">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-4xl shadow-lg`}>
                    {tech.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{tech.category}</h2>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tech.skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold text-gray-900">{skill.name}</h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">
                          {skill.level}
                        </span>
                      </div>

                      {/* Skill Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1, duration: 0.8 }}
                          className={`h-full rounded-full bg-gradient-to-r ${tech.color}`}
                        />
                      </div>

                      <div className="text-sm text-gray-600 mt-2">{skill.percentage}% Proficiency</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Certifications</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-recognized certifications demonstrating our expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{cert.icon}</div>
                <h3 className="text-lg font-bold text-gray-900">{cert.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Technologies Mastered' },
              { number: '1000+', label: 'Projects Using Modern Stack' },
              { number: '100%', label: 'Code Quality Standards' },
              { number: '24/7', label: 'Technical Support' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Technology
