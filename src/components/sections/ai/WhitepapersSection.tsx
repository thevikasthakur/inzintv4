'use client';

import { motion } from 'framer-motion';
import { FileCheck, Download, TrendingUp, Award } from 'lucide-react';

const whitepapers = [
  {
    title: 'The State of Generative AI in 2025',
    description: 'Comprehensive analysis of generative AI trends, market dynamics, and future predictions for 2025 and beyond',
    pages: 48,
    publishDate: 'January 2025',
    category: 'Trend Report',
    topics: ['Market Analysis', 'Technology Trends', 'ROI Insights', 'Future Predictions'],
    featured: true,
  },
  {
    title: 'Enterprise AI Implementation: A Strategic Framework',
    description: 'Step-by-step framework for planning and executing successful AI initiatives in large organizations',
    pages: 62,
    publishDate: 'December 2024',
    category: 'Strategy Guide',
    topics: ['Strategy', 'Implementation', 'Change Management', 'ROI Measurement'],
    featured: true,
  },
  {
    title: 'Building Autonomous AI Agents: Technical Whitepaper',
    description: 'Deep technical dive into the architecture, design patterns, and best practices for building AI agents',
    pages: 55,
    publishDate: 'November 2024',
    category: 'Technical Paper',
    topics: ['Architecture', 'Design Patterns', 'Implementation', 'Optimization'],
    featured: false,
  },
  {
    title: 'LLM Fine-tuning: Methodologies and Best Practices',
    description: 'Comprehensive guide on fine-tuning large language models for specific business applications',
    pages: 42,
    publishDate: 'October 2024',
    category: 'Technical Guide',
    topics: ['Fine-tuning', 'Training', 'Evaluation', 'Deployment'],
    featured: false,
  },
  {
    title: 'AI ROI Calculator: Measuring Success in AI Projects',
    description: 'Framework and methodology for calculating and demonstrating ROI in AI initiatives',
    pages: 35,
    publishDate: 'September 2024',
    category: 'Business Analysis',
    topics: ['ROI Calculation', 'Metrics', 'KPIs', 'Success Factors'],
    featured: false,
  },
  {
    title: 'AI Security and Compliance: Enterprise Guide',
    description: 'Comprehensive guide to security, privacy, and compliance considerations in enterprise AI deployments',
    pages: 51,
    publishDate: 'August 2024',
    category: 'Compliance Guide',
    topics: ['Security', 'Privacy', 'GDPR', 'Best Practices'],
    featured: true,
  },
];

export default function WhitepapersSection() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white pt-32 pb-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              <FileCheck className="w-4 h-4" />
              <span>Research & Analysis</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">AI Whitepapers & Research</h1>
            <p className="text-xl text-purple-100">
              In-depth research, analysis, and insights on AI technologies, trends, and best practices
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Whitepapers */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Whitepapers</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {whitepapers.filter(wp => wp.featured).map((paper, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
                    {paper.category}
                  </span>
                  <Award className="w-5 h-5 text-yellow-500" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                  {paper.title}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-3">{paper.description}</p>

                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <span>{paper.pages} pages</span>
                  <span>•</span>
                  <span>{paper.publishDate}</span>
                </div>

                <div className="space-y-2 mb-6">
                  <p className="text-sm font-semibold text-gray-700">Topics Covered:</p>
                  <div className="flex flex-wrap gap-2">
                    {paper.topics.map((topic, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                  <Download className="w-5 h-5" />
                  Download Whitepaper
                </button>
              </motion.div>
            ))}
          </div>

          {/* All Whitepapers */}
          <h2 className="text-3xl font-bold mb-12 text-center">All Whitepapers</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {whitepapers.map((paper, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all group flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 font-medium rounded">
                      {paper.category}
                    </span>
                    {paper.featured && <Award className="w-4 h-4 text-yellow-500" />}
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {paper.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{paper.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      {paper.pages} pages • {paper.publishDate}
                    </div>
                    <button className="inline-flex items-center gap-1 text-sm text-purple-600 hover:text-purple-700 font-semibold">
                      Download <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 lg:p-12 text-center text-white"
          >
            <TrendingUp className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stay Updated with Latest Research</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Subscribe to receive new whitepapers, research reports, and industry insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
