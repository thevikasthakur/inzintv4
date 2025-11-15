import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'Cloud Services | AWS, Azure, Google Cloud',
  description: 'Enterprise cloud solutions. Migrate, build, and optimize on AWS, Azure, and Google Cloud.',
};

export default function CloudServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'cloud', text: 'Cloud Services' }}
        title="Enterprise Cloud"
        highlightedTitle="Solutions"
        description="Transform your business with cloud technology. We help you migrate, build, and optimize on AWS, Azure, and Google Cloud."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
