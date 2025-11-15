import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'Full Stack Development Services | End-to-End Solutions',
  description: 'Complete full stack development services. Frontend, backend, and database solutions.',
};

export default function FullStackDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'layers', text: 'Full Stack Development' }}
        title="End-to-End"
        highlightedTitle="Full Stack Solutions"
        description="Complete web application development from frontend to backend. Our full stack developers build comprehensive solutions that cover all aspects of your application."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
