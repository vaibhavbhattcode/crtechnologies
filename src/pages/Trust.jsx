import { motion } from 'framer-motion'
import { Shield, Lock, CheckCircle, Award, Zap, Users, Building2, Globe } from 'lucide-react'
import AnimatedShape from '../components/ui/AnimatedShape'
import SEO from '../components/SEO'

const Trust = () => {
  const certifications = [
    { name: 'ISO 27001', description: 'Information Security Management', icon: Shield },
    { name: 'SOC 2 Type II', description: 'Service Organization Control', icon: Lock },
    { name: 'GDPR Compliant', description: 'Data Protection & Privacy', icon: Users },
    { name: 'HIPAA Ready', description: 'Healthcare Data Security', icon: Building2 },
    { name: 'AWS Partner', description: 'Advanced Technology Partner', icon: Globe },
    { name: 'Google Cloud', description: 'Partner & Service Provider', icon: Zap },
  ]

  const securityMeasures = [
    {
      title: 'Data Encryption',
      description: 'End-to-end encryption for all data in transit and at rest using industry-standard protocols',
      icon: Lock,
    },
    {
      title: 'Regular Audits',
      description: 'Comprehensive security audits and penetration testing by third-party professionals',
      icon: Shield,
    },
    {
      title: 'Access Control',
      description: 'Role-based access control and multi-factor authentication for all systems',
      icon: Users,
    },
    {
      title: 'Backup & Recovery',
      description: 'Automatic backups with disaster recovery plans to ensure business continuity',
      icon: Zap,
    },
    {
      title: 'Compliance',
      description: 'Full compliance with GDPR, HIPAA, SOC 2, and other regulatory requirements',
      icon: Award,
    },
    {
      title: 'Monitoring',
      description: '24/7 security monitoring and threat detection with immediate incident response',
      icon: CheckCircle,
    },
  ]

  const values = [
    {
      title: 'Transparency',
      description: 'We believe in open communication and clear documentation of all processes and pricing.',
    },
    {
      title: 'Reliability',
      description: 'Our systems are built to be reliable with 99.9% uptime and dedicated support.',
    },
    {
      title: 'Security First',
      description: 'Security is not an afterthought. It is integrated into every aspect of our development.',
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest ethical standards and follow best practices in everything we do.',
    },
    {
      title: 'Innovation',
      description: 'We continuously improve and adopt the latest technologies to serve you better.',
    },
    {
      title: 'Accountability',
      description: 'We take responsibility for our work and stand behind our solutions with guarantees.',
    },
  ]

  return (
    <div className="relative overflow-hidden pt-16 lg:pt-20">
      <SEO
        title="Trust & Security - CR Technologies"
        description="Learn about CR Technologies' security measures, certifications, and commitment to protecting your data. ISO 27001, SOC 2, GDPR compliant."
        keywords="CR Technologies security, privacy, certifications, data protection, trust, compliance"
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
            Trust & <span className="text-gradient">Security</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
          >
            Your data security and privacy are our top priority
          </motion.p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications & Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We meet the highest standards of security and compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{cert.name}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Security Measures Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Security Measures</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive security practices to protect your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityMeasures.map((measure, index) => {
              const Icon = measure.icon
              return (
                <motion.div
                  key={measure.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-t-4 border-gradient-to-r border-blue-500"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{measure.title}</h3>
                  </div>
                  <p className="text-gray-600">{measure.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Principles that guide all our security and business practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Quick Links */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Documentation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="/privacy"
                className="p-8 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-2xl hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-2">Privacy Policy</h3>
                <p className="text-blue-100 mb-4">Read our complete privacy policy and data handling practices</p>
                <span className="inline-flex items-center gap-2 font-semibold">
                  View Policy <Shield className="w-5 h-5" />
                </span>
              </a>
              <div className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl hover:shadow-xl transition-shadow cursor-pointer">
                <h3 className="text-2xl font-bold mb-2">Terms of Service</h3>
                <p className="text-purple-100 mb-4">Review our terms and conditions for working with us</p>
                <span className="inline-flex items-center gap-2 font-semibold">
                  View Terms <Lock className="w-5 h-5" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Security FAQs</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'How is my data encrypted?',
                answer: 'We use AES-256 encryption for data at rest and TLS 1.3 for data in transit. All encryption keys are managed securely in accordance with industry standards.',
              },
              {
                question: 'How often are security audits conducted?',
                answer: 'We conduct quarterly internal security audits and annual third-party penetration testing. Additionally, continuous monitoring is performed 24/7.',
              },
              {
                question: 'Is my data backed up?',
                answer: 'Yes, all data is automatically backed up multiple times daily and stored in geographically distributed data centers with redundancy.',
              },
              {
                question: 'What happens if there is a security incident?',
                answer: 'We have a comprehensive incident response plan. Affected parties will be notified within 24 hours per regulatory requirements.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Trust
