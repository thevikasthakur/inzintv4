'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { company } from '@/data/company';

// Every figure here is verifiable: company profile (founded, Upwork record),
// the TALEER video testimonial and the La Cuisine de Bernard case study.
const proofPoints = [
  {
    value: '2020',
    label: 'Founded',
    detail: 'Founder-led and engineering-first from day one',
  },
  {
    value: '34',
    label: 'Upwork contracts',
    detail: '11,600+ hours and $100K+ earned on the platform',
  },
  {
    value: '3',
    label: 'Products with one client',
    detail: 'Built for TALEER LLC over 2.5 years',
  },
  {
    value: '5.0',
    label: 'Client rating',
    detail: 'La Cuisine de Bernard platform rebuild',
  },
];

export default function PartnersSection() {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4"
          >
            CLIENTS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Built with teams who came back
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Every name below is a real engagement. Two are written up as full case studies,
            one recorded a video testimonial, and two are live in our featured work.
          </motion.p>
        </div>

        {/* Proof points */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {proofPoints.map((point, index) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                {point.value}
              </div>
              <div className="font-semibold text-gray-900 mb-1">{point.label}</div>
              <div className="text-sm text-gray-600">{point.detail}</div>
            </motion.div>
          ))}
        </div>

        {/* Clients */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Clients we have shipped for
            </h3>
            <p className="text-gray-600">
              Publishing, education, wellness, sports and multi-product partnerships across India,
              the Gulf and Europe.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {company.clients.map((client, index) => {
              const cardClasses =
                'h-full bg-white rounded-xl border border-gray-200 p-5 flex flex-col hover:border-primary-300 hover:shadow-lg transition-all group';
              const content = (
                <>
                  <div className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {client.name}
                  </div>
                  <div className="text-sm text-gray-500 mt-1 flex-1">{client.sector}</div>
                  {'href' in client && client.href && (
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-600">
                      Read the case study
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  )}
                </>
              );

              return (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  {'href' in client && client.href ? (
                    <Link href={client.href} className={cardClasses}>
                      {content}
                    </Link>
                  ) : (
                    <div className={cardClasses}>{content}</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Upwork figures as of October 2025. Ratings and quotes come from the published case
          studies and testimonial.
        </p>
      </div>
    </section>
  );
}
