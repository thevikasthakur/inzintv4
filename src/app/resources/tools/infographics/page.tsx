import { InfographicsSection, FooterSection } from '@/components/sections';
export const metadata = { title: 'Infographics', description: 'Visual insights on tech trends and data.' };
export default function InfographicsPage() {
  return (<main className="min-h-screen bg-white pt-20"><InfographicsSection /><FooterSection /></main>);
}
