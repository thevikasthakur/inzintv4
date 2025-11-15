import { LocationsSection, FooterSection } from '@/components/sections';

export const metadata = {
  title: 'Global Presence',
  description: 'Our offices across India serving clients worldwide with local expertise and global standards.',
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <LocationsSection />
      <FooterSection />
    </main>
  );
}
