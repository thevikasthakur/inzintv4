import { Metadata } from 'next';
import { FAQSection, FooterSection, IndustryTemplate } from '@/components/sections';

export const metadata: Metadata = {
  alternates: { canonical: '/industries/education-app-development' },
  title: 'Education App Development | E-Learning Solutions',
  description: 'Build engaging e-learning platforms and educational apps. LMS, virtual classrooms, student portals, and interactive learning solutions.',
  keywords: ['education app development', 'e-learning platform', 'LMS', 'virtual classroom', 'online learning', 'EdTech solutions'],
};

const pageData = {
  hero: {
    badge: { icon: 'graduation-cap', text: 'Education Solutions' },
    title: 'Transform Learning with',
    highlightedTitle: 'Digital Education',
    description: 'Create innovative e-learning platforms that make education accessible, engaging, and effective. From K-12 to corporate training and online universities.',
    stats: [
      { value: 'Thotis IA', label: 'Live AI education platform, 2026' },
      { value: 'Personas', label: 'Catalogue for four learner types' },
      { value: 'Voice', label: 'Real-time voice with LiveKit' },
      { value: 'Automated', label: 'QA suite before every release' },
    ],
    gradient: 'from-indigo-600 to-purple-600',
  },
  solutions: [
    {
      icon: 'monitor',
      title: 'Learning Management',
      description: 'Complete LMS for course delivery',
      features: ['Course Creation', 'Progress Tracking', 'Assessments', 'Certificates'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: 'video',
      title: 'Virtual Classrooms',
      description: 'Live interactive learning sessions',
      features: ['Video Conferencing', 'Screen Sharing', 'Breakout Rooms', 'Recording'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'book-open',
      title: 'Content Management',
      description: 'Digital library and resources',
      features: ['Video Lessons', 'Interactive Content', 'Assignments', 'Resource Library'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: 'users',
      title: 'Student Portal',
      description: 'Centralized student dashboard',
      features: ['Attendance Tracking', 'Grade Reports', 'Schedule Management', 'Parent Access'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: 'trophy',
      title: 'Gamification',
      description: 'Engaging learning through games',
      features: ['Points & Badges', 'Leaderboards', 'Challenges', 'Rewards'],
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: 'bar-chart',
      title: 'Analytics & Insights',
      description: 'Data-driven learning outcomes',
      features: ['Performance Analytics', 'Learning Patterns', 'Engagement Metrics', 'Custom Reports'],
      color: 'from-purple-500 to-pink-500',
    },
  ],
  benefits: [
    {
      title: 'A published case study',
      description: 'We re-architected Thotis IA, a live French education platform, across data, personas, voice and QA.',
      metric: 'Shipped',
    },
    {
      title: 'Evidence-based migration',
      description: 'Learner records were migrated from the data that existed, with conservative defaults and user correction.',
      metric: 'Careful',
    },
    {
      title: 'Multilingual',
      description: 'Translated display names and content workflows for English, French and Arabic audiences.',
      metric: 'Multilingual',
    },
  ],
  technologies: [
    'React',
    'Node.js',
    'MongoDB',
    'WebRTC',
    'AWS',
    'Zoom SDK',
    'Moodle',
    'SCORM',
    'xAPI',
    'Machine Learning',
  ],
};

export default function EducationPage() {
  return (
    <main className="min-h-screen">
      <IndustryTemplate data={pageData} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
