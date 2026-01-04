import { motion } from 'framer-motion'
import AnimatedShape from '../components/ui/AnimatedShape'
import SEO from '../components/SEO'

const TermsOfService = () => {
  return (
    <div className="relative overflow-hidden pt-16 lg:pt-20">
      <SEO
        title="Terms of Service - CR Technologies"
        description="Read the terms of service and legal agreement for CR Technologies. Understand your rights and responsibilities when using our services."
        keywords="terms of service, CR Technologies, legal agreement, terms and conditions, service agreement"
      />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedShape type="blob" className="absolute top-20 right-10 w-96 h-96" />
        <AnimatedShape type="circle" className="absolute bottom-20 left-10 w-80 h-80" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center px-4 z-10">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Terms of <span className="text-gradient">Service</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Last updated: January 3, 2026
          </motion.p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Section 1 */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">1. Agreement to Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using the CR Technologies website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-700">
                CR Technologies reserves the right to make changes to these Terms of Service at any time and will notify users of any changes by updating the "Last updated" date of these Terms of Service.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">2. Use License</h2>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on CR Technologies' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                <li>Violate any applicable laws or regulations related to access to or use of the website</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">3. Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                The materials on CR Technologies' website are provided "as is". CR Technologies makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="text-gray-700">
                Further, CR Technologies does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">4. Limitations</h2>
              <p className="text-gray-700 mb-4">
                In no event shall CR Technologies or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CR Technologies' website, even if CR Technologies or a CR Technologies authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              <p className="text-gray-700">
                Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </div>

            {/* Section 5 */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">5. Accuracy of Materials</h2>
              <p className="text-gray-700 mb-4">
                The materials appearing on CR Technologies' website could include technical, typographical, or photographic errors. CR Technologies does not warrant that any of the materials on its website are accurate, complete, or current. CR Technologies may make changes to the materials contained on its website at any time without notice.
              </p>
              <p className="text-gray-700">
                CR Technologies does not, however, make any commitment to update the materials.
              </p>
            </div>

            {/* Section 6 */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">6. Links</h2>
              <p className="text-gray-700 mb-4">
                CR Technologies has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by CR Technologies of the site. Use of any such linked website is at the user's own risk.
              </p>
              <p className="text-gray-700">
                If you believe that your intellectual property rights have been violated, please contact us immediately.
              </p>
            </div>

            {/* Section 7 */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">7. Modifications</h2>
              <p className="text-gray-700">
                CR Technologies may revise these Terms of Service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
              </p>
            </div>

            {/* Section 8 */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">8. Governing Law</h2>
              <p className="text-gray-700">
                These Terms and Conditions of use are governed by and construed in accordance with the laws of the Republic of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            {/* Section 9 */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">9. User Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                Users agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Not engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
                <li>Not transmit obscene, offensive or inflammatory material</li>
                <li>Not disrupt the normal flow of dialogue within CR Technologies' website</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Maintain the confidentiality of any account information</li>
              </ul>
            </div>

            {/* Section 10 */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">10. Service Termination</h2>
              <p className="text-gray-700 mb-4">
                CR Technologies reserves the right to refuse service, terminate accounts, and remove content at its sole discretion, without notice, for any reason whatsoever, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Violation of these Terms of Service</li>
                <li>Violation of any applicable laws or regulations</li>
                <li>Conduct that CR Technologies believes in good faith to be illegal or unethical</li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 shadow-lg border-l-4 border-blue-600">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Questions?</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>📧 Email: <a href="mailto:legal@crtechnologies.com" className="text-blue-600 hover:underline">legal@crtechnologies.com</a></li>
                <li>📞 Phone: +91 (22) 1234-5678</li>
                <li>📍 Address: Mumbai, Maharashtra, India</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TermsOfService
