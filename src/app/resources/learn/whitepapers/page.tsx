import { WhitepapersSection, FooterSection } from '@/components/sections';

export const metadata = {
  title: 'Whitepapers',
  description: 'Research and analysis reports on AI technologies and industry trends.',
};

export default function WhitepapersPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <WhitepapersSection />
      <FooterSection />
    </main>
  );
}
