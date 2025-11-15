'use client';

import { motion } from 'framer-motion';
import { Layers, ShoppingCart, Stethoscope, GraduationCap, DollarSign, Building2, Truck, Film } from 'lucide-react';

const useCases = [
  {
    icon: ShoppingCart,
    industry: 'E-commerce',
    title: 'AI-Powered Personalization',
    challenge: 'Low conversion rates and generic customer experiences',
    solution: 'Implemented AI-driven product recommendations and personalized content',
    results: ['45% increase in conversions', '60% higher engagement', '3x ROI'],
    technologies: ['Recommendation Engines', 'NLP', 'Computer Vision'],
  },
  {
    icon: Stethoscope,
    industry: 'Healthcare',
    title: 'Diagnostic Support System',
    challenge: 'Time-consuming diagnostic processes and physician burnout',
    solution: 'AI-powered diagnostic assistant for medical image analysis',
    results: ['70% faster diagnoses', '95% accuracy rate', '50% cost reduction'],
    technologies: ['Computer Vision', 'Deep Learning', 'Medical AI'],
  },
  {
    icon: GraduationCap,
    industry: 'Education',
    title: 'Adaptive Learning Platform',
    challenge: 'One-size-fits-all education not meeting diverse student needs',
    solution: 'Personalized learning paths powered by AI',
    results: ['85% student satisfaction', '40% better outcomes', '2x engagement'],
    technologies: ['NLP', 'Recommendation Systems', 'Analytics'],
  },
  {
    icon: DollarSign,
    industry: 'Finance',
    title: 'Fraud Detection System',
    challenge: 'Rising fraud losses and slow manual review processes',
    solution: 'Real-time AI fraud detection and prevention',
    results: ['99.5% accuracy', '80% fraud reduction', 'Real-time detection'],
    technologies: ['ML Algorithms', 'Anomaly Detection', 'Pattern Recognition'],
  },
  {
    icon: Building2,
    industry: 'Real Estate',
    title: 'Property Valuation AI',
    challenge: 'Inaccurate property valuations leading to lost deals',
    solution: 'AI-powered property valuation and market analysis',
    results: ['92% valuation accuracy', '10x faster appraisals', 'Better pricing'],
    technologies: ['Regression Models', 'Computer Vision', 'Market Analysis'],
  },
  {
    icon: Truck,
    industry: 'Logistics',
    title: 'Route Optimization',
    challenge: 'High fuel costs and inefficient delivery routes',
    solution: 'AI-driven route optimization and demand forecasting',
    results: ['30% fuel savings', '50% faster deliveries', '95% on-time rate'],
    technologies: ['Optimization Algorithms', 'Predictive Analytics', 'IoT'],
  },
  {
    icon: Film,
    industry: 'Entertainment',
    title: 'Content Recommendation',
    challenge: 'Low user engagement and high churn rates',
    solution: 'Personalized content recommendations using AI',
    results: ['70% longer sessions', '40% churn reduction', '3x engagement'],
    technologies: ['Collaborative Filtering', 'Deep Learning', 'NLP'],
  },
  {
    icon: Building2,
    industry: 'Manufacturing',
    title: 'Predictive Maintenance',
    challenge: 'Unexpected equipment failures causing costly downtime',
    solution: 'AI-powered predictive maintenance system',
    results: ['60% less downtime', '40% cost savings', '95% prediction accuracy'],
    technologies: ['IoT Sensors', 'Time Series Analysis', 'ML Models'],
  },
];

export default function AIUseCasesSection() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white pt-32 pb-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              <Layers className="w-4 h-4" />
              <span>Real-world AI Applications</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">AI Use Cases Across Industries</h1>
            <p className="text-xl text-cyan-100">
              Discover how leading companies leverage AI to solve real business challenges and drive measurable results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-cyan-600">{useCase.industry}</span>
                      <h3 className="text-xl font-bold text-gray-900">{useCase.title}</h3>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Challenge</h4>
                    <p className="text-gray-700">{useCase.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Solution</h4>
                    <p className="text-gray-700">{useCase.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Results</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {useCase.results.map((result, idx) => (
                        <div key={idx} className="text-center p-3 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg">
                          <p className="text-sm font-semibold text-cyan-600">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-center text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Build Your AI Solution?</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how AI can transform your business and drive measurable results
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Schedule a Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
