import { Metadata } from 'next';
import { FAQSection, FooterSection, IndustryTemplate } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Logistics App Development | Supply Chain Solutions | Inzint',
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
      { value: '30%', label: 'Cost Reduction' },
      { value: '99%', label: 'On-time Delivery' },
      { value: 'Real-time', label: 'Tracking' },
      { value: 'AI', label: 'Route Optimization' },
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
      title: 'Operational Efficiency',
      description: 'Automated workflows and route optimization reduce operational costs',
      metric: '35%',
    },
    {
      title: 'Delivery Speed',
      description: 'Smart routing and real-time tracking improve delivery times',
      metric: '45%',
    },
    {
      title: 'Customer Satisfaction',
      description: 'Real-time updates and reliable delivery enhance customer experience',
      metric: '90%',
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
