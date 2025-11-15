import { EbooksSection, FooterSection } from '@/components/sections';

export const metadata = {
  title: 'E-books',
  description: 'In-depth e-books on technology trends and best practices.',
};

export default function EbooksPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <EbooksSection />
      <FooterSection />
    </main>
  );
}
