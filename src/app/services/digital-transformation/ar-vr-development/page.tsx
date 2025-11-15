import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'AR/VR Development Services | Augmented & Virtual Reality',
  description: 'Create immersive AR and VR experiences. Unity, Unreal Engine, ARKit, and ARCore development.',
};

export default function ARVRDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'eye', text: 'AR/VR Development' }}
        title="Immersive AR/VR"
        highlightedTitle="Experiences"
        description="Create stunning augmented and virtual reality experiences. Build immersive applications with Unity, Unreal Engine, ARKit, and ARCore."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
