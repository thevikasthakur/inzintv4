import { Metadata } from 'next';
import { FAQSection, FooterSection, IndustryTemplate } from '@/components/sections';

export const metadata: Metadata = {
  alternates: { canonical: '/industries/entertainment-app-development' },
  title: 'Entertainment App Development | Media & Streaming Solutions',
  description: 'Build engaging entertainment platforms. Video streaming, music apps, gaming platforms, and content management solutions.',
  keywords: ['entertainment app development', 'video streaming', 'music app', 'OTT platform', 'media app', 'content delivery'],
};

const pageData = {
  hero: {
    badge: { icon: 'film', text: 'Entertainment Solutions' },
    title: 'Create Engaging',
    highlightedTitle: 'Entertainment Experiences',
    description: 'Build next-generation entertainment platforms that captivate audiences. From streaming services to gaming and interactive content.',
    stats: [
      { value: 'PBT Classes', label: 'Guided video training platform' },
      { value: 'Streaming', label: 'Adaptive video delivery' },
      { value: 'Subscriptions', label: 'Recurring billing and access' },
      { value: 'React Native', label: 'Mobile apps for both stores' },
    ],
    gradient: 'from-pink-600 to-rose-600',
  },
  solutions: [
    {
      icon: 'play-circle',
      title: 'Video Streaming',
      description: 'OTT platforms and live streaming',
      features: ['Adaptive Bitrate', 'CDN Integration', 'DRM Protection', 'Multi-device Support'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: 'music',
      title: 'Music Streaming',
      description: 'Audio streaming and podcasts',
      features: ['Playlist Management', 'Offline Playback', 'Lyrics Integration', 'Social Sharing'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: 'gamepad-2',
      title: 'Gaming Platform',
      description: 'Mobile and cloud gaming',
      features: ['Multiplayer Support', 'Leaderboards', 'In-app Purchases', 'Cloud Saves'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'sparkles',
      title: 'Content Management',
      description: 'Media library and organization',
      features: ['Metadata Management', 'Content Tagging', 'Search & Discovery', 'Recommendations'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: 'users',
      title: 'Social Features',
      description: 'Community and engagement',
      features: ['User Profiles', 'Comments & Reactions', 'Watch Parties', 'Content Sharing'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: 'credit-card',
      title: 'Monetization',
      description: 'Revenue generation models',
      features: ['Subscriptions', 'Pay-per-view', 'Ad Integration', 'In-app Purchases'],
      color: 'from-indigo-500 to-purple-500',
    },
  ],
  benefits: [
    {
      title: 'A platform on our homepage',
      description: 'PBT Classes: graded video sessions, a music player and progress tracking for dancers and practitioners.',
      metric: 'Shipped',
    },
    {
      title: 'Media pipelines',
      description: 'Upload, transcode and deliver video in the right formats per device.',
      metric: 'Optimised',
    },
    {
      title: 'Monetisation built in',
      description: 'Subscriptions, one-off purchases and entitlement checks in one backend.',
      metric: 'Monetised',
    },
  ],
  technologies: [
    'React Native',
    'Node.js',
    'AWS Media Services',
    'HLS/DASH',
    'CDN',
    'DRM',
    'Redis',
    'Elasticsearch',
    'TensorFlow',
    'GraphQL',
  ],
};

export default function EntertainmentPage() {
  return (
    <main className="min-h-screen">
      <IndustryTemplate data={pageData} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
