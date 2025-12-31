import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Button = ({ children, to, href, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-block'
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105',
    secondary: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600',
  }

  const classes = `${baseClasses} ${variants[variant]} ${className}`

  if (to) {
    return (
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        style={{ willChange: 'transform' }}
      >
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        style={{ willChange: 'transform' }}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      style={{ willChange: 'transform' }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button

