'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 1,
    category: 'General',
    question: 'What services does Inzint offer?',
    answer: 'We offer AI-driven software development including AI rapid prototypes, AI MVP development, AI voice bots (VoxReception), full privacy chatbots, web/mobile MVP development, custom ERP/CRM systems, and cloud/DevOps services. Our end-to-end services cover everything from strategy and consulting to development, deployment, and ongoing support.',
  },
  {
    id: 2,
    category: 'General',
    question: 'How long does it take to develop a mobile app?',
    answer: 'The timeline varies based on complexity and requirements. A simple app typically takes 3-4 months, while more complex applications with advanced features may take 6-12 months. We provide detailed project timelines during the initial consultation phase and keep you updated throughout the development process.',
  },
  {
    id: 3,
    category: 'Pricing',
    question: 'What is the cost of developing an app?',
    answer: 'Project costs depend on various factors including complexity, features, platforms, design requirements, and timeline. We offer flexible pricing models including fixed price, time & material, and dedicated team models. Contact us for a detailed quote tailored to your specific requirements.',
  },
  {
    id: 4,
    category: 'Process',
    question: 'What is your development process?',
    answer: 'We follow an agile development methodology with regular sprints and milestone deliveries. Our process includes: Discovery & Planning, UI/UX Design, Development, Quality Assurance, Deployment, and Post-Launch Support. We maintain transparent communication throughout with regular updates and demos.',
  },
  {
    id: 5,
    category: 'Technology',
    question: 'Which technologies do you specialize in?',
    answer: 'We have expertise across a wide range of technologies including React Native, Flutter, Swift, Kotlin for mobile; React, Angular, Vue.js for web; Python, Node.js, Java for backend; AWS, Azure, Google Cloud for infrastructure; and emerging technologies like AI/ML, Blockchain, and IoT.',
  },
  {
    id: 6,
    category: 'Support',
    question: 'Do you provide post-launch support?',
    answer: 'Yes, we provide comprehensive post-launch support including bug fixes, performance monitoring, feature updates, and maintenance. We offer flexible support packages tailored to your needs, ensuring your application stays up-to-date and performs optimally.',
  },
  {
    id: 7,
    category: 'Security',
    question: 'How do you ensure data security?',
    answer: 'Security is our top priority. We follow industry best practices including data encryption, secure APIs, regular security audits, compliance with regulations (GDPR, HIPAA, etc.), and secure coding standards. We also implement multi-factor authentication and regular penetration testing.',
  },
  {
    id: 8,
    category: 'Process',
    question: 'Can you help with app store submissions?',
    answer: 'Absolutely! We handle the complete app store submission process for both Apple App Store and Google Play Store. This includes preparing all required assets, meeting store guidelines, managing the submission process, and addressing any review feedback to ensure successful publication.',
  },
];

const categories = ['All', 'General', 'Pricing', 'Process', 'Technology', 'Support', 'Security'];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFaqs = activeCategory === 'All'
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4"
          >
            FAQS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Find answers to common questions about our services, process, and pricing
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-6 flex items-start justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={openId === faq.id}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-xs font-semibold">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full">
                    {openId === faq.id ? (
                      <Minus className="w-5 h-5 text-primary-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-primary-600" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-3xl p-8 lg:p-12 text-white text-center"
        >
          <HelpCircle className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Our team is here to help! Get in touch with us for personalized answers to your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg">
              Contact Support
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/20 hover:bg-white/20 transition-all">
              Schedule a Call
            </button>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { value: '24/7', label: 'Support Available' },
            { value: '<2hr', label: 'Response Time' },
            { value: '99%', label: 'Issue Resolution' },
            { value: '1000+', label: 'Happy Clients' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gray-50 rounded-2xl"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
