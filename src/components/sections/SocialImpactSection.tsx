'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Heart, BookOpen, Lightbulb } from 'lucide-react';
import Link from 'next/link';

const initiatives = [
  {
    title: 'Community Education',
    description: 'We provide free coding workshops and mentorship programs for underprivileged youth, helping them build careers in technology.',
    icon: BookOpen,
    impact: '500+ students trained',
  },
  {
    title: 'Environmental Responsibility',
    description: 'Our carbon-neutral operations and green hosting solutions ensure we minimize our environmental footprint.',
    icon: Globe,
    impact: 'Carbon-neutral since 2022',
  },
  {
    title: 'Pro Bono Work',
    description: 'We dedicate time to building technology solutions for non-profits and social enterprises at no cost.',
    icon: Heart,
    impact: '10+ NGOs supported',
  },
  {
    title: 'Innovation for Good',
    description: 'We actively explore how AI and technology can solve societal challenges in healthcare, education, and accessibility.',
    icon: Lightbulb,
    impact: '5+ social impact projects',
  },
];

export default function SocialImpactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="social-impact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Making a Positive Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe technology should serve humanity. Here's how we're giving back to the community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                <initiative.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {initiative.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {initiative.description}
              </p>
              <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">
                {initiative.impact}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Partner With Us for Social Good
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Are you a non-profit or social enterprise? Let's discuss how we can help amplify your impact through technology.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
