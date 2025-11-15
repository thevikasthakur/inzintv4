import { Metadata } from 'next';
import AIAgentHeroSection from '@/components/sections/ai/AIAgentHeroSection';
import AIAgentCapabilitiesSection from '@/components/sections/ai/AIAgentCapabilitiesSection';
import { FAQSection, FooterSection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'AI Agent Development | Autonomous AI Solutions | Inzint',
  description: 'Build autonomous AI agents for intelligent task automation. Expert AI agent development services for enterprise automation and workflow optimization.',
  keywords: ['AI agent development', 'autonomous AI', 'intelligent automation', 'AI workflow', 'agent-based systems'],
};

export default function AIAgentPage() {
  return (
    <main className="min-h-screen">
      <AIAgentHeroSection />
      <AIAgentCapabilitiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
