import { Metadata } from 'next';
import { FAQSection, FooterSection, IndustryTemplate } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Food & Beverage App Development | Delivery Platform Solutions | Inzint',
  description: 'Build innovative food delivery and restaurant management platforms. Online ordering, delivery tracking, and restaurant operations solutions.',
  keywords: ['food delivery app', 'restaurant app', 'food ordering', 'delivery platform', 'restaurant management', 'cloud kitchen'],
};

const pageData = {
  hero: {
    badge: { icon: 'utensils', text: 'Food & Beverage' },
    title: 'Transform Food Service with',
    highlightedTitle: 'Digital Solutions',
    description: 'Build comprehensive food delivery platforms that connect restaurants, delivery partners, and hungry customers. From ordering to doorstep delivery.',
    stats: [
      { value: '100K+', label: 'Orders/Day' },
      { value: '<30min', label: 'Avg. Delivery' },
      { value: '10K+', label: 'Restaurants' },
      { value: '4.8/5', label: 'User Rating' },
    ],
    gradient: 'from-red-600 to-orange-600',
  },
  solutions: [
    {
      icon: 'smartphone',
      title: 'Customer App',
      description: 'Seamless food ordering experience',
      features: ['Restaurant Discovery', 'Menu Browsing', 'Order Customization', 'Real-time Tracking'],
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: 'chef-hat',
      title: 'Restaurant Dashboard',
      description: 'Complete order and menu management',
      features: ['Menu Management', 'Order Processing', 'Inventory Control', 'Analytics'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'bike',
      title: 'Delivery Partner App',
      description: 'Efficient delivery management',
      features: ['Order Assignment', 'Navigation', 'Earnings Tracking', 'Delivery Proof'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: 'map-pin',
      title: 'Smart Routing',
      description: 'AI-powered delivery optimization',
      features: ['Route Optimization', 'Multi-order Batching', 'ETA Predictions', 'Zone Management'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: 'credit-card',
      title: 'Payment & Loyalty',
      description: 'Multiple payment options and rewards',
      features: ['Digital Payments', 'Wallets', 'Loyalty Points', 'Promotional Offers'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: 'bar-chart',
      title: 'Business Intelligence',
      description: 'Data-driven insights and analytics',
      features: ['Sales Analytics', 'Customer Insights', 'Performance Metrics', 'Demand Forecasting'],
      color: 'from-indigo-500 to-purple-500',
    },
  ],
  benefits: [
    {
      title: 'Order Volume',
      description: 'Digital platform increases restaurant order capacity',
      metric: '3x',
    },
    {
      title: 'Delivery Efficiency',
      description: 'Smart routing reduces delivery time and costs',
      metric: '40%',
    },
    {
      title: 'Customer Retention',
      description: 'Loyalty programs and seamless experience boost repeat orders',
      metric: '65%',
    },
  ],
  technologies: [
    'React Native',
    'Node.js',
    'PostgreSQL',
    'Redis',
    'Socket.io',
    'Google Maps API',
    'Stripe',
    'Twilio',
    'AWS',
    'Machine Learning',
  ],
};

export default function FoodDeliveryPage() {
  return (
    <main className="min-h-screen">
      <IndustryTemplate data={pageData} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
