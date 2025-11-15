import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'Google Cloud Development Services | GCP',
  description: 'Expert Google Cloud Platform development. Build modern cloud applications on GCP.',
};

export default function GoogleCloudServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'cloud', text: 'Google Cloud Development' }}
        title="Google Cloud Platform"
        highlightedTitle="Development"
        description="Build innovative applications on Google Cloud Platform. Leverage Google's infrastructure, AI, and data analytics capabilities."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
