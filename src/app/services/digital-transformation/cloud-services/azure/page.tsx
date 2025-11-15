import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'Azure Development Services | Microsoft Azure',
  description: 'Professional Azure development and consulting. Build enterprise solutions on Microsoft Azure.',
};

export default function AzureServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'cloud', text: 'Azure Development' }}
        title="Microsoft Azure"
        highlightedTitle="Development"
        description="Build enterprise-grade applications on Microsoft Azure. Our Azure experts deliver secure, scalable cloud solutions."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
