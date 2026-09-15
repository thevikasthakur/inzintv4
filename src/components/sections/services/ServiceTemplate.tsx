'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { getIcon } from '@/lib/icons';
import type { ServicePageData } from '@/data/services';

const BOOKING_URL =
  'https://outlook.office.com/bookwithme/user/dca57ea980d34c5ba4dd0dac1c5617f7%40inzint.com?anonymous&ismsaljsauthenabled=true';

export default function ServiceTemplate({ data }: { data: ServicePageData }) {
  const { hero, offerings, approach, technologies, related, engagement } = data;
  const BadgeIcon = getIcon(hero.badge.icon);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-20">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${hero.gradient} text-white rounded-full text-sm font-medium mb-6`}
              >
                <BadgeIcon className="w-4 h-4" />
                <span>{hero.badge.text}</span>
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
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
                  href={BOOKING_URL}
                  target="_blank"
                  className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r ${hero.gradient} text-white rounded-lg font-semibold hover:shadow-xl transition-all`}
                >
                  Book a Discovery Call
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="#included"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-300 rounded-lg font-semibold hover:border-gray-400 transition-all"
                >
                  What&apos;s Included
                </Link>
              </div>
            </motion.div>

            {/* Facts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {hero.facts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`text-3xl font-bold bg-gradient-to-r ${hero.gradient} bg-clip-text text-transparent mb-2`}>
                    {fact.value}
                  </div>
                  <div className="text-gray-600 text-sm">{fact.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section id="included" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What&apos;s included
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The work we take on under this service, and what each part covers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => {
              const Icon = getIcon(offering.icon);
              return (
                <motion.div
                  key={offering.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl transition-all"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${hero.gradient} mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{offering.title}</h3>
                  <p className="text-gray-600 mb-6">{offering.description}</p>
                  <ul className="space-y-3">
                    {offering.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How we work on it */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              How we work on it
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The habits that keep this kind of work predictable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {approach.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technologies we use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The tools this work is usually built with. We keep the stack small on purpose.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {technologies.map((tech) => (
              <div
                key={tech}
                className="px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full text-gray-800 font-medium border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Related work */}
      {related && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-lg"
            >
              <div className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3">
                {related.eyebrow}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{related.title}</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl">{related.summary}</p>
              <Link
                href={related.href}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
              >
                {related.cta}
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Engagement models */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ways to engage</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every engagement starts with a free 30-minute discovery call. The quote follows the call.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {engagement.map((model) => (
              <div key={model.title} className="rounded-2xl border border-gray-200 p-6 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{model.title}</h3>
                <p className="text-gray-600">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to talk it through?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Thirty minutes with a founder. You leave with a clear next step, whether or not that step is us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={BOOKING_URL}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-xl transition-all"
              >
                Book a Discovery Call
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
              >
                Send a Message
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
