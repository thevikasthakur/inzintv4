import type { Metadata } from 'next';
import { FAQSection, FooterSection, ServiceTemplate } from '@/components/sections';
import { servicePages } from '@/data/services';

const data = servicePages['data-engineering'];

export const metadata: Metadata = {
  title: 'Data Engineering',
  description:
    'ETL pipelines, legacy data decoding, migrations and reporting dashboards built on evidence from the data itself.',
  alternates: { canonical: '/services/data-services/data-engineering' },
};

export default function DataEngineeringPage() {
  return (
    <main>
      <ServiceTemplate data={data} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
