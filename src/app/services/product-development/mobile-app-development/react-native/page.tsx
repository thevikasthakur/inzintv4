import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'React Native App Development Services | Cross-Platform Apps',
  description: 'Build cross-platform mobile apps with React Native. Single codebase for iOS and Android with native performance.',
};

export default function ReactNativeAppDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'code', text: 'React Native Development' }}
        title="Cross-Platform"
        highlightedTitle="React Native Apps"
        description="Build beautiful mobile applications for iOS and Android from a single codebase. Leverage React Native for faster development and native performance."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
