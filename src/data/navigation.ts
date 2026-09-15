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
    id: 'inzint-ai',
    label: 'InzintAI',
    submenu: {
      type: 'tabs',
      tabs: [
        {
          id: 'ai-tech-solutions',
          label: 'AI Tech Solutions',
          content: {
            title: 'AI-Powered Technology Solutions',
            items: [
              {
                id: 'generative-ai',
                label: 'Generative AI',
                href: '/inzint-ai/ai-tech-solutions/generative-ai-development-company',
                description: 'Build next-gen applications with GPT, LLMs, and generative AI models',
                icon: 'sparkles',
              },
              {
                id: 'ai-agents',
                label: 'AI Agents',
                href: '/inzint-ai/ai-tech-solutions/ai-agent-development',
                description: 'Autonomous AI agents for intelligent task automation',
                icon: 'bot',
              },
              {
                id: 'chatgpt-integration',
                label: 'ChatGPT Integration',
                href: '/inzint-ai/ai-tech-solutions/chatgpt-integration-services',
                description: 'Integrate ChatGPT capabilities into your applications',
                icon: 'message-square',
              },
              {
                id: 'custom-llm',
                label: 'Custom LLM Development',
                href: '/inzint-ai/ai-tech-solutions/custom-llm-development',
                description: 'Build tailored large language models for your business',
                icon: 'brain',
              },
              {
                id: 'machine-learning',
                label: 'Machine Learning',
                href: '/inzint-ai/ai-tech-solutions/machine-learning-development',
                description: 'ML solutions for predictive analytics and automation',
                icon: 'cpu',
              },
              {
                id: 'ai-consulting',
                label: 'AI Consulting',
                href: '/inzint-ai/ai-tech-solutions/ai-consulting-services',
                description: 'Strategic AI consulting to transform your business',
                icon: 'lightbulb',
              },
            ],
            featuredSection: {
              title: 'Case Studies',
              items: [
                {
                  id: 'featured-thotis',
                  title: 'Thotis IA: re-architecting a live AI education platform',
                  image: '/assets/images/case-studies/thotis-ia/product-screenshots/2-home.png',
                  href: '/case-studies/thotis-ai-platform-rearchitecture',
                },
                {
                  id: 'featured-bernard',
                  title: 'La Cuisine de Bernard: WordPress to Next.js, Payload and MongoDB',
                  image: '/assets/images/case-studies/bernard-migration-map.svg',
                  href: '/case-studies/la-cuisine-de-bernard-wordpress-nextjs-payload-mongodb-migration',
                },
              ],
            },
          },
        },
      ],
      cta: {
        title: 'Ready to Transform with AI?',
        description: 'Leverage our expertise in AI and machine learning to build intelligent solutions that drive business growth.',
        buttonText: 'Get AI Consultation',
        buttonLink: '/contact',
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
              label: 'About Us',
              href: '/about',
              description: 'Learn about our journey and mission',
              icon: 'building',
            },
            {
              id: 'leadership',
              label: 'Leadership',
              href: '/about/company/leadership',
              description: 'Meet our executive team',
              icon: 'users',
            },
            {
              id: 'careers',
              label: 'Careers',
              href: '/about/company/careers',
              description: 'Join our growing team',
              icon: 'briefcase',
            },
            {
              id: 'how-we-work',
              label: 'How We Work',
              href: '/about/company/how-we-work',
              description: 'Our agile process and engineering culture',
              icon: 'cog',
            },
            {
              id: 'our-values',
              label: 'Our Values',
              href: '/about#values',
              description: 'The principles that guide us',
              icon: 'heart',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              id: 'locations',
              label: 'Global Presence',
              href: '/about/connect/locations',
              description: 'Our offices around the world',
              icon: 'map-pin',
            },
            {
              id: 'contact',
              label: 'Contact Us',
              href: '/contact',
              description: 'Get in touch with our team',
              icon: 'mail',
            },
          ],
        },
      ],
      cta: {
        title: 'Join Our Journey',
        description: 'Be part of a team that\'s building the future. Explore opportunities to grow your career with us.',
        buttonText: 'Explore Careers',
        buttonLink: '/about/company/careers',
      },
    },
  },
  {
    id: 'services',
    label: 'Services',
    submenu: {
      type: 'columns',
      columns: [
        {
          title: 'Build',
          items: [
            { id: 'web-dev', label: 'Web Development', href: '/services/product-development/web-development', description: 'Next.js platforms and web apps', icon: 'globe' },
            { id: 'backend-dev', label: 'Backend & APIs', href: '/services/product-development/web-development/backend', description: 'Node.js, NestJS, PostgreSQL', icon: 'server' },
            { id: 'mobile-app-dev', label: 'Mobile Apps', href: '/services/product-development/mobile-app-development', description: 'React Native for iOS and Android', icon: 'smartphone' },
            { id: 'mvp-dev', label: 'MVP Development', href: '/services/product-development/mvp-development', description: 'First release in weeks', icon: 'rocket' },
            { id: 'software-dev', label: 'Custom Software & ERP', href: '/services/product-development/software-development', description: 'Internal tools and modules', icon: 'code' },
          ],
        },
        {
          title: 'Run',
          items: [
            { id: 'cloud-services', label: 'Cloud & DevOps', href: '/services/digital-transformation/cloud-services', description: 'AWS, infrastructure as code, CI/CD', icon: 'cloud' },
            { id: 'maintenance-support', label: 'Maintenance & Support', href: '/services/it-managed-services/maintenance-support', description: 'Retainers with response targets', icon: 'wrench' },
            { id: 'dedicated-teams', label: 'Dedicated Squads', href: '/services/it-managed-services/dedicated-development-teams', description: 'A founder-led squad on retainer', icon: 'users' },
          ],
        },
        {
          title: 'Advise',
          items: [
            { id: 'product-strategy', label: 'Product Strategy', href: '/services/consulting/product-strategy', description: 'Discovery, roadmap, metrics', icon: 'target' },
            { id: 'technology-consulting', label: 'Technology Consulting & Audits', href: '/services/consulting/technology-consulting', description: 'Architecture reviews and plans', icon: 'settings' },
          ],
        },
        {
          title: 'Data & AI',
          items: [
            { id: 'data-engineering', label: 'Data Engineering', href: '/services/data-services/data-engineering', description: 'Pipelines, migrations, reporting', icon: 'database' },
            { id: 'generative-ai-service', label: 'Generative AI', href: '/inzint-ai/ai-tech-solutions/generative-ai-development-company', description: 'LLM features, RAG, voice agents', icon: 'sparkles' },
            { id: 'ai-agents-service', label: 'AI Agents', href: '/inzint-ai/ai-tech-solutions/ai-agent-development', description: 'Bounded, evaluated automation', icon: 'bot' },
          ],
        },
      ],
      cta: {
        title: 'Not sure where to start?',
        description: 'Book a free 30-minute discovery call. You leave with a clear next step, whether or not that step is us.',
        buttonText: 'Book a Discovery Call',
        buttonLink: 'https://outlook.office.com/bookwithme/user/dca57ea980d34c5ba4dd0dac1c5617f7%40inzint.com?anonymous&ismsaljsauthenabled=true',
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
          id: 'fintech',
          label: 'Fintech',
          href: '/industries/fintech-app-development',
          description: 'Digital banking, payment solutions, and financial services',
          icon: 'dollar-sign',
        },
        {
          id: 'healthcare',
          label: 'Healthcare',
          href: '/industries/healthcare-app-development',
          description: 'Telemedicine, EHR, and patient care solutions',
          icon: 'heart',
        },
        {
          id: 'ecommerce',
          label: 'E-commerce',
          href: '/industries/ecommerce-app-development',
          description: 'Online marketplaces and retail solutions',
          icon: 'shopping-cart',
        },
        {
          id: 'education',
          label: 'Education',
          href: '/industries/education-app-development',
          description: 'E-learning platforms and edtech solutions',
          icon: 'graduation-cap',
        },
        {
          id: 'real-estate',
          label: 'Real Estate',
          href: '/industries/real-estate-app-development',
          description: 'Property management and real estate platforms',
          icon: 'home',
        },
        {
          id: 'logistics',
          label: 'Logistics',
          href: '/industries/logistics-app-development',
          description: 'Supply chain and transportation solutions',
          icon: 'truck',
        },
        {
          id: 'on-demand',
          label: 'On-Demand',
          href: '/industries/on-demand-app-development',
          description: 'Service marketplaces and delivery platforms',
          icon: 'zap',
        },
        {
          id: 'travel',
          label: 'Travel & Hospitality',
          href: '/industries/travel-app-development',
          description: 'Booking platforms and travel solutions',
          icon: 'plane',
        },
        {
          id: 'entertainment',
          label: 'Entertainment',
          href: '/industries/entertainment-app-development',
          description: 'Media streaming and content platforms',
          icon: 'film',
        },
        {
          id: 'social-networking',
          label: 'Social Networking',
          href: '/industries/social-networking-app-development',
          description: 'Community platforms and social apps',
          icon: 'users',
        },
        {
          id: 'food-beverage',
          label: 'Food & Beverage',
          href: '/industries/food-delivery-app-development',
          description: 'Food delivery and restaurant solutions',
          icon: 'utensils',
        },
        {
          id: 'automotive',
          label: 'Automotive',
          href: '/industries/automotive-app-development',
          description: 'Connected car and mobility solutions',
          icon: 'car',
        },
      ],
      cta: {
        title: 'Industry-Specific Solutions',
        description: 'We understand the unique challenges of your industry and deliver tailored solutions that drive results.',
        buttonText: 'Talk to us about your industry',
        buttonLink: '/contact',
      },
    },
  },
  {
    id: 'resources',
    label: 'Resources',
    submenu: {
      type: 'columns',
      columns: [
        {
          title: 'Resources',
          items: [
            {
              id: 'case-studies',
              label: 'Case Studies',
              href: '/resources/tools/case-studies',
              description: 'The engineering stories behind our work',
              icon: 'book-open',
            },
            {
              id: 'cost-calculator',
              label: 'App Cost Calculator',
              href: '/resources/tools/app-cost-calculator',
              description: 'Estimate your app development cost',
              icon: 'calculator',
            },
            {
              id: 'support',
              label: 'Customer Support',
              href: '/support',
              description: 'Support channels, response times and FAQs',
              icon: 'wrench',
            },
          ],
        },
      ],
      cta: {
        title: 'See the work',
        description: 'Read how we rebuilt a decade-old publishing platform and re-architected a live AI product.',
        buttonText: 'Read the Case Studies',
        buttonLink: '/resources/tools/case-studies',
      },
    },
  },
  {
    id: 'hire-developers',
    label: 'Dedicated Squads',
    href: '/hire-developers',
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
