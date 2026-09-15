import { LocationsSection, FooterSection } from '@/components/sections';

export const metadata = {
  alternates: { canonical: '/about/connect/locations' },
  title: 'Our Offices',
  description: "Inzint's offices in Noida, Muscat and O'Fallon, Missouri, serving clients across India, the Gulf and Europe.",
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <LocationsSection />
      <FooterSection />
    </main>
  );
}
