import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock3 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FooterSection } from '@/components/sections';

const slug = '/case-studies/zoeymed-ivf-clinic-management-platform';
const title = "ZoeyMed: How Inzint Built an IVF HMIS Around the Couple's Treatment Journey";
const description =
  'How Inzint engineered ZoeyMed to connect distinct patient records through a shared IVF treatment journey, including clinical, laboratory and operational workflows.';
const publishedDate = '2026-09-15';
const image = '/assets/images/case-studies/zoeymed/zoeymed-architecture.svg';
const socialImage = '/assets/images/case-studies/zoeymed/zoeymed-social.png';

function getArticleMarkdown() {
  return fs
    .readFileSync(
      path.join(process.cwd(), 'case-studies-md/zoeymed/zoeymed-case-study.md'),
      'utf8'
    )
    .replace(/^# .+\n+/, '')
    .trim();
}

export const metadata: Metadata = {
  title: 'ZoeyMed IVF HMIS Engineering Case Study',
  description,
  alternates: { canonical: slug },
  openGraph: {
    title,
    description,
    type: 'article',
    url: slug,
    publishedTime: publishedDate,
    authors: ['Inzint'],
    images: [{ url: socialImage, width: 1200, height: 675, alt: 'ZoeyMed platform architecture' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [socialImage],
  },
};

export default function ZoeyMedCaseStudyPage() {
  const article = getArticleMarkdown();
  const wordCount = article
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[`#*|_>-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 225));
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `https://inzint.com${slug}#article`,
        headline: title,
        description,
        datePublished: publishedDate,
        dateModified: publishedDate,
        wordCount,
        mainEntityOfPage: `https://inzint.com${slug}`,
        image: `https://inzint.com${image}`,
        author: { '@type': 'Organization', name: 'Inzint', url: 'https://inzint.com' },
        publisher: { '@type': 'Organization', name: 'Inzint', url: 'https://inzint.com' },
        about: [
          'IVF clinic management software',
          'Healthcare workflow engineering',
          'React and Fastify',
          'MongoDB',
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://inzint.com/' },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Case studies',
            item: 'https://inzint.com/resources/tools/case-studies',
          },
          { '@type': 'ListItem', position: 3, name: 'ZoeyMed', item: `https://inzint.com${slug}` },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article>
        <header className="border-b border-gray-200 px-5 pb-14 pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-20">
          <div className="mx-auto max-w-[760px]">
            <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="transition-colors hover:text-gray-950">Home</Link>
              <span aria-hidden="true">/</span>
              <Link
                href="/resources/tools/case-studies"
                className="inline-flex items-center gap-2 transition-colors hover:text-gray-950"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Case studies
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-gray-700">ZoeyMed</span>
            </nav>

            <div className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-primary-600">
              ZoeyMed · Healthcare workflow engineering
            </div>
            <h1 className="case-study-title text-balance text-[2.65rem] font-semibold leading-[1.08] tracking-[-0.035em] text-gray-950 sm:text-6xl lg:text-[4.25rem]">
              {title}
            </h1>
            <p className="mt-7 text-xl leading-8 text-gray-600 sm:text-2xl sm:leading-9">
              Why fertility software must connect a couple, sometimes donors, and the clinical journey without merging distinct medical records.
            </p>

            <div className="mt-9 flex items-center gap-4 border-t border-gray-200 pt-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-950 text-sm font-bold text-white">
                IN
              </div>
              <div className="text-sm leading-6">
                <p className="font-medium text-gray-950">Inzint</p>
                <p className="flex flex-wrap items-center gap-x-2 text-gray-500">
                  <time dateTime={publishedDate}>September 15, 2026</time>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                    {readTime} min read
                  </span>
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="case-study-prose mx-auto max-w-[760px] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{article}</ReactMarkdown>
        </div>
      </article>

      <section className="border-t border-gray-200 bg-[#f7f7f5] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-600">
            Does your operation cross several teams and disconnected tools?
          </p>
          <h2 className="case-study-title mt-4 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
            Map the workflow before committing to the build.
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gray-950 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            Discuss the engineering problem
          </Link>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
