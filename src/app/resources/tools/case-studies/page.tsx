import type { Metadata } from 'next';
import { CaseStudiesSection, FooterSection } from '@/components/sections';
import { getCaseStudies } from '@/lib/case-studies';

const slug = '/resources/tools/case-studies';
const title = 'Case Studies | The Work Behind the Outcome';
const description =
  'Long-form Inzint case studies on platform modernisation, complex data migration and AI product engineering, with outcomes verified by the client.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: slug },
  openGraph: {
    title: `${title} | Inzint`,
    description,
    type: 'website',
    url: slug,
    images: [
      {
        url: '/assets/images/case-studies/thotis-ia/product-screenshots/1-welcome.png',
        width: 1908,
        height: 953,
        alt: 'Inzint case studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | Inzint`,
    description,
    images: ['/assets/images/case-studies/thotis-ia/product-screenshots/1-welcome.png'],
  },
};

export default function CaseStudiesPage() {
  const studies = getCaseStudies();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Inzint case studies',
    description,
    url: `https://inzint.com${slug}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      numberOfItems: studies.length,
      itemListElement: studies.map((study, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://inzint.com${study.slug}`,
        name: study.headline,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-white pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CaseStudiesSection studies={studies} />
      <FooterSection />
    </main>
  );
}
