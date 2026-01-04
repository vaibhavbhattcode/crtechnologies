import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText } from 'lucide-react'
import AnimatedShape from '../components/ui/AnimatedShape'
import SEO from '../components/SEO'

const Privacy = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Information We Collect',
      content: [
        'Personal information (name, email, phone number) when you contact us or use our services',
        'Business information related to your projects and requirements',
        'Technical information such as IP address, browser type, and device information',
        'Usage data and analytics to improve our services',
      ],
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'To provide and improve our IT services',
        'To communicate with you about your projects and inquiries',
        'To send you updates, newsletters, and marketing communications (with your consent)',
        'To analyze website usage and improve user experience',
        'To comply with legal obligations and protect our rights',
      ],
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'We implement industry-standard security measures to protect your data',
        'All data is encrypted in transit and at rest',
        'Access to personal information is restricted to authorized personnel only',
        'We regularly review and update our security practices',
        'In case of a data breach, we will notify affected users promptly',
      ],
    },
    {
      icon: Shield,
      title: 'Your Rights',
      content: [
        'Right to access your personal data',
        'Right to rectify inaccurate or incomplete data',
        'Right to request deletion of your data',
        'Right to object to processing of your data',
        'Right to data portability',
        'Right to withdraw consent at any time',
      ],
    },
  ]

  return (
    <div className="relative overflow-hidden pt-16 lg:pt-20">
      <SEO 
        title="Privacy Policy - CR Technologies"
        description="CR Technologies Privacy Policy. Learn how we collect, use, and protect your personal information in compliance with GDPR, CCPA, and ISO standards."
        keywords="privacy policy, CR Technologies, data protection, privacy, GDPR, data security, personal information"
      />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedShape type="blob" className="absolute top-20 right-10 w-96 h-96" />
        <AnimatedShape type="circle" className="absolute bottom-20 left-10 w-80 h-80" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center px-4 z-10">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Your privacy is important to us. We comply with GDPR, CCPA, and international data protection standards.
            </p>
            <p className="text-gray-500 mt-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Introduction</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              CR Technologies ("we," "our," or "us"), headquartered in Bangalore, India, is committed to protecting your privacy and ensuring transparency. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
              We comply with GDPR (General Data Protection Regulation), CCPA (California Consumer Privacy Act), and ISO 27001 data protection standards.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              By using our website and services, you consent to the data practices described in this policy. If you
              do not agree with the practices described in this policy, please do not use our services. If you have questions about this Privacy Policy, 
              please contact us at legal@crtechnologies.com or +91 (22) 1234-5678.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Additional Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store certain
                information. Cookies are files with a small amount of data which may include an anonymous unique
                identifier.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website may contain links to third-party websites or services that are not owned or controlled
                by CR Technologies. We have no control over, and assume no responsibility for, the privacy policies
                or practices of any third-party websites or services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We encourage you to review the privacy policy of every website you visit.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                We will retain your personal information only for as long as necessary to fulfill the purposes
                outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                When we no longer need your personal information, we will securely delete or anonymize it.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect
                personal information from children. If you are a parent or guardian and believe your child has
                provided us with personal information, please contact us immediately.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-blue-100 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-blue-100">
                <p><strong>Email:</strong> privacy@crtechnologies.com</p>
                <p><strong>Phone:</strong> +1 (234) 567-890</p>
                <p><strong>Address:</strong> 123 Tech Street, Silicon Valley, CA 94000</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Privacy

