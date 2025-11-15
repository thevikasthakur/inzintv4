'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Clock, ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

const guides = [
  {
    id: 1,
    title: 'Complete Guide to Building AI-Powered Applications',
    description: 'Step-by-step guide covering architecture, implementation, and deployment of AI applications using modern frameworks.',
    category: 'AI & ML',
    readTime: '45 min',
    downloads: '2.3k',
    level: 'Advanced',
  },
  {
    id: 2,
    title: 'Mobile App Development: From Idea to App Store',
    description: 'Comprehensive guide on building, testing, and launching iOS and Android applications successfully.',
    category: 'Mobile',
    readTime: '60 min',
    downloads: '5.1k',
    level: 'Beginner',
  },
  {
    id: 3,
    title: 'Microservices Architecture Best Practices',
    description: 'Learn how to design, build, and deploy scalable microservices using Docker, Kubernetes, and cloud platforms.',
    category: 'Backend',
    readTime: '40 min',
    downloads: '3.7k',
    level: 'Intermediate',
  },
  {
    id: 4,
    title: 'Modern Frontend Development with React & Next.js',
    description: 'Master React and Next.js with real-world examples, performance optimization, and deployment strategies.',
    category: 'Frontend',
    readTime: '50 min',
    downloads: '4.2k',
    level: 'Intermediate',
  },
  {
    id: 5,
    title: 'DevOps and CI/CD Pipeline Setup Guide',
    description: 'Build automated deployment pipelines using GitHub Actions, Jenkins, and cloud infrastructure.',
    category: 'DevOps',
    readTime: '35 min',
    downloads: '2.8k',
    level: 'Intermediate',
  },
  {
    id: 6,
    title: 'API Design and Development Guide',
    description: 'Best practices for designing RESTful and GraphQL APIs with authentication, rate limiting, and documentation.',
    category: 'Backend',
    readTime: '30 min',
    downloads: '3.5k',
    level: 'Beginner',
  },
];

export default function GuidesSection() {
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
            Development Guides
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guides on app development, from concept to deployment.
          </p>
        </motion.div>

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16" ref={ref}>
          {guides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  guide.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                  guide.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {guide.level}
                </span>
              </div>

              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-3">
                {guide.category}
              </span>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {guide.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {guide.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {guide.readTime}
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  {guide.downloads} downloads
                </div>
              </div>

              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300"
              >
                Download Guide
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Need Custom Guidance?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our experts can provide personalized consulting and technical guidance for your specific project needs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
          >
            Contact Our Experts
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
