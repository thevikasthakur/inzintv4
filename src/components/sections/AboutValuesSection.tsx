'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Users, Zap, Shield, Heart, TrendingUp } from 'lucide-react';

const values = [
  {
    title: 'Engineering Excellence',
    description: 'We prioritize clean code, documented decisions, and production-ready solutions that stand the test of time.',
    icon: Code,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Client Partnership',
    description: 'Your success is our success. We work as an extension of your team, understanding your business deeply.',
    icon: Users,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Innovation First',
    description: 'We stay ahead of the curve, leveraging the latest AI and cloud technologies to give you a competitive edge.',
    icon: Zap,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Quality Assurance',
    description: 'Every project undergoes rigorous testing and quality checks to ensure reliability and performance.',
    icon: Shield,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Empathy & Care',
    description: 'We believe in building meaningful relationships, treating every stakeholder with respect and understanding.',
    icon: Heart,
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Continuous Growth',
    description: 'We invest in learning and improvement, ensuring our team stays at the forefront of technology.',
    icon: TrendingUp,
    gradient: 'from-indigo-500 to-blue-500',
  },
];

export default function AboutValuesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="values" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do at Inzint
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6`}>
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
