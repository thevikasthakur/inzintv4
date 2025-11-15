import {
  HowWeWorkHeroSection,
  ProcessSection,
  MethodologySection,
  FooterSection
} from '@/components/sections';

export const metadata = {
  title: 'How We Work',
  description: 'Learn about our agile development process and engineering culture that delivers quality software on time.',
};

export default function HowWeWorkPage() {
  return (
    <main className="min-h-screen bg-white">
      <HowWeWorkHeroSection />
      <ProcessSection />
      <MethodologySection />
      <FooterSection />
    </main>
  );
}
