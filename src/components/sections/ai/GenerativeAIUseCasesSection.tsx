'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Stethoscope, GraduationCap, Building2, Briefcase, DollarSign } from 'lucide-react';

const useCases = [
  {
    icon: ShoppingCart,
    industry: 'E-commerce',
    title: 'AI-Powered Product Recommendations',
    description: 'Personalized shopping experiences with intelligent product suggestions and dynamic content generation',
    results: ['40% increase in conversions', '60% better engagement', '3x ROI improvement'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Stethoscope,
    industry: 'Healthcare',
    title: 'Medical Documentation Assistant',
    description: 'Automated medical note-taking and patient documentation with HIPAA-compliant AI solutions',
    results: ['70% time savings', '99% accuracy rate', 'HIPAA compliant'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: GraduationCap,
    industry: 'Education',
    title: 'Personalized Learning AI',
    description: 'Adaptive learning platforms with AI-generated content and personalized tutoring',
    results: ['50% faster learning', '85% student satisfaction', '2x retention rate'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: DollarSign,
    industry: 'Finance',
    title: 'Intelligent Financial Analysis',
    description: 'AI-powered financial insights, report generation, and investment recommendations',
    results: ['Real-time insights', '90% accuracy', 'Risk reduction'],
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Building2,
    industry: 'Real Estate',
    title: 'Property Description Generator',
    description: 'Automated property listings and virtual tour descriptions powered by AI',
    results: ['10x faster listings', '45% more inquiries', 'Professional quality'],
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Briefcase,
    industry: 'Enterprise',
    title: 'Business Process Automation',
    description: 'Streamline operations with AI-driven document processing and workflow automation',
    results: ['80% cost reduction', '5x productivity', 'Error-free processing'],
    gradient: 'from-pink-500 to-rose-500',
  },
];

export default function GenerativeAIUseCasesSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
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
            Generative AI{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Use Cases
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Real-world applications of generative AI across industries driving measurable business outcomes
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Icon & Industry */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${useCase.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-sm font-semibold bg-gradient-to-r ${useCase.gradient} bg-clip-text text-transparent`}>
                    {useCase.industry}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {useCase.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                {/* Results */}
                <div className="space-y-2 pt-6 border-t border-gray-100">
                  <p className="text-sm font-semibold text-gray-900 mb-3">Key Results:</p>
                  {useCase.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${useCase.gradient}`} />
                      <span className="text-sm text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with Generative AI?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our generative AI solutions can solve your unique business challenges
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
