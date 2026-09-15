import {
  AboutHeroSection,
  AboutStorySection,
  AboutValuesSection,
  FooterSection
} from '@/components/sections';

export const metadata = {
  alternates: { canonical: '/about' },
  title: 'About Us',
  description: 'Inzint is a founder-led, engineering-first software consultancy founded in 2020, headquartered in Noida with an office in Muscat and a presence in the US.',
};

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <AboutStorySection />
      <AboutValuesSection />
      <FooterSection />
    </main>
  );
}
