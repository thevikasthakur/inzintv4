'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 1,
    category: 'General',
    question: 'What does Inzint build?',
    answer: 'Production software for companies that need it to work on day one: AI voice and chat systems (including our own VoxReception receptionist), web applications in Next.js and React, React Native mobile apps, Node.js and NestJS backends, AWS serverless infrastructure and the data pipelines behind them. We also take over live platforms that have become hard to change.',
  },
  {
    id: 2,
    category: 'Process',
    question: 'How does an engagement start?',
    answer: 'With a 30-minute discovery call. From there we send a scoped proposal and, for most new clients, propose a two-week pilot sprint so you can judge the working relationship on real output before committing to a longer plan. Every engagement runs on weekly demos or recorded updates.',
  },
  {
    id: 3,
    category: 'Process',
    question: 'How long does a first release take?',
    answer: 'A rapid prototype takes about two weeks. A standard MVP with authentication, a backend and deployment takes four to six weeks. Larger first releases with payments, roles and reporting take eight to twelve weeks. Anything bigger is broken into milestones during discovery so you always know what ships next.',
  },
  {
    id: 4,
    category: 'Pricing',
    question: 'How do you price work?',
    answer: 'Three ways: fixed-scope builds quoted per milestone and billed on acceptance, monthly product squads on a retainer you can scale up or down, and short architecture or audit engagements at a fixed fee. You receive the quote after the discovery call; the call itself is free.',
  },
  {
    id: 5,
    category: 'Technology',
    question: 'Which technologies do you work with?',
    answer: 'Next.js, React and TypeScript on the web; React Native for iOS and Android; Node.js, NestJS, PostgreSQL and Redis for backends; AWS Lambda, API Gateway, S3 and CloudFront with infrastructure as code; Payload CMS and MongoDB for content platforms; and LLM, retrieval (RAG) and real-time voice tooling for AI features. We keep the stack small on purpose.',
  },
  {
    id: 6,
    category: 'Security',
    question: 'How do you handle our data and AI privacy?',
    answer: 'Data is encrypted in transit and at rest, access is role-based and logged, and we never use customer data to train AI models without written consent. VoxReception call recordings stay on servers in India. Credentials you share for integrations are stored securely and deleted when the project ends. The full detail is in our privacy policy.',
  },
  {
    id: 7,
    category: 'Support',
    question: 'What happens after launch?',
    answer: 'Every development project carries a 30-day warranty during which we fix defects at no cost. After that, most clients move to a monthly maintenance or squad retainer. Support requests are acknowledged within two to four hours for critical issues and within one business day for routine ones, during business hours, as published on our support page.',
  },
  {
    id: 8,
    category: 'Process',
    question: 'Can you take over an existing product or codebase?',
    answer: 'Yes, and it is some of the work we document best. We joined Thotis IA, a live multi-vendor AI education platform, and re-architected its data, personas and quality systems without stopping releases. We moved La Cuisine de Bernard off a decade-old WordPress installation with near-zero downtime. Both usually start with a short architecture and audit engagement.',
  },
  {
    id: 9,
    category: 'General',
    question: 'Where are you based and how do we work together?',
    answer: 'Headquarters in Noida, India, an office in Muscat, Oman, and a presence in the US. Communication is in English, in writing, with minutes after every meeting and a weekly live demo or recorded walkthrough, so time zones are a scheduling detail rather than a risk.',
  },
];

const categories = ['All', 'General', 'Process', 'Pricing', 'Technology', 'Security', 'Support'];

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
            Straight answers about how we work, what we build, what it costs and what happens after launch
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
            Ask us directly. A founder replies within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center">
              Contact Support
            </Link>
            <Link href="https://outlook.office.com/bookwithme/user/dca57ea980d34c5ba4dd0dac1c5617f7%40inzint.com?anonymous&ismsaljsauthenabled=true" target="_blank" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/20 hover:bg-white/20 transition-all flex items-center justify-center">
              Schedule a Call
            </Link>
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
            { value: '1 day', label: 'Reply to every inquiry (business days)' },
            { value: '2–4 h', label: 'Critical issues acknowledged' },
            { value: '30 days', label: 'Warranty after delivery' },
            { value: 'Weekly', label: 'Demos during delivery' },
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
