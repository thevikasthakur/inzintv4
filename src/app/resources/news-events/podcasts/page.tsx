import { PodcastsSection, FooterSection } from '@/components/sections';
export const metadata = { title: 'Podcasts', description: 'Tech talks and industry insights from our experts.' };
export default function PodcastsPage() {
  return (<main className="min-h-screen bg-white pt-20"><PodcastsSection /><FooterSection /></main>);
}
