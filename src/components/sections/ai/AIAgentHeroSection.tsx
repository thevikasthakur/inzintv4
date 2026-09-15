'use client';

import { motion } from 'framer-motion';
import { Bot, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function AIAgentHeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 pt-24 pb-20">
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6"
            >
              <Bot className="w-4 h-4" />
              <span>Autonomous AI Agent Development</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Build Intelligent{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                AI Agents
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Agents that read, decide and act inside your systems, with typed tools, approval steps and an evaluation harness, so autonomy stays within the limits you set.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {['Workflow automation with approvals', 'Tool use over your systems', 'Evaluation before release', 'Runs on your infrastructure'].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg">
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-2">What every agent ships with</h3>
              <p className="text-gray-600 mb-6">
                Autonomy is only useful when it is bounded. These are non-negotiable in our builds.
              </p>
              <ul className="space-y-4">
                {[
                  { title: 'Typed tools with permission checks', detail: 'Every action the agent can take is a typed function with an allow-list.' },
                  { title: 'Human-in-the-loop for consequential actions', detail: 'Payments, deletions and outbound messages wait for approval.' },
                  { title: 'Evaluation harness', detail: 'Prompt and tool changes run against regression cases before release.' },
                  { title: 'Tracing, cost limits and audit logs', detail: 'Every run is traceable and capped, so surprises show up in dashboards, not invoices.' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.detail}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
