import { Metadata } from 'next';
import { FAQSection, FooterSection, IndustryTemplate } from '@/components/sections';

export const metadata: Metadata = {
  alternates: { canonical: '/industries/automotive-app-development' },
  title: 'Automotive App Development | Connected Car Solutions',
  description: 'Build innovative automotive applications. Car sharing, EV charging, fleet management, and connected vehicle solutions.',
  keywords: ['automotive app development', 'connected car', 'car sharing', 'EV charging', 'fleet management', 'vehicle telematics'],
};

const pageData = {
  hero: {
    badge: { icon: 'car', text: 'Automotive Solutions' },
    title: 'Drive the Future with',
    highlightedTitle: 'Smart Mobility',
    description: 'Build cutting-edge automotive platforms for connected vehicles, car sharing, EV charging, and fleet management. Transform the driving experience.',
    stats: [
      { value: 'Telematics', label: 'MQTT and AWS IoT integration' },
      { value: 'Fleet', label: 'Dashboards and maintenance workflows' },
      { value: 'Maps', label: 'Navigation and geofencing' },
      { value: 'React Native', label: 'Driver and owner apps' },
    ],
    gradient: 'from-slate-600 to-gray-600',
  },
  solutions: [
    {
      icon: 'car',
      title: 'Car Sharing Platform',
      description: 'Peer-to-peer vehicle sharing',
      features: ['Vehicle Listings', 'Smart Locks', 'Booking Management', 'Insurance Integration'],
      color: 'from-slate-500 to-gray-500',
    },
    {
      icon: 'battery-charging',
      title: 'EV Charging Network',
      description: 'Electric vehicle charging solutions',
      features: ['Station Finder', 'Reservation System', 'Payment Processing', 'Charging Status'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: 'truck',
      title: 'Fleet Management',
      description: 'Commercial vehicle operations',
      features: ['Vehicle Tracking', 'Maintenance Scheduling', 'Fuel Management', 'Driver Behavior'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'smartphone',
      title: 'Connected Car App',
      description: 'Vehicle connectivity and control',
      features: ['Remote Control', 'Diagnostics', 'Navigation', 'Vehicle Health'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: 'wrench',
      title: 'Service & Maintenance',
      description: 'Digital service management',
      features: ['Service Booking', 'Maintenance Alerts', 'Service History', 'Parts Ordering'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: 'shield',
      title: 'Safety & Security',
      description: 'Vehicle protection systems',
      features: ['GPS Tracking', 'Theft Alerts', 'Emergency Assistance', 'Geofencing'],
      color: 'from-red-500 to-pink-500',
    },
  ],
  benefits: [
    {
      title: 'Data pipelines for vehicles',
      description: 'Ingest telemetry, store it cheaply and surface what operators need.',
      metric: 'Streamed',
    },
    {
      title: 'Operations software',
      description: 'Approvals, maintenance schedules and reporting drawn from our ERP work.',
      metric: 'Workflow',
    },
    {
      title: 'Mobile for the road',
      description: 'Offline-tolerant React Native apps for drivers and technicians.',
      metric: 'Offline-ready',
    },
  ],
  technologies: [
    'React Native',
    'Node.js',
    'PostgreSQL',
    'MQTT',
    'AWS IoT',
    'Google Maps API',
    'Stripe',
    'Twilio',
    'Machine Learning',
    'Blockchain',
  ],
};

export default function AutomotivePage() {
  return (
    <main className="min-h-screen">
      <IndustryTemplate data={pageData} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
