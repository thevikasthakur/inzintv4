import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'Mobile App Development Services | iOS & Android Apps',
  description: 'Build powerful mobile applications with our expert development team. Native iOS, Android, and cross-platform solutions.',
};

export default function MobileAppDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'smartphone', text: 'Mobile App Development' }}
        title="Build Powerful"
        highlightedTitle="Mobile Applications"
        description="Create exceptional mobile experiences with our expert development team. From iOS to Android, we deliver high-performance, scalable mobile applications that engage users and drive business growth."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
