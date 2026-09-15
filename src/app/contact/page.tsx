import type { Metadata } from 'next';
import {
  ContactHeroSection,
  ContactInfoSection,
  ContactFormSection,
  OfficeLocationsSection,
  ContactCTASection,
  FooterSection
} from '@/components/sections';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Talk to Inzint about your project. Offices in Noida, Muscat and O'Fallon, Missouri. We reply within one business day.",
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <OfficeLocationsSection />
      <ContactCTASection />
      <FooterSection />
    </main>
  );
}
