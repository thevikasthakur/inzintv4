'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Home,
  DollarSign,
  GraduationCap,
  Heart,
  Laptop,
  Plane,
  Trophy,
  Users
} from 'lucide-react';

const benefits = [
  {
    title: 'Remote-First Culture',
    description: 'Work from anywhere in India with flexible hours that fit your lifestyle.',
    icon: Home,
  },
  {
    title: 'Competitive Salary',
    description: 'Market-leading compensation with performance bonuses and equity options.',
    icon: DollarSign,
  },
  {
    title: 'Learning & Development',
    description: 'Annual learning budget, conference tickets, and access to premium courses.',
    icon: GraduationCap,
  },
  {
    title: 'Health Insurance',
    description: 'Comprehensive health coverage for you and your family.',
    icon: Heart,
  },
  {
    title: 'Latest Equipment',
    description: 'MacBook Pro, ergonomic setup, and all the tools you need to excel.',
    icon: Laptop,
  },
  {
    title: 'Paid Time Off',
    description: 'Generous PTO, sick leave, and annual team retreats.',
    icon: Plane,
  },
  {
    title: 'Recognition Programs',
    description: 'Regular awards, bonuses, and celebrations for outstanding work.',
    icon: Trophy,
  },
  {
    title: 'Inclusive Environment',
    description: 'A diverse, supportive workplace where everyone belongs.',
    icon: Users,
  },
];

export default function CareersBenefitsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Why Join Inzint?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer more than just a job—we provide a platform to grow, learn, and make an impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
