'use client';

import { motion } from 'framer-motion';
import { MessageSquare, FileText, Rocket, Repeat } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Discovery call',
    description: 'Thirty minutes on your roadmap, stack and constraints, with a founder.',
    duration: '30 minutes',
  },
  {
    icon: FileText,
    title: 'Proposal and squad',
    description: 'A written scope, the squad composition and a monthly plan you can compare.',
    duration: 'Written proposal',
  },
  {
    icon: Rocket,
    title: 'Pilot sprint',
    description: 'Two weeks of real work in your repositories, ending in a demo you can judge.',
    duration: '2 weeks',
  },
  {
    icon: Repeat,
    title: 'Monthly squad',
    description: 'Continue on a retainer with weekly demos; scale the squad up or down month to month.',
    duration: 'Month to month',
  },
];

export default function HiringProcessSection() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four steps, and you can stop after the pilot sprint if the fit is not right.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 -translate-x-1/2 z-0" />
              )}

              <div className="relative z-10 bg-white p-6 rounded-2xl shadow-lg h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl mb-4 mx-auto">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-center mb-3">
                  <div className="text-sm text-blue-600 font-semibold mb-1">Step {index + 1}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    {step.duration}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <p className="text-2xl font-bold mb-2">Time to first demo</p>
            <p className="text-5xl font-bold">2 weeks</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
