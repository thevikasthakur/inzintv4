import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'App Maintenance & Support Services | 24/7 Technical Support',
  description: 'Comprehensive maintenance and support services. Keep your applications running smoothly 24/7.',
};

export default function MaintenanceSupportPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'wrench', text: 'Maintenance & Support' }}
        title="24/7 App Maintenance"
        highlightedTitle="& Support"
        description="Keep your applications running smoothly with our comprehensive maintenance and support services. Proactive monitoring, bug fixes, and performance optimization."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
