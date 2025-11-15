import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'Big Data Services | Hadoop, Spark, Data Processing',
  description: 'Process and analyze massive datasets. Hadoop, Spark, and distributed computing solutions.',
};

export default function BigDataPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'database', text: 'Big Data' }}
        title="Big Data"
        highlightedTitle="Solutions"
        description="Process and analyze massive datasets with our big data expertise. Leverage Hadoop, Spark, and distributed computing for scalable data processing."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
