'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Book, Download, FileText } from 'lucide-react';
import Link from 'next/link';

const ebooks = [
  {
    title: 'The Complete AI Integration Handbook',
    description: 'Everything you need to know about integrating AI into your business applications.',
    pages: 120,
    downloads: '3.2k',
    category: 'AI & ML',
  },
  {
    title: 'Mobile App Development in 2025',
    description: 'Latest trends, tools, and techniques for building modern mobile applications.',
    pages: 95,
    downloads: '4.5k',
    category: 'Mobile',
  },
  {
    title: 'Cloud Architecture Patterns',
    description: 'Design patterns and best practices for building scalable cloud-native applications.',
    pages: 110,
    downloads: '2.8k',
    category: 'Cloud',
  },
  {
    title: 'Modern Web Development',
    description: 'Comprehensive guide to React, Next.js, and modern frontend development.',
    pages: 150,
    downloads: '5.1k',
    category: 'Web',
  },
];

export default function EbooksSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            E-books
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            In-depth e-books on technology trends and best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16" ref={ref}>
          {ebooks.map((ebook, index) => (
            <motion.div key={ebook.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Book className="w-12 h-12 text-white" />
                </div>
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-3">
                    {ebook.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{ebook.title}</h3>
                  <p className="text-gray-600 mb-4">{ebook.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      {ebook.pages} pages
                    </div>
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      {ebook.downloads}
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300">
                    Download Free
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.6 }} className="text-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Get All E-books</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to get instant access to our entire library of e-books and resources.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300">
            Subscribe Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
