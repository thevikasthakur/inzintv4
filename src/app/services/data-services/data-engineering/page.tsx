import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'Data Engineering Services | ETL, Data Pipelines',
  description: 'Build robust data infrastructure. ETL pipelines, data warehousing, and real-time processing.',
};

export default function DataEngineeringPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'activity', text: 'Data Engineering' }}
        title="Data Engineering &"
        highlightedTitle="Infrastructure"
        description="Build robust data infrastructure with our engineering expertise. ETL pipelines, data warehousing, and real-time data processing solutions."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
