// Content for the service pages. Everything here is drawn from company.ts, the published
// case studies, the terms of service, the support page or the pricing tiers in pricing.ts.
// No statistics are invented: facts are capabilities, time frames and named work.

export interface ServicePageData {
  hero: {
    badge: { icon: string; text: string };
    title: string;
    highlightedTitle: string;
    description: string;
    facts: Array<{ value: string; label: string }>;
    gradient: string;
  };
  offerings: Array<{
    icon: string;
    title: string;
    description: string;
    features: string[];
  }>;
  approach: Array<{ title: string; description: string }>;
  technologies: string[];
  related?: { eyebrow: string; title: string; summary: string; href: string; cta: string };
  engagement: Array<{ title: string; description: string }>;
}

export type ServiceSlug =
  | 'web-development'
  | 'backend'
  | 'mobile-app-development'
  | 'software-development'
  | 'mvp-development'
  | 'cloud-services'
  | 'maintenance-support'
  | 'dedicated-development-teams'
  | 'product-strategy'
  | 'technology-consulting'
  | 'data-engineering';

const BERNARD = '/case-studies/la-cuisine-de-bernard-wordpress-nextjs-payload-mongodb-migration';
const THOTIS = '/case-studies/thotis-ai-platform-rearchitecture';

export const engagementModels: ServicePageData['engagement'] = [
  {
    title: 'Fixed-scope build',
    description: 'A scoped milestone plan with a quote per milestone, billed on acceptance. Best when the outcome is well defined.',
  },
  {
    title: 'Monthly squad',
    description: 'A founder-led squad on a retainer you can scale up or down month to month, with a weekly demo. Best for products that keep evolving.',
  },
  {
    title: 'Architecture & audit',
    description: 'A short, fixed-fee review of a codebase, platform or AI system that ends in a written, prioritised plan.',
  },
];

const bernardRelated = {
  eyebrow: 'Case study',
  title: 'La Cuisine de Bernard: WordPress to Next.js, Payload CMS and MongoDB',
  summary:
    '1,300+ recipes and a 2 GB legacy export moved into a structured, multilingual publishing platform with near-zero downtime, rated 5.0 out of 5 by the client.',
  href: BERNARD,
  cta: 'Read the case study',
};

const thotisRelated = {
  eyebrow: 'Case study',
  title: 'Thotis IA: re-architecting a live AI education platform',
  summary:
    'Personas, data migration, provider boundaries, real-time voice and automated QA reworked inside a live, multi-vendor product between April and August 2026.',
  href: THOTIS,
  cta: 'Read the case study',
};

export const servicePages: Record<ServiceSlug, ServicePageData> = {
  'web-development': {
    hero: {
      badge: { icon: 'globe', text: 'Web Development' },
      title: 'Web platforms built on',
      highlightedTitle: 'Next.js',
      description:
        'Marketing sites, publishing platforms and web applications in Next.js, React and TypeScript, with headless CMS, multilingual content and performance budgets that hold after launch.',
      facts: [
        { value: 'Next.js', label: 'React, TypeScript and Tailwind CSS' },
        { value: 'Payload', label: 'Headless CMS and structured content' },
        { value: 'Weekly', label: 'Demos throughout delivery' },
        { value: '30 days', label: 'Warranty after launch' },
      ],
      gradient: 'from-blue-600 to-cyan-600',
    },
    offerings: [
      {
        icon: 'globe',
        title: 'Marketing and publishing sites',
        description: 'Statically generated, fast, and easy for editors to publish to.',
        features: ['Static generation and incremental rebuilds', 'Multilingual publishing with DeepL-assisted translation', 'SEO, structured data and AI-readable content', 'Editorial workflows in Payload CMS'],
      },
      {
        icon: 'monitor',
        title: 'Web applications',
        description: 'Portals, dashboards and internal tools with authentication and roles.',
        features: ['Authentication, roles and permissions', 'Dashboards and reporting', 'Payments and third-party integrations', 'Accessible, responsive layouts'],
      },
      {
        icon: 'database',
        title: 'Migrations off legacy platforms',
        description: 'Move content and users out of ageing WordPress or custom stacks without losing anything.',
        features: ['Legacy export decoding', 'Redirect maps and SEO continuity', 'Near-zero-downtime cutover', 'Content model redesign'],
      },
    ],
    approach: [
      { title: 'Architecture before pixels', description: 'Discovery, the content model and architecture decision records come first, so the build does not drift.' },
      { title: 'Quality from sprint one', description: 'Test coverage, CI and performance budgets are set up in the first sprint, not retrofitted at the end.' },
      { title: 'Launch without drama', description: 'Redirect maps, staged cutovers and monitoring, as on the La Cuisine de Bernard launch.' },
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Payload CMS', 'MongoDB', 'PostgreSQL', 'Node.js', 'AWS', 'DeepL API'],
    related: bernardRelated,
    engagement: engagementModels,
  },

  backend: {
    hero: {
      badge: { icon: 'server', text: 'Backend & APIs' },
      title: 'Backends and APIs in',
      highlightedTitle: 'Node.js and NestJS',
      description:
        'Typed services on PostgreSQL and Redis with queues, integrations and authentication designed in from the start, deployable to AWS serverless or containers.',
      facts: [
        { value: 'NestJS', label: 'Node.js, TypeORM and TypeScript' },
        { value: 'PostgreSQL', label: 'With Redis and BullMQ for queues' },
        { value: 'REST / GraphQL', label: 'Documented, versioned APIs' },
        { value: 'AWS', label: 'Serverless or containerised deployment' },
      ],
      gradient: 'from-orange-600 to-amber-600',
    },
    offerings: [
      {
        icon: 'server',
        title: 'APIs and authentication',
        description: 'REST and GraphQL APIs with auth, roles and rate limits that web and mobile clients share.',
        features: ['OpenAPI documentation', 'Roles, permissions and audit logs', 'Versioning and deprecation policy', 'Rate limiting and caching'],
      },
      {
        icon: 'link',
        title: 'Integrations',
        description: 'CRMs, telephony, payments, forms and messaging wired through one typed service layer.',
        features: ['Payment providers and webhooks', 'CRM and calendar integrations', 'Telephony and voice platforms', 'Third-party auth and identity'],
      },
      {
        icon: 'activity',
        title: 'Jobs, queues and migrations',
        description: 'Background processing and data migrations that are observable and repeatable.',
        features: ['BullMQ job queues', 'Idempotent, resumable migrations', 'Scheduled processing', 'Dead-letter handling and alerts'],
      },
    ],
    approach: [
      { title: 'Deterministic tests where money moves', description: 'Payments, refunds and entitlements get exact tests before release. It is one of our written quality bars.' },
      { title: 'Observability from the start', description: 'Structured logs, metrics and alerts ship with the first endpoint, not after the first incident.' },
      { title: 'Documented so anyone can operate it', description: 'OpenAPI specs, runbooks and architecture decision records are deliverables.' },
    ],
    technologies: ['Node.js', 'NestJS', 'TypeORM', 'PostgreSQL', 'Redis', 'BullMQ', 'GraphQL', 'AWS Lambda', 'API Gateway', 'Supabase'],
    related: thotisRelated,
    engagement: engagementModels,
  },

  'mobile-app-development': {
    hero: {
      badge: { icon: 'smartphone', text: 'Mobile Apps' },
      title: 'iOS and Android apps in',
      highlightedTitle: 'React Native',
      description:
        'One codebase for both stores, backed by the same NestJS and AWS services we build for the web. Consumer apps, companion apps for platforms, and tools for teams in the field.',
      facts: [
        { value: 'React Native', label: 'iOS and Android from one codebase' },
        { value: 'Both stores', label: 'Submission and releases handled' },
        { value: 'Featured', label: 'Fantasy sports and PBT Classes apps on our homepage' },
        { value: 'NestJS + AWS', label: 'Backend built alongside the app' },
      ],
      gradient: 'from-green-600 to-emerald-600',
    },
    offerings: [
      {
        icon: 'smartphone',
        title: 'Consumer apps',
        description: 'Fast, polished apps with the integrations consumers expect.',
        features: ['Real-time data and live contests', 'Video and media playback', 'Push notifications', 'Payments and in-app purchases'],
      },
      {
        icon: 'users',
        title: 'Companion apps for platforms',
        description: 'Mobile front ends for systems we also build on the web, such as patient and clinic apps.',
        features: ['Shared authentication and roles', 'Offline-tolerant flows', 'Bilingual interfaces', 'Deep links into web experiences'],
      },
      {
        icon: 'rocket',
        title: 'Release and store operations',
        description: 'From the first TestFlight build to production releases on both stores.',
        features: ['App Store and Play Store submission', 'Staged rollouts', 'Crash and performance monitoring', 'Release notes and versioning'],
      },
    ],
    approach: [
      { title: 'Design to code, on purpose', description: 'Screens are built from an agreed design system so iOS and Android stay consistent without duplicated work.' },
      { title: 'One backend for every client', description: 'The app, the web and any admin console talk to the same typed API, so features land everywhere at once.' },
      { title: 'Performance budgets', description: 'Startup time, bundle size and frame rates are measured on real devices before each release.' },
    ],
    technologies: ['React Native', 'TypeScript', 'iOS', 'Android', 'Push notifications', 'In-app purchases', 'Stripe', 'NestJS', 'PostgreSQL', 'AWS'],
    related: {
      eyebrow: 'Featured work',
      title: 'Fantasy sports platform and PBT Classes',
      summary:
        'A fantasy sports app with live contests across cricket, football and basketball, and PBT Classes, a guided ballet training platform with video sessions and a music player.',
      href: '/',
      cta: 'See the featured projects',
    },
    engagement: engagementModels,
  },

  'software-development': {
    hero: {
      badge: { icon: 'code', text: 'Custom Software' },
      title: 'Custom software and',
      highlightedTitle: 'ERP modules',
      description:
        'Internal tools, workflow automation and ERP or CRM modules for operations teams: inventory, approvals, tracking, reporting, and the mobile companions that go with them.',
      facts: [
        { value: 'Modules', label: 'Inventory, finance, HR and approvals' },
        { value: 'Roles', label: 'Permissions and audit trails' },
        { value: 'Dashboards', label: 'Reporting and exports' },
        { value: 'Mobile', label: 'Companion apps where the work happens' },
      ],
      gradient: 'from-slate-700 to-gray-900',
    },
    offerings: [
      {
        icon: 'settings',
        title: 'Workflow automation and internal tools',
        description: 'Replace spreadsheets and email chains with tools that enforce the process.',
        features: ['Approval chains with audit trails', 'Role-based access', 'Notifications and reminders', 'Exports and integrations'],
      },
      {
        icon: 'package',
        title: 'ERP and CRM modules',
        description: 'Modules for operations teams, built incrementally around how the business already works.',
        features: ['Inventory and tracking', 'Finance and invoicing', 'HR and attendance', 'Customer and vendor records'],
      },
      {
        icon: 'bar-chart',
        title: 'Reporting and BI',
        description: 'Dashboards and scheduled reports on top of the operational data.',
        features: ['Role-specific dashboards', 'Scheduled reports', 'Data exports', 'Alerts on thresholds'],
      },
    ],
    approach: [
      { title: 'Map the process first', description: 'We document how work actually flows before designing screens, so the software fits the operation and not the other way round.' },
      { title: 'Roll out module by module', description: 'Each module ships and gets used before the next starts, which keeps training manageable and feedback early.' },
      { title: 'Train and document', description: 'Onboarding guides and runbooks are part of the delivery, so the team can run the system without us.' },
    ],
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis', 'React Native', 'AWS', 'Role-based access', 'Reporting'],
    related: {
      eyebrow: 'Related work',
      title: 'Logistics and warehousing ERP modules',
      summary:
        'Tracking, approvals and reporting modules for logistics operations, and a modular clinic appointment system with patient and clinic apps and bilingual, tiered features.',
      href: '/contact',
      cta: 'Ask about similar work',
    },
    engagement: engagementModels,
  },

  'mvp-development': {
    hero: {
      badge: { icon: 'rocket', text: 'MVP Development' },
      title: 'From idea to a first release in',
      highlightedTitle: 'weeks, not quarters',
      description:
        'A scoped, production-ready first version: rapid prototypes in about two weeks, standard MVPs in four to six, larger first releases in eight to twelve.',
      facts: [
        { value: '2 weeks', label: 'Rapid prototype to validate the concept' },
        { value: '4–6 weeks', label: 'Standard MVP with auth, backend and deployment' },
        { value: '8–12 weeks', label: 'Larger first release with payments and roles' },
        { value: 'Weekly', label: 'Demos so you can redirect early' },
      ],
      gradient: 'from-indigo-600 to-purple-600',
    },
    offerings: [
      {
        icon: 'target',
        title: 'Scoping workshop',
        description: 'Agree what the first release must prove, and what it deliberately leaves out.',
        features: ['Success metrics', 'Cut list, written down', 'Technical architecture note', 'Milestone plan and quote'],
      },
      {
        icon: 'zap',
        title: 'Rapid prototype',
        description: 'Three to five core screens, clickable and demonstrable, in about two weeks.',
        features: ['Core feature set only', 'Basic UI/UX', 'Web or mobile', 'Documentation and handoff'],
      },
      {
        icon: 'rocket',
        title: 'Production MVP',
        description: 'Full stack, deployed, monitored and ready for real users.',
        features: ['Authentication and roles', 'NestJS backend on PostgreSQL', 'AWS deployment with CI/CD', 'One month of post-launch support'],
      },
    ],
    approach: [
      { title: 'Cut scope, not quality', description: 'A small feature set built properly beats a large one built badly. Tests and CI are not optional in an MVP.' },
      { title: 'Instrumented from day one', description: 'Analytics and error tracking ship with the first release, so the next decision is based on data.' },
      { title: 'Handover you can build on', description: 'Documentation and clean code mean the MVP is the start of the product, not a throwaway.' },
    ],
    technologies: ['Next.js', 'React Native', 'NestJS', 'PostgreSQL', 'AWS', 'Stripe', 'CI/CD', 'Analytics'],
    engagement: engagementModels,
  },

  'cloud-services': {
    hero: {
      badge: { icon: 'cloud', text: 'Cloud & DevOps' },
      title: 'AWS backends with',
      highlightedTitle: 'infrastructure as code',
      description:
        'Serverless and containerised backends on AWS, defined in code, deployed through CI/CD and watched by real monitoring. We also stabilise platforms that have become fragile.',
      facts: [
        { value: 'AWS', label: 'Lambda, API Gateway, S3, CloudFront, SSM' },
        { value: 'IaC', label: 'AWS CDK and the Serverless Framework' },
        { value: 'CI/CD', label: 'From the first sprint' },
        { value: 'Rescue', label: 'Stabilised a live sports tournament platform' },
      ],
      gradient: 'from-sky-600 to-blue-700',
    },
    offerings: [
      {
        icon: 'cloud',
        title: 'Serverless architecture',
        description: 'Backends that scale to zero and to peak without a re-platform.',
        features: ['Lambda and API Gateway', 'S3 and CloudFront delivery', 'Managed databases', 'Secrets in SSM'],
      },
      {
        icon: 'settings',
        title: 'Pipelines and environments',
        description: 'Every environment is defined in code and created by a pipeline, not by hand.',
        features: ['Infrastructure as code', 'Preview and staging environments', 'Automated tests in CI', 'Rollbacks'],
      },
      {
        icon: 'activity',
        title: 'Monitoring, cost and rescue',
        description: 'Know what is happening and what it costs, and recover platforms that have drifted.',
        features: ['Logs, metrics and alerts', 'Cost budgets and reviews', 'Incident runbooks', 'Stabilisation of live systems'],
      },
    ],
    approach: [
      { title: 'Everything is code', description: 'Infrastructure, configuration and secrets management live in the repository and go through review like any other change.' },
      { title: 'Budgets for errors and latency', description: 'We agree performance and error budgets up front and alert when they are at risk.' },
      { title: 'Runbooks, not heroics', description: 'Common incidents have written procedures, so recovery does not depend on who is awake.' },
    ],
    technologies: ['AWS Lambda', 'API Gateway', 'S3', 'CloudFront', 'SSM', 'AWS CDK', 'Serverless Framework', 'Docker', 'GitHub Actions', 'CloudWatch'],
    related: {
      eyebrow: 'Related work',
      title: 'Sports tournament platform rescue',
      summary:
        'Stabilised the infrastructure of a live tournament platform on Elixir and AWS, reduced downtime and improved throughput and the admin experience.',
      href: '/contact',
      cta: 'Talk to us about a rescue',
    },
    engagement: engagementModels,
  },

  'maintenance-support': {
    hero: {
      badge: { icon: 'wrench', text: 'Maintenance & Support' },
      title: 'Keep it running, keep it',
      highlightedTitle: 'improving',
      description:
        'Monthly maintenance for the software we build and the sites we host: fixes, security updates, monitoring and small enhancements, with response targets you can hold us to.',
      facts: [
        { value: '30 days', label: 'Warranty on every development project' },
        { value: '2–4 h', label: 'Critical issues acknowledged in business hours' },
        { value: 'Monthly', label: 'Retainers with 30 days notice to cancel' },
        { value: 'Daily', label: 'Backups with 30-day retention for hosted sites' },
      ],
      gradient: 'from-teal-600 to-emerald-600',
    },
    offerings: [
      {
        icon: 'wrench',
        title: 'Application maintenance',
        description: 'Bug fixes, dependency and security updates, and monitoring for apps we built or inherited.',
        features: ['Bug fixes and patches', 'Dependency and security updates', 'Uptime and error monitoring', 'Monthly report'],
      },
      {
        icon: 'globe',
        title: 'Website hosting and maintenance',
        description: 'Managed hosting for WordPress and Next.js sites with the routine work included.',
        features: ['SSL and daily backups with 30-day retention', 'Core, plugin and theme updates', 'Monthly security scans and uptime monitoring', 'Up to two hours of content updates a month'],
      },
      {
        icon: 'trending-up',
        title: 'Enhancements and roadmap',
        description: 'Small features and improvements delivered inside the retainer, prioritised with you each month.',
        features: ['Prioritised backlog', 'Weekly updates', 'Performance improvements', 'Handover documentation kept current'],
      },
    ],
    approach: [
      { title: 'Published response targets', description: 'Critical issues within two to four hours, high within four to eight, routine within one business day, low within two, during business hours.' },
      { title: 'Monitoring you can see', description: 'Uptime, errors and performance are reported monthly, not discovered by your customers.' },
      { title: 'Documentation stays current', description: 'Every change updates the runbook, so the next engineer, ours or yours, is not starting from scratch.' },
    ],
    technologies: ['Uptime monitoring', 'Automated backups', 'WordPress', 'Next.js', 'AWS', 'CloudWatch', 'GitHub Actions', 'Playwright'],
    related: {
      eyebrow: 'Support desk',
      title: 'How to reach support and what to expect',
      summary: 'Channels for each service, response-time targets by severity and the escalation path, all on one page.',
      href: '/support',
      cta: 'Open the support page',
    },
    engagement: engagementModels,
  },

  'dedicated-development-teams': {
    hero: {
      badge: { icon: 'users', text: 'Dedicated Squads' },
      title: 'A founder-led squad',
      highlightedTitle: 'on retainer',
      description:
        'Three to five Inzint engineers working as part of your team, month to month, with weekly demos and code that lives in your repositories.',
      facts: [
        { value: '3–5', label: 'Engineers per squad' },
        { value: '2 weeks', label: 'Pilot sprint before committing' },
        { value: 'Monthly', label: 'Retainer, scale up or down' },
        { value: 'Your repo', label: 'No vendor lock-in' },
      ],
      gradient: 'from-violet-600 to-purple-700',
    },
    offerings: [
      {
        icon: 'users',
        title: 'Squad composition',
        description: 'Frontend, mobile, backend, AI, cloud and QA capabilities, composed around your roadmap.',
        features: ['A founder as technical lead', 'Senior engineers, not rotating juniors', 'Capabilities matched to the backlog', 'Re-shaped as priorities change'],
      },
      {
        icon: 'calendar',
        title: 'Ways of working',
        description: 'Agile sprints with a weekly demo, written minutes and a shared issue tracker.',
        features: ['Weekly live demo or recorded update', 'Minutes after every meeting', 'Your tracker, your repositories', 'English-only written communication'],
      },
      {
        icon: 'file-text',
        title: 'What is included',
        description: 'Coordination and documentation are part of the squad, not extras.',
        features: ['Delivery coordination', 'Architecture decision records', 'Runbooks and onboarding guides', 'Monthly review of scope and cost'],
      },
    ],
    approach: [
      { title: 'Start with a pilot sprint', description: 'Two weeks of real work in your codebase, ending in a demo. You judge the fit on output, not on a pitch.' },
      { title: 'Demo every week', description: 'Progress is shown, not reported, so course corrections happen in days rather than at the end of a quarter.' },
      { title: 'Leave everything documented', description: 'If the engagement ends, you keep working code, written decisions and the guides to run it.' },
    ],
    technologies: ['Next.js', 'React Native', 'NestJS', 'PostgreSQL', 'AWS', 'LLMs & RAG', 'Jest', 'Playwright', 'GitHub Actions'],
    related: {
      eyebrow: 'Long-term partnership',
      title: 'Three products with TALEER LLC over 2.5 years',
      summary:
        '"We interviewed multiple companies and Inzint were by far the most capable and the most proactive." A partnership that has grown from one product to three.',
      href: '/#client-testimonial-heading',
      cta: 'Watch the testimonial',
    },
    engagement: engagementModels,
  },

  'product-strategy': {
    hero: {
      badge: { icon: 'target', text: 'Product Strategy' },
      title: 'Decide what to build',
      highlightedTitle: 'before you build it',
      description:
        'Discovery workshops, roadmaps and success metrics that turn an idea into a scoped, sequenced plan an engineering team can start on Monday.',
      facts: [
        { value: '30 min', label: 'Free discovery call to start' },
        { value: 'Workshops', label: 'Users, constraints and success metrics' },
        { value: 'Roadmap', label: 'Sequenced, scoped and estimated' },
        { value: 'ADRs', label: 'Architecture decisions written down' },
      ],
      gradient: 'from-rose-600 to-pink-600',
    },
    offerings: [
      {
        icon: 'lightbulb',
        title: 'Discovery workshop',
        description: 'Structured sessions with the people who own the problem and the people who will use the product.',
        features: ['Goals and constraints', 'User journeys', 'Risks and unknowns', 'Definition of the first release'],
      },
      {
        icon: 'map',
        title: 'Roadmap and scoping',
        description: 'A sequenced plan with milestones, estimates and an explicit cut list.',
        features: ['Milestone plan', 'Estimates and quote', 'Dependencies and sequencing', 'What is deliberately out of scope'],
      },
      {
        icon: 'bar-chart',
        title: 'Success metrics and instrumentation',
        description: 'Agree how success will be measured, then design the analytics to measure it.',
        features: ['Business and user metrics', 'Analytics events and dashboards', 'Review cadence', 'Decision criteria for the next phase'],
      },
    ],
    approach: [
      { title: 'Evidence over opinion', description: 'Existing data, user interviews and the current system are examined before anything is proposed.' },
      { title: 'Scope cuts made explicit', description: 'Everything left out of the first release is written down with the reason, so it is a decision rather than an omission.' },
      { title: 'Handover into build', description: 'The plan is written for the engineers who will execute it, whether they are ours or yours.' },
    ],
    technologies: ['Discovery workshops', 'User journeys', 'Roadmaps', 'Estimation', 'Analytics design', 'Architecture decision records'],
    related: {
      eyebrow: 'Case study',
      title: 'Thotis IA: from 13 agents to a four-persona catalogue',
      summary:
        'A product model redesigned around four learner personas and six ordered categories, then migrated from the data that actually existed rather than the schema that was assumed.',
      href: THOTIS,
      cta: 'Read the case study',
    },
    engagement: engagementModels,
  },

  'technology-consulting': {
    hero: {
      badge: { icon: 'settings', text: 'Technology Consulting' },
      title: 'Architecture reviews and',
      highlightedTitle: 'audits',
      description:
        'A short engagement to review a codebase, platform or AI system and leave you with a documented, prioritised plan. Useful before a rebuild, an acquisition or a rescue.',
      facts: [
        { value: 'Audit', label: 'Code, infrastructure and security basics' },
        { value: 'Plan', label: 'Prioritised, estimated and sequenced' },
        { value: 'ADRs', label: 'Decisions you can hand to any team' },
        { value: 'Live', label: 'We review platforms that are in production' },
      ],
      gradient: 'from-gray-700 to-slate-900',
    },
    offerings: [
      {
        icon: 'search',
        title: 'Architecture and code review',
        description: 'How the system is built, where it will break, and what to fix first.',
        features: ['Architecture and dependency map', 'Risk register', 'Fix-first ordering', 'Estimated remediation plan'],
      },
      {
        icon: 'route',
        title: 'Migration planning',
        description: 'From WordPress to Next.js, from a monolith to services, or from one cloud to another.',
        features: ['Data profiling before design', 'Cutover strategy', 'Redirect and continuity plan', 'Rollback criteria'],
      },
      {
        icon: 'brain',
        title: 'AI readiness and review',
        description: 'Whether an AI feature or platform is ready for production, and what it needs.',
        features: ['Data and evaluation review', 'Provider and cost boundaries', 'Privacy and residency check', 'Quality gates'],
      },
    ],
    approach: [
      { title: 'Read the data, not just the schema', description: 'On Thotis IA the columns that looked authoritative were empty; the plan was built from what the records actually held.' },
      { title: 'Order by risk and value', description: 'The plan starts with what is most likely to hurt you soonest, not with what is most interesting.' },
      { title: 'Written outputs', description: 'You receive documents, not slides: a risk register, architecture decision records and a sequenced plan.' },
    ],
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'AWS', 'WordPress', 'Elixir', 'LLM systems', 'Security basics: secrets, roles, PII'],
    related: thotisRelated,
    engagement: engagementModels,
  },

  'data-engineering': {
    hero: {
      badge: { icon: 'database', text: 'Data Engineering' },
      title: 'Pipelines, migrations and',
      highlightedTitle: 'reporting',
      description:
        'ETL pipelines, legacy data decoding, warehouses and dashboards, plus the migration work that lets old data live in new systems.',
      facts: [
        { value: '2 GB', label: 'Legacy WordPress export decoded for La Cuisine de Bernard' },
        { value: 'ETL', label: 'Pipelines with tests and monitoring' },
        { value: 'Dashboards', label: 'Reporting your team actually uses' },
        { value: 'Evidence', label: 'Migrations designed from the data, not the schema' },
      ],
      gradient: 'from-cyan-600 to-blue-600',
    },
    offerings: [
      {
        icon: 'database',
        title: 'Data migration and decoding',
        description: 'Move content and records between systems without losing meaning on the way.',
        features: ['Profiling and inconsistency reports', 'Decoding embedded and legacy formats', 'Idempotent, resumable migrations', 'Verification against the source'],
      },
      {
        icon: 'activity',
        title: 'Pipelines and warehouses',
        description: 'Scheduled and event-driven pipelines that feed reporting and AI features.',
        features: ['ETL and ELT jobs', 'Queue-based processing', 'Data quality checks', 'Retention and archival'],
      },
      {
        icon: 'bar-chart',
        title: 'Reporting and dashboards',
        description: 'Role-specific dashboards and scheduled reports on trustworthy data.',
        features: ['Metric definitions agreed in writing', 'Dashboards per role', 'Scheduled reports and exports', 'Alerts on thresholds'],
      },
    ],
    approach: [
      { title: 'Profile before you migrate', description: 'The first deliverable is a report on what the data actually contains, including the surprises.' },
      { title: 'Tests on the data itself', description: 'Row counts, checksums and sampled comparisons run automatically after every load.' },
      { title: 'Documented lineage', description: 'Every metric traces back to its source fields and transformations.' },
    ],
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'BullMQ', 'Node.js', 'AWS S3', 'AWS Lambda', 'Dashboards'],
    related: bernardRelated,
    engagement: engagementModels,
  },
};
