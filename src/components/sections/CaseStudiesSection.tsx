'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, BookOpenText, Database, Star } from 'lucide-react';

const caseStudies = [
  {
    company: 'La Cuisine de Bernard',
    industry: 'Digital publishing',
    title: 'From WordPress gridlock to an AI-readable publishing platform',
    description:
      'How Inzint preserved more than a decade of culinary publishing while rebuilding the platform with Next.js, Payload CMS and MongoDB.',
    href: '/case-studies/la-cuisine-de-bernard-wordpress-nextjs-payload-mongodb-migration',
    metrics: [
      { icon: BookOpenText, value: '1,300+', label: 'Recipes' },
      { icon: Database, value: '2 GB', label: 'Legacy data' },
      { icon: Star, value: '5.0', label: 'Client rating' },
    ],
  },
];

export default function CaseStudiesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Case Studies</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">Success stories from our clients.</p>
        </motion.div>
        <div className="mx-auto max-w-5xl" ref={ref}>
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.company}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
            >
              <Link href={study.href} className="group block p-8 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                    {study.industry}
                  </span>
                  <ArrowUpRight className="h-6 w-6 text-gray-400 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600" />
                </div>
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-gray-500">
                  {study.company}
                </p>
                <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl">
                  {study.title}
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">{study.description}</p>
                <div className="mt-9 grid grid-cols-3 gap-4 border-t border-gray-200 pt-7">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <metric.icon className="mb-2 h-5 w-5 text-blue-600" />
                      <div className="text-xl font-bold text-gray-950 sm:text-2xl">{metric.value}</div>
                      <div className="mt-1 text-xs text-gray-500 sm:text-sm">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
