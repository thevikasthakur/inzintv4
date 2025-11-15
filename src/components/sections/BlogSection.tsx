'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';

const categories = [
  'All Posts',
  'AI & Machine Learning',
  'Mobile Development',
  'Web Development',
  'Cloud & DevOps',
  'Product Design',
];

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable AI Applications: A Complete Guide',
    excerpt: 'Learn how to architect and deploy AI applications that can handle millions of users while maintaining performance and reliability.',
    category: 'AI & Machine Learning',
    author: 'Priya Sharma',
    date: 'November 12, 2025',
    readTime: '8 min read',
    image: '/assets/blog/ai-applications.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'React Native vs Flutter: Which Framework to Choose in 2025?',
    excerpt: 'A comprehensive comparison of the two leading cross-platform mobile frameworks based on real-world projects.',
    category: 'Mobile Development',
    author: 'Rahul Verma',
    date: 'November 8, 2025',
    readTime: '6 min read',
    image: '/assets/blog/mobile-frameworks.jpg',
    featured: false,
  },
  {
    id: 3,
    title: 'Next.js 15: New Features and Performance Improvements',
    excerpt: 'Explore the latest features in Next.js 15 including Turbopack, improved caching, and server actions.',
    category: 'Web Development',
    author: 'Vikram Patel',
    date: 'November 5, 2025',
    readTime: '5 min read',
    image: '/assets/blog/nextjs-15.jpg',
    featured: false,
  },
  {
    id: 4,
    title: 'Kubernetes Best Practices for Production Deployments',
    excerpt: 'Essential tips and strategies for deploying containerized applications to production using Kubernetes.',
    category: 'Cloud & DevOps',
    author: 'Ananya Reddy',
    date: 'November 1, 2025',
    readTime: '10 min read',
    image: '/assets/blog/kubernetes.jpg',
    featured: false,
  },
  {
    id: 5,
    title: 'Designing for Accessibility: A UX Guide',
    excerpt: 'How to create inclusive digital experiences that work for everyone, including users with disabilities.',
    category: 'Product Design',
    author: 'Meera Singh',
    date: 'October 28, 2025',
    readTime: '7 min read',
    image: '/assets/blog/accessibility.jpg',
    featured: false,
  },
  {
    id: 6,
    title: 'The Future of Voice AI in Enterprise Applications',
    excerpt: 'How voice-enabled AI is transforming customer service and business operations across industries.',
    category: 'AI & Machine Learning',
    author: 'Jai Goyal',
    date: 'October 25, 2025',
    readTime: '9 min read',
    image: '/assets/blog/voice-ai.jpg',
    featured: false,
  },
];

export default function BlogSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Latest insights on technology, business, and innovation from our team of experts.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-gray-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            ref={ref}
            className="mb-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-video md:aspect-auto bg-gradient-to-br from-blue-500 to-purple-500 relative">
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                  FEATURED
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4 w-fit">
                  {post.category}
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300"
                >
                  Read More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all duration-300"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Never Miss an Update
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest tech insights delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
