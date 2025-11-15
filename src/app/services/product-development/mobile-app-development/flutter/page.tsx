import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'Flutter App Development Services | Cross-Platform Apps',
  description: 'Build beautiful cross-platform apps with Flutter. Single codebase for iOS, Android, and web.',
};

export default function FlutterAppDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'code', text: 'Flutter Development' }}
        title="Beautiful Cross-Platform"
        highlightedTitle="Flutter Apps"
        description="Create stunning mobile applications with Flutter. Build for iOS, Android, and web from a single codebase with beautiful Material Design and Cupertino widgets."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
