import { Metadata } from 'next';
import { FAQSection, FooterSection, IndustryTemplate } from '@/components/sections';

export const metadata: Metadata = {
  alternates: { canonical: '/industries/real-estate-app-development' },
  title: 'Real Estate App Development | Property Management Solutions',
  description: 'Build innovative real estate platforms. Property listings, virtual tours, CRM systems, and property management solutions for buyers, sellers, and agents.',
  keywords: ['real estate app development', 'property management', 'real estate CRM', 'property listing', 'virtual tours', 'PropTech'],
};

const pageData = {
  hero: {
    badge: { icon: 'home', text: 'Real Estate Solutions' },
    title: 'Modernize Real Estate with',
    highlightedTitle: 'Digital Innovation',
    description: 'Build comprehensive real estate platforms that connect buyers, sellers, and agents. From property listings to virtual tours and smart property management.',
    stats: [
      { value: 'Maps', label: 'Search and geolocation' },
      { value: 'Tours', label: '3D and video walkthroughs' },
      { value: 'Portals', label: 'Buyer, tenant and investor roles' },
      { value: 'Next.js', label: 'Listing sites that load fast' },
    ],
    gradient: 'from-cyan-600 to-blue-600',
  },
  solutions: [
    {
      icon: 'search',
      title: 'Property Listings',
      description: 'Advanced property search and discovery',
      features: ['Smart Filters', 'Map Integration', 'Saved Searches', 'Price Alerts'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: 'camera',
      title: 'Virtual Tours',
      description: '360° property viewing experience',
      features: ['3D Tours', 'Video Walkthroughs', 'AR Visualization', 'Floor Plans'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: 'users',
      title: 'Real Estate CRM',
      description: 'Manage leads and client relationships',
      features: ['Lead Management', 'Client Portal', 'Communication Tools', 'Pipeline Tracking'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: 'building',
      title: 'Property Management',
      description: 'Landlord and tenant management',
      features: ['Rent Collection', 'Maintenance Requests', 'Lease Management', 'Tenant Screening'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: 'trending-up',
      title: 'Market Analytics',
      description: 'Data-driven pricing insights',
      features: ['Price Predictions', 'Market Trends', 'Comparative Analysis', 'Investment ROI'],
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: 'file-text',
      title: 'Document Management',
      description: 'Digital contract and paperwork',
      features: ['E-Signatures', 'Contract Templates', 'Document Storage', 'Compliance Tracking'],
      color: 'from-indigo-500 to-purple-500',
    },
  ],
  benefits: [
    {
      title: 'Listings that rank',
      description: 'Static generation, structured data and image pipelines for large catalogues.',
      metric: 'Indexed',
    },
    {
      title: 'Portals on one backend',
      description: 'Roles, documents and payments handled in one NestJS backend.',
      metric: 'One backend',
    },
    {
      title: 'Built for regional markets',
      description: 'Arabic and English interfaces with local payment and identity providers.',
      metric: 'Regional',
    },
  ],
  technologies: [
    'React Native',
    'Next.js',
    'PostgreSQL',
    'Google Maps API',
    'Matterport',
    'AWS',
    'Stripe',
    'Twilio',
    'TensorFlow',
    'WebGL',
  ],
};

export default function RealEstatePage() {
  return (
    <main className="min-h-screen">
      <IndustryTemplate data={pageData} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
