import { Metadata } from 'next';
import { FAQSection, FooterSection, IndustryTemplate } from '@/components/sections';

export const metadata: Metadata = {
  title: 'E-commerce App Development | Online Store Solutions | Inzint',
  description: 'Build powerful e-commerce platforms with advanced features. Mobile shopping apps, B2B/B2C marketplaces, and omnichannel retail solutions.',
  keywords: ['ecommerce app development', 'online store', 'shopping app', 'marketplace', 'retail solutions', 'mobile commerce'],
};

const pageData = {
  hero: {
    badge: { icon: 'shopping-cart', text: 'E-commerce Solutions' },
    title: 'Build Next-Gen',
    highlightedTitle: 'Shopping Experiences',
    description: 'Create scalable e-commerce platforms that drive sales and customer engagement. From mobile shopping apps to enterprise marketplaces with AI-powered personalization.',
    stats: [
      { value: '3x', label: 'Conversion Rate' },
      { value: '50K+', label: 'Products Supported' },
      { value: '99.9%', label: 'Uptime' },
      { value: '<2s', label: 'Page Load' },
    ],
    gradient: 'from-purple-600 to-pink-600',
  },
  solutions: [
    {
      icon: 'smartphone',
      title: 'Mobile Commerce',
      description: 'Native iOS and Android shopping apps',
      features: ['Product Catalog', 'Cart & Checkout', 'Payment Integration', 'Push Notifications'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: 'store',
      title: 'B2C Marketplaces',
      description: 'Consumer-focused online stores',
      features: ['Multi-vendor Support', 'Product Reviews', 'Wishlist', 'Order Tracking'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'building',
      title: 'B2B Platforms',
      description: 'Wholesale and bulk ordering systems',
      features: ['Bulk Pricing', 'Quote Management', 'Account Hierarchy', 'Credit Terms'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: 'shopping-bag',
      title: 'Omnichannel Retail',
      description: 'Unified commerce across channels',
      features: ['Inventory Sync', 'Click & Collect', 'Unified Customer Data', 'POS Integration'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: 'sparkles',
      title: 'AI Personalization',
      description: 'Smart product recommendations',
      features: ['Product Suggestions', 'Dynamic Pricing', 'Customer Segmentation', 'Predictive Analytics'],
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: 'truck',
      title: 'Logistics & Fulfillment',
      description: 'End-to-end order management',
      features: ['Multi-warehouse', 'Shipping Integration', 'Returns Management', 'Real-time Tracking'],
      color: 'from-indigo-500 to-purple-500',
    },
  ],
  benefits: [
    {
      title: 'Higher Conversion',
      description: 'Optimized checkout flow and personalization boost sales conversion rates',
      metric: '45%',
    },
    {
      title: 'Customer Retention',
      description: 'Loyalty programs and personalized experiences increase repeat purchases',
      metric: '60%',
    },
    {
      title: 'Mobile Sales',
      description: 'Mobile-first design captures growing mobile commerce market',
      metric: '70%',
    },
  ],
  technologies: [
    'React Native',
    'Next.js',
    'Shopify API',
    'Stripe',
    'PostgreSQL',
    'Elasticsearch',
    'Redis',
    'AWS',
    'Algolia',
    'TensorFlow',
  ],
};

export default function EcommercePage() {
  return (
    <main className="min-h-screen">
      <IndustryTemplate data={pageData} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
