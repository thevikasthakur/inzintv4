import { Metadata } from 'next';
import AIUseCasesSection from '@/components/sections/ai/AIUseCasesSection';
import { FooterSection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'AI Use Cases | Real-world AI Applications Across Industries | Inzint',
  description: 'Real-world applications of AI across industries. Explore successful AI use cases and learn how AI solves business challenges.',
  keywords: ['AI use cases', 'AI applications', 'industry AI examples', 'AI success stories', 'real-world AI'],
};

export default function AIUseCasesPage() {
  return (
    <main className="min-h-screen">
      <AIUseCasesSection />
      <FooterSection />
    </main>
  );
}
