'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, DollarSign, Users, Code, Globe } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Pre-Vetted Talent',
    description: 'All developers go through rigorous technical screening and background checks',
  },
  {
    icon: Zap,
    title: 'Fast Hiring',
    description: 'Get matched with qualified candidates in 48 hours',
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective',
    description: 'Save up to 60% compared to hiring locally while maintaining quality',
  },
  {
    icon: Users,
    title: 'Flexible Engagement',
    description: 'Hire full-time, part-time, or hourly based on your needs',
  },
  {
    icon: Code,
    title: 'Technical Excellence',
    description: 'Developers with 5+ years of experience in modern technologies',
  },
  {
    icon: Globe,
    title: 'Global Talent Pool',
    description: 'Access developers across multiple time zones for round-the-clock development',
  },
];

export default function WhyHireSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Hire Through Inzint?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We make it easy to build your dream team with top-tier developers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-4">
                <benefit.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '98%', label: 'Client Retention' },
            { value: '500+', label: 'Projects Delivered' },
            { value: '200+', label: 'Developers' },
            { value: '15+', label: 'Countries' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
