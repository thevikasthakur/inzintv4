import type { Metadata } from 'next';
import { FAQSection, FooterSection, ServiceTemplate } from '@/components/sections';
import { servicePages } from '@/data/services';

const data = servicePages['web-development'];

export const metadata: Metadata = {
  title: 'Web Development',
  description:
    'Next.js and React web platforms with headless CMS, multilingual publishing and migrations off legacy stacks, built by a founder-led team.',
  alternates: { canonical: '/services/product-development/web-development' },
};

export default function WebDevelopmentPage() {
  return (
    <main>
      <ServiceTemplate data={data} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
