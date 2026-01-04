import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Search, Clock, BookOpen, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import AnimatedShape from '../components/ui/AnimatedShape'
import Button from '../components/ui/Button'
import SEO from '../components/SEO'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const articles = [
    {
      id: 1,
      title: 'The Future of Web Development: 2024 Trends & Technologies',
      excerpt: 'Explore the latest trends shaping web development including AI integration, edge computing, and advanced frameworks.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop&q=80',
      category: 'Web Development',
      author: 'Vaibhav Sonar',
      date: 'Jan 15, 2024',
      readTime: '8 min read',
      content: 'Full article content here...',
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn how to successfully migrate your applications to the cloud with zero downtime and minimal risk.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop&q=80',
      category: 'Cloud Services',
      author: 'Jainam Seth',
      date: 'Jan 12, 2024',
      readTime: '10 min read',
      content: 'Full article content here...',
    },
    {
      id: 3,
      title: 'Building Scalable Applications with Microservices',
      excerpt: 'Understand the architecture, benefits, and challenges of microservices and how to implement them effectively.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop&q=80',
      category: 'Architecture',
      author: 'Vaibhav Bhatt',
      date: 'Jan 10, 2024',
      readTime: '12 min read',
      content: 'Full article content here...',
    },
    {
      id: 4,
      title: 'AI & Machine Learning for Business: Real-World Applications',
      excerpt: 'Discover how AI and ML are transforming industries and how your business can leverage these technologies.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop&q=80',
      category: 'AI & ML',
      author: 'Vaibhav Sonar',
      date: 'Jan 8, 2024',
      readTime: '9 min read',
      content: 'Full article content here...',
    },
    {
      id: 5,
      title: 'Cybersecurity Best Practices for 2024',
      excerpt: 'Essential security measures and strategies to protect your business from evolving cyber threats.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop&q=80',
      category: 'Security',
      author: 'Jainam Seth',
      date: 'Jan 5, 2024',
      readTime: '7 min read',
      content: 'Full article content here...',
    },
    {
      id: 6,
      title: 'React Performance Optimization: Tips & Tricks',
      excerpt: 'Improve your React application performance with advanced optimization techniques and best practices.',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=500&fit=crop&q=80',
      category: 'Web Development',
      author: 'Vaibhav Bhatt',
      date: 'Jan 1, 2024',
      readTime: '11 min read',
      content: 'Full article content here...',
    },
    {
      id: 7,
      title: 'Data Analytics: Turning Raw Data into Business Insights',
      excerpt: 'Learn how to collect, analyze, and visualize data to make informed business decisions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80',
      category: 'Data Analytics',
      author: 'Vaibhav Sonar',
      date: 'Dec 28, 2023',
      readTime: '10 min read',
      content: 'Full article content here...',
    },
    {
      id: 8,
      title: 'Mobile App Development: Native vs Cross-Platform',
      excerpt: 'Compare native and cross-platform development approaches to choose the best strategy for your app.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&q=80',
      category: 'Mobile Development',
      author: 'Vaibhav Bhatt',
      date: 'Dec 25, 2023',
      readTime: '8 min read',
      content: 'Full article content here...',
    },
  ]

  const categories = ['All', ...new Set(articles.map(a => a.category))]

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="relative overflow-hidden pt-16 lg:pt-20">
      <SEO
        title="Blog - Tech Insights & Industry Trends | CR Technologies"
        description="Read expert articles on web development, AI, cloud computing, cybersecurity, and technology trends from CR Technologies. Industry insights, tutorials, and best practices."
        keywords="technology blog, web development articles, AI tutorials, cloud computing tips, cybersecurity best practices, software development insights, CR Technologies blog"
        url="/blog"
      />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedShape type="blob" className="absolute top-20 right-10 w-96 h-96" />
        <AnimatedShape type="circle" className="absolute bottom-20 left-10 w-80 h-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-purple-50/30"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[55vh] flex items-center justify-center px-4 py-28 z-10">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-semibold text-sm mb-8"
            >
              <BookOpen className="w-4 h-4" />
              {articles.length}+ Articles • Updated Weekly
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Knowledge <span className="text-gradient">Hub</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              Industry insights, best practices, and the latest technology trends from our experts
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 md:py-12 px-4 bg-white border-y border-gray-100">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 md:px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 lg:py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          {filteredArticles.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group cursor-pointer border border-gray-100"
                >
                  <div className="relative overflow-hidden h-48 md:h-52 bg-gradient-to-br from-blue-100 to-purple-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                        e.target.parentElement.innerHTML = `<div class="text-center p-4"><div class="w-16 h-16 mx-auto mb-2 bg-blue-500/20 rounded-full flex items-center justify-center"><svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div><span class="text-xs text-gray-500">${article.category}</span></div>`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/95 text-gray-900 rounded-full text-xs font-bold">
                        <TrendingUp className="w-3 h-3" />
                        {article.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3 text-white text-xs">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>

                    <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                          {article.author.charAt(0)}
                        </div>
                        <span className="font-medium text-gray-700">{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1 ml-auto">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-xl text-gray-600 mb-2">No articles found</p>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 lg:py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
            </div>
            
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-blue-300 font-semibold text-sm mb-6">
                <BookOpen className="w-4 h-4" />
                Newsletter
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Stay Updated</h2>
              <p className="text-lg text-gray-300 mb-8">
                Subscribe to our newsletter for the latest insights, tutorials, and best practices delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3.5 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button variant="gradient" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-4">No spam, unsubscribe anytime</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog