import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Button = ({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  size = 'md',
  className = '', 
  icon: Icon,
  iconPosition = 'right',
  rightIcon,
  leftIcon,
  loading = false,
  disabled = false,
  fullWidth = false,
  ...props 
}) => {
  // Handle rightIcon/leftIcon props for backward compatibility
  const finalIcon = Icon || rightIcon || leftIcon
  const finalIconPosition = leftIcon ? 'left' : (rightIcon ? 'right' : iconPosition)
  
  const baseClasses = 'relative inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full overflow-hidden'
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  }
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5',
    secondary: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 hover:border-blue-700',
    outline: 'bg-transparent text-white border-2 border-white/80 hover:bg-white hover:text-blue-600',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
    dark: 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-xl',
    gradient: 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:shadow-xl hover:shadow-purple-500/25 hover:-translate-y-0.5',
    success: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-xl hover:shadow-green-500/25 hover:-translate-y-0.5',
  }

  const disabledClasses = disabled || loading 
    ? 'opacity-60 cursor-not-allowed hover:transform-none hover:shadow-none' 
    : ''
  
  const widthClass = fullWidth ? 'w-full' : ''

  const classes = `${baseClasses} ${sizeClasses[size]} ${variants[variant]} ${disabledClasses} ${widthClass} ${className}`

  const content = (
    <>
      {/* Shimmer effect for primary variants */}
      {(variant === 'primary' || variant === 'gradient' || variant === 'success') && !disabled && (
        <span className="absolute inset-0 overflow-hidden">
          <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </span>
      )}
      
      {loading ? (
        <span className="flex items-center space-x-2">
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading...</span>
        </span>
      ) : (
        <span className="relative flex items-center space-x-2">
          {finalIcon && finalIconPosition === 'left' && <finalIcon className="w-5 h-5" />}
          <span>{children}</span>
          {finalIcon && finalIconPosition === 'right' && <finalIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
        </span>
      )}
    </>
  )

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { duration: 0.2, ease: 'easeOut' },
  }

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={`${classes} group`} {...props}>
          {content}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${classes} group`}
        {...motionProps}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={`${classes} group`}
      disabled={disabled || loading}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  )
}

export default Button

