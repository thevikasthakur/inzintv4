import type { Metadata } from 'next';
import { FAQSection, FooterSection, ServiceTemplate } from '@/components/sections';
import { servicePages } from '@/data/services';

const data = servicePages['mvp-development'];

export const metadata: Metadata = {
  title: 'MVP Development',
  description:
    'Rapid prototypes in about two weeks and production-ready MVPs in four to twelve weeks, with weekly demos and a documented handover.',
  alternates: { canonical: '/services/product-development/mvp-development' },
};

export default function MVPDevelopmentPage() {
  return (
    <main>
      <ServiceTemplate data={data} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
