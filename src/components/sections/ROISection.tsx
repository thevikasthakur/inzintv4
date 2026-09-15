'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Database, Layers, Repeat, ArrowRight, ArrowUpRight } from 'lucide-react';

// Outcomes from published case studies and the recorded client testimonial.
// No averages, no projections: every figure appears in the linked source.
const outcomes = [
  {
    id: 1,
    icon: Database,
    client: 'La Cuisine de Bernard',
    value: '1,300+',
    caption: 'recipes preserved through a full platform migration',
    description:
      'A plugin-heavy WordPress archive with a 2 GB legacy export became a Next.js, Payload CMS and MongoDB platform, launched with near-zero downtime.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    stats: [
      { label: 'Legacy data decoded', value: '2 GB' },
      { label: 'Client rating', value: '5.0 / 5' },
    ],
    href: '/case-studies/la-cuisine-de-bernard-wordpress-nextjs-payload-mongodb-migration',
    cta: 'Read the case study',
  },
  {
    id: 2,
    icon: Layers,
    client: 'Thotis IA',
    value: '13 → 4',
    caption: 'separately configured AI agents consolidated into four personas',
    description:
      'A live, multi-vendor education platform re-architected around one persona-led catalogue, with evidence-based data migration, real-time voice and automated QA.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    stats: [
      { label: 'Ordered tool categories', value: '6' },
      { label: 'Delivery window', value: 'Apr–Aug 2026' },
    ],
    href: '/case-studies/thotis-ai-platform-rearchitecture',
    cta: 'Read the case study',
  },
  {
    id: 3,
    icon: Repeat,
    client: 'TALEER LLC',
    value: '3',
    caption: 'products built with one client over 2.5 years',
    description:
      '"We interviewed multiple companies and Inzint were by far the most capable and the most proactive." Two of the three products are still being finalised together.',
    color: 'from-orange-500 to-yellow-500',
    bgColor: 'bg-orange-50',
    stats: [
      { label: 'Working together since', value: '2024' },
      { label: 'Based in', value: 'Sharjah, UAE' },
    ],
    href: '/#client-testimonial-heading',
    cta: 'Watch the testimonial',
  },
];

export default function ROISection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4"
          >
            OUTCOMES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Results from real projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Every number below comes from a published case study or a recorded client testimonial,
            not from an industry average.
          </motion.p>
        </div>

        {/* Outcome Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 flex flex-col">
                {/* Icon */}
                <div className={`inline-flex self-start p-4 rounded-2xl ${outcome.bgColor} mb-6 group-hover:scale-110 transition-transform`}>
                  <outcome.icon className="w-8 h-8 text-primary-600" />
                </div>

                {/* Main Outcome */}
                <div className="mb-4 flex-1">
                  <div className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                    {outcome.client}
                  </div>
                  <div className={`text-5xl lg:text-6xl font-bold bg-gradient-to-r ${outcome.color} bg-clip-text text-transparent mb-2`}>
                    {outcome.value}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {outcome.caption}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {outcome.description}
                  </p>
                </div>

                {/* Supporting facts */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                  {outcome.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={outcome.href}
                  className="mt-6 inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all"
                >
                  {outcome.cta}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Have a system with history?
              </h3>
              <p className="text-lg opacity-90 mb-6 lg:mb-0">
                Legacy content, a live platform that has become hard to change, or an AI prototype
                that needs to become a product. That is the work we document best.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link href="/resources/tools/case-studies" className="group px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center gap-2">
                Read the Case Studies
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="https://outlook.office.com/bookwithme/user/dca57ea980d34c5ba4dd0dac1c5617f7%40inzint.com?anonymous&ismsaljsauthenabled=true" target="_blank" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/20 hover:bg-white/20 transition-all flex items-center justify-center">
                Book a Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
