import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'Staff Augmentation Services | Hire Expert Developers',
  description: 'Scale your team quickly with our staff augmentation services. Access top tech talent on demand.',
};

export default function StaffAugmentationPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'users', text: 'Staff Augmentation' }}
        title="Scale Your Team"
        highlightedTitle="On Demand"
        description="Quickly scale your development team with our expert engineers. Access top talent for short-term projects or long-term engagements."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
