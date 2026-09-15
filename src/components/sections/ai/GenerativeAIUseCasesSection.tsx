'use client';

import { motion } from 'framer-motion';
import { Phone, GraduationCap, BookOpen, Building2, Workflow, Sparkles } from 'lucide-react';

// Applications we have built or actively build. Each card lists what the work involves,
// not a promised percentage.
const useCases = [
  {
    icon: Phone,
    industry: 'Hospitality & SMBs',
    title: 'Voice reception (VoxReception)',
    description: 'A bilingual English and Arabic voice agent that answers calls, routes them, books and follows up, so fewer calls are missed.',
    results: ['Telephony integration', 'LLM dialogue with hand-off rules', 'CRM and calendar actions', 'Call data stored in India'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: GraduationCap,
    industry: 'Education',
    title: 'Persona-led AI tutors (Thotis IA)',
    description: 'A live education platform re-architected from 13 separate agents into a persona-led catalogue with real-time voice.',
    results: ['Persona and category catalogue', 'Retrieval over course content', 'LiveKit voice sessions', 'Automated QA suite'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: BookOpen,
    industry: 'Publishing',
    title: 'AI-readable structured content (La Cuisine de Bernard)',
    description: 'Years of recipes remodelled into structured content that editors, search engines and AI systems can all read.',
    results: ['Content model redesign', 'DeepL-assisted translation workflow', 'Structured data for search and AI', 'Near-zero-downtime launch'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Building2,
    industry: 'Enterprise',
    title: 'Private knowledge chatbots',
    description: 'Assistants that answer from your documents with citations and know when to escalate to a person.',
    results: ['Ingestion pipelines', 'Citations on every answer', 'Access control per document', 'In-region or self-hosted options'],
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Workflow,
    industry: 'Operations',
    title: 'Document and workflow automation',
    description: 'Extraction, classification and drafting with a human review step before anything is committed.',
    results: ['LLM extraction with confidence scores', 'Queue-based processing (BullMQ)', 'Review queues', 'Audit trail'],
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Sparkles,
    industry: 'Product teams',
    title: 'AI features inside existing apps',
    description: 'Summaries, search and assistants added to live products without destabilising them.',
    results: ['Feature flags and staged rollout', 'Prompt regression tests', 'Cost and latency budgets', 'Usage analytics'],
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
            Where we apply{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Generative AI
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Applications we have built or actively build. Each card lists what the work involves, not a promised percentage.
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
                  <p className="text-sm font-semibold text-gray-900 mb-3">What it involves:</p>
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
            Have an AI feature that needs to become dependable?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Bring the prototype, the data and the constraints. We will tell you what it takes to run it in production.
          </p>
          <a
            href="https://outlook.office.com/bookwithme/user/dca57ea980d34c5ba4dd0dac1c5617f7%40inzint.com?anonymous&ismsaljsauthenabled=true"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
