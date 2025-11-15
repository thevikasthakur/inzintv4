import {
  AboutHeroSection,
  AboutStorySection,
  AboutValuesSection,
  SocialImpactSection,
  DiversitySection,
  FooterSection
} from '@/components/sections';

export const metadata = {
  title: 'About Us',
  description: 'Learn about Inzint - an engineering-first software consultancy building AI-driven solutions that transform businesses.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHeroSection />
      <AboutStorySection />
      <AboutValuesSection />
      <SocialImpactSection />
      <DiversitySection />
      <FooterSection />
    </main>
  );
}
