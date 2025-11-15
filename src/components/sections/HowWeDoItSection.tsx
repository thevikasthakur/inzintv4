'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, CheckCircle, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Users,
    title: "We Listen & Understand",
    description: "First, we dive deep into your vision. No generic templates - we understand your specific needs and business goals.",
    color: "text-primary-500"
  },
  {
    icon: Zap,
    title: "AI-Powered Development",
    description: "We leverage ChatGPT, Claude, Copilot, and other AI tools - but with expert human oversight at every step.",
    color: "text-blue-500"
  },
  {
    icon: CheckCircle,
    title: "Rapid Iteration & Testing",
    description: "Daily deployments, continuous testing, and real-time adjustments. See your app evolve in days, not months.",
    color: "text-green-500"
  },
  {
    icon: Rocket,
    title: "Production-Ready Delivery",
    description: "Clean, documented, scalable code. Not AI-generated spaghetti, but enterprise-grade software that actually works.",
    color: "text-purple-500"
  }
];

export default function HowWeDoItSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            See How We Do It
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine the speed of AI with the expertise of senior developers.
            Here's our battle-tested process that delivers real results.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connection Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="h-[2px] bg-gradient-to-r from-gray-300 to-gray-200"
                    style={{ transformOrigin: 'left center' }}
                  >
                    <ArrowRight className="absolute -right-4 -top-3 w-5 h-5 text-gray-400" />
                  </motion.div>
                </div>
              )}

              {/* Step Card */}
              <div className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-50 mb-4 ${step.color}`}
                >
                  <step.icon className="w-6 h-6" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors transform hover:scale-105 transition-transform">
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="mt-4 text-gray-600">
            Ready to build something amazing? Let's talk.
          </p>
        </motion.div>
      </div>
    </section>
  );
}