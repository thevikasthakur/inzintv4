import { CaseStudiesSection, FooterSection } from '@/components/sections';
export const metadata = {
  title: 'Case Studies',
  description: 'Detailed stories of complex software, data and platform transformations delivered by Inzint.',
  alternates: { canonical: '/resources/tools/case-studies' },
};
export default function CaseStudiesPage() {
  return (<main className="min-h-screen bg-white pt-20"><CaseStudiesSection /><FooterSection /></main>);
}
