import { Metadata } from 'next';
import { FAQSection, FooterSection, IndustryTemplate } from '@/components/sections';

export const metadata: Metadata = {
  alternates: { canonical: '/industries/logistics-app-development' },
  title: 'Logistics App Development | Supply Chain Solutions',
  description: 'Build powerful logistics and supply chain management apps. Fleet tracking, warehouse management, route optimization, and delivery solutions.',
  keywords: ['logistics app development', 'supply chain management', 'fleet tracking', 'warehouse management', 'delivery app', 'transportation'],
};

const pageData = {
  hero: {
    badge: { icon: 'truck', text: 'Logistics Solutions' },
    title: 'Optimize Supply Chain with',
    highlightedTitle: 'Smart Logistics',
    description: 'Build comprehensive logistics platforms that streamline operations, reduce costs, and improve delivery efficiency. From fleet management to last-mile delivery.',
    stats: [
      { value: 'ERP modules', label: 'Tracking, approvals and inventory' },
      { value: 'Real-time', label: 'Status updates over WebSockets' },
      { value: 'Maps', label: 'Routing and geofencing' },
      { value: 'AWS', label: 'Backends that scale with volume' },
    ],
    gradient: 'from-orange-600 to-red-600',
  },
  solutions: [
    {
      icon: 'map',
      title: 'Fleet Management',
      description: 'Real-time vehicle tracking and management',
      features: ['GPS Tracking', 'Vehicle Maintenance', 'Driver Management', 'Fuel Monitoring'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: 'package',
      title: 'Warehouse Management',
      description: 'Inventory and warehouse operations',
      features: ['Inventory Control', 'Barcode Scanning', 'Stock Alerts', 'Order Picking'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'route',
      title: 'Route Optimization',
      description: 'AI-powered delivery route planning',
      features: ['Smart Routing', 'Traffic Analysis', 'Multi-stop Planning', 'ETA Predictions'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: 'clock',
      title: 'Last-Mile Delivery',
      description: 'Final delivery to customers',
      features: ['Real-time Tracking', 'Proof of Delivery', 'Customer Notifications', 'Signature Capture'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: 'bar-chart',
      title: 'Analytics & Reporting',
      description: 'Data-driven logistics insights',
      features: ['Performance Metrics', 'Cost Analysis', 'Delivery Analytics', 'Custom Reports'],
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: 'shield',
      title: 'Compliance & Safety',
      description: 'Regulatory compliance management',
      features: ['Driver Logs', 'Safety Checks', 'DOT Compliance', 'Incident Reporting'],
      color: 'from-indigo-500 to-purple-500',
    },
  ],
  benefits: [
    {
      title: 'We have built the modules',
      description: 'Tracking, approvals and reporting modules for logistics and warehousing operations.',
      metric: 'Shipped',
    },
    {
      title: 'Approvals with audit trails',
      description: 'Every status change is recorded, so disputes are settled from the log, not from memory.',
      metric: 'Traceable',
    },
    {
      title: 'Field-ready mobile',
      description: 'React Native apps for drivers and warehouse staff, built on the same backend.',
      metric: 'Mobile',
    },
  ],
  technologies: [
    'React Native',
    'Node.js',
    'PostgreSQL',
    'Google Maps API',
    'MongoDB',
    'Redis',
    'AWS IoT',
    'Machine Learning',
    'GraphQL',
    'Socket.io',
  ],
};

export default function LogisticsPage() {
  return (
    <main className="min-h-screen">
      <IndustryTemplate data={pageData} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
