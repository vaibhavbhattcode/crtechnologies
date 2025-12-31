import { motion } from 'framer-motion'

const AnimatedShape = ({ type = 'circle', className = '' }) => {
  const shapes = {
    circle: (
      <motion.div
        className={`rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl ${className}`}
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ 
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      />
    ),
    blob: (
      <motion.div
        className={`rounded-full bg-gradient-to-br from-pink-400/20 to-yellow-400/20 blur-3xl ${className}`}
        animate={{
          borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '70% 30% 30% 70% / 70% 70% 30% 30%', '30% 70% 70% 30% / 30% 30% 70% 70%'],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ 
          willChange: 'transform, border-radius',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      />
    ),
    square: (
      <motion.div
        className={`rounded-3xl bg-gradient-to-br from-green-400/20 to-blue-400/20 blur-3xl ${className}`}
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ 
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      />
    ),
    wave: (
      <motion.div
        className={`rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 blur-3xl ${className}`}
        animate={{
          borderRadius: ['50%', '40% 60%', '60% 40%', '50%'],
          scale: [1, 1.2, 1.1, 1],
          rotate: [0, 45, 90, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    ),
    diamond: (
      <motion.div
        className={`bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl ${className}`}
        style={{
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        }}
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    ),
  }

  return shapes[type] || shapes.circle
}

export default AnimatedShape

