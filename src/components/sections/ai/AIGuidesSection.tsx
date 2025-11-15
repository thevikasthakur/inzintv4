'use client';

import { motion } from 'framer-motion';
import { FileText, Download, BookOpen, Clock, CheckCircle } from 'lucide-react';

const guides = [
  {
    title: 'Complete Guide to Generative AI Implementation',
    description: 'Step-by-step guide to implementing generative AI in your business, from strategy to deployment',
    level: 'Beginner to Advanced',
    duration: '45 min read',
    topics: ['Strategy', 'Implementation', 'Best Practices', 'Case Studies'],
    downloadable: true,
  },
  {
    title: 'Building AI Agents: A Technical Deep Dive',
    description: 'Comprehensive technical guide on designing and building autonomous AI agents from scratch',
    level: 'Advanced',
    duration: '60 min read',
    topics: ['Architecture', 'Development', 'Deployment', 'Optimization'],
    downloadable: true,
  },
  {
    title: 'ChatGPT Integration for Developers',
    description: 'Practical guide for developers on integrating ChatGPT API into applications',
    level: 'Intermediate',
    duration: '30 min read',
    topics: ['API Integration', 'Prompt Engineering', 'Error Handling', 'Security'],
    downloadable: true,
  },
  {
    title: 'Custom LLM Training and Fine-tuning',
    description: 'Learn how to train and fine-tune custom language models for specific use cases',
    level: 'Advanced',
    duration: '50 min read',
    topics: ['Data Preparation', 'Training', 'Fine-tuning', 'Evaluation'],
    downloadable: true,
  },
  {
    title: 'Machine Learning Project Lifecycle',
    description: 'End-to-end guide on managing ML projects from ideation to production',
    level: 'Intermediate',
    duration: '40 min read',
    topics: ['Planning', 'Development', 'Testing', 'Deployment'],
    downloadable: true,
  },
  {
    title: 'AI Strategy Framework for Enterprises',
    description: 'Strategic framework for planning and executing AI initiatives in large organizations',
    level: 'Beginner',
    duration: '35 min read',
    topics: ['Strategy', 'Governance', 'ROI', 'Change Management'],
    downloadable: true,
  },
];

export default function AIGuidesSection() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white pt-32 pb-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              <span>AI Implementation Guides</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Comprehensive AI Guides</h1>
            <p className="text-xl text-indigo-100">
              In-depth guides and tutorials on AI implementation, best practices, and technical deep dives
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  {guide.downloadable && (
                    <Download className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                  )}
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 mb-6">{guide.description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full font-medium">
                    {guide.level}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{guide.duration}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {guide.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {topic}
                    </div>
                  ))}
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                  Read Guide
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
