import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'Frontend Development Services | React, Vue, Angular',
  description: 'Expert frontend development with React, Vue, and Angular. Create stunning user interfaces.',
};

export default function FrontendDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'code', text: 'Frontend Development' }}
        title="Modern Frontend"
        highlightedTitle="Development"
        description="Build beautiful, responsive user interfaces with React, Vue, and Angular. Our frontend experts create engaging web experiences that users love."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
