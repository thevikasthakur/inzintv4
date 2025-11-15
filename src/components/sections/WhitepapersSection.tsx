'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Download, Calendar } from 'lucide-react';

const whitepapers = [
  { title: 'The State of AI in Enterprise 2025', description: 'Comprehensive research on AI adoption, challenges, and ROI across industries.', date: 'November 2025', pages: 45, downloads: '1.8k' },
  { title: 'Cloud Migration Strategies for Modern Businesses', description: 'Best practices and frameworks for successful cloud transformation journeys.', date: 'October 2025', pages: 38, downloads: '2.1k' },
  { title: 'Mobile App Performance Optimization', description: 'Technical analysis of performance bottlenecks and optimization techniques.', date: 'September 2025', pages: 52, downloads: '1.5k' },
  { title: 'Cybersecurity in the Age of AI', description: 'Emerging threats and defense strategies for AI-powered security systems.', date: 'August 2025', pages: 41, downloads: '1.9k' },
];

export default function WhitepapersSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Whitepapers</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">Research and analysis reports on AI technologies and industry trends.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8" ref={ref}>
          {whitepapers.map((paper, index) => (
            <motion.div key={paper.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{paper.title}</h3>
              <p className="text-gray-600 mb-6">{paper.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />{paper.date}</div>
                <div className="flex items-center gap-2"><FileText className="w-4 h-4" />{paper.pages} pages</div>
                <div className="flex items-center gap-2"><Download className="w-4 h-4" />{paper.downloads}</div>
              </div>
              <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">Download Whitepaper</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
