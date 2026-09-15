import type { Metadata } from 'next';
import { FAQSection, FooterSection, ServiceTemplate } from '@/components/sections';
import { servicePages } from '@/data/services';

const data = servicePages['technology-consulting'];

export const metadata: Metadata = {
  title: 'Technology Consulting & Audits',
  description:
    'Architecture reviews, migration planning and AI readiness audits that end in a written, prioritised plan.',
  alternates: { canonical: '/services/consulting/technology-consulting' },
};

export default function TechnologyConsultingPage() {
  return (
    <main>
      <ServiceTemplate data={data} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
