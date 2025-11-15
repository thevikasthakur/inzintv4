import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'Custom Software Development Services | Enterprise Solutions',
  description: 'Custom software development for enterprises. Build tailored solutions for your unique business needs.',
};

export default function SoftwareDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'code', text: 'Software Development' }}
        title="Custom Software"
        highlightedTitle="Development"
        description="Build custom software solutions tailored to your unique business needs. Our expert team delivers enterprise-grade applications that drive efficiency and growth."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
