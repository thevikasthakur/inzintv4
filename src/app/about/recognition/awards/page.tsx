import { AwardsSection, FooterSection } from '@/components/sections';

export const metadata = {
  title: 'Awards & Recognition',
  description: 'Explore our achievements, accolades, and industry recognition for excellence in software development.',
};

export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <AwardsSection />
      <FooterSection />
    </main>
  );
}
