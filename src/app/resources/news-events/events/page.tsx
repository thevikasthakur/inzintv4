import { EventsSection, FooterSection } from '@/components/sections';
export const metadata = { title: 'Events', description: 'Upcoming webinars, conferences, and workshops.' };
export default function EventsPage() {
  return (<main className="min-h-screen bg-white pt-20"><EventsSection /><FooterSection /></main>);
}
