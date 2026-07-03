import { Metadata } from 'next';
import AIAgentHeroSection from '@/components/sections/ai/AIAgentHeroSection';
import AIAgentCapabilitiesSection from '@/components/sections/ai/AIAgentCapabilitiesSection';
import AIAgentWorkflowSection from '@/components/sections/ai/AIAgentWorkflowSection';
import AIAgentFAQSection from '@/components/sections/ai/AIAgentFAQSection';
import { FooterSection } from '@/components/sections';

export const metadata: Metadata = {
  alternates: { canonical: '/inzint-ai/ai-tech-solutions/ai-agent-development' },
  title: 'AI Agent Development | Autonomous AI Coding Assistants',
  description:
    'Inzint builds autonomous AI coding agents that carry a ticket through your software lifecycle — plan, design, code, pull request, review, test, deploy, and docs — running on your own repo and CI, with every change shipped behind your existing gate as a reviewable PR.',
  keywords: [
    'AI agent development',
    'AI coding agents',
    'autonomous software development',
    'AI coding assistant',
    'autonomous SDLC',
    'AI pull request automation',
  ],
};

export default function AIAgentPage() {
  return (
    <main className="min-h-screen">
      <AIAgentHeroSection />
      <AIAgentCapabilitiesSection />
      <AIAgentWorkflowSection />
      <AIAgentFAQSection />
      <FooterSection />
    </main>
  );
}
