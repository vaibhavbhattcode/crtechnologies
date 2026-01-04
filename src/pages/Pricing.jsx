import { motion } from 'framer-motion'
import { Check, X, Zap, Building2, Rocket, Shield, HelpCircle, ArrowRight, Star, Clock, Headphones } from 'lucide-react'
import AnimatedShape from '../components/ui/AnimatedShape'
import Button from '../components/ui/Button'
import SEO from '../components/SEO'
import { useState } from 'react'

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState(null)
  
  const guarantees = [
    { icon: Shield, title: 'Money Back', description: '30-day guarantee' },
    { icon: Clock, title: 'On-Time Delivery', description: 'We deliver on schedule' },
    { icon: Headphones, title: '24/7 Support', description: 'Always available' },
    { icon: Star, title: 'Quality Assured', description: 'Bug-free code' },
  ]
  
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small projects and MVPs',
      icon: Zap,
      price: 'Custom',
      period: 'Project-based',
      color: 'from-blue-500 to-cyan-500',
      featured: false,
      features: [
        { name: 'Basic consultation', included: true },
        { name: 'Simple web applications', included: true },
        { name: '1-2 months timeline', included: true },
        { name: 'Standard support', included: true },
        { name: 'Mobile apps', included: false },
        { name: 'AI solutions', included: false },
        { name: '24/7 dedicated support', included: false },
      ],
      cta: 'Get Quote',
      ideal: 'Startups & Small Teams',
    },
    {
      name: 'Professional',
      description: 'For growing businesses with complex needs',
      icon: Building2,
      price: 'Custom',
      period: 'Project-based',
      color: 'from-purple-500 to-pink-500',
      featured: true,
      features: [
        { name: 'Full-stack development', included: true },
        { name: 'Web & mobile apps', included: true },
        { name: 'Cloud infrastructure', included: true },
        { name: 'API integration', included: true },
        { name: 'Database design', included: true },
        { name: 'Priority support', included: true },
        { name: 'AI/ML solutions', included: false },
        { name: '24/7 dedicated team', included: false },
      ],
      cta: 'Get Quote',
      ideal: 'Growing Companies',
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive solutions for large organizations',
      icon: Rocket,
      price: 'Custom',
      period: 'Flexible terms',
      color: 'from-orange-500 to-red-500',
      featured: false,
      features: [
        { name: 'Everything in Professional', included: true },
        { name: 'AI/ML solutions', included: true },
        { name: 'Real-time data analytics', included: true },
        { name: 'Advanced cybersecurity', included: true },
        { name: 'Custom integrations', included: true },
        { name: '24/7 dedicated support', included: true },
        { name: 'Dedicated project manager', included: true },
        { name: 'SLA guarantee', included: true },
      ],
      cta: 'Contact Sales',
      ideal: 'Enterprise Organizations',
    },
  ]

  const faqs = [
    {
      question: 'Do you offer custom pricing?',
      answer: 'Yes! All our pricing is customized based on your specific project requirements, timeline, and scope. Contact us for a detailed consultation and quote.',
    },
    {
      question: 'What is included in the support?',
      answer: 'Support includes bug fixes, maintenance updates, and technical assistance. Enterprise plans include 24/7 dedicated support with guaranteed response times.',
    },
    {
      question: 'Can I upgrade or change my plan?',
      answer: 'Absolutely! We can adjust your plan at any time based on your changing needs. We\'ll work with you to find the best solution.',
    },
    {
      question: 'Do you offer retainer packages?',
      answer: 'Yes! We offer flexible retainer packages for ongoing development, maintenance, and support. This is ideal for long-term partnerships.',
    },
    {
      question: 'What about payment terms?',
      answer: 'We offer flexible payment terms including upfront, milestone-based, or monthly payments depending on the project scope and your preferences.',
    },
    {
      question: 'Is there a hidden fee?',
      answer: 'No hidden fees! We provide transparent pricing with detailed breakdowns. All costs are discussed and agreed upon before project starts.',
    },
  ]

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites, web applications, and e-commerce platforms',
      price: 'Starting from $5,000',
    },
    {
      title: 'Mobile App Development',
      description: 'iOS, Android, and cross-platform applications',
      price: 'Starting from $8,000',
    },
    {
      title: 'Cloud Services',
      description: 'Infrastructure setup, migration, and optimization',
      price: 'Starting from $3,000',
    },
    {
      title: 'AI Solutions',
      description: 'Chatbots, machine learning models, and automation',
      price: 'Starting from $10,000',
    },
    {
      title: 'Data Analytics',
      description: 'Dashboards, business intelligence, and insights',
      price: 'Starting from $5,000',
    },
    {
      title: 'Cybersecurity',
      description: 'Audits, testing, compliance, and monitoring',
      price: 'Starting from $4,000',
    },
  ]

  return (
    <div className="relative overflow-hidden pt-16 lg:pt-20">
      <SEO
        title="Pricing & Packages | CR Technologies - Transparent IT Solutions Pricing"
        description="Flexible and transparent pricing for web development, mobile apps, cloud services, AI solutions, and more. Custom quotes tailored to your project requirements and budget."
        keywords="IT services pricing, web development cost, app development price, cloud services pricing, AI solutions cost, custom software pricing, CR Technologies pricing"
      />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedShape type="blob" className="absolute top-20 right-10 w-96 h-96" />
        <AnimatedShape type="circle" className="absolute bottom-20 left-10 w-80 h-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-purple-50/30"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-28 z-10">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 font-semibold text-sm mb-8"
            >
              <Shield className="w-4 h-4" />
              No Hidden Fees • Transparent Pricing
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Transparent <span className="text-gradient">Pricing</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              Flexible packages tailored to your business needs with no surprises
            </motion.p>
            
            {/* Guarantees */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              {guarantees.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100">
                  <item.icon className="w-6 h-6 text-blue-600 mb-2" />
                  <div className="font-bold text-gray-900 text-sm">{item.title}</div>
                  <div className="text-gray-500 text-xs">{item.description}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16 lg:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => {
              const Icon = plan.icon
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative rounded-2xl p-6 md:p-8 ${
                    plan.featured
                      ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-2xl md:scale-105 z-10'
                      : 'bg-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all'
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                      ⭐ MOST POPULAR
                    </div>
                  )}

                  <div className={`flex items-center gap-3 mb-6 ${plan.featured ? '' : 'text-gray-900'}`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      plan.featured ? 'bg-white/10' : 'bg-gradient-to-br ' + plan.color
                    }`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-xl md:text-2xl font-bold ${plan.featured ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                      <p className={`text-xs ${plan.featured ? 'text-gray-400' : 'text-gray-500'}`}>{plan.ideal}</p>
                    </div>
                  </div>

                  <p className={`mb-6 text-sm ${plan.featured ? 'text-gray-300' : 'text-gray-600'}`}>{plan.description}</p>

                  <div className="mb-6">
                    <p className={`text-3xl md:text-4xl font-bold mb-1 ${plan.featured ? 'text-white' : 'text-gradient'}`}>{plan.price}</p>
                    <p className={`text-sm ${plan.featured ? 'text-gray-400' : 'text-gray-500'}`}>{plan.period}</p>
                  </div>

                  <Button
                    to="/contact"
                    variant={plan.featured ? 'gradient' : 'outline'}
                    className={`w-full mb-6 ${plan.featured ? '' : ''}`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        {feature.included ? (
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.featured ? 'bg-green-500/20' : 'bg-green-100'}`}>
                            <Check className={`w-3 h-3 ${plan.featured ? 'text-green-400' : 'text-green-600'}`} />
                          </div>
                        ) : (
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.featured ? 'bg-gray-700' : 'bg-gray-100'}`}>
                            <X className={`w-3 h-3 ${plan.featured ? 'text-gray-500' : 'text-gray-400'}`} />
                          </div>
                        )}
                        <span className={`text-sm ${plan.featured ? 'text-gray-300' : feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Pricing Section */}
      <section className="py-16 lg:py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6">
              <Zap className="w-4 h-4" />
              Individual Services
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Service Pricing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Detailed pricing for individual services (actual costs depend on project scope)
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-blue-200 group"
              >
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <p className="text-gradient text-lg font-bold">{service.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 font-semibold text-sm mb-6">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Have questions about our pricing? We've got answers
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-base md:text-lg font-bold text-gray-900">{faq.question}</h3>
                  <div className={`w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    <ArrowRight className="w-4 h-4 text-blue-600 rotate-90" />
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
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
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-blue-300 font-semibold text-sm mb-6">
                <ArrowRight className="w-4 h-4" />
                Get a Custom Quote
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Need a Custom Quote?</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Every project is unique. Let's discuss your specific needs and create a customized package for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button to="/contact" variant="gradient" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Request a Quote
                </Button>
                <Button to="/services" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  View All Services
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Pricing