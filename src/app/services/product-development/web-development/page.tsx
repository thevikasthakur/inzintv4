import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'Web Development Services | Modern Web Applications',
  description: 'Professional web development services. Build scalable, responsive web applications with modern technologies.',
};

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'globe', text: 'Web Development' }}
        title="Modern Web"
        highlightedTitle="Applications"
        description="Build scalable, responsive web applications with cutting-edge technologies. Our expert team delivers high-performance web solutions that drive business growth."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
