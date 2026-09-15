import type { Metadata } from 'next';
import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Product strategy, web and mobile development, AI and voice systems, AWS cloud backends and data engineering from a founder-led team with offices in Noida, Muscat and the US.',
  alternates: { canonical: '/services' },
};

export default function ServicesIndexPage() {
  return (
    <main>
      <ServiceHeroSection
        badge={{ icon: 'layers', text: 'Services' }}
        title="Software we build,"
        highlightedTitle="end to end"
        description="Product strategy, web and mobile apps, AI and voice systems, cloud backends and the data behind them. We work in small senior squads, demo weekly and measure outcomes with real user and business metrics."
      />
      <ServicesSection showAllLink={false} />
      <FooterSection />
    </main>
  );
}
