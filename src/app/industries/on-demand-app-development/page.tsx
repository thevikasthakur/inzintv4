import { Metadata } from 'next';
import { FAQSection, FooterSection, IndustryTemplate } from '@/components/sections';

export const metadata: Metadata = {
  title: 'On-Demand App Development | Service Marketplace Solutions | Inzint',
  description: 'Build on-demand service platforms like Uber, TaskRabbit, or Airbnb. Multi-sided marketplaces with real-time matching and booking.',
  keywords: ['on-demand app development', 'service marketplace', 'gig economy', 'booking platform', 'peer-to-peer marketplace', 'sharing economy'],
};

const pageData = {
  hero: {
    badge: { icon: 'zap', text: 'On-Demand Solutions' },
    title: 'Power the Gig Economy with',
    highlightedTitle: 'On-Demand Platforms',
    description: 'Create scalable on-demand service marketplaces that connect service providers with customers. From ride-sharing to home services and everything in between.',
    stats: [
      { value: '<30s', label: 'Avg. Match Time' },
      { value: '99.9%', label: 'Uptime' },
      { value: 'Real-time', label: 'Tracking' },
      { value: '24/7', label: 'Support' },
    ],
    gradient: 'from-amber-600 to-orange-600',
  },
  solutions: [
    {
      icon: 'smartphone',
      title: 'Customer App',
      description: 'User-friendly service booking',
      features: ['Service Discovery', 'Real-time Booking', 'Live Tracking', 'In-app Payments'],
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: 'briefcase',
      title: 'Service Provider App',
      description: 'Professional service delivery',
      features: ['Job Acceptance', 'Navigation', 'Earnings Tracking', 'Schedule Management'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'settings',
      title: 'Admin Dashboard',
      description: 'Complete platform management',
      features: ['User Management', 'Analytics', 'Commission Settings', 'Dispute Resolution'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: 'map-pin',
      title: 'Smart Matching',
      description: 'AI-powered service matching',
      features: ['Location-based Matching', 'Skill Matching', 'Availability Check', 'Price Optimization'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: 'credit-card',
      title: 'Payment Processing',
      description: 'Secure multi-party payments',
      features: ['Split Payments', 'Escrow', 'Multi-currency', 'Automated Payouts'],
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: 'star',
      title: 'Rating & Reviews',
      description: 'Trust and quality assurance',
      features: ['Two-way Reviews', 'Rating System', 'Verification Badges', 'Quality Scoring'],
      color: 'from-indigo-500 to-purple-500',
    },
  ],
  benefits: [
    {
      title: 'Faster Matching',
      description: 'AI algorithms connect users with providers in seconds',
      metric: '30s',
    },
    {
      title: 'Platform Revenue',
      description: 'Automated commission and fee collection increases revenue',
      metric: '25%',
    },
    {
      title: 'User Retention',
      description: 'Seamless experience and quality service boost repeat usage',
      metric: '80%',
    },
  ],
  technologies: [
    'React Native',
    'Node.js',
    'PostgreSQL',
    'Redis',
    'Socket.io',
    'Google Maps API',
    'Stripe Connect',
    'Twilio',
    'AWS',
    'Machine Learning',
  ],
};

export default function OnDemandPage() {
  return (
    <main className="min-h-screen">
      <IndustryTemplate data={pageData} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
