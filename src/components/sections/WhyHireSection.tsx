'use client';

import { motion } from 'framer-motion';
import { Users, Layers, GitBranch, FileText, Shield, Globe } from 'lucide-react';

// Drawn from company.ts: deliveryModel, proofPoints.culture, qualityBars, communicationCadence.
const benefits = [
  {
    icon: Users,
    title: 'Founder-led',
    description: 'A founder is in the discovery call, the weekly demo and the code review. Decisions do not wait on an account manager.',
  },
  {
    icon: Layers,
    title: 'Small senior squads',
    description: 'Three to five engineers who own the product end to end, rather than a rotating bench of individual contributors.',
  },
  {
    icon: GitBranch,
    title: 'Your repositories, no lock-in',
    description: 'We work in your GitHub or GitLab with your CI. If we part ways, you keep everything, documented.',
  },
  {
    icon: FileText,
    title: 'Documented decisions',
    description: 'Architecture decision records, runbooks and onboarding guides are deliverables, written while the work happens.',
  },
  {
    icon: Shield,
    title: 'Quality gates from sprint one',
    description: 'Test coverage, CI and deterministic tests for money and edge cases are set up before features, not after incidents.',
  },
  {
    icon: Globe,
    title: 'Overlap with your hours',
    description: 'Teams in Noida and Muscat with a US presence, English-only written communication and minutes after every meeting.',
  },
];

export default function WhyHireSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why a squad instead of a staffing list</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You are not renting seats. You are adding a team that already knows how to ship together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-4">
                <benefit.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '2020', label: 'Founded' },
            { value: '3', label: 'Offices: Noida, Muscat, US' },
            { value: '34', label: 'Upwork contracts, 11,600+ hours' },
            { value: '2.5 yrs', label: 'Longest continuing client partnership' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
