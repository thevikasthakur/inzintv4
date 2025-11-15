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
              title: 'Featured Projects',
              items: [
                {
                  id: 'featured-ai-1',
                  title: 'AI-Powered Healthcare Platform',
                  image: '/assets/images/How-AI-is-revolutionizing-the-oil-and-gas-industry-10-use-cases-and-benefits.edited-01.webp',
                  href: '/case-studies/ai-healthcare',
                },
                {
                  id: 'featured-ai-2',
                  title: 'Generative AI for E-commerce',
                  image: '/assets/images/How-to-Build-an-Intelligent-AI-Model_-An-Enterprise-Perspective-01-scaled.webp',
                  href: '/case-studies/ai-ecommerce',
                },
              ],
            },
          },
        },
        {
          id: 'ai-knowledge-hub',
          label: 'AI Knowledge Hub',
          content: {
            title: 'Learn About AI & Machine Learning',
            items: [
              {
                id: 'ai-blog',
                label: 'AI Blog',
                href: '/inzint-ai/ai-knowledge-hub/blog/category/artificial-intelligence',
                description: 'Latest insights on AI and ML trends',
                icon: 'book-open',
              },
              {
                id: 'ai-guides',
                label: 'AI Guides',
                href: '/inzint-ai/ai-knowledge-hub/guides/artificial-intelligence',
                description: 'Comprehensive guides on AI implementation',
                icon: 'file-text',
              },
              {
                id: 'ai-use-cases',
                label: 'AI Use Cases',
                href: '/inzint-ai/ai-knowledge-hub/ai-use-cases',
                description: 'Real-world applications of AI across industries',
                icon: 'layers',
              },
              {
                id: 'ai-whitepapers',
                label: 'Whitepapers',
                href: '/inzint-ai/ai-knowledge-hub/resources/whitepapers',
                description: 'In-depth research and analysis on AI technologies',
                icon: 'file-check',
              },
            ],
          },
        },
      ],
      cta: {
        title: 'Ready to Transform with AI?',
        description: 'Leverage our expertise in AI and machine learning to build intelligent solutions that drive business growth.',
        buttonText: 'Get AI Consultation',
        buttonLink: '/contact',
        image: '/assets/images/Hire-AI-Developer.webp',
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
          ],
        },
        {
          title: 'Recognition',
          items: [
            {
              id: 'awards',
              label: 'Awards & Recognition',
              href: '/about/recognition/awards',
              description: 'Our achievements and accolades',
              icon: 'award',
            },
            {
              id: 'certifications',
              label: 'Certifications',
              href: '/about/recognition/certifications',
              description: 'Industry certifications and compliance',
              icon: 'shield',
            },
            {
              id: 'partnerships',
              label: 'Partnerships',
              href: '/about/recognition/partnerships',
              description: 'Our technology and business partners',
              icon: 'handshake',
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
            {
              id: 'press',
              label: 'Press & Media',
              href: '/about/connect/press-releases',
              description: 'Latest news and press coverage',
              icon: 'newspaper',
            },
          ],
        },
        {
          title: 'Culture',
          items: [
            {
              id: 'our-values',
              label: 'Our Values',
              href: '/about#values',
              description: 'The principles that guide us',
              icon: 'heart',
            },
            {
              id: 'social-responsibility',
              label: 'Social Impact',
              href: '/about#social-impact',
              description: 'Making a positive difference',
              icon: 'globe',
            },
            {
              id: 'diversity',
              label: 'Diversity & Inclusion',
              href: '/about#diversity',
              description: 'Building an inclusive workplace',
              icon: 'users-round',
            },
          ],
        },
      ],
      cta: {
        title: 'Join Our Journey',
        description: 'Be part of a team that\'s building the future. Explore opportunities to grow your career with us.',
        buttonText: 'Explore Careers',
        buttonLink: '/about/company/careers',
        image: '/assets/images/Hire-AI-Developer.webp',
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
          title: 'Product Development',
          items: [
            {
              id: 'mobile-app-dev',
              label: 'Mobile App Development',
              href: '/services/product-development/mobile-app-development',
              icon: 'smartphone',
              submenu: [
                {
                  id: 'ios-dev',
                  label: 'iOS Development',
                  href: '/services/product-development/mobile-app-development/ios',
                },
                {
                  id: 'android-dev',
                  label: 'Android Development',
                  href: '/services/product-development/mobile-app-development/android',
                },
                {
                  id: 'react-native',
                  label: 'React Native',
                  href: '/services/product-development/mobile-app-development/react-native',
                },
                {
                  id: 'flutter-dev',
                  label: 'Flutter Development',
                  href: '/services/product-development/mobile-app-development/flutter',
                },
              ],
            },
            {
              id: 'web-dev',
              label: 'Web Development',
              href: '/services/product-development/web-development',
              icon: 'globe',
              submenu: [
                {
                  id: 'frontend-dev',
                  label: 'Frontend Development',
                  href: '/services/product-development/web-development/frontend',
                },
                {
                  id: 'backend-dev',
                  label: 'Backend Development',
                  href: '/services/product-development/web-development/backend',
                },
                {
                  id: 'full-stack-dev',
                  label: 'Full Stack Development',
                  href: '/services/product-development/web-development/full-stack',
                },
              ],
            },
            {
              id: 'software-dev',
              label: 'Software Development',
              href: '/services/product-development/software-development',
              icon: 'code',
            },
            {
              id: 'mvp-dev',
              label: 'MVP Development',
              href: '/services/product-development/mvp-development',
              icon: 'rocket',
            },
          ],
        },
        {
          title: 'IT Managed Services',
          items: [
            {
              id: 'staff-augmentation',
              label: 'Staff Augmentation',
              href: '/services/it-managed-services/staff-augmentation',
              icon: 'users',
            },
            {
              id: 'dedicated-teams',
              label: 'Dedicated Development Teams',
              href: '/services/it-managed-services/dedicated-development-teams',
              icon: 'user-group',
            },
            {
              id: 'maintenance-support',
              label: 'Maintenance & Support',
              href: '/services/it-managed-services/maintenance-support',
              icon: 'wrench',
            },
            {
              id: 'devops',
              label: 'DevOps Services',
              href: '/services/it-managed-services/devops-services',
              icon: 'server',
            },
          ],
        },
        {
          title: 'Digital Transformation',
          items: [
            {
              id: 'cloud-services',
              label: 'Cloud Services',
              href: '/services/digital-transformation/cloud-services',
              icon: 'cloud',
              submenu: [
                {
                  id: 'aws',
                  label: 'AWS Development',
                  href: '/services/digital-transformation/cloud-services/aws',
                },
                {
                  id: 'azure',
                  label: 'Azure Development',
                  href: '/services/digital-transformation/cloud-services/azure',
                },
                {
                  id: 'google-cloud',
                  label: 'Google Cloud',
                  href: '/services/digital-transformation/cloud-services/google-cloud',
                },
              ],
            },
            {
              id: 'iot',
              label: 'IoT Development',
              href: '/services/digital-transformation/iot-development',
              icon: 'wifi',
            },
            {
              id: 'blockchain',
              label: 'Blockchain Development',
              href: '/services/digital-transformation/blockchain-development',
              icon: 'link',
            },
            {
              id: 'ar-vr',
              label: 'AR/VR Development',
              href: '/services/digital-transformation/ar-vr-development',
              icon: 'eye',
            },
          ],
        },
        {
          title: 'Consulting',
          items: [
            {
              id: 'product-strategy',
              label: 'Product Strategy',
              href: '/services/consulting/product-strategy',
              icon: 'target',
            },
            {
              id: 'technology-consulting',
              label: 'Technology Consulting',
              href: '/services/consulting/technology-consulting',
              icon: 'settings',
            },
            {
              id: 'digital-consulting',
              label: 'Digital Consulting',
              href: '/services/consulting/digital-consulting',
              icon: 'trending-up',
            },
          ],
        },
        {
          title: 'Data Services',
          items: [
            {
              id: 'data-analytics',
              label: 'Data Analytics',
              href: '/services/data-services/data-analytics',
              icon: 'bar-chart',
            },
            {
              id: 'big-data',
              label: 'Big Data',
              href: '/services/data-services/big-data',
              icon: 'database',
            },
            {
              id: 'data-engineering',
              label: 'Data Engineering',
              href: '/services/data-services/data-engineering',
              icon: 'activity',
            },
          ],
        },
      ],
      cta: {
        title: 'Not Sure Which Service Fits Your Needs?',
        description: 'Our experts will help you choose the right technology stack and services for your project.',
        buttonText: 'Schedule a Consultation',
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
        buttonText: 'Explore Solutions',
        buttonLink: '/industries',
      },
    },
  },
  // {
  //   id: 'portfolio',
  //   label: 'Portfolio',
  //   submenu: {
  //     type: 'grid',
  //     items: [
  //       {
  //         id: 'dominos',
  //         label: 'Domino\'s',
  //         href: '/case-studies/dominos',
  //         description: 'Revolutionizing pizza delivery with mobile ordering',
  //         icon: 'pizza',
  //       },
  //       {
  //         id: 'kfc',
  //         label: 'KFC',
  //         href: '/case-studies/kfc',
  //         description: 'Enhanced digital ordering experience',
  //         icon: 'drumstick',
  //       },
  //       {
  //         id: 'pizzahut',
  //         label: 'Pizza Hut',
  //         href: '/case-studies/pizzahut',
  //         description: 'Seamless online ordering platform',
  //         icon: 'pizza-slice',
  //       },
  //       {
  //         id: 'ikea',
  //         label: 'IKEA',
  //         href: '/case-studies/ikea',
  //         description: 'AR-powered furniture visualization app',
  //         icon: 'sofa',
  //       },
  //       {
  //         id: 'jobget',
  //         label: 'JobGet',
  //         href: '/case-studies/jobget',
  //         description: 'Job marketplace connecting workers and employers',
  //         icon: 'briefcase',
  //       },
  //       {
  //         id: 'mudflap',
  //         label: 'Mudflap',
  //         href: '/case-studies/mudflap',
  //         description: 'Fuel savings platform for truckers',
  //         icon: 'fuel',
  //       },
  //       {
  //         id: 'vyrb',
  //         label: 'VYRB',
  //         href: '/case-studies/vyrb',
  //         description: 'Social audio platform for creators',
  //         icon: 'mic',
  //       },
  //       {
  //         id: 'bootstrap',
  //         label: 'Bootstrap',
  //         href: '/case-studies/bootstrap',
  //         description: 'Banking platform for underserved communities',
  //         icon: 'bank',
  //       },
  //     ],
  //     cta: {
  //       title: 'See What We Can Build Together',
  //       description: 'Explore our portfolio of successful projects across industries and technologies.',
  //       buttonText: 'View All Case Studies',
  //       buttonLink: '/portfolio',
  //     },
  //   },
  // },
  {
    id: 'resources',
    label: 'Resources',
    submenu: {
      type: 'columns',
      columns: [
        {
          title: 'Learn',
          items: [
            {
              id: 'blog',
              label: 'Blog',
              href: '/resources/learn/blog',
              description: 'Latest insights on technology and business',
              icon: 'book-open',
            },
            {
              id: 'guides',
              label: 'Guides',
              href: '/resources/learn/guides',
              description: 'Comprehensive guides on app development',
              icon: 'map',
            },
            {
              id: 'ebooks',
              label: 'E-books',
              href: '/resources/learn/ebooks',
              description: 'In-depth e-books on technology trends',
              icon: 'book',
            },
            {
              id: 'whitepapers',
              label: 'Whitepapers',
              href: '/resources/learn/whitepapers',
              description: 'Research and analysis reports',
              icon: 'file-text',
            },
          ],
        },
        {
          title: 'News & Events',
          items: [
            {
              id: 'press-releases',
              label: 'Press Releases',
              href: '/about/connect/press-releases',
              description: 'Latest company news and updates',
              icon: 'newspaper',
            },
            {
              id: 'events',
              label: 'Events',
              href: '/resources/news-events/events',
              description: 'Upcoming webinars and conferences',
              icon: 'calendar',
            },
            {
              id: 'podcasts',
              label: 'Podcasts',
              href: '/resources/news-events/podcasts',
              description: 'Tech talks and industry insights',
              icon: 'headphones',
            },
          ],
        },
        {
          title: 'Tools & Resources',
          items: [
            {
              id: 'cost-calculator',
              label: 'App Cost Calculator',
              href: '/resources/tools/app-cost-calculator',
              description: 'Estimate your app development cost',
              icon: 'calculator',
            },
            {
              id: 'case-studies',
              label: 'Case Studies',
              href: '/resources/tools/case-studies',
              description: 'Success stories from our clients',
              icon: 'star',
            },
            {
              id: 'infographics',
              label: 'Infographics',
              href: '/resources/tools/infographics',
              description: 'Visual insights on tech trends',
              icon: 'image',
            },
          ],
        },
      ],
      cta: {
        title: 'Stay Updated',
        description: 'Subscribe to our newsletter for the latest insights on technology, business, and innovation.',
        buttonText: 'Subscribe Now',
        buttonLink: '/newsletter',
      },
    },
  },
  {
    id: 'hire-developers',
    label: 'Hire Developers',
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
