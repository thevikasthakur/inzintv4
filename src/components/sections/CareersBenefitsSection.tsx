'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Users,
  Zap,
  Code,
  FileText,
  Shield,
  CheckCircle,
  MessageSquare,
  GitBranch,
} from 'lucide-react';

// Taken from how client projects actually run (company.ts: deliveryModel,
// proofPoints.culture, communicationCadence, qualityBars).
const practices = [
  {
    title: 'Founder-led engagement',
    description: 'You work directly with the founders and the client, with direct access to the people making decisions.',
    icon: Users,
  },
  {
    title: 'Small senior squads',
    description: 'Teams of three to five engineers who own a product from discovery to production.',
    icon: GitBranch,
  },
  {
    title: 'Weekly demos',
    description: 'Agile sprints with a live demo or recorded update every week, so progress is visible and feedback is early.',
    icon: Zap,
  },
  {
    title: 'CI and tests from day one',
    description: 'Design-to-code pipelines, test coverage and continuous integration are set up in the first sprint, not retrofitted.',
    icon: Code,
  },
  {
    title: 'Documentation as an artifact',
    description: 'Architecture decision records, runbooks and onboarding guides are deliverables, written as the work happens.',
    icon: FileText,
  },
  {
    title: 'Documented standards',
    description: 'Coding, Git, environment and QA-gate standards are written down and reviewed, so quality does not depend on memory.',
    icon: Shield,
  },
  {
    title: 'Deterministic tests where it matters',
    description: 'Money flows and edge cases get deterministic tests; performance and error budgets are tracked, not guessed.',
    icon: CheckCircle,
  },
  {
    title: 'Clear communication',
    description: 'English-only professional communication, issue tracking, and minutes after every client meeting.',
    icon: MessageSquare,
  },
];

export default function CareersBenefitsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What a week at Inzint actually looks like, taken from the way we run client projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practices.map((practice, index) => (
            <motion.div
              key={practice.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                <practice.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {practice.title}
              </h3>
              <p className="text-gray-600">
                {practice.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
