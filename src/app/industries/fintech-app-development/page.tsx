import { Metadata } from 'next';
import { FAQSection, FooterSection, IndustryTemplate } from '@/components/sections';

export const metadata: Metadata = {
  alternates: { canonical: '/industries/fintech-app-development' },
  title: 'Fintech App Development | Digital Banking & Payment Solutions',
  description: 'Build secure fintech applications with our expert development services. Digital banking, payment gateways, trading platforms, and financial management solutions.',
  keywords: ['fintech app development', 'digital banking', 'payment solutions', 'financial services', 'trading platform', 'mobile banking'],
};

const pageData = {
  hero: {
    badge: { icon: 'dollar-sign', text: 'Fintech Solutions' },
    title: 'Transform Finance with',
    highlightedTitle: 'Digital Innovation',
    description: 'Build secure, scalable fintech applications that revolutionize banking, payments, and financial services. From digital wallets to trading platforms, we deliver cutting-edge solutions.',
    stats: [
      { value: 'PCI-aware', label: 'Payment flows designed to reduce scope' },
      { value: 'Deterministic', label: 'Tests for every money path' },
      { value: 'Audit trail', label: 'Every transaction logged' },
      { value: 'AWS', label: 'Serverless, scalable backends' },
    ],
    gradient: 'from-green-600 to-emerald-600',
  },
  solutions: [
    {
      icon: 'smartphone',
      title: 'Digital Banking',
      description: 'Full-featured mobile and web banking applications',
      features: ['Account Management', 'Fund Transfers', 'Bill Payments', 'Card Management'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: 'credit-card',
      title: 'Payment Gateways',
      description: 'Secure payment processing and integration',
      features: ['Multiple Payment Methods', 'Fraud Detection', 'Real-time Processing', 'Global Support'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'trending-up',
      title: 'Trading Platforms',
      description: 'Stock, crypto, and forex trading solutions',
      features: ['Real-time Charts', 'Order Management', 'Portfolio Tracking', 'Market Analysis'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: 'wallet',
      title: 'Digital Wallets',
      description: 'E-wallet and mobile money solutions',
      features: ['Multi-currency Support', 'QR Payments', 'Peer-to-peer Transfer', 'Loyalty Programs'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: 'shield',
      title: 'Fraud Prevention',
      description: 'Advanced security and fraud detection',
      features: ['AI-powered Detection', 'Risk Scoring', 'Behavioral Analysis', 'Compliance Tools'],
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: 'bar-chart',
      title: 'Financial Analytics',
      description: 'Data-driven insights and reporting',
      features: ['Custom Dashboards', 'Predictive Analytics', 'Automated Reports', 'API Integration'],
      color: 'from-indigo-500 to-purple-500',
    },
  ],
  benefits: [
    {
      title: 'Money paths are tested deterministically',
      description: 'Ledger, refund and payout logic gets exact tests before release; it is one of our written quality bars.',
      metric: 'Tested',
    },
    {
      title: 'Security basics, always',
      description: 'Secrets management, roles and PII handling are set up in sprint one, not audited in later.',
      metric: 'Sprint one',
    },
    {
      title: 'Integrations we know',
      description: 'Payment gateways and account aggregators wired through typed NestJS services.',
      metric: 'Typed',
    },
  ],
  technologies: [
    'React Native',
    'Node.js',
    'PostgreSQL',
    'Redis',
    'Kubernetes',
    'AWS',
    'Stripe API',
    'Plaid',
    'Blockchain',
    'Machine Learning',
  ],
};

export default function FintechPage() {
  return (
    <main className="min-h-screen">
      <IndustryTemplate data={pageData} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
