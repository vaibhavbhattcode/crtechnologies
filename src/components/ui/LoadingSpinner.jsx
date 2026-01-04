import { motion } from 'framer-motion'

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative inline-flex items-center justify-center w-16 h-16 mb-6"
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <span className="relative text-white font-bold text-2xl z-10">CR</span>
        </motion.div>
        
        {/* Loading Bar */}
        <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ 
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Loading Text */}
        <motion.p 
          className="mt-4 text-gray-500 text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  )
}

export default LoadingSpinner
