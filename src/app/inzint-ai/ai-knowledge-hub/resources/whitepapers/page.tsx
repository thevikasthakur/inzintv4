import { Metadata } from 'next';
import WhitepapersSection from '@/components/sections/ai/WhitepapersSection';
import { FooterSection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'AI Whitepapers | In-depth Research & Analysis | Inzint',
  description: 'In-depth research and analysis on AI technologies, trends, and best practices. Download comprehensive whitepapers on artificial intelligence.',
  keywords: ['AI whitepapers', 'AI research', 'AI analysis', 'AI reports', 'AI technology papers'],
};

export default function WhitepapersPage() {
  return (
    <main className="min-h-screen">
      <WhitepapersSection />
      <FooterSection />
    </main>
  );
}
