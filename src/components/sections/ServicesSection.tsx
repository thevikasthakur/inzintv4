'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Brain,
  Globe,
  Smartphone,
  Server,
  Rocket,
  Cloud,
  Database,
  Target,
  ArrowRight,
} from 'lucide-react';

// The offering below mirrors company.ts → services. Every href is an existing route.
const services = [
  {
    id: 1,
    icon: Brain,
    title: 'AI & LLM Integration',
    description:
      'Voice bots, retrieval-augmented chatbots and LLM features that run in production, with data residency and evaluation built in.',
    features: [
      'Bilingual voice reception (VoxReception)',
      'RAG chatbots on your own data',
      'LLM workflow automation',
      'Speech to text and text to speech',
    ],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    href: '/inzint-ai/ai-tech-solutions/generative-ai-development-company',
  },
  {
    id: 2,
    icon: Globe,
    title: 'Web Development',
    description:
      'Next.js and React applications with headless CMS, static generation and performance budgets that hold after launch.',
    features: [
      'Next.js, React, TypeScript',
      'Payload and headless CMS',
      'Multilingual publishing',
      'SEO and Core Web Vitals',
    ],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    href: '/services/product-development/web-development',
  },
  {
    id: 3,
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'React Native apps for iOS and Android from one codebase, shipped to both stores.',
    features: [
      'React Native',
      'iOS and Android',
      'Push notifications and payments',
      'App store submission',
    ],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    href: '/services/product-development/mobile-app-development',
  },
  {
    id: 4,
    icon: Server,
    title: 'Backend & APIs',
    description:
      'Node.js and NestJS services on PostgreSQL, designed around auth, queues and third-party integrations.',
    features: [
      'Node.js, NestJS, TypeORM',
      'PostgreSQL and Redis',
      'REST and GraphQL APIs',
      'CRM, payment and telephony integrations',
    ],
    color: 'from-orange-500 to-yellow-500',
    bgColor: 'bg-orange-50',
    href: '/services/product-development/web-development/backend',
  },
  {
    id: 5,
    icon: Rocket,
    title: 'MVP Development',
    description:
      'Validate an idea in two to twelve weeks with a scoped, production-ready first release.',
    features: [
      'Rapid prototype in 2 weeks',
      'Standard MVP in 4 to 6 weeks',
      'Weekly demos',
      'Handover documentation',
    ],
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-50',
    href: '/services/product-development/mvp-development',
  },
  {
    id: 6,
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'AWS serverless backends with infrastructure as code and CI/CD from the first sprint.',
    features: [
      'Lambda, API Gateway, S3, CloudFront',
      'Infrastructure as code (CDK, Serverless)',
      'CI/CD pipelines',
      'Monitoring and cost control',
    ],
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50',
    href: '/services/digital-transformation/cloud-services',
  },
  {
    id: 7,
    icon: Database,
    title: 'Data Engineering',
    description:
      'ETL pipelines, warehouses and dashboards that turn operational data into decisions.',
    features: [
      'ETL and data migration',
      'Legacy data decoding',
      'Warehouses and reporting',
      'Dashboards',
    ],
    color: 'from-gray-700 to-gray-900',
    bgColor: 'bg-gray-50',
    href: '/services/data-services/data-engineering',
  },
  {
    id: 8,
    icon: Target,
    title: 'Product Strategy',
    description:
      'Discovery workshops, roadmaps and success metrics before a line of code is written.',
    features: [
      'Discovery workshops',
      'Roadmaps and scoping',
      'Success metrics',
      'Architecture and audit engagements',
    ],
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
    href: '/services/consulting/product-strategy',
  },
];

interface ServicesSectionProps {
  /** Hide the "See all services" button on the services index itself. */
  showAllLink?: boolean;
}

export default function ServicesSection({ showAllLink = true }: ServicesSectionProps) {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4"
          >
            WHAT WE BUILD
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            AI-driven software, built end to end
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Product strategy, web and mobile apps, AI and voice systems, cloud backends and the
            data behind them. Small senior squads, weekly demos, measurable outcomes.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
                {/* Icon */}
                <div className={`inline-flex self-start p-3 rounded-xl ${service.bgColor} mb-4 group-hover:scale-110 transition-transform`}>
                  <div className={`bg-gradient-to-br ${service.color} bg-clip-text`}>
                    <service.icon className="w-8 h-8 text-transparent" style={{
                      WebkitTextFillColor: 'transparent',
                      backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                      backgroundClip: 'text',
                    }} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-2 flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={service.href} className="inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            {showAllLink && (
              <Link href="/services" className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-semibold transition-all duration-300 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 flex items-center justify-center">
                See All Services
              </Link>
            )}
            <Link href="https://outlook.office.com/bookwithme/user/dca57ea980d34c5ba4dd0dac1c5617f7%40inzint.com?anonymous&ismsaljsauthenabled=true" target="_blank" className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all flex items-center justify-center">
              Schedule a Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
