'use client';

import { motion } from 'framer-motion';
import { aiAgentDevelopmentContent } from '@/data/ai-agent-development';

export default function AIAgentWorkflowSection() {
  const { howItWorks } = aiAgentDevelopmentContent;

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How the{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              agents work
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Every ticket moves through the same autonomous lifecycle — from the first plan to the docs that close it out.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {howItWorks.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex gap-6 pb-12 last:pb-0"
            >
              {/* Numbered gradient node + connecting rail */}
              <div className="relative flex flex-col items-center">
                <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.step}
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="w-0.5 flex-1 mt-2 bg-gradient-to-b from-indigo-200 to-cyan-200" />
                )}
              </div>

              {/* Step content */}
              <div className="pt-1.5 pb-2">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
