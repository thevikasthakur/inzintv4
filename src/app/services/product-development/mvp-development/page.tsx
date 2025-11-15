import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'MVP Development Services | Rapid Product Launch',
  description: 'Build and launch your MVP quickly. Validate your idea with a minimum viable product.',
};

export default function MVPDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'rocket', text: 'MVP Development' }}
        title="Launch Your"
        highlightedTitle="MVP Fast"
        description="Validate your business idea quickly with a minimum viable product. Our agile team helps you build, test, and iterate faster."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
