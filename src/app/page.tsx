import {
  HeroSection,
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

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <HeroSection />
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