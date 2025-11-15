import {
  LeadershipHeroSection,
  LeadershipTeamSection,
  FooterSection
} from '@/components/sections';

export const metadata = {
  title: 'Leadership Team',
  description: 'Meet the experienced leadership team driving innovation and excellence at Inzint.',
};

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-white">
      <LeadershipHeroSection />
      <LeadershipTeamSection />
      <FooterSection />
    </main>
  );
}
