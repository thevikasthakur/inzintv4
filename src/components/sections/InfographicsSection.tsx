'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Image, Download } from 'lucide-react';

const infographics = [
  { title: 'AI Adoption in 2025', description: 'Statistics and trends on AI implementation across industries.', downloads: '2.1k', category: 'AI & ML' },
  { title: 'Mobile App Development Timeline', description: 'Visual guide to app development phases and milestones.', downloads: '3.5k', category: 'Mobile' },
  { title: 'Cloud Migration Journey', description: 'Step-by-step process for successful cloud transformation.', downloads: '1.8k', category: 'Cloud' },
  { title: 'Tech Stack Comparison 2025', description: 'Comprehensive comparison of popular development frameworks.', downloads: '2.7k', category: 'Development' },
];

export default function InfographicsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Infographics</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">Visual insights on tech trends and data.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8" ref={ref}>
          {infographics.map((infographic, index) => (
            <motion.div key={infographic.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all group">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center relative overflow-hidden">
                <Image className="w-20 h-20 text-white opacity-50" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-3">{infographic.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{infographic.title}</h3>
                <p className="text-gray-600 mb-4">{infographic.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{infographic.downloads} downloads</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
