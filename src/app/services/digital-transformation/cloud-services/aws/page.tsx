import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'AWS Development Services | Amazon Web Services',
  description: 'Expert AWS development and consulting. Build scalable cloud applications on Amazon Web Services.',
};

export default function AWSServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'cloud', text: 'AWS Development' }}
        title="Amazon Web Services"
        highlightedTitle="Development"
        description="Build scalable, secure applications on AWS. Our certified AWS experts help you leverage the full power of Amazon Web Services."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
