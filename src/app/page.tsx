import {
  ServicesSection,
  VideoTestimonialsSection,
  ROISection,
  TechnologiesSection,
  PartnersSection,
  AwardsSection,
  FAQSection,
  FooterSection
} from '@/components/sections';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import HeroSectionV2 from '@/components/sections/HeroSectionV2';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <HeroSectionV2 />
      <FeaturedProjects />
      <ServicesSection />
      <VideoTestimonialsSection />
      <ROISection />
      <TechnologiesSection />
      <PartnersSection />
      <AwardsSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}