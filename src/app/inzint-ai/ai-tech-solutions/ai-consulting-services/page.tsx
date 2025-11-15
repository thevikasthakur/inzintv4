import { Metadata } from 'next';
import { FAQSection, FooterSection } from '@/components/sections';
import AIServiceTemplate from '@/components/sections/ai/AIServiceTemplate';

export const metadata: Metadata = {
  title: 'AI Consulting Services | Strategic AI Transformation | Inzint',
  description: 'Strategic AI consulting to transform your business. Expert guidance on AI strategy, implementation, and optimization for measurable ROI.',
  keywords: ['AI consulting', 'AI strategy', 'AI transformation', 'AI implementation', 'enterprise AI consulting'],
};

const pageData = {
  hero: {
    badge: { icon: 'lightbulb', text: 'AI Consulting Services' },
    title: 'Transform Your Business with',
    highlightedTitle: 'AI Strategy',
    description: 'Navigate your AI journey with confidence. Our AI consulting services help you identify opportunities, develop strategies, and implement AI solutions that deliver measurable business value.',
    benefits: ['AI Strategy Development', 'Technology Selection', 'Implementation Roadmap', 'Change Management'],
    ctaText: 'Get AI Consultation',
    gradient: 'from-amber-600 to-orange-600',
  },
  services: [
    {
      icon: 'target',
      title: 'AI Strategy',
      description: 'Develop comprehensive AI strategy aligned with business goals',
      features: ['Opportunity Assessment', 'Use Case Identification', 'ROI Analysis', 'Roadmap Creation'],
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: 'workflow',
      title: 'Implementation Planning',
      description: 'Plan and execute successful AI implementations',
      features: ['Technology Stack', 'Architecture Design', 'Team Building', 'Risk Management'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'trending-up',
      title: 'Optimization',
      description: 'Optimize existing AI systems for better performance',
      features: ['Performance Audit', 'Cost Optimization', 'Model Improvement', 'Scaling Strategy'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: 'users',
      title: 'Training & Support',
      description: 'Empower your team with AI knowledge and skills',
      features: ['Team Training', 'Best Practices', 'Documentation', 'Ongoing Support'],
      color: 'from-green-500 to-emerald-500',
    },
  ],
  useCases: [
    {
      title: 'Digital Transformation',
      description: 'Complete AI-driven digital transformation strategy',
      results: ['3-year roadmap', '5x ROI projection', 'Risk mitigation'],
    },
    {
      title: 'Process Automation',
      description: 'Identify and automate key business processes with AI',
      results: ['60% cost savings', '10x productivity', 'Error reduction'],
    },
    {
      title: 'AI Center of Excellence',
      description: 'Build internal AI capabilities and governance',
      results: ['Team upskilling', 'Best practices', 'Governance framework'],
    },
  ],
};

export default function AIConsultingPage() {
  return (
    <main className="min-h-screen">
      <AIServiceTemplate data={pageData} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
