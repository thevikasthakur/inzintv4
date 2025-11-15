import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'Dedicated Development Teams | Remote Development Teams',
  description: 'Get a dedicated development team that works exclusively for you. Full control and transparency.',
};

export default function DedicatedDevelopmentTeamsPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'users', text: 'Dedicated Teams' }}
        title="Your Dedicated"
        highlightedTitle="Development Team"
        description="Build your extended team with our dedicated developers who work exclusively on your projects. Full control, transparency, and seamless integration."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
