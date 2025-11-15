import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'iOS App Development Services | iPhone & iPad Apps',
  description: 'Expert iOS app development using Swift and SwiftUI. Build native iPhone and iPad applications with exceptional performance.',
};

export default function IOSAppDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'smartphone', text: 'iOS Development' }}
        title="Native iOS"
        highlightedTitle="App Development"
        description="Build powerful iOS applications using Swift and SwiftUI. Our expert developers create exceptional iPhone and iPad experiences that delight users and drive engagement."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
