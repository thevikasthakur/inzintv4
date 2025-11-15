import { PressReleasesSection, FooterSection } from '@/components/sections';

export const metadata = {
  title: 'Press & Media',
  description: 'Latest news, press releases, and media resources from Inzint.',
};

export default function PressReleasesPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <PressReleasesSection />
      <FooterSection />
    </main>
  );
}
