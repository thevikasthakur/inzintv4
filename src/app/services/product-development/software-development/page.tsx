import type { Metadata } from 'next';
import { FAQSection, FooterSection, ServiceTemplate } from '@/components/sections';
import { servicePages } from '@/data/services';

const data = servicePages['software-development'];

export const metadata: Metadata = {
  title: 'Custom Software & ERP Development',
  description:
    'Internal tools, workflow automation and ERP or CRM modules for operations teams, delivered module by module with documentation.',
  alternates: { canonical: '/services/product-development/software-development' },
};

export default function SoftwareDevelopmentPage() {
  return (
    <main>
      <ServiceTemplate data={data} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
