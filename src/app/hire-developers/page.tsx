import type { Metadata } from 'next';
import {
  HireDevelopersHeroSection,
  DeveloperRolesSection,
  HiringProcessSection,
  WhyHireSection,
  VideoTestimonialsSection,
  ContactCTASection,
  FooterSection
} from '@/components/sections';

export const metadata: Metadata = {
  title: 'Dedicated Engineering Squads',
  description:
    'Add a founder-led squad of Inzint engineers to your team on a monthly retainer, starting with a two-week pilot sprint.',
  alternates: { canonical: '/hire-developers' },
};

export default function HireDevelopersPage() {
  return (
    <main>
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
