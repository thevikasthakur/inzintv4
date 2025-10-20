import type {
  NavItem,
  MenuItem,
  NavSubmenu,
  TabItem,
  ColumnItem,
  CTAItem
} from '@/types';

export const navigationData: NavItem[] = [
  {
    id: 'ai-services',
    label: 'AI Solutions',
    submenu: {
      type: 'columns',
      columns: [
        {
          title: 'AI Development',
          items: [
            {
              id: 'ai-rapid-prototype',
              label: 'AI Rapid Prototype',
              href: '/services/ai-rapid-prototype',
              description: 'Validate your AI concept in 2 weeks - $501',
              icon: 'zap',
            },
            {
              id: 'ai-mvp',
              label: 'AI MVP Development',
              href: '/services/ai-mvp-development',
              description: 'Production-ready AI solution - Starting $1,001',
              icon: 'rocket',
            },
            {
              id: 'chatbot',
              label: 'Full Privacy Chatbot',
              href: '/services/chatbot',
              description: 'RAG-powered chatbots with complete data privacy',
              icon: 'message-square',
            },
            {
              id: 'voice-bot',
              label: 'AI Voice Bot (VoxReception)',
              href: '/services/voice-bot',
              description: 'Bilingual AI receptionist for businesses',
              icon: 'phone',
            },
          ],
        },
        {
          title: 'AI Integrations',
          items: [
            {
              id: 'text-to-speech',
              label: 'Text to Speech',
              href: '/services/text-to-speech',
              description: 'English & Arabic voice synthesis',
              icon: 'volume-2',
            },
            {
              id: 'speech-to-text',
              label: 'Speech to Text',
              href: '/services/speech-to-text',
              description: 'English & Arabic transcription',
              icon: 'mic',
            },
            {
              id: 'cctv-intelligence',
              label: 'Real-time CCTV Intelligence',
              href: '/services/cctv-intelligence',
              description: 'AI-powered video analytics',
              icon: 'video',
            },
            {
              id: 'employee-productivity',
              label: 'AI Employee Productivity',
              href: '/services/employee-productivity',
              description: 'Track time, detect anomalies, boost output',
              icon: 'trending-up',
            },
          ],
        },
      ],
      cta: {
        title: 'Ready to Build with AI?',
        description: 'From rapid prototypes to enterprise solutions, we deliver AI that works.',
        buttonText: 'Get AI Consultation',
        buttonLink: '/contact',
      },
    },
  },
  {
    id: 'web-mobile',
    label: 'Web & Mobile',
    submenu: {
      type: 'columns',
      columns: [
        {
          title: 'Product Development',
          items: [
            {
              id: 'mvp-development',
              label: 'MVP Development',
              href: '/services/mvp-development',
              description: 'Ship in 2-12 weeks - Starting $501',
              icon: 'rocket',
            },
            {
              id: 'mobile-app',
              label: 'Mobile App Development',
              href: '/services/mobile-app',
              description: 'React Native - iOS & Android',
              icon: 'smartphone',
            },
            {
              id: 'web-development',
              label: 'Web Development',
              href: '/services/web-development',
              description: 'Next.js, React, TypeScript stacks',
              icon: 'globe',
            },
            {
              id: 'custom-software',
              label: 'Custom Software',
              href: '/services/custom-software',
              description: 'Tailored business solutions',
              icon: 'code',
            },
          ],
        },
        {
          title: 'Enterprise Solutions',
          items: [
            {
              id: 'custom-erp-crm',
              label: 'Custom ERP & CRM',
              href: '/services/custom-erp-crm',
              description: 'Multi-module enterprise systems',
              icon: 'building',
            },
            {
              id: 'ecommerce',
              label: 'E-Commerce Development',
              href: '/services/ecommerce',
              description: 'Shopify, headless, or custom stores',
              icon: 'shopping-cart',
            },
            {
              id: 'cloud-devops',
              label: 'Cloud & DevOps',
              href: '/services/cloud-devops',
              description: 'AWS, CI/CD, infrastructure as code',
              icon: 'cloud',
            },
            {
              id: 'maintenance-support',
              label: 'Maintenance & Support',
              href: '/services/maintenance-support',
              description: 'Monthly retainers - Starting $1,200',
              icon: 'wrench',
            },
          ],
        },
      ],
      cta: {
        title: 'Not Sure Where to Start?',
        description: `Book a 30-minute discovery call. We'll help you scope and price your project.`,
        buttonText: 'Schedule Discovery',
        buttonLink: '/contact',
      },
    },
  },
  {
    id: 'industries',
    label: 'Industries',
    submenu: {
      type: 'grid',
      items: [
        {
          id: 'healthcare',
          label: 'Healthcare',
          href: '/industries/healthcare',
          description: 'Clinic systems, telemedicine, patient apps',
          icon: 'heart',
        },
        {
          id: 'logistics',
          label: 'Logistics & Warehousing',
          href: '/industries/logistics',
          description: 'ERP modules, tracking, approvals',
          icon: 'truck',
        },
        {
          id: 'hospitality',
          label: 'Hospitality',
          href: '/industries/hospitality',
          description: 'Multi-venue sites, booking, voice bots',
          icon: 'home',
        },
        {
          id: 'education',
          label: 'Education & Training',
          href: '/industries/education',
          description: 'LMS, university programs, student portals',
          icon: 'graduation-cap',
        },
        {
          id: 'fintech',
          label: 'Banking & Fintech',
          href: '/industries/fintech',
          description: 'Payment systems, lending platforms',
          icon: 'dollar-sign',
        },
        {
          id: 'ecommerce',
          label: 'E-Commerce & Retail',
          href: '/industries/ecommerce',
          description: 'Online stores, inventory, marketplaces',
          icon: 'shopping-bag',
        },
        {
          id: 'real-estate',
          label: 'Real Estate',
          href: '/industries/real-estate',
          description: 'Property platforms, crowdfunding',
          icon: 'building-2',
        },
        {
          id: 'events-sports',
          label: 'Events & Sports',
          href: '/industries/events-sports',
          description: 'Tournament portals, ticketing, analytics',
          icon: 'trophy',
        },
      ],
      cta: {
        title: 'Industry-Specific Solutions',
        description: `We've built for clinics, warehouses, hotels, and more. See how we solve your industry's challenges.`,
        buttonText: 'Explore Industries',
        buttonLink: '/industries',
      },
    },
  },
  {
    id: 'products',
    label: 'Our Products',
    submenu: {
      type: 'columns',
      columns: [
        {
          title: 'Flagship Products',
          items: [
            {
              id: 'voxreception',
              label: 'VoxReception',
              href: '/products/voxreception',
              description: 'AI voice receptionist - Bilingual EN/AR',
              icon: 'phone-call',
            },
            {
              id: 'peopleparity',
              label: 'PeopleParity',
              href: '/products/peopleparity',
              description: 'Time tracking & productivity analytics',
              icon: 'activity',
            },
            {
              id: 'pomo-cards',
              label: 'Pomo Cards',
              href: '/products/pomo-cards',
              description: 'Lightweight tasking with Pomodoro flow',
              icon: 'check-square',
            },
            {
              id: 'boardblend',
              label: 'BoardBlend',
              href: '/products/boardblend',
              description: 'Trello-style boards, refined',
              icon: 'trello',
            },
          ],
        },
      ],
      cta: {
        title: 'Try Our Products',
        description: 'Built by us, for businesses like yours. No vendor lock-in, transparent pricing.',
        buttonText: 'See Demos',
        buttonLink: '/products',
      },
    },
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    submenu: {
      type: 'grid',
      items: [
        {
          id: 'hospitality-australia',
          label: 'Hospitality Web Revamp',
          href: '/portfolio/hospitality-australia',
          description: '10+ venues, headless CMS, faster publishing',
          icon: 'globe',
        },
        {
          id: 'sports-platform',
          label: 'Sports Tournament Platform',
          href: '/portfolio/sports-platform',
          description: 'Stabilized Elixir infra, improved throughput',
          icon: 'trophy',
        },
        {
          id: 'clinic-appointment',
          label: 'Clinic Appointment System',
          href: '/portfolio/clinic-appointment',
          description: 'Patient + Clinic apps, bilingual, scalable',
          icon: 'heart',
        },
        {
          id: 'voice-reception',
          label: 'AI Voice Reception',
          href: '/portfolio/voice-reception',
          description: 'SMBs & hospitality, measurable conversion lift',
          icon: 'phone',
        },
      ],
      cta: {
        title: `See What We've Built`,
        description: 'Real projects, real impact. From Australia to MENA.',
        buttonText: 'View All Case Studies',
        buttonLink: '/portfolio',
      },
    },
  },
  {
    id: 'about',
    label: 'About',
    submenu: {
      type: 'columns',
      columns: [
        {
          title: 'Company',
          items: [
            {
              id: 'about-us',
              label: 'About Inzint',
              href: '/about',
              description: 'Founder-led, engineering-first since 2020',
            },
            {
              id: 'founders',
              label: 'Founders',
              href: '/founders',
              description: 'Meet Vikas Thakur & Jaideep Goyal',
            },
            {
              id: 'how-we-work',
              label: 'How We Work',
              href: '/how-we-work',
              description: 'Agile sprints, weekly demos, documented decisions',
            },
            {
              id: 'careers',
              label: 'Careers',
              href: '/careers',
              description: 'Join our engineering team',
            },
          ],
        },
        {
          title: 'Recognition',
          items: [
            {
              id: 'upwork-track-record',
              label: 'Upwork Track Record',
              href: '/upwork-track-record',
              description: '$100K+ earned, 34 jobs, 11,602+ hours',
            },
            {
              id: 'tech-stack',
              label: 'Tech Stack',
              href: '/tech-stack',
              description: 'Next.js, NestJS, AWS, React Native, TypeScript',
            },
          ],
        },
        {
          title: 'Locations',
          items: [
            {
              id: 'locations',
              label: 'Global Presence',
              href: '/locations',
              description: 'India HQ, serving Australia, MENA, global',
            },
            {
              id: 'contact',
              label: 'Contact Us',
              href: '/contact',
              description: 'Book a 30-minute discovery call',
            },
          ],
        },
      ],
    },
  },
  {
    id: 'pricing',
    label: 'Pricing',
    href: '/pricing',
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact',
  },
];

// Utility function to find a nav item by ID
export const findNavItemById = (id: string): NavItem | undefined => {
  return navigationData.find((item) => item.id === id);
};

// Utility function to get all menu items from a nav item
export const getAllMenuItems = (navItem: NavItem): MenuItem[] => {
  const items: MenuItem[] = [];

  if (!navItem.submenu) return items;

  if (navItem.submenu.type === 'tabs' && navItem.submenu.tabs) {
    navItem.submenu.tabs.forEach((tab) => {
      items.push(...tab.content.items);
    });
  } else if (navItem.submenu.type === 'columns' && navItem.submenu.columns) {
    navItem.submenu.columns.forEach((column) => {
      items.push(...column.items);
    });
  } else if (navItem.submenu.type === 'grid' && navItem.submenu.items) {
    items.push(...navItem.submenu.items);
  }

  return items;
};

// Export types for convenience
export type { NavItem, NavSubmenu, TabItem, ColumnItem, MenuItem, CTAItem };
