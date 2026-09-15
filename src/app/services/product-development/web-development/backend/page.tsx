import type { Metadata } from 'next';
import { FAQSection, FooterSection, ServiceTemplate } from '@/components/sections';
import { servicePages } from '@/data/services';

const data = servicePages['backend'];

export const metadata: Metadata = {
  title: 'Backend & API Development',
  description:
    'Node.js and NestJS backends on PostgreSQL and Redis with queues, integrations and authentication, deployed to AWS.',
  alternates: { canonical: '/services/product-development/web-development/backend' },
};

export default function BackendDevelopmentPage() {
  return (
    <main>
      <ServiceTemplate data={data} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
