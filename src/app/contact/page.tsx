import {
  ContactHeroSection,
  ContactInfoSection,
  ContactFormSection,
  OfficeLocationsSection,
  ContactCTASection,
  FooterSection
} from '@/components/sections';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <OfficeLocationsSection />
      <ContactCTASection />
      <FooterSection />
    </main>
  );
}
