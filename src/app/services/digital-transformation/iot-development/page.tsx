import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'IoT Development Services | Internet of Things Solutions',
  description: 'Build connected IoT solutions. Device integration, data analytics, and cloud connectivity.',
};

export default function IoTDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'wifi', text: 'IoT Development' }}
        title="Internet of Things"
        highlightedTitle="Solutions"
        description="Build connected IoT solutions that transform businesses. From device integration to cloud connectivity and data analytics."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
