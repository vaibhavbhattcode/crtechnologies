import { useEffect } from 'react'

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image 
}) => {
  const siteName = 'CR Technologies'
  const defaultTitle = 'CR Technologies - Leading IT Solutions Provider'
  const defaultDescription = 'Transform your business with cutting-edge IT solutions. Web development, mobile apps, cloud services, AI solutions, data analytics, and cybersecurity services.'
  const defaultImage = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=630&fit=crop'

  const seoTitle = title ? `${title} | ${siteName}` : defaultTitle
  const seoDescription = description || defaultDescription
  const seoImage = image || defaultImage

  useEffect(() => {
    // Update document title
    document.title = seoTitle

    // Update or create meta tags
    const updateMetaTag = (name, content, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    updateMetaTag('description', seoDescription)
    if (keywords) {
      updateMetaTag('keywords', keywords)
    }

    // Open Graph tags
    updateMetaTag('og:title', seoTitle, 'property')
    updateMetaTag('og:description', seoDescription, 'property')
    updateMetaTag('og:image', seoImage, 'property')
    updateMetaTag('og:type', 'website', 'property')

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', 'property')
    updateMetaTag('twitter:title', seoTitle, 'property')
    updateMetaTag('twitter:description', seoDescription, 'property')
    updateMetaTag('twitter:image', seoImage, 'property')
  }, [seoTitle, seoDescription, seoImage, keywords])

  return null
}

export default SEO
