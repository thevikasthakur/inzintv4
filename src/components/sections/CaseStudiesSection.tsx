'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Users, Star } from 'lucide-react';

const caseStudies = [
  { company: 'TechCorp', industry: 'Fintech', title: 'Digital Banking Platform', description: 'Built a complete digital banking solution serving 1M+ users.', metrics: { users: '1M+', growth: '300%', rating: '4.8' } },
  { company: 'HealthPlus', industry: 'Healthcare', title: 'Telemedicine App', description: 'Connected patients with doctors through secure video consultations.', metrics: { users: '500K+', growth: '250%', rating: '4.9' } },
  { company: 'ShopEasy', industry: 'E-commerce', title: 'Mobile Shopping Platform', description: 'Created a seamless shopping experience with AI recommendations.', metrics: { users: '2M+', growth: '400%', rating: '4.7' } },
];

export default function CaseStudiesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Case Studies</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">Success stories from our clients.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {caseStudies.map((study, index) => (
            <motion.div key={study.company} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-4">{study.industry}</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.company}</h3>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">{study.title}</h4>
              <p className="text-gray-600 mb-6">{study.description}</p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                <div><Users className="w-5 h-5 text-blue-600 mb-1" /><div className="text-lg font-bold">{study.metrics.users}</div><div className="text-xs text-gray-500">Users</div></div>
                <div><TrendingUp className="w-5 h-5 text-green-600 mb-1" /><div className="text-lg font-bold">{study.metrics.growth}</div><div className="text-xs text-gray-500">Growth</div></div>
                <div><Star className="w-5 h-5 text-yellow-600 mb-1" /><div className="text-lg font-bold">{study.metrics.rating}</div><div className="text-xs text-gray-500">Rating</div></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
