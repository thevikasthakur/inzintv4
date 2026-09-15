import type { Metadata } from 'next';
import { FAQSection, FooterSection, ServiceTemplate } from '@/components/sections';
import { servicePages } from '@/data/services';

const data = servicePages['maintenance-support'];

export const metadata: Metadata = {
  title: 'Maintenance & Support',
  description:
    'Monthly maintenance and managed hosting with a 30-day warranty on delivery, published response targets and monthly reporting.',
  alternates: { canonical: '/services/it-managed-services/maintenance-support' },
};

export default function MaintenanceSupportPage() {
  return (
    <main>
      <ServiceTemplate data={data} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
