import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'Android App Development Services | Kotlin & Java Apps',
  description: 'Professional Android app development using Kotlin and Jetpack Compose. Create powerful, scalable Android applications.',
};

export default function AndroidAppDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'smartphone', text: 'Android Development' }}
        title="Native Android"
        highlightedTitle="App Development"
        description="Create robust Android applications using Kotlin and Jetpack Compose. Our expert team delivers high-performance apps that engage millions of users worldwide."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
