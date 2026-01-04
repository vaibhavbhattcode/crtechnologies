import { useEffect } from 'react'

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image,
  url,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  noindex = false
}) => {
  const siteName = 'CR Technologies'
  const defaultTitle = 'CR Technologies - Premium IT Solutions & Digital Transformation'
  const defaultDescription = 'Enterprise-grade IT solutions: Web Development, Mobile Apps, Cloud Services, AI/ML, Data Analytics & Cybersecurity. Trusted by 200+ clients worldwide. ISO 27001 certified.'
  const defaultImage = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=630&fit=crop&q=80'
  const baseURL = 'https://crtechnologies.vercel.app'

  const seoTitle = title ? `${title} | ${siteName}` : defaultTitle
  const seoDescription = description || defaultDescription
  const seoImage = image || defaultImage
  const canonicalURL = url ? `${baseURL}${url}` : baseURL

  useEffect(() => {
    // Update document title
    document.title = seoTitle

    // Update or create meta tags
    const updateMetaTag = (name, content, attribute = 'name') => {
      if (!content) return
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Basic meta tags
    updateMetaTag('description', seoDescription)
    updateMetaTag('viewport', 'width=device-width, initial-scale=1, maximum-scale=5')
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    
    if (keywords) {
      updateMetaTag('keywords', keywords)
    }

    if (author) {
      updateMetaTag('author', author)
    }

    // Canonical tag
    let canonicalElement = document.querySelector('link[rel="canonical"]')
    if (!canonicalElement) {
      canonicalElement = document.createElement('link')
      canonicalElement.rel = 'canonical'
      document.head.appendChild(canonicalElement)
    }
    canonicalElement.href = canonicalURL

    // Open Graph tags (Social Media)
    updateMetaTag('og:title', seoTitle, 'property')
    updateMetaTag('og:description', seoDescription, 'property')
    updateMetaTag('og:image', seoImage, 'property')
    updateMetaTag('og:image:width', '1200', 'property')
    updateMetaTag('og:image:height', '630', 'property')
    updateMetaTag('og:type', type, 'property')
    updateMetaTag('og:url', canonicalURL, 'property')
    updateMetaTag('og:site_name', siteName, 'property')
    updateMetaTag('og:locale', 'en_US', 'property')

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name')
    updateMetaTag('twitter:site', '@crtechnologies', 'name')
    updateMetaTag('twitter:creator', '@crtechnologies', 'name')
    updateMetaTag('twitter:title', seoTitle, 'name')
    updateMetaTag('twitter:description', seoDescription, 'name')
    updateMetaTag('twitter:image', seoImage, 'name')

    // Article specific tags
    if (type === 'article') {
      if (publishedTime) {
        updateMetaTag('article:published_time', publishedTime, 'property')
      }
      if (modifiedTime) {
        updateMetaTag('article:modified_time', modifiedTime, 'property')
      }
      updateMetaTag('article:author', author || 'CR Technologies', 'property')
    }

  }, [seoTitle, seoDescription, seoImage, keywords, canonicalURL, author, type, noindex, publishedTime, modifiedTime])

  return null
}

export default SEO
