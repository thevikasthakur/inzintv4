import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'Product Strategy Consulting | Product Management',
  description: 'Strategic product consulting services. Define roadmaps, prioritize features, and validate ideas.',
};

export default function ProductStrategyPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'target', text: 'Product Strategy' }}
        title="Strategic Product"
        highlightedTitle="Consulting"
        description="Define winning product strategies with our expert consultants. From market research to roadmap planning and feature prioritization."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
