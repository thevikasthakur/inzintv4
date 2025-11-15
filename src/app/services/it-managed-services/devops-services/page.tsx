import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'DevOps Services | CI/CD, Cloud Infrastructure, Automation',
  description: 'Professional DevOps services. Automate deployments, improve reliability, and accelerate delivery.',
};

export default function DevOpsServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'server', text: 'DevOps Services' }}
        title="DevOps & Cloud"
        highlightedTitle="Infrastructure"
        description="Streamline your development and deployment processes with our DevOps expertise. CI/CD pipelines, infrastructure automation, and cloud optimization."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
