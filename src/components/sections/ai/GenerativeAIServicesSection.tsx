'use client';

import { motion } from 'framer-motion';
import { Bot, MessageSquare, Brain, Sparkles, Code, Cpu, Database, Zap } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'GPT Integration',
    description: 'Seamlessly integrate GPT-4, GPT-3.5, and other OpenAI models into your applications',
    features: ['API Integration', 'Custom Prompts', 'Response Optimization', 'Cost Management'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Brain,
    title: 'Custom LLM Development',
    description: 'Build and fine-tune custom large language models tailored to your business needs',
    features: ['Model Training', 'Fine-tuning', 'Domain Expertise', 'Performance Optimization'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Bot,
    title: 'AI Chatbot Development',
    description: 'Create intelligent chatbots and virtual assistants powered by generative AI',
    features: ['Natural Conversations', 'Multi-language Support', 'Context Awareness', '24/7 Availability'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MessageSquare,
    title: 'Content Generation',
    description: 'Automate content creation with AI-powered writing and generation tools',
    features: ['Article Writing', 'Product Descriptions', 'Email Templates', 'Social Media Posts'],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Code,
    title: 'Code Generation AI',
    description: 'Accelerate development with AI-powered code generation and assistance',
    features: ['Code Completion', 'Bug Detection', 'Documentation', 'Code Review'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Database,
    title: 'AI Data Analysis',
    description: 'Extract insights from data using generative AI and natural language queries',
    features: ['Data Querying', 'Insight Generation', 'Report Automation', 'Visualization'],
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Cpu,
    title: 'AI Model Deployment',
    description: 'Deploy and scale your AI models with enterprise-grade infrastructure',
    features: ['Cloud Deployment', 'Auto-scaling', 'Monitoring', 'Security'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Zap,
    title: 'AI Workflow Automation',
    description: 'Streamline business processes with intelligent AI-powered automation',
    features: ['Process Automation', 'Task Orchestration', 'Integration Hub', 'Analytics'],
    color: 'from-yellow-500 to-orange-500',
  },
];

export default function GenerativeAIServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Generative AI{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive generative AI development services to transform your business with cutting-edge technology
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300"
          >
            Start Your AI Project
            <Sparkles className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
