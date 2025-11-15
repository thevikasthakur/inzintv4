import { CaseStudiesSection, FooterSection } from '@/components/sections';
export const metadata = { title: 'Case Studies', description: 'Success stories from our clients across industries.' };
export default function CaseStudiesPage() {
  return (<main className="min-h-screen bg-white pt-20"><CaseStudiesSection /><FooterSection /></main>);
}
