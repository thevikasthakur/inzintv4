import { GuidesSection, FooterSection } from '@/components/sections';

export const metadata = {
  title: 'Development Guides',
  description: 'Comprehensive guides on app development, from concept to deployment.',
};

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <GuidesSection />
      <FooterSection />
    </main>
  );
}
