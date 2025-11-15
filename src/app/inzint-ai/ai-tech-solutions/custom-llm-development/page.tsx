import { Metadata } from 'next';
import { FAQSection, FooterSection } from '@/components/sections';
import AIServiceTemplate from '@/components/sections/ai/AIServiceTemplate';

export const metadata: Metadata = {
  title: 'Custom LLM Development | Large Language Model Solutions | Inzint',
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
      title: 'Legal Document Analysis',
      description: 'LLM trained on legal documents for contract analysis',
      results: ['95% accuracy', '10x faster review', 'Cost savings'],
    },
    {
      title: 'Medical Diagnosis Support',
      description: 'Healthcare-specific LLM for clinical decision support',
      results: ['HIPAA compliant', '98% diagnostic accuracy', 'Real-time insights'],
    },
    {
      title: 'Financial Analysis',
      description: 'Custom LLM for financial data and market analysis',
      results: ['Real-time predictions', 'Risk assessment', 'Automated reporting'],
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
