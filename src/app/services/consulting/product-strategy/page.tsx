import type { Metadata } from 'next';
import { FAQSection, FooterSection, ServiceTemplate } from '@/components/sections';
import { servicePages } from '@/data/services';

const data = servicePages['product-strategy'];

export const metadata: Metadata = {
  title: 'Product Strategy & Discovery',
  description:
    'Discovery workshops, roadmaps and success metrics that turn an idea into a scoped, sequenced plan engineers can start on.',
  alternates: { canonical: '/services/consulting/product-strategy' },
};

export default function ProductStrategyPage() {
  return (
    <main>
      <ServiceTemplate data={data} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
