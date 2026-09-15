import { AppCostCalculatorSection, FooterSection } from '@/components/sections';
export const metadata = {
  alternates: { canonical: '/resources/tools/app-cost-calculator' }, title: 'App Cost Calculator', description: 'Estimate your app development cost with our interactive calculator.' };
export default function AppCostCalculatorPage() {
  return (<main className="min-h-screen bg-white pt-20"><AppCostCalculatorSection /><FooterSection /></main>);
}
