import {
  HireDevelopersHeroSection,
  DeveloperRolesSection,
  HiringProcessSection,
  WhyHireSection,
  VideoTestimonialsSection,
  ContactCTASection,
  FooterSection
} from '@/components/sections';

export default function HireDevelopersPage() {
  return (
    <main className="min-h-screen">
      <HireDevelopersHeroSection />
      <DeveloperRolesSection />
      <HiringProcessSection />
      <WhyHireSection />
      <VideoTestimonialsSection />
      <ContactCTASection />
      <FooterSection />
    </main>
  );
}
