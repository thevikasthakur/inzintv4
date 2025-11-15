import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'Backend Development Services | Node.js, Python, Java',
  description: 'Robust backend development services. Build scalable APIs and server-side applications.',
};

export default function BackendDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'server', text: 'Backend Development' }}
        title="Scalable Backend"
        highlightedTitle="Solutions"
        description="Build robust, scalable backend systems with Node.js, Python, and Java. Our backend experts create powerful APIs and server-side applications."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
