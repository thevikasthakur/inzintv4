'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Target, TrendingUp } from 'lucide-react';

const milestones = [
  {
    year: '2020',
    title: 'Founded',
    description: 'Inzint was established with a vision to build engineering-first software solutions.',
    icon: Rocket,
  },
  {
    year: '2022',
    title: 'AI Focus',
    description: 'Expanded into AI and machine learning, developing voice bots and intelligent systems.',
    icon: Target,
  },
  {
    year: '2025',
    title: 'Global Reach',
    description: 'Serving clients worldwide with a team of senior engineers and proven methodologies.',
    icon: TrendingUp,
  },
];

export default function AboutStorySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            ref={ref}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Journey
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                Founded in 2020, Inzint emerged from a simple belief: great software starts with great engineering.
                We're a founder-led team that values documented decisions, measurable outcomes, and technical excellence.
              </p>
              <p>
                From rapid prototypes to enterprise-scale solutions, we've built AI voice systems, high-performance
                web and mobile applications, and cloud backends that scale. Our small senior squads ensure every
                line of code meets production standards.
              </p>
              <p>
                Today, we serve clients across industries—from healthcare and logistics to fintech and e-commerce—
                helping them leverage cutting-edge technology to solve real business problems.
              </p>
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <milestone.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-blue-600 mb-1">
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
