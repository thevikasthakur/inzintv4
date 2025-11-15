'use client';

import { motion } from 'framer-motion';
import { BookOpen, Calendar, User, ArrowRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Generative AI: Trends to Watch in 2025',
    excerpt: 'Explore the emerging trends in generative AI that will shape the future of technology and business in 2025 and beyond.',
    author: 'Dr. Sarah Chen',
    date: '2025-01-10',
    category: 'Generative AI',
    readTime: '8 min read',
    image: '/assets/images/blog/gen-ai-trends.jpg',
    tags: ['Generative AI', 'GPT-4', 'Future Tech'],
  },
  {
    id: 2,
    title: 'Building Production-Ready AI Agents: A Complete Guide',
    excerpt: 'Learn how to build autonomous AI agents that can handle complex tasks and integrate seamlessly with your existing systems.',
    author: 'Michael Rodriguez',
    date: '2025-01-08',
    category: 'AI Agents',
    readTime: '12 min read',
    image: '/assets/images/blog/ai-agents.jpg',
    tags: ['AI Agents', 'Automation', 'Tutorial'],
  },
  {
    id: 3,
    title: 'ChatGPT Integration: Best Practices for Enterprise Applications',
    excerpt: 'Discover the best practices for integrating ChatGPT into enterprise applications for maximum value and security.',
    author: 'Emily Watson',
    date: '2025-01-05',
    category: 'ChatGPT',
    readTime: '10 min read',
    image: '/assets/images/blog/chatgpt-enterprise.jpg',
    tags: ['ChatGPT', 'Enterprise', 'Integration'],
  },
  {
    id: 4,
    title: 'Custom LLM Development: When and Why You Need It',
    excerpt: 'Understanding when to build a custom large language model versus using off-the-shelf solutions for your business needs.',
    author: 'Dr. James Park',
    date: '2025-01-03',
    category: 'LLM Development',
    readTime: '15 min read',
    image: '/assets/images/blog/custom-llm.jpg',
    tags: ['LLM', 'Custom Models', 'Strategy'],
  },
  {
    id: 5,
    title: 'Machine Learning in Production: Lessons from the Trenches',
    excerpt: 'Real-world lessons and best practices from deploying machine learning models at scale in production environments.',
    author: 'Alex Kumar',
    date: '2024-12-28',
    category: 'Machine Learning',
    readTime: '11 min read',
    image: '/assets/images/blog/ml-production.jpg',
    tags: ['ML Ops', 'Production', 'Best Practices'],
  },
  {
    id: 6,
    title: 'AI Consulting: How to Choose the Right AI Strategy for Your Business',
    excerpt: 'A strategic framework for evaluating AI opportunities and building an effective AI roadmap for your organization.',
    author: 'Lisa Thompson',
    date: '2024-12-25',
    category: 'AI Strategy',
    readTime: '9 min read',
    image: '/assets/images/blog/ai-strategy.jpg',
    tags: ['AI Strategy', 'Consulting', 'Business'],
  },
];

const categories = ['All', 'Generative AI', 'AI Agents', 'ChatGPT', 'LLM', 'Machine Learning', 'Strategy'];

export default function AIBlogSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white pt-32 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              <span>AI & Machine Learning Blog</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Latest Insights on AI & ML
            </h1>
            <p className="text-xl text-blue-100">
              Expert perspectives, trends, and practical guides on artificial intelligence and machine learning
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container">
          {/* Categories Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                {/* Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TrendingUp className="w-16 h-16 text-white/30" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-blue-600 text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{post.author}</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-1 text-blue-600 hover:gap-2 transition-all font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Load More Articles
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Stay Updated with AI Insights
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for weekly AI trends, tutorials, and expert insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
