import { motion } from 'framer-motion'
import { Cloud, Server, Zap, CheckCircle, ArrowRight, Shield, Database, Globe } from 'lucide-react'
import AnimatedShape from '../../components/ui/AnimatedShape'
import Button from '../../components/ui/Button'

const CloudServices = () => {
  const providers = [
    { 
      name: 'Amazon Web Services (AWS)', 
      description: 'Comprehensive cloud platform with extensive services',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      bgColor: 'bg-orange-50'
    },
    { 
      name: 'Microsoft Azure', 
      description: 'Enterprise-grade cloud solutions and integrations',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
      bgColor: 'bg-blue-50'
    },
    { 
      name: 'Google Cloud Platform', 
      description: 'Advanced analytics and machine learning capabilities',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
      bgColor: 'bg-blue-50'
    },
  ]

  const technologies = [
    {
      name: 'Docker',
      description: 'Containerization platform',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Kubernetes',
      description: 'Container orchestration system',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Terraform',
      description: 'Infrastructure as code',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
      bgColor: 'bg-purple-50'
    },
    {
      name: 'Jenkins',
      description: 'CI/CD automation',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
      bgColor: 'bg-red-50'
    },
    {
      name: 'Ansible',
      description: 'Configuration management',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg',
      bgColor: 'bg-gray-50'
    },
    {
      name: 'GitLab CI',
      description: 'DevOps platform',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
      bgColor: 'bg-orange-50'
    },
  ]

  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly move your infrastructure to the cloud with minimal downtime',
    },
    {
      icon: Server,
      title: 'Cloud Infrastructure',
      description: 'Design and deploy scalable, secure cloud architectures',
    },
    {
      icon: Database,
      title: 'Cloud Database Solutions',
      description: 'Managed database services for optimal performance and reliability',
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive security measures to protect your cloud assets',
    },
    {
      icon: Zap,
      title: 'DevOps & CI/CD',
      description: 'Automate deployments and streamline development workflows',
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Strategy',
      description: 'Leverage multiple cloud providers for optimal flexibility',
    },
  ]

  const benefits = [
    'Reduced infrastructure costs',
    'Improved scalability and flexibility',
    'Enhanced security and compliance',
    'Faster time to market',
    '24/7 monitoring and support',
    'Disaster recovery solutions',
  ]

  return (
    <div className="relative overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedShape type="circle" className="absolute top-20 left-10 w-96 h-96" />
        <AnimatedShape type="blob" className="absolute bottom-20 right-10 w-80 h-80" />
      </div>

      <section className="relative min-h-[60vh] flex items-center justify-center px-4 z-10">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cloud className="w-10 h-10 text-white" />
            </div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Cloud <span className="text-gradient">Services</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Scalable cloud infrastructure and migration solutions to transform your business operations
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
                Get Started <ArrowRight className="inline ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Accelerate Your Cloud Journey</h2>
              <p className="text-gray-600 text-lg mb-4">
                Cloud computing has revolutionized how businesses operate, offering unprecedented scalability,
                flexibility, and cost-efficiency. We help organizations leverage the power of the cloud to
                transform their IT infrastructure.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                From cloud migration to infrastructure design, our team of cloud experts provides end-to-end
                solutions tailored to your business needs.
              </p>
              <p className="text-gray-600 text-lg">
                Whether you're just starting your cloud journey or optimizing existing cloud deployments,
                we're here to help you succeed.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Cloud Benefits</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Cloud Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive cloud solutions for modern businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Cloud Providers We Work With</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Certified experts across all major cloud platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {providers.map((provider, index) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className={`w-16 h-16 ${provider.bgColor || 'bg-gray-50'} rounded-xl mb-4 flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300`}>
                  <img 
                    src={provider.logo} 
                    alt={`${provider.name} logo`}
                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto'
                    }}
                    onError={(e) => {
                      const parent = e.target.parentElement;
                      parent.innerHTML = `<div class="text-gray-600 font-bold text-xl">${provider.name.charAt(0)}</div>`;
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{provider.name}</h3>
                <p className="text-gray-600 text-sm">{provider.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Cloud Technologies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tools and platforms we use for cloud solutions
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

      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your cloud strategy and accelerate your digital transformation
            </p>
            <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
              Get Started <ArrowRight className="inline ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CloudServices

