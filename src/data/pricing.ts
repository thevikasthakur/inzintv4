// Pricing data for Inzint global website
// Currency: USD (converted from OMR at 1 OMR = $2.60)

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  price: number;
  currency: string;
  popular?: boolean;
  badge?: string;
  features: string[];
  cta: string;
  description?: string;
}

export interface ServicePricing {
  serviceId: string;
  serviceName: string;
  tiers: PricingTier[];
}

// AI/ML Service Pricing
export const aiServicePricing: ServicePricing[] = [
  {
    serviceId: 'ai-rapid-prototype',
    serviceName: 'AI Rapid Prototype',
    tiers: [
      {
        id: 'ai-prototype',
        name: 'AI Rapid Prototype',
        tagline: 'Validate your AI concept in 2 weeks',
        price: 501,
        currency: 'USD',
        badge: 'Quick Start',
        popular: true,
        features: [
          'Working AI prototype in 14 days',
          'Core feature implementation',
          'Basic UI/UX',
          'Documentation & handoff',
          'Technical architecture document',
          '1 week post-delivery support'
        ],
        cta: 'Start Prototype'
      }
    ]
  },
  {
    serviceId: 'ai-mvp',
    serviceName: 'AI MVP Development',
    tiers: [
      {
        id: 'ai-mvp-basic',
        name: 'AI MVP',
        tagline: 'Production-ready AI solution',
        price: 1001,
        currency: 'USD',
        badge: 'Most Popular',
        popular: true,
        features: [
          'Full production deployment',
          'LLM integration (OpenAI/Claude)',
          'API development & documentation',
          'Cloud infrastructure setup (AWS)',
          'Testing & QA',
          '1 month support & maintenance',
          'CI/CD pipeline',
          'Security & compliance basics'
        ],
        cta: 'Build AI MVP'
      }
    ]
  },
  {
    serviceId: 'voice-bot',
    serviceName: 'AI Voice Bot (VoxReception)',
    tiers: [
      {
        id: 'voice-bot-starter',
        name: 'Voice Bot Starter',
        tagline: 'Basic voice reception',
        price: 750,
        currency: 'USD',
        features: [
          'Single language (EN or AR)',
          'Basic call routing',
          'Voicemail transcription',
          'SMS notifications',
          'Up to 100 calls/month',
          '1 month support'
        ],
        cta: 'Get Started'
      },
      {
        id: 'voice-bot-pro',
        name: 'Voice Bot Professional',
        tagline: 'Bilingual AI receptionist',
        price: 1500,
        currency: 'USD',
        badge: 'Recommended',
        popular: true,
        features: [
          'Bilingual (EN + AR)',
          'Advanced call routing & transfers',
          'CRM integration',
          'Analytics dashboard',
          'Up to 500 calls/month',
          'Custom voice & personality',
          '3 months support'
        ],
        cta: 'Go Professional'
      },
      {
        id: 'voice-bot-enterprise',
        name: 'Voice Bot Enterprise',
        tagline: 'Multi-location, white-label',
        price: 3000,
        currency: 'USD',
        badge: 'Enterprise',
        features: [
          'Multi-language support',
          'Unlimited calls',
          'White-label solution',
          'Multi-location routing',
          'Advanced analytics & reporting',
          'Priority support 24/7',
          '6 months support',
          'Dedicated account manager'
        ],
        cta: 'Contact Sales'
      }
    ]
  },
  {
    serviceId: 'chatbot',
    serviceName: 'Full Privacy Chatbot',
    tiers: [
      {
        id: 'chatbot-basic',
        name: 'Basic Chatbot',
        tagline: 'Website chat integration',
        price: 650,
        currency: 'USD',
        features: [
          'Website widget integration',
          'Single language',
          'Knowledge base (up to 100 docs)',
          'Basic conversation flows',
          'Analytics dashboard',
          '1 month support'
        ],
        cta: 'Start Chat'
      },
      {
        id: 'chatbot-advanced',
        name: 'Advanced Chatbot',
        tagline: 'RAG-powered, multi-channel',
        price: 1300,
        currency: 'USD',
        badge: 'Popular',
        popular: true,
        features: [
          'RAG (Retrieval Augmented Generation)',
          'Multi-channel (web, WhatsApp, Telegram)',
          'Unlimited knowledge base',
          'CRM/API integrations',
          'Custom training & fine-tuning',
          'Analytics & conversation insights',
          '3 months support'
        ],
        cta: 'Deploy Advanced'
      }
    ]
  }
];

// Web & Mobile Development Pricing
export const webMobilePricing: ServicePricing[] = [
  {
    serviceId: 'mvp-development',
    serviceName: 'Web/Mobile MVP',
    tiers: [
      {
        id: 'mvp-rapid',
        name: 'Rapid Prototype',
        tagline: 'Validate in 2 weeks',
        price: 501,
        currency: 'USD',
        badge: 'Quick Start',
        features: [
          'Core feature set (3-5 screens)',
          'Basic UI/UX design',
          'Responsive web or mobile',
          'No backend (mock data)',
          'Documentation',
          '1 week support'
        ],
        cta: 'Build Prototype'
      },
      {
        id: 'mvp-standard',
        name: 'Standard MVP',
        tagline: 'Production-ready in 4-6 weeks',
        price: 1001,
        currency: 'USD',
        badge: 'Most Popular',
        popular: true,
        features: [
          'Full-stack development',
          'Next.js/React or React Native',
          'Backend API (NestJS/Node.js)',
          'Database setup (PostgreSQL)',
          'Authentication & authorization',
          'AWS deployment',
          'CI/CD pipeline',
          '1 month support'
        ],
        cta: 'Launch MVP'
      },
      {
        id: 'mvp-premium',
        name: 'Premium MVP',
        tagline: 'Enterprise-grade, 8-12 weeks',
        price: 2500,
        currency: 'USD',
        badge: 'Enterprise',
        features: [
          'All Standard MVP features',
          'Advanced UI/UX design',
          'Multiple user roles',
          'Payment gateway integration',
          'Analytics & reporting',
          'Performance optimization',
          'Security audit',
          '3 months support',
          'Dedicated team'
        ],
        cta: 'Go Premium'
      }
    ]
  },
  {
    serviceId: 'mobile-app',
    serviceName: 'Mobile App Development',
    tiers: [
      {
        id: 'mobile-basic',
        name: 'Single Platform App',
        tagline: 'iOS or Android',
        price: 1500,
        currency: 'USD',
        features: [
          'Native or React Native',
          'Single platform (iOS or Android)',
          '8-10 screens',
          'Backend API',
          'Push notifications',
          'App store submission',
          '2 months support'
        ],
        cta: 'Build for iOS/Android'
      },
      {
        id: 'mobile-cross-platform',
        name: 'Cross-Platform App',
        tagline: 'iOS + Android',
        price: 2500,
        currency: 'USD',
        badge: 'Popular',
        popular: true,
        features: [
          'React Native development',
          'iOS + Android simultaneous',
          '12-15 screens',
          'Backend API & database',
          'Push notifications',
          'In-app purchases (if needed)',
          'Both app store submissions',
          '3 months support'
        ],
        cta: 'Build Cross-Platform'
      }
    ]
  },
  {
    serviceId: 'custom-software',
    serviceName: 'Custom Software Development',
    tiers: [
      {
        id: 'custom-basic',
        name: 'Small Business Software',
        tagline: 'Tailored internal tools',
        price: 2000,
        currency: 'USD',
        features: [
          'Custom workflow automation',
          'Web-based dashboard',
          'Up to 3 user roles',
          'Database design',
          'Reports & exports',
          '3 months support'
        ],
        cta: 'Automate Workflows'
      },
      {
        id: 'custom-erp-crm',
        name: 'Custom ERP/CRM',
        tagline: 'Enterprise modules',
        price: 5000,
        currency: 'USD',
        badge: 'Enterprise',
        popular: true,
        features: [
          'Multi-module system',
          'Advanced user permissions',
          'Inventory/finance/HR modules',
          'API integrations',
          'Mobile companion app',
          'Analytics & BI dashboards',
          '6 months support',
          'Training & onboarding'
        ],
        cta: 'Build ERP/CRM'
      }
    ]
  },
  {
    serviceId: 'ecommerce',
    serviceName: 'E-Commerce Development',
    tiers: [
      {
        id: 'ecommerce-shopify',
        name: 'Shopify Store',
        tagline: 'Launch in 2 weeks',
        price: 325,
        currency: 'USD',
        features: [
          'Theme customization',
          'Product catalog setup',
          'Payment gateway',
          'Shipping integration',
          'Basic SEO',
          '1 month support'
        ],
        cta: 'Launch Shopify'
      },
      {
        id: 'ecommerce-custom',
        name: 'Custom E-Commerce',
        tagline: 'Headless or full-stack',
        price: 3500,
        currency: 'USD',
        badge: 'Scalable',
        popular: true,
        features: [
          'Next.js + Stripe/PayPal',
          'Headless CMS (Sanity/Contentful)',
          'Advanced product filtering',
          'Multi-currency support',
          'Inventory management',
          'Analytics integration',
          '3 months support'
        ],
        cta: 'Build Custom Store'
      }
    ]
  }
];

// Monthly Retainer / Ongoing Support
export const retainerPricing: PricingTier[] = [
  {
    id: 'retainer-part-time',
    name: 'Part-Time Squad',
    tagline: '40 hours/month',
    price: 1200,
    currency: 'USD',
    features: [
      '40 hours per month',
      'Dedicated developer',
      'Bug fixes & enhancements',
      'Weekly updates',
      'Email support (24h response)'
    ],
    cta: 'Start Retainer'
  },
  {
    id: 'retainer-full-time',
    name: 'Full-Time Squad',
    tagline: '80 hours/month',
    price: 2000,
    currency: 'USD',
    badge: 'Best Value',
    popular: true,
    features: [
      '80 hours per month',
      'Senior developer',
      'Feature development',
      'Priority support',
      'Weekly demos',
      'Slack/Teams access'
    ],
    cta: 'Go Full-Time'
  },
  {
    id: 'retainer-dedicated-team',
    name: 'Dedicated Team',
    tagline: '160+ hours/month',
    price: 3500,
    currency: 'USD',
    badge: 'Enterprise',
    features: [
      '160+ hours per month',
      '2-3 person team',
      'Full product ownership',
      '24/7 support',
      'Bi-weekly sprints',
      'Dedicated PM',
      'Security & compliance'
    ],
    cta: 'Build Team'
  }
];

// Industry-specific starting prices (for reference)
export const industryPricing = {
  healthcare: {
    starting: 2500,
    note: 'HIPAA compliance included'
  },
  logistics: {
    starting: 3000,
    note: 'Inventory & tracking modules'
  },
  hospitality: {
    starting: 1500,
    note: 'Booking & CRM integration'
  },
  education: {
    starting: 2000,
    note: 'LMS & student portal'
  },
  fintech: {
    starting: 5000,
    note: 'PCI DSS & security audit'
  }
};

// Conversion helper
export const OMR_TO_USD = 2.60;

export function convertOMRtoUSD(omrPrice: number): number {
  return Math.round(omrPrice * OMR_TO_USD);
}
