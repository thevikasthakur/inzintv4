// Inzint Company Profile Data
// Source: company_profile.yaml
// This file is the single source of truth for offices, contact details, clients and positioning.

export const company = {
  name: 'Inzint Private Limited',
  shortName: 'Inzint',
  tagline: 'AI-driven software, built with startup speed and enterprise rigor.',

  founded: 2020,

  founders: [
    {
      name: 'Vikas Thakur',
      title: 'Co-founder & Director',
      note: 'Founder-led delivery, hands-on in architecture and AI.',
    },
    {
      name: 'Jaideep Goyal',
      title: 'Co-founder & Director',
    },
  ],

  headquarters: {
    city: 'Noida',
    state: 'Uttar Pradesh',
    country: 'India',
    address: 'B-111, Second Floor, Sector 65, Noida, UP 201301, India',
  },

  positioning: {
    oneLiners: [
      'AI-driven software, built with startup speed and enterprise rigor.',
      'From idea to production: clean code, clear outcomes.',
      'Modern web, mobile, and AI—designed to ship and scale.',
    ],
    elevatorPitch: `We're an engineering-first team that ships production-ready software: AI voice/reception systems, high-performance web/mobile apps, and cloud backends that scale. We work in small senior squads, document decisions, and measure success with real user and business metrics.`,
  },

  services: [
    'Product strategy & discovery (workshops, roadmaps, success metrics)',
    'Full-stack web & mobile development (Next.js/React/TypeScript, React Native)',
    'Backend & APIs (Node.js/NestJS, TypeORM, PostgreSQL, serverless/AWS)',
    'AI/ML integrations (LLMs, voice bots, RAG, analytics, automation)',
    'Cloud & DevOps (AWS: Lambda, API Gateway, S3, CloudFront, IaC, CI/CD)',
    'Data engineering & reporting (ETL, warehouses, dashboards)',
    'QA, performance, observability, and ongoing maintenance',
  ],

  deliveryModel: [
    'Founder-led, small senior squads',
    'Agile sprints with weekly demos or recorded updates',
    'Design-to-code pipelines; test coverage and CI from day one',
    'Documentation as an artifact (ADR, runbooks, onboarding guides)',
  ],

  flagshipProducts: [
    {
      name: 'VoxReception',
      tagline: 'AI voice receptionist for businesses',
      summary: 'Bilingual (EN/AR) voice bot that answers, routes, and follows up.',
    },
    {
      name: 'PeopleParity',
      tagline: 'Time tracking & productivity analytics',
      summary: 'Desktop tracker, anomaly detection, and activity insights.',
    },
    {
      name: 'Pomo Cards',
      tagline: 'Lightweight tasking with Pomodoro flow',
      summary: 'Unlimited users, storage-based pricing, EN/AR.',
    },
    {
      name: 'BoardBlend',
      tagline: 'Trello-style boards, refined',
      summary: 'Clean board UX with modern collaboration patterns.',
    },
  ],

  industries: [
    'Logistics & warehousing (ERP modules, tracking, approvals)',
    'Hospitality (multi-venue sites, booking integrations, voice bots)',
    'Healthcare (clinic appointment systems, patient/clinic apps)',
    'Education & training (university/partner programs, LMS workflows)',
    'Sports & events (tournament portals, analytics, infrastructure)',
  ],

  portfolioHighlights: [
    {
      title: 'Hospitality web portfolio revamp',
      impact: 'Reusable components across 10+ venues; faster publishing, unique SEO per site.',
      stack: 'WordPress/Headless + Next.js; analytics & booking integrations.',
    },
    {
      title: 'Sports tournament platform rescue',
      impact: 'Stabilized infra, reduced downtime, improved throughput and admin UX.',
      stack: 'Elixir/AWS + modern front-end.',
    },
    {
      title: 'Clinic Appointment System (modular)',
      impact: 'Patient mobile/web + Clinic app; bilingual, scalable feature tiers.',
      stack: 'Next.js, NestJS, PostgreSQL, AWS.',
    },
    {
      title: 'AI Voice Reception (SMBs & hospitality)',
      impact: 'Fewer missed calls, structured follow-ups, measurable conversion lift.',
      stack: 'LLM + telephony + serverless.',
    },
  ],

  // Clients that are already public on the site: published case studies,
  // the recorded video testimonial, and the live featured projects.
  clients: [
    {
      name: 'La Cuisine de Bernard',
      sector: 'Digital publishing platform',
      href: '/case-studies/la-cuisine-de-bernard-wordpress-nextjs-payload-mongodb-migration',
    },
    {
      name: 'Thotis IA',
      sector: 'AI education platform',
      href: '/case-studies/thotis-ai-platform-rearchitecture',
    },
    {
      name: 'TALEER LLC',
      sector: 'Three products over 2.5 years, Sharjah, UAE',
    },
    {
      name: 'PBT Classes',
      sector: 'Guided ballet training platform',
    },
    {
      name: 'Fantasy sports platform',
      sector: 'Cricket, football and basketball contests',
    },
  ],

  proofPoints: {
    culture: [
      'Founder-led engagement with direct access to decision makers.',
      'Design → build → measure loop with weekly demos.',
      'Documented standards: coding, Git, environments, and QA gates.',
    ],
    metrics: [
      'Upwork track record: $100K+ earned, 34 jobs, 11,602+ hours (as of Oct 2025).',
      'Multi-country delivery: India base, projects across India, MENA, and global markets.',
    ],
  },

  techStack: {
    frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    mobile: ['React Native'],
    backend: ['Node.js', 'NestJS', 'TypeORM', 'PostgreSQL', 'Redis'],
    cloudDevOps: [
      'AWS (Lambda, API Gateway, S3, CloudFront, SSM)',
      'IaC (CDK/Serverless)',
      'CI/CD',
    ],
    dataAI: ['LLMs & RAG', 'analytics pipelines', 'ETL/warehouses'],
    tooling: ['Monorepos/Turborepo', 'Testing (Jest/Playwright)', 'Observability'],
  },

  engagementModels: [
    'Fixed-scope, milestone-based builds',
    'Monthly product squads (retainer)',
    'Architecture & audit engagements',
  ],

  communicationCadence: [
    'Weekly live demos or recorded Looms',
    'Issue tracking, MoMs after every client meeting',
    'English-only professional communication',
  ],

  qualityBars: [
    'Deterministic tests for money/edge cases',
    'Performance budgets and error budgets',
    'Security basics: secrets, roles, PII handling',
  ],

  ctas: [
    'Book a 30-minute discovery call',
    'Request a technical audit',
    'See a VoxReception demo',
    'Start a two-week pilot sprint',
  ],

  seo: {
    primaryKeywords: [
      'AI software development company India',
      'Next.js and Node.js development agency',
      'AWS serverless consultants',
      'AI voice bot for businesses',
      'Custom logistics & healthcare software',
    ],
    contentPillars: [
      'Case studies with measurable impact',
      'Architecture notes (why we chose X)',
      'Playbooks (sprint cadence, QA, DevOps)',
      'Guides on AI voice automation and RAG',
    ],
  },

  contact: {
    email: 'hello@inzint.com',
    supportEmail: 'support@inzint.com',
    phone: '+91 92899 09174',
    phoneHref: 'tel:+919289909174',
    phoneUS: '+1 (206) 796 4306',
    phoneUSHref: 'tel:+12067964306',
    phoneJobs: '+91 92899 09175',
    phoneJobsHref: 'tel:+919289909175',
    hrEmails: ['hr@inzint.com'],
    businessHours: 'Monday to Friday, 10:00 to 19:00 IST',
    // The three real offices. Every office listing on the site reads from here.
    locations: [
      {
        id: 'noida',
        city: 'Noida',
        country: 'India',
        label: 'Headquarters',
        address: 'B-111, Second Floor, Sector 65, Noida, Uttar Pradesh 201301, India',
        addressLines: ['B-111, Second Floor, Sector 65', 'Noida, Uttar Pradesh 201301, India'],
        phone: '+91 92899 09174',
        phoneHref: 'tel:+919289909174',
        email: 'contact@inzint.com',
        timezone: 'IST (UTC+5:30)',
        mapQuery: 'B-111, Sector 65, Noida, Uttar Pradesh 201301, India',
        isHQ: true,
      },
      {
        id: 'muscat',
        city: 'Muscat',
        country: 'Oman',
        label: 'Oman office',
        address: '31, Building 13, 6125 Way, Muscat, Oman',
        addressLines: ['31, Building 13, 6125 Way', 'Muscat, Oman'],
        phone: '+968 7272 4832',
        phoneHref: 'tel:+96872724832',
        email: 'contact@inzint.om',
        timezone: 'GST (UTC+4)',
        mapQuery: '31, Building 13, 6125 Way, Muscat, Oman',
        isHQ: false,
      },
      {
        id: 'ofallon',
        city: "O'Fallon",
        country: 'USA',
        label: 'US office',
        address: "214 Fairway Green Dr, O'Fallon, MO 63368, USA",
        addressLines: ['214 Fairway Green Dr', "O'Fallon, MO 63368, USA"],
        phone: '+1 (206) 796 4306',
        phoneHref: 'tel:+12067964306',
        email: 'contact@inzint.com',
        timezone: 'CT (UTC-6)',
        mapQuery: "214 Fairway Green Dr, O'Fallon, MO 63368",
        isHQ: false,
      },
    ],
  },

  social: {
    linkedin: 'https://www.linkedin.com/company/inzint',
    twitter: 'https://twitter.com/inzint',
    github: 'https://github.com/inzint',
    instagram: 'http://instagram.com/inzint.om',
    youtube: 'https://www.youtube.com/@inzint',
  },
};

export type Office = (typeof company.contact.locations)[number];
export type Client = (typeof company.clients)[number];

export default company;
