import { Metadata } from 'next';
import { FAQSection, FooterSection, IndustryTemplate } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Travel & Hospitality App Development | Booking Solutions | Inzint',
  description: 'Build innovative travel and hospitality platforms. Flight booking, hotel reservations, travel planning, and tourism management solutions.',
  keywords: ['travel app development', 'hotel booking', 'flight reservation', 'tourism app', 'hospitality solutions', 'travel management'],
};

const pageData = {
  hero: {
    badge: { icon: 'plane', text: 'Travel & Hospitality' },
    title: 'Revolutionize Travel with',
    highlightedTitle: 'Digital Solutions',
    description: 'Create comprehensive travel platforms that make trip planning seamless. From booking engines to personalized itineraries and travel management.',
    stats: [
      { value: '1M+', label: 'Bookings/Month' },
      { value: '200+', label: 'Destinations' },
      { value: 'AI', label: 'Recommendations' },
      { value: '24/7', label: 'Support' },
    ],
    gradient: 'from-sky-600 to-blue-600',
  },
  solutions: [
    {
      icon: 'search',
      title: 'Booking Engine',
      description: 'Flights, hotels, and packages',
      features: ['Multi-source Search', 'Price Comparison', 'Instant Booking', 'Payment Gateway'],
      color: 'from-sky-500 to-blue-500',
    },
    {
      icon: 'calendar',
      title: 'Itinerary Planning',
      description: 'Smart travel planning tools',
      features: ['Trip Builder', 'Activity Suggestions', 'Route Optimization', 'Budget Planning'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: 'building',
      title: 'Hotel Management',
      description: 'Property and reservation management',
      features: ['Room Inventory', 'Booking Calendar', 'Guest Management', 'Housekeeping'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: 'map',
      title: 'Travel Guides',
      description: 'Destination information and guides',
      features: ['Local Attractions', 'Restaurant Reviews', 'Offline Maps', 'AR Navigation'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: 'users',
      title: 'Loyalty Programs',
      description: 'Reward and retain customers',
      features: ['Points System', 'Tier Benefits', 'Exclusive Deals', 'Partner Rewards'],
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: 'globe',
      title: 'Multi-language Support',
      description: 'Global accessibility features',
      features: ['20+ Languages', 'Currency Conversion', 'Local Payment Methods', 'Regional Content'],
      color: 'from-indigo-500 to-purple-500',
    },
  ],
  benefits: [
    {
      title: 'Booking Conversion',
      description: 'Streamlined booking flow increases conversion rates',
      metric: '55%',
    },
    {
      title: 'Customer Engagement',
      description: 'Personalized recommendations boost user engagement',
      metric: '70%',
    },
    {
      title: 'Revenue Growth',
      description: 'Upselling and cross-selling opportunities increase revenue',
      metric: '40%',
    },
  ],
  technologies: [
    'React Native',
    'Next.js',
    'PostgreSQL',
    'Amadeus API',
    'Stripe',
    'Google Maps API',
    'AWS',
    'Redis',
    'GraphQL',
    'TensorFlow',
  ],
};

export default function TravelPage() {
  return (
    <main className="min-h-screen">
      <IndustryTemplate data={pageData} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
