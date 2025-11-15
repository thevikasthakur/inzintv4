import {
  CareersHeroSection,
  JobListingsSection,
  CareersBenefitsSection,
  FooterSection
} from '@/components/sections';

export const metadata = {
  title: 'Careers',
  description: 'Join Inzint and build the future with a team of passionate engineers working on AI-driven solutions.',
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <CareersHeroSection />
      <JobListingsSection />
      <CareersBenefitsSection />
      <FooterSection />
    </main>
  );
}
