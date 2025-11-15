import { GuidesSection, FooterSection } from '@/components/sections';
export const metadata = { title: 'Guides', description: 'In-depth technical guides for developers and product teams.' };
export default function GuidesPage() {
  return (<main className="min-h-screen bg-white pt-20"><GuidesSection /><FooterSection /></main>);
}
