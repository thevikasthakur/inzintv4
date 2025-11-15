import { Metadata } from 'next';
import AIBlogSection from '@/components/sections/ai/AIBlogSection';
import { FooterSection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'AI Blog | Latest Insights on AI & ML Trends | Inzint',
  description: 'Latest insights on AI and ML trends, best practices, and innovations. Stay updated with expert perspectives on artificial intelligence.',
  keywords: ['AI blog', 'machine learning blog', 'AI trends', 'AI insights', 'artificial intelligence articles'],
};

export default function AIBlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <AIBlogSection />
      <FooterSection />
    </main>
  );
}
