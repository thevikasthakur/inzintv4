import { BlogSection, FooterSection } from '@/components/sections';

export const metadata = {
  title: 'Blog',
  description: 'Latest insights on technology, business, and innovation from our team of experts.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <BlogSection />
      <FooterSection />
    </main>
  );
}
