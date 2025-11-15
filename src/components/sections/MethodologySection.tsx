'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GitBranch, MessageSquare, Shield, Zap, FileText, Users2 } from 'lucide-react';
import Link from 'next/link';

const practices = [
  {
    title: 'Agile Development',
    description: '2-week sprints with daily standups, sprint planning, and retrospectives to ensure continuous improvement.',
    icon: Zap,
  },
  {
    title: 'Code Reviews',
    description: 'Every line of code is peer-reviewed to maintain quality standards and share knowledge across the team.',
    icon: GitBranch,
  },
  {
    title: 'Clear Communication',
    description: 'Regular updates via Slack, weekly demos, and transparent project tracking through Jira or Linear.',
    icon: MessageSquare,
  },
  {
    title: 'Security First',
    description: 'Security audits, penetration testing, and compliance checks are built into every phase of development.',
    icon: Shield,
  },
  {
    title: 'Documented Decisions',
    description: 'All architectural and technical decisions are documented for future reference and team alignment.',
    icon: FileText,
  },
  {
    title: 'Small Senior Squads',
    description: 'Dedicated teams of 3-5 senior engineers who own the project from start to finish.',
    icon: Users2,
  },
];

export default function MethodologySection() {
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
            Our Engineering Culture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Best practices that ensure quality, efficiency, and scalability in every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {practices.map((practice, index) => (
            <motion.div
              key={practice.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                <practice.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {practice.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {practice.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Work With Us?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project and see how our process can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
