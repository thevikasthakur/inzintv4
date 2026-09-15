import type { Metadata } from 'next';
import { FAQSection, FooterSection, ServiceTemplate } from '@/components/sections';
import { servicePages } from '@/data/services';

const data = servicePages['cloud-services'];

export const metadata: Metadata = {
  title: 'Cloud & DevOps on AWS',
  description:
    'Serverless AWS backends defined in code, CI/CD from the first sprint, monitoring, cost control and rescue of fragile platforms.',
  alternates: { canonical: '/services/digital-transformation/cloud-services' },
};

export default function CloudServicesPage() {
  return (
    <main>
      <ServiceTemplate data={data} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
