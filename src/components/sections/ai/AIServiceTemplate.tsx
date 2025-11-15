'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { getIcon } from '@/lib/icons';

interface AIServiceTemplateProps {
  data: {
    hero: {
      badge: { icon: string; text: string };
      title: string;
      highlightedTitle: string;
      description: string;
      benefits: string[];
      ctaText: string;
      gradient: string;
    };
    services: Array<{
      icon: string;
      title: string;
      description: string;
      features: string[];
      color: string;
    }>;
    useCases: Array<{
      title: string;
      description: string;
      results: string[];
    }>;
  };
}

export default function AIServiceTemplate({ data }: AIServiceTemplateProps) {
  const { hero, services, useCases } = data;
  const BadgeIcon = getIcon(hero.badge.icon);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-20">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
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

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {hero.description}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8 max-w-3xl mx-auto">
              {hero.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 justify-center sm:justify-start"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${hero.gradient} text-white rounded-lg font-semibold hover:shadow-xl transition-all`}
            >
              {hero.ctaText}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-white">
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
                Services
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = getIcon(service.icon);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
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

      {/* Use Cases Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Use{' '}
              <span className={`bg-gradient-to-r ${hero.gradient} bg-clip-text text-transparent`}>
                Cases
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div className="space-y-2 pt-6 border-t border-gray-100">
                  {useCase.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${hero.gradient}`} />
                      <span className="text-sm text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`bg-gradient-to-r ${hero.gradient} rounded-2xl p-8 lg:p-12 text-center text-white`}
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how we can help you integrate AI into your business
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
