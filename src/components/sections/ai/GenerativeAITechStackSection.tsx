'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const techStack = [
  {
    category: 'LLM Platforms',
    technologies: [
      { name: 'OpenAI GPT-4', logo: '🤖' },
      { name: 'Anthropic Claude', logo: '🧠' },
      { name: 'Google PaLM', logo: '🔍' },
      { name: 'Meta LLaMA', logo: '🦙' },
      { name: 'Cohere', logo: '💬' },
    ],
  },
  {
    category: 'Frameworks & Tools',
    technologies: [
      { name: 'LangChain', logo: '⛓️' },
      { name: 'LlamaIndex', logo: '📚' },
      { name: 'Hugging Face', logo: '🤗' },
      { name: 'TensorFlow', logo: '🔥' },
      { name: 'PyTorch', logo: '🔦' },
    ],
  },
  {
    category: 'Vector Databases',
    technologies: [
      { name: 'Pinecone', logo: '🌲' },
      { name: 'Weaviate', logo: '🔷' },
      { name: 'Milvus', logo: '🎯' },
      { name: 'ChromaDB', logo: '🎨' },
      { name: 'Qdrant', logo: '⚡' },
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    technologies: [
      { name: 'AWS Bedrock', logo: '☁️' },
      { name: 'Azure OpenAI', logo: '🔵' },
      { name: 'Google Cloud AI', logo: '🌐' },
      { name: 'Replicate', logo: '🔄' },
      { name: 'Modal', logo: '📦' },
    ],
  },
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
              Tech Stack
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            We leverage the latest and most powerful generative AI technologies to build cutting-edge solutions
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {techStack.map((stack, stackIndex) => (
            <motion.div
              key={stackIndex}
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
                    key={techIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: stackIndex * 0.1 + techIndex * 0.05 }}
                    className="flex items-center gap-4 bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <span className="text-3xl">{tech.logo}</span>
                    <span className="text-gray-900 font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
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
                Why Choose Inzint for Generative AI Development?
              </h3>
              <p className="text-blue-100 text-lg mb-6">
                Our team of AI experts has extensive experience building production-ready generative AI applications that scale.
              </p>
              <ul className="space-y-3">
                {[
                  'Expert team with 5+ years of AI/ML experience',
                  'End-to-end development from ideation to deployment',
                  'Cost-effective solutions with proven ROI',
                  'Ongoing support and optimization',
                  'Enterprise-grade security and compliance',
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
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
                Let's Build Together
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
