import { BlogSection, FooterSection } from '@/components/sections';
export const metadata = { title: 'Blog', description: 'Latest insights on tech, AI, and development trends.' };
export default function BlogPage() {
  return (<main className="min-h-screen bg-white pt-20"><BlogSection /><FooterSection /></main>);
}
