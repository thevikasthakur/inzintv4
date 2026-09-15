/**
 * Case study index data.
 *
 * Each record powers a row on /resources/tools/case-studies. The long-form
 * article itself lives in `case-studies-md/` and is rendered by the matching
 * route under `src/app/case-studies/`. Read time is derived from that
 * markdown at build time (see `src/lib/case-studies.ts`), so it never drifts
 * from the article page.
 *
 * Studies are sorted newest-first by `publishedDate` when loaded.
 */

export interface CaseStudyProof {
  value: string;
  label: string;
}

export type CaseStudyCover =
  | {
      /** A real product screenshot, shown inside a browser-window frame. */
      kind: 'screenshot';
      src: string;
      alt: string;
      /** CSS background for the area behind the frame. */
      backdrop: string;
    }
  | {
      /** An illustration or diagram, shown whole on a tinted backdrop. */
      kind: 'illustration';
      src: string;
      alt: string;
      backdrop: string;
    };

export interface CaseStudyVerdict {
  /** Client rating at completion, as displayed (e.g. "5.0"). */
  rating: string;
  /** Quote as shown on the testimonial graphic inside the article. */
  quote: string;
  /** Endorsement tags from the client's review. */
  endorsements: string[];
}

export interface CaseStudyRecord {
  id: string;
  /** Route of the full article. */
  slug: string;
  client: string;
  /** Short sector label used in aggregate facts ("Digital publishing"). */
  sector: string;
  /** Slightly longer industry label shown on cards. */
  industry: string;
  /** What kind of engagement it was. */
  engagement: string;
  /** Index title: shorter and more editorial than the article headline. */
  title: string;
  /** The article's H1, used for structured data. */
  headline: string;
  dek: string;
  services: string[];
  stack: string[];
  /** Human-readable delivery window. */
  period: string;
  /** ISO date the article was published. */
  publishedDate: string;
  /** Markdown source, relative to the project root. */
  markdownPath: string;
  /** If set, the public article ends where this string first appears. */
  markdownCutoff?: string;
  cover: CaseStudyCover;
  /** Three headline figures for the featured card. */
  proof: CaseStudyProof[];
  /** One figure for the compact index row. */
  highlight: CaseStudyProof;
  /** Present only when a publishable client review is part of the project record. */
  verdict?: CaseStudyVerdict;
}

export type CaseStudy = CaseStudyRecord & {
  wordCount: number;
  readTime: number;
};

export const caseStudyRecords: CaseStudyRecord[] = [
  {
    id: 'zoeymed',
    slug: '/case-studies/zoeymed-ivf-clinic-management-platform',
    client: 'ZoeyMed',
    sector: 'Healthcare operations',
    industry: 'Fertility clinic software',
    engagement: 'Clinic management platform design and build',
    title: 'An IVF HMIS built around the couple’s treatment journey.',
    headline: 'How Inzint Built ZoeyMed for Couples, Donors and Treatment Cycles',
    dek:
      'Connecting distinct patient records through shared treatment cycles, clinical workflows, laboratory work and inventory without flattening specialised fertility care.',
    services: ['Product engineering', 'Workflow modelling', 'Full-stack development', 'Automated QA'],
    stack: ['React', 'Redux', 'Fastify', 'MongoDB', 'AWS'],
    period: 'August–December 2025',
    publishedDate: '2026-09-15',
    markdownPath: 'case-studies-md/zoeymed/zoeymed-case-study.md',
    cover: {
      kind: 'illustration',
      src: '/assets/images/case-studies/zoeymed/zoeymed-architecture.svg',
      alt: 'Diagram of the ZoeyMed clinic management platform architecture',
      backdrop: 'linear-gradient(135deg, #ecfeff 0%, #ecfdf5 100%)',
    },
    proof: [
      { value: '5 months', label: 'documented delivery window' },
      { value: '5', label: 'connected workflow areas' },
      { value: '1', label: 'shared operational platform' },
    ],
    highlight: { value: '5', label: 'clinic workflow areas connected' },
  },
  {
    id: 'thotis-ia',
    slug: '/case-studies/thotis-ai-platform-rearchitecture',
    client: 'Thotis IA',
    sector: 'AI education',
    industry: 'AI education platform',
    engagement: 'AI platform re-architecture',
    title: 'From a collection of AI tools to a coherent product platform.',
    headline: 'How Inzint Turned Thotis IA Into a Product Platform',
    dek:
      'Re-modelling personas, migrating live data, drawing provider boundaries and hardening real-time voice inside a multi-vendor education product that was already in production.',
    services: ['Product engineering', 'Data migration', 'Voice AI', 'Automated QA'],
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'LiveKit', 'Langflow'],
    period: '14 April – 18 August 2026',
    publishedDate: '2026-09-01',
    markdownPath: 'case-studies-md/thotis/thotis-case-study.md',
    cover: {
      kind: 'screenshot',
      src: '/assets/images/case-studies/thotis-ia/product-screenshots/1-welcome.png',
      alt: 'Thotis IA welcome screen with its conversational orientation assistant',
      backdrop:
        'radial-gradient(circle at 22% 12%, #2b2f7e 0%, #151a4a 40%, #080c26 78%)',
    },
    proof: [
      { value: '13 → 4', label: 'agents modelled into personas' },
      { value: '1', label: 'catalogue contract for every client' },
      { value: '5.0', label: 'client rating at close' },
    ],
    highlight: { value: '13 → 4', label: 'agents to personas, chat history intact' },
    verdict: {
      rating: '5.0',
      quote:
        'Thanks to Inzint for all the work they’ve done. They were committed to quality, communicated clearly and stayed accountable for outcomes.',
      endorsements: ['Committed to quality', 'Clear communicator', 'Accountable for outcomes'],
    },
  },
  {
    id: 'la-cuisine-de-bernard',
    slug: '/case-studies/la-cuisine-de-bernard-wordpress-nextjs-payload-mongodb-migration',
    client: 'La Cuisine de Bernard',
    sector: 'Digital publishing',
    industry: 'Culinary publishing',
    engagement: 'Platform modernisation and content migration',
    title: 'A decade of recipes, rebuilt for the next decade.',
    headline: 'From WordPress Gridlock to an AI-Readable Publishing Platform',
    dek:
      'Turning a plugin-heavy WordPress archive into a fast, structured, multilingual publishing platform without losing the 1,300+ recipes readers already loved.',
    services: ['Content migration', 'Headless CMS', 'Multilingual publishing', 'AI discoverability'],
    stack: ['Next.js', 'Payload CMS', 'MongoDB', 'DeepL'],
    period: '25 April – 18 August 2026',
    publishedDate: '2026-08-22',
    markdownPath: 'case-studies-md/bernard/bernard-case-study.md',
    markdownCutoff: '\n## Publication and SEO package for Inzint.com',
    cover: {
      kind: 'illustration',
      src: '/assets/images/case-studies/bernard-migration-map.svg',
      alt: 'Diagram of the legacy recipe archive becoming a structured multilingual platform',
      backdrop: 'linear-gradient(135deg, #f4ecdd 0%, #e8edf5 100%)',
    },
    proof: [
      { value: '1,300+', label: 'recipes preserved' },
      { value: '2 GB', label: 'legacy data decoded' },
      { value: 'Near-zero', label: 'launch downtime' },
    ],
    highlight: { value: '1,300+', label: 'recipes migrated with near-zero downtime' },
    verdict: {
      rating: '5.0',
      quote:
        'Inzint took this project very seriously, found the right solutions, communicated clearly, stayed accountable for outcomes and paid close attention to detail.',
      endorsements: [
        'Solution oriented',
        'Clear communicator',
        'Accountable for outcomes',
        'Detail oriented',
      ],
    },
  },
];
