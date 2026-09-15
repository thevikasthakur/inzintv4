import type { Metadata } from 'next';
import { FAQSection, FooterSection, ServiceTemplate } from '@/components/sections';
import { servicePages } from '@/data/services';

const data = servicePages['dedicated-development-teams'];

export const metadata: Metadata = {
  title: 'Dedicated Engineering Squads',
  description:
    'A founder-led squad of three to five Inzint engineers on a monthly retainer, starting with a two-week pilot sprint.',
  alternates: { canonical: '/services/it-managed-services/dedicated-development-teams' },
};

export default function DedicatedDevelopmentTeamsPage() {
  return (
    <main>
      <ServiceTemplate data={data} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
