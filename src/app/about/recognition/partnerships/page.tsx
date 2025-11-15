import { PartnershipsSection, FooterSection } from '@/components/sections';

export const metadata = {
  title: 'Partnerships',
  description: 'Our technology and business partners helping us deliver best-in-class software solutions.',
};

export default function PartnershipsPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <PartnershipsSection />
      <FooterSection />
    </main>
  );
}
