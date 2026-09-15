import { Metadata } from 'next';
import { FAQSection, FooterSection } from '@/components/sections';
import AIServiceTemplate from '@/components/sections/ai/AIServiceTemplate';

export const metadata: Metadata = {
  alternates: { canonical: '/inzint-ai/ai-tech-solutions/chatgpt-integration-services' },
  title: 'ChatGPT Integration Services | OpenAI API Development',
  description: 'Integrate ChatGPT capabilities into your applications. Expert ChatGPT integration services for enhanced user experiences and intelligent automation.',
  keywords: ['ChatGPT integration', 'OpenAI API', 'GPT-4 integration', 'conversational AI', 'chatbot development'],
};

const pageData = {
  hero: {
    badge: { icon: 'message-square', text: 'ChatGPT Integration Services' },
    title: 'Integrate ChatGPT into Your',
    highlightedTitle: 'Applications',
    description: 'Enhance your applications with ChatGPT capabilities. We provide seamless integration of OpenAI\'s powerful language models to create intelligent, conversational experiences.',
    benefits: ['GPT-4 & GPT-3.5 Integration', 'Custom Fine-tuning', 'API Optimization', 'Cost Management'],
    ctaText: 'Start Integration',
    gradient: 'from-green-600 to-emerald-600',
  },
  services: [
    {
      icon: 'code',
      title: 'API Integration',
      description: 'Seamless ChatGPT API integration with your existing systems',
      features: ['RESTful API Setup', 'Authentication', 'Error Handling', 'Rate Limiting'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: 'brain',
      title: 'Custom Prompts',
      description: 'Optimized prompt engineering for your specific use cases',
      features: ['Prompt Design', 'Context Management', 'Response Formatting', 'A/B Testing'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'zap',
      title: 'Performance Optimization',
      description: 'Fast, reliable ChatGPT integration with low latency',
      features: ['Caching Strategy', 'Load Balancing', 'Response Streaming', 'Fallback Handling'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: 'shield',
      title: 'Security & Compliance',
      description: 'Enterprise-grade security for your ChatGPT integration',
      features: ['Data Encryption', 'Access Control', 'Content Filtering', 'Audit Logging'],
      color: 'from-orange-500 to-red-500',
    },
  ],
  useCases: [
    {
      title: 'Assistant inside an existing app',
      description: 'Add an LLM assistant to a live product behind feature flags, with evaluation and cost controls.',
      results: ['Streaming responses', 'Prompt regression tests', 'Usage and cost dashboards'],
    },
    {
      title: 'Support and FAQ chatbot',
      description: 'Answers grounded in your documentation, with citations and a hand-off to a person when confidence is low.',
      results: ['Retrieval over your content', 'Citations on every answer', 'Escalation to email or CRM'],
    },
    {
      title: 'Content drafting workflows',
      description: 'Draft, translate and summarise with a human review step before anything is published.',
      results: ['Review queues', 'Brand and tone constraints', 'Audit trail'],
    },
  ],
};

export default function ChatGPTIntegrationPage() {
  return (
    <main className="min-h-screen">
      <AIServiceTemplate data={pageData} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
