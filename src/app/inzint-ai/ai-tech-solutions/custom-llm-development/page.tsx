import { Metadata } from 'next';
import { FAQSection, FooterSection } from '@/components/sections';
import AIServiceTemplate from '@/components/sections/ai/AIServiceTemplate';

export const metadata: Metadata = {
  alternates: { canonical: '/inzint-ai/ai-tech-solutions/custom-llm-development' },
  title: 'Custom LLM Development | Large Language Model Solutions',
  description: 'Build tailored large language models for your business. Expert custom LLM development services with fine-tuning and domain-specific training.',
  keywords: ['custom LLM', 'language model development', 'LLM fine-tuning', 'domain-specific AI', 'enterprise LLM'],
};

const pageData = {
  hero: {
    badge: { icon: 'brain', text: 'Custom LLM Development' },
    title: 'Build Tailored',
    highlightedTitle: 'Language Models',
    description: 'Develop custom large language models fine-tuned for your specific business domain, data, and use cases. Achieve superior performance with models trained on your proprietary knowledge.',
    benefits: ['Domain-Specific Training', 'Fine-tuning Expertise', 'Optimized Performance', 'Full Ownership'],
    ctaText: 'Build Your LLM',
    gradient: 'from-purple-600 to-pink-600',
  },
  services: [
    {
      icon: 'database',
      title: 'Data Preparation',
      description: 'Clean, structure, and prepare your data for LLM training',
      features: ['Data Cleaning', 'Annotation', 'Quality Control', 'Dataset Creation'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: 'brain',
      title: 'Model Training',
      description: 'Train custom models on your domain-specific data',
      features: ['Transfer Learning', 'Fine-tuning', 'Hyperparameter Tuning', 'Validation'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'zap',
      title: 'Optimization',
      description: 'Optimize models for speed, accuracy, and cost',
      features: ['Quantization', 'Pruning', 'Distillation', 'Compression'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: 'cpu',
      title: 'Deployment',
      description: 'Deploy and scale your custom LLM in production',
      features: ['Cloud Deployment', 'Edge Deployment', 'API Creation', 'Monitoring'],
      color: 'from-orange-500 to-red-500',
    },
  ],
  useCases: [
    {
      title: 'Retrieval before training',
      description: 'Most "custom LLM" needs are met with retrieval and strict context design rather than fine-tuning. We start there.',
      results: ['pgvector or managed vector stores', 'Access control per document', 'Freshness pipelines'],
    },
    {
      title: 'Domain-tuned models',
      description: 'Fine-tune open-weight or hosted models on your data when prompting and retrieval are not enough.',
      results: ['Data preparation and labelling', 'Evaluation set built before training', 'Rollback plan'],
    },
    {
      title: 'Bilingual voice and text',
      description: 'English and Arabic handling as built for VoxReception, including dialect and hand-off behaviour.',
      results: ['Speech to text and text to speech', 'Dialect handling', 'In-region storage'],
    },
  ],
};

export default function CustomLLMPage() {
  return (
    <main className="min-h-screen">
      <AIServiceTemplate data={pageData} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
