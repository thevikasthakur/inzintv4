'use client';

import { motion } from 'framer-motion';

// Tools we use in live AI work (VoxReception, Thotis IA, RAG chatbots).
const techStack = [
  {
    category: 'Model providers',
    technologies: ['OpenAI', 'Anthropic Claude', 'Google Gemini', 'Meta Llama', 'Mistral'],
  },
  {
    category: 'Orchestration & frameworks',
    technologies: ['LangChain', 'LlamaIndex', 'Langflow', 'Chatbase', 'Hugging Face'],
  },
  {
    category: 'Retrieval & data',
    technologies: ['PostgreSQL + pgvector', 'MongoDB', 'Pinecone', 'Qdrant', 'Redis'],
  },
  {
    category: 'Voice, infrastructure & delivery',
    technologies: ['LiveKit', 'AWS Bedrock', 'AWS Lambda', 'BullMQ', 'Playwright (automated QA)'],
  },
];

const whyInzint = [
  'Generative AI already running in live products: VoxReception and Thotis IA',
  'Evaluation, guardrails and automated QA before every release',
  'Your data stays yours: no model training on customer data, in-region storage',
  'Weekly demos and written architecture decisions',
  'Founder-led squads that also build the surrounding web, mobile and cloud',
];

export default function GenerativeAITechStackSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
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
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Stack
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Providers and tools we have used in production. We pick per project and write down why.
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {techStack.map((stack, stackIndex) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stackIndex * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                {stack.category}
              </h3>
              <div className="space-y-3">
                {stack.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: stackIndex * 0.1 + techIndex * 0.05 }}
                    className="flex items-center gap-4 bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {tech.charAt(0)}
                    </span>
                    <span className="text-gray-900 font-medium">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Inzint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-4">
                Why Inzint for generative AI work
              </h3>
              <p className="text-blue-100 text-lg mb-6">
                We build AI features the way we build everything else: with tests, documentation and a
                weekly demo, inside products people already depend on.
              </p>
              <ul className="space-y-3">
                {whyInzint.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span className="text-blue-50">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-lg"
              >
                Let&apos;s Build Together
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
