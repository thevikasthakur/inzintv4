import { CertificationsSection, FooterSection } from '@/components/sections';

export const metadata = {
  title: 'Certifications',
  description: 'Industry certifications and compliance standards ensuring secure, high-quality software development.',
};

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <CertificationsSection />
      <FooterSection />
    </main>
  );
}
