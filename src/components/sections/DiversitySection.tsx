'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Globe, Award, Sparkles } from 'lucide-react';

const stats = [
  { label: 'Women in Tech', value: '40%', icon: Users },
  { label: 'Countries Represented', value: '12+', icon: Globe },
  { label: 'Diversity Training Hours', value: '200+', icon: Award },
  { label: 'Inclusive Policies', value: '100%', icon: Sparkles },
];

const commitments = [
  {
    title: 'Equal Opportunity',
    description: 'We hire and promote based on merit, ensuring fair opportunities regardless of gender, race, religion, or background.',
  },
  {
    title: 'Inclusive Culture',
    description: 'Our workplace celebrates differences, encouraging diverse perspectives and fostering a sense of belonging for everyone.',
  },
  {
    title: 'Continuous Learning',
    description: 'Regular diversity and inclusion training helps our team recognize biases and build a more equitable environment.',
  },
  {
    title: 'Safe Environment',
    description: 'We maintain a zero-tolerance policy for discrimination and harassment, with clear channels for reporting concerns.',
  },
];

export default function DiversitySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="diversity" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Diversity & Inclusion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a workplace where everyone feels valued, respected, and empowered to do their best work.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Commitments */}
        <div className="grid md:grid-cols-2 gap-8">
          {commitments.map((commitment, index) => (
            <motion.div
              key={commitment.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {commitment.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {commitment.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white"
        >
          <blockquote className="text-2xl md:text-3xl font-light italic mb-4">
            "Diversity is being invited to the party. Inclusion is being asked to dance."
          </blockquote>
          <p className="text-lg opacity-90">
            — Our commitment at Inzint
          </p>
        </motion.div>
      </div>
    </section>
  );
}
