import { Metadata } from 'next';
import AIGuidesSection from '@/components/sections/ai/AIGuidesSection';
import { FooterSection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'AI Guides | Comprehensive AI Implementation Guides | Inzint',
  description: 'Comprehensive guides on AI implementation, best practices, and step-by-step tutorials for artificial intelligence projects.',
  keywords: ['AI guides', 'AI tutorials', 'AI implementation', 'AI best practices', 'AI learning resources'],
};

export default function AIGuidesPage() {
  return (
    <main className="min-h-screen">
      <AIGuidesSection />
      <FooterSection />
    </main>
  );
}
