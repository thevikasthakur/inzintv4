import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSection, FooterSection, IndustryTemplate } from '@/components/sections';

export const metadata: Metadata = {
  alternates: { canonical: '/industries/healthcare-app-development' },
  title: 'Healthcare App Development | Medical Software Solutions',
  description: 'HIPAA-compliant healthcare applications for telemedicine, patient portals, EHR/EMR systems, and healthcare management. Expert medical software development.',
  keywords: ['healthcare app development', 'telemedicine', 'patient portal', 'EHR EMR', 'medical software', 'HIPAA compliant'],
};

const pageData = {
  hero: {
    badge: { icon: 'heart-pulse', text: 'Healthcare Solutions' },
    title: 'Revolutionize Healthcare with',
    highlightedTitle: 'Digital Solutions',
    description: 'Build HIPAA-compliant healthcare applications that improve patient care, streamline operations, and enable remote healthcare delivery. From telemedicine to EHR systems.',
    stats: [
      { value: 'HIPAA-ready', label: 'Architecture and access controls' },
      { value: 'HL7 / FHIR', label: 'Interoperability standards' },
      { value: 'Bilingual', label: 'Patient and clinic apps' },
      { value: 'In-region', label: 'Data stays where you need it' },
    ],
    gradient: 'from-blue-600 to-cyan-600',
  },
  solutions: [
    {
      icon: 'video',
      title: 'Telemedicine Platforms',
      description: 'Virtual healthcare and remote consultations',
      features: ['Video Consultations', 'E-Prescriptions', 'Appointment Scheduling', 'Secure Messaging'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'file-text',
      title: 'EHR/EMR Systems',
      description: 'Electronic health records management',
      features: ['Patient Records', 'Clinical Documentation', 'Lab Integration', 'Billing Integration'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: 'users',
      title: 'Patient Portals',
      description: 'Empower patients with digital access',
      features: ['Medical Records Access', 'Test Results', 'Appointment Booking', 'Bill Payment'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: 'hospital',
      title: 'Hospital Management',
      description: 'Complete hospital operations system',
      features: ['Bed Management', 'Inventory Control', 'Staff Scheduling', 'Patient Flow'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: 'activity',
      title: 'Remote Patient Monitoring',
      description: 'IoT-enabled health tracking',
      features: ['Vital Signs Tracking', 'Alert Systems', 'Data Analytics', 'Device Integration'],
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: 'pill',
      title: 'Pharmacy Management',
      description: 'Digital pharmacy and prescription management',
      features: ['Inventory Management', 'Prescription Processing', 'Drug Interaction Alerts', 'Delivery Tracking'],
      color: 'from-indigo-500 to-purple-500',
    },
  ],
  benefits: [
    {
      title: 'Compliance by design',
      description: 'Encryption in transit and at rest, role-based access and audit logging from the first sprint.',
      metric: 'Built in',
    },
    {
      title: 'A pattern we have shipped',
      description: 'A modular clinic appointment system with patient web and mobile apps and a clinic console.',
      metric: 'Shipped',
    },
    {
      title: 'Your data stays yours',
      description: 'Health data is stored in the region you choose and is never used to train AI models.',
      metric: 'Your region',
    },
  ],
  technologies: [
    'React',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
    'WebRTC',
    'HL7/FHIR',
    'AWS HealthLake',
    'Azure Health',
    'Twilio Video',
    'Machine Learning',
  ],
};

export default function HealthcarePage() {
  return (
    <main className="min-h-screen">
      <IndustryTemplate data={pageData} />
      <section className="border-y border-gray-200 bg-white px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-600">
            Engineering case study
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950">
            See how a specialised clinic workflow became one connected platform.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            The ZoeyMed case study covers the system boundaries, workflow model, state management,
            data decisions and testing behind an IVF clinic management platform.
          </p>
          <Link
            href="/case-studies/zoeymed-ivf-clinic-management-platform"
            className="mt-6 inline-flex font-semibold text-primary-700 underline decoration-primary-200 underline-offset-4"
          >
            Read the ZoeyMed healthcare software engineering case study
          </Link>
        </div>
      </section>
      <FAQSection />
      <FooterSection />
    </main>
  );
}
