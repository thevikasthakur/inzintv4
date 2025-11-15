import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'Digital Transformation Consulting | Digital Strategy',
  description: 'Digital transformation consulting services. Modernize your business with digital technologies.',
};

export default function DigitalConsultingPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'trending-up', text: 'Digital Consulting' }}
        title="Digital Transformation"
        highlightedTitle="Consulting"
        description="Transform your business with digital technologies. Our consultants help you modernize operations, improve customer experience, and drive growth."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
