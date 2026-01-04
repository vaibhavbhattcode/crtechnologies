import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare, Building2 } from 'lucide-react'
import AnimatedShape from '../components/ui/AnimatedShape'
import Button from '../components/ui/Button'
import SEO from '../components/SEO'
import { submitForm } from '../utils/formSubmit'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const result = await submitForm(formData)
    
    if (result.success) {
      console.log('Form submitted successfully:', result.data)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
    } else {
      alert('There was an error submitting the form. Please try again.')
    }
    
    setIsSubmitting(false)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      content: '123 Innovation Drive, Tech Park',
      details: 'Bangalore, Karnataka 560001, India',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 (22) 1234-5678',
      details: 'Monday to Friday, 9 AM - 6 PM IST',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'contact@crtechnologies.com',
      details: 'We respond within 24 hours',
      color: 'from-green-500 to-emerald-500',
    },
  ]

  const benefits = [
    { icon: Clock, text: 'Free 30-minute consultation' },
    { icon: MessageSquare, text: 'Expert technical guidance' },
    { icon: Building2, text: 'Custom solution proposals' },
  ]

  return (
    <div className="relative overflow-hidden pt-16 lg:pt-20">
      <SEO 
        title="Contact Us - Get a Free Consultation"
        description="Get in touch with CR Technologies for enterprise IT solutions. Free consultation for web development, mobile apps, cloud services, AI solutions & cybersecurity."
        keywords="contact CR Technologies, IT consulting Bangalore, software development contact, get free quote, technology consultation"
        url="/contact"
      />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedShape type="circle" className="absolute top-20 left-10 w-96 h-96" />
        <AnimatedShape type="blob" className="absolute bottom-20 right-10 w-80 h-80" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 pt-8 sm:pt-12 z-10">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-blue-700">Available for new projects</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Let's Build <span className="text-gradient">Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
          >
            Tell us about your project and get a free consultation from our experts
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form - Takes more space */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">Send us a Message</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                    <p className="text-green-600">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2 text-sm">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2 text-sm">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2 text-sm">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2 text-sm">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2 text-sm">
                          Service Interested In
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white"
                        >
                          <option value="">Select a service</option>
                          <option value="web">Web Development</option>
                          <option value="app">App Development</option>
                          <option value="cloud">Cloud Services</option>
                          <option value="ai">AI Solutions</option>
                          <option value="data">Data Analytics</option>
                          <option value="security">Cybersecurity</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2 text-sm">
                          Estimated Budget
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white"
                        >
                          <option value="">Select budget range</option>
                          <option value="5k-10k">$5,000 - $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="100k+">$100,000+</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                        placeholder="Tell us about your project, goals, and timeline..."
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      loading={isSubmitting}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'} 
                      {!isSubmitting && <Send className="inline ml-2 w-5 h-5" />}
                    </Button>
                    <p className="text-sm text-gray-500 text-center">
                      By submitting, you agree to our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info - Side panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Benefits */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-6 sm:p-8 text-white">
                <h3 className="text-xl font-bold mb-4">What You'll Get</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <benefit.icon className="w-5 h-5" />
                      </div>
                      <span>{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-5 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-0.5">{info.title}</h3>
                      <p className="text-gray-700 font-medium">{info.content}</p>
                      <p className="text-gray-500 text-sm">{info.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-600" />
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-gray-900">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-gray-900">10:00 AM - 4:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-gray-500">Closed</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 flex items-start">
                    <span className="text-green-500 mr-2">⚡</span>
                    Emergency support available 24/7 for enterprise clients
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

