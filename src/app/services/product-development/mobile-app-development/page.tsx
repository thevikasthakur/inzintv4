import type { Metadata } from 'next';
import { FAQSection, FooterSection, ServiceTemplate } from '@/components/sections';
import { servicePages } from '@/data/services';

const data = servicePages['mobile-app-development'];

export const metadata: Metadata = {
  title: 'Mobile App Development',
  description:
    'React Native apps for iOS and Android from one codebase, backed by NestJS and AWS services and shipped to both stores.',
  alternates: { canonical: '/services/product-development/mobile-app-development' },
};

export default function MobileAppDevelopmentPage() {
  return (
    <main>
      <ServiceTemplate data={data} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
