// Performance optimization utilities

// Throttle function for scroll events - optimized
export const throttle = (func, limit) => {
  let inThrottle
  let lastFunc
  let lastRan
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      lastRan = Date.now()
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(this, args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}

// Debounce function for resize events - optimized
export const debounce = (func, wait, immediate = false) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      timeout = null
      if (!immediate) func.apply(this, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(this, args)
  }
}

// Request Animation Frame throttle for smooth animations
export const rafThrottle = (callback) => {
  let requestId = null
  let lastArgs = null

  const later = (context) => () => {
    requestId = null
    callback.apply(context, lastArgs)
  }

  const throttled = function(...args) {
    lastArgs = args
    if (requestId === null) {
      requestId = requestAnimationFrame(later(this))
    }
  }

  throttled.cancel = () => {
    if (requestId !== null) {
      cancelAnimationFrame(requestId)
      requestId = null
    }
  }

  return throttled
}

// Optimized animation variants for Framer Motion - GPU accelerated
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
}

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
}

export const viewportOptions = {
  once: true,
  margin: '-50px',
  amount: 0.1
}

// Optimized viewport options for different sections
export const viewportOptionsLazy = {
  once: true,
  margin: '-100px',
  amount: 0.05
}

// Check if device is mobile
export const isMobile = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768 || 
    ('ontouchstart' in window) || 
    (navigator.maxTouchPoints > 0)
}

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Lazy load images with Intersection Observer
export const lazyLoadImage = (imageElement, src) => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          imageElement.src = src
          observer.unobserve(imageElement)
        }
      })
    }, { rootMargin: '50px' })
    observer.observe(imageElement)
  } else {
    imageElement.src = src
  }
}

// Preload critical images
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

// Preload multiple images
export const preloadImages = (srcArray) => {
  return Promise.all(srcArray.map(preloadImage))
}

// Check if element is in viewport
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Smooth scroll to element
export const smoothScrollTo = (elementId, offset = 80) => {
  const element = document.getElementById(elementId)
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

// Get optimized animation settings based on device
export const getAnimationSettings = () => {
  const reduced = prefersReducedMotion()
  const mobile = isMobile()
  
  return {
    duration: reduced ? 0 : (mobile ? 0.2 : 0.3),
    ease: [0.25, 0.1, 0.25, 1],
    stagger: reduced ? 0 : (mobile ? 0.05 : 0.08)
  }
}

