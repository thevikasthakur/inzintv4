import { CaseStudiesSection, FooterSection } from '@/components/sections';

export const metadata = {
  title: 'Case Studies | The Work Behind the Outcome',
  description:
    'Explore detailed Inzint case studies covering platform modernisation, complex data migration and measurable software outcomes.',
  alternates: { canonical: '/resources/tools/case-studies' },
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#f3f0e8] pt-20">
      <CaseStudiesSection />
      <FooterSection />
    </main>
  );
}
