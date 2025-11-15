'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Lightbulb, Code, Rocket, TrendingUp, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals, challenges, and requirements through detailed workshops and research.',
    icon: Search,
    deliverables: ['Requirements document', 'Project roadmap', 'Technical architecture'],
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description: 'Our design team creates intuitive user experiences and interactive prototypes for validation before development.',
    icon: Lightbulb,
    deliverables: ['UI/UX designs', 'Interactive prototype', 'Design system'],
  },
  {
    number: '03',
    title: 'Development',
    description: 'Our engineers build your solution using agile sprints, with regular demos and iterative feedback loops.',
    icon: Code,
    deliverables: ['Clean, tested code', 'Weekly demos', 'Sprint reports'],
  },
  {
    number: '04',
    title: 'Testing & QA',
    description: 'Rigorous testing ensures your product is bug-free, performant, and ready for production deployment.',
    icon: CheckCircle,
    deliverables: ['Test reports', 'Performance metrics', 'Security audit'],
  },
  {
    number: '05',
    title: 'Launch',
    description: 'We handle deployment, monitoring, and ensure a smooth go-live with minimal downtime and maximum impact.',
    icon: Rocket,
    deliverables: ['Production deployment', 'Monitoring setup', 'Documentation'],
  },
  {
    number: '06',
    title: 'Support & Scale',
    description: 'Post-launch, we provide ongoing maintenance, feature enhancements, and scaling as your business grows.',
    icon: TrendingUp,
    deliverables: ['24/7 monitoring', 'Bug fixes', 'Feature updates'],
  },
];

export default function ProcessSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Development Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven, iterative approach that ensures quality, transparency, and timely delivery.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="text-7xl font-bold text-blue-100">
                        {step.number}
                      </div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        Key Deliverables:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable) => (
                          <span
                            key={deliverable}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-[52px] top-full w-0.5 h-8 bg-gradient-to-b from-blue-300 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
