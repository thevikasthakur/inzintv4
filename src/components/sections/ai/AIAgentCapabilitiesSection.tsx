'use client';

import { motion } from 'framer-motion';
import { Brain, Workflow, Database, Shield, Zap, MessageSquare } from 'lucide-react';

const capabilities = [
  {
    icon: Brain,
    title: 'Cognitive Reasoning',
    description: 'Advanced reasoning capabilities for complex decision-making and problem-solving',
    features: ['Chain of Thought', 'Multi-step Planning', 'Context Understanding', 'Learning from Experience'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Automate end-to-end business processes with intelligent orchestration',
    features: ['Process Mining', 'Task Scheduling', 'Dynamic Adaptation', 'Error Handling'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Database,
    title: 'Knowledge Integration',
    description: 'Connect and leverage multiple data sources for informed decisions',
    features: ['Data Aggregation', 'Real-time Updates', 'Multi-source Fusion', 'Knowledge Graphs'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MessageSquare,
    title: 'Natural Communication',
    description: 'Interact naturally through conversation and understand context',
    features: ['NLP Processing', 'Intent Recognition', 'Multi-turn Dialogue', 'Sentiment Analysis'],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Zap,
    title: 'Real-time Execution',
    description: 'Execute tasks instantly with high-performance infrastructure',
    features: ['Low Latency', 'Parallel Processing', 'Auto-scaling', 'Load Balancing'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security with compliance built-in',
    features: ['Data Encryption', 'Access Control', 'Audit Logging', 'GDPR Compliant'],
    color: 'from-pink-500 to-rose-500',
  },
];

export default function AIAgentCapabilitiesSection() {
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
            AI Agent{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive features that power intelligent, autonomous AI agents
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${capability.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${capability.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all">
            Build Your AI Agent
          </a>
        </motion.div>
      </div>
    </section>
  );
}
