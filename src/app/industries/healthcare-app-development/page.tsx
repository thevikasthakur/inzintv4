import { Metadata } from 'next';
import { FAQSection, FooterSection, IndustryTemplate } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Healthcare App Development | Medical Software Solutions | Inzint',
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
      { value: 'HIPAA', label: 'Compliant' },
      { value: '99.99%', label: 'Availability' },
      { value: 'HL7/FHIR', label: 'Standards' },
      { value: '24/7', label: 'Support' },
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
      title: 'HIPAA Compliance',
      description: 'Full compliance with healthcare data privacy and security regulations',
      metric: '100%',
    },
    {
      title: 'Improved Patient Care',
      description: 'Enhanced patient outcomes through better access and care coordination',
      metric: '40%',
    },
    {
      title: 'Cost Reduction',
      description: 'Reduced operational costs through automation and efficiency',
      metric: '35%',
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
      <FAQSection />
      <FooterSection />
    </main>
  );
}
