'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import {
  Globe,
  Smartphone,
  Server,
  Cloud,
  Brain,
  Shield,
  ArrowRight,
} from 'lucide-react';

// Mirrors company.ts → techStack. One deliberate stack, not a catalogue of logos.
const technologies = [
  {
    id: 1,
    icon: Globe,
    title: 'Frontend',
    description: 'Server-rendered and statically generated web apps with performance budgets that hold after launch.',
    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    bgColor: 'bg-blue-50',
  },
  {
    id: 2,
    icon: Smartphone,
    title: 'Mobile',
    description: 'One codebase for iOS and Android, shipped to both stores and backed by the same services as the web.',
    tools: ['React Native', 'iOS', 'Android', 'Push notifications'],
    bgColor: 'bg-green-50',
  },
  {
    id: 3,
    icon: Server,
    title: 'Backend',
    description: 'Typed services with queues, auth and integrations designed in from the start.',
    tools: ['Node.js', 'NestJS', 'TypeORM', 'PostgreSQL', 'Redis', 'BullMQ'],
    bgColor: 'bg-orange-50',
  },
  {
    id: 4,
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'AWS serverless backends defined in code and deployed through CI/CD from the first sprint.',
    tools: ['AWS Lambda', 'API Gateway', 'S3', 'CloudFront', 'CDK / Serverless', 'CI/CD'],
    bgColor: 'bg-sky-50',
  },
  {
    id: 5,
    icon: Brain,
    title: 'Data & AI',
    description: 'LLM features, retrieval over your own data, real-time voice and the pipelines that feed them.',
    tools: ['LLMs & RAG', 'LiveKit voice', 'ETL pipelines', 'Payload CMS', 'MongoDB', 'Analytics'],
    bgColor: 'bg-purple-50',
  },
  {
    id: 6,
    icon: Shield,
    title: 'Tooling & quality',
    description: 'Monorepos, tests and observability so a change in one place cannot quietly break another.',
    tools: ['Turborepo', 'Jest', 'Playwright', 'Observability', 'ADRs'],
    bgColor: 'bg-gray-50',
  },
];

export default function TechnologiesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={containerRef} className="py-20 lg:py-32 bg-gray-50 relative">
      <div className="container">
        {/* Sticky Header */}
        <div className="sticky top-20 z-10 mb-16 bg-gray-50/80 backdrop-blur-sm py-8 -mx-4 px-4">
          <div className="text-center">
            <motion.span
              style={{ opacity, scale }}
              className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4"
            >
              OUR STACK
            </motion.span>
            <motion.h2
              style={{ opacity, scale }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              The stack we actually ship with
            </motion.h2>
            <motion.p
              style={{ opacity, scale }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              One stack, chosen deliberately, so every project benefits from what the last one taught us.
            </motion.p>
          </div>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl ${tech.bgColor} mb-4 group-hover:scale-110 transition-transform`}>
                  <tech.icon className="w-8 h-8 text-primary-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {tech.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {tech.description}
                </p>

                {/* Tools */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Tools & Frameworks
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Not sure which stack fits your product?
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Bring the problem, not the shopping list. We will recommend the smallest stack that
                does the job, and write down why.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm">30-minute discovery call</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm">Architecture decision records</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm">Your repositories, no lock-in</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link href="https://outlook.office.com/bookwithme/user/dca57ea980d34c5ba4dd0dac1c5617f7%40inzint.com?anonymous&ismsaljsauthenabled=true" target="_blank" className="group px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center gap-2">
                Discuss Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/20 hover:bg-white/20 transition-all flex items-center justify-center">
                See What We Build
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
