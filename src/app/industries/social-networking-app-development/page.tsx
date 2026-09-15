import { Metadata } from 'next';
import { FAQSection, FooterSection, IndustryTemplate } from '@/components/sections';

export const metadata: Metadata = {
  alternates: { canonical: '/industries/social-networking-app-development' },
  title: 'Social Networking App Development | Community Platform Solutions',
  description: 'Build engaging social networking platforms. Community features, real-time messaging, content sharing, and social commerce solutions.',
  keywords: ['social networking app', 'community platform', 'social media app', 'messaging app', 'content sharing', 'social commerce'],
};

const pageData = {
  hero: {
    badge: { icon: 'users', text: 'Social Networking' },
    title: 'Build Thriving',
    highlightedTitle: 'Social Communities',
    description: 'Create engaging social networking platforms that connect people and build communities. From messaging to content sharing and social commerce.',
    stats: [
      { value: 'Real-time', label: 'Messaging and presence' },
      { value: 'Moderation', label: 'Reporting and safety tooling' },
      { value: 'Search', label: 'Elasticsearch-backed discovery' },
      { value: 'GraphQL', label: 'APIs for web and mobile' },
    ],
    gradient: 'from-violet-600 to-purple-600',
  },
  solutions: [
    {
      icon: 'message-circle',
      title: 'Real-time Messaging',
      description: 'Chat and communication features',
      features: ['Direct Messages', 'Group Chats', 'Voice/Video Calls', 'Media Sharing'],
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: 'image',
      title: 'Content Sharing',
      description: 'Posts, stories, and media',
      features: ['Photo/Video Posts', 'Stories', 'Live Streaming', 'Polls & Surveys'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'heart',
      title: 'Social Engagement',
      description: 'Interactions and reactions',
      features: ['Likes & Reactions', 'Comments', 'Shares', 'Mentions & Tags'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: 'users',
      title: 'Community Building',
      description: 'Groups and communities',
      features: ['Interest Groups', 'Events', 'Member Management', 'Community Guidelines'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: 'shopping-bag',
      title: 'Social Commerce',
      description: 'Shop and sell within platform',
      features: ['Product Listings', 'In-app Checkout', 'Creator Shops', 'Affiliate Marketing'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: 'shield',
      title: 'Safety & Moderation',
      description: 'Content moderation and safety',
      features: ['AI Moderation', 'Reporting Tools', 'Privacy Controls', 'Block & Mute'],
      color: 'from-indigo-500 to-purple-500',
    },
  ],
  benefits: [
    {
      title: 'Safety first',
      description: 'Reporting, blocking and moderation queues are part of the first release.',
      metric: 'First release',
    },
    {
      title: 'Feeds that stay fast',
      description: 'Caching and pagination designed for growth and monitored against real budgets.',
      metric: 'Measured',
    },
    {
      title: 'Community features you own',
      description: 'Groups, events and creator tools on a typed backend in your repositories.',
      metric: 'Owned',
    },
  ],
  technologies: [
    'React Native',
    'Node.js',
    'PostgreSQL',
    'Redis',
    'Socket.io',
    'WebRTC',
    'AWS',
    'Elasticsearch',
    'TensorFlow',
    'GraphQL',
  ],
};

export default function SocialNetworkingPage() {
  return (
    <main className="min-h-screen">
      <IndustryTemplate data={pageData} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
