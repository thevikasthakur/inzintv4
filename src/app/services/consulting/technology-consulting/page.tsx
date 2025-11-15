import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'Technology Consulting Services | Tech Strategy',
  description: 'Expert technology consulting. Choose the right tech stack and architecture for your business.',
};

export default function TechnologyConsultingPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'settings', text: 'Technology Consulting' }}
        title="Technology Strategy"
        highlightedTitle="& Architecture"
        description="Make informed technology decisions with our expert consultants. We help you choose the right tech stack, architecture, and tools for your business."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
