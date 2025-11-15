'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { getIcon } from '@/lib/icons';

interface IndustryTemplateProps {
  data: {
    hero: {
      badge: { icon: string; text: string };
      title: string;
      highlightedTitle: string;
      description: string;
      stats: Array<{ value: string; label: string }>;
      gradient: string;
    };
    solutions: Array<{
      icon: string;
      title: string;
      description: string;
      features: string[];
      color: string;
    }>;
    benefits: Array<{
      title: string;
      description: string;
      metric: string;
    }>;
    technologies: string[];
  };
}

export default function IndustryTemplate({ data }: IndustryTemplateProps) {
  const { hero, solutions, benefits, technologies } = data;
  const BadgeIcon = getIcon(hero.badge.icon);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-20">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${hero.gradient} bg-opacity-10 rounded-full text-sm font-medium mb-6`}
              >
                <BadgeIcon className="w-4 h-4" />
                <span>{hero.badge.text}</span>
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {hero.title}{' '}
                <span className={`bg-gradient-to-r ${hero.gradient} bg-clip-text text-transparent`}>
                  {hero.highlightedTitle}
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r ${hero.gradient} text-white rounded-lg font-semibold hover:shadow-xl transition-all`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="#solutions"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-gray-200"
                >
                  View Solutions
                </Link>
              </div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              {hero.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow border border-gray-100"
                >
                  <div className={`text-4xl font-bold bg-gradient-to-r ${hero.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 lg:py-32 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our{' '}
              <span className={`bg-gradient-to-r ${hero.gradient} bg-clip-text text-transparent`}>
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions tailored for your industry needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = getIcon(solution.icon);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose{' '}
              <span className={`bg-gradient-to-r ${hero.gradient} bg-clip-text text-transparent`}>
                Inzint
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${hero.gradient} bg-clip-text text-transparent mb-3`}>
                  {benefit.metric}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Technologies We Use</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-gray-50 to-blue-50 text-gray-800 rounded-lg font-medium border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`bg-gradient-to-r ${hero.gradient} rounded-2xl p-8 lg:p-12 text-center text-white`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how our solutions can drive growth and innovation for your business
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
