import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'Data Analytics Services | Business Intelligence',
  description: 'Transform data into insights. Advanced analytics, visualization, and business intelligence solutions.',
};

export default function DataAnalyticsPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'bar-chart', text: 'Data Analytics' }}
        title="Data-Driven"
        highlightedTitle="Business Intelligence"
        description="Transform raw data into actionable insights. Our data analytics experts help you visualize trends, predict outcomes, and make informed decisions."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
