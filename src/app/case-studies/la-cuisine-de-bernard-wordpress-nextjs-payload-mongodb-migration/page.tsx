import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock3 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FooterSection } from '@/components/sections';

const slug = '/case-studies/la-cuisine-de-bernard-wordpress-nextjs-payload-mongodb-migration';
const title = 'From WordPress Gridlock to an AI-Readable Publishing Platform';
const description =
  'See how Inzint migrated La Cuisine de Bernard from a plugin-heavy WordPress site to Next.js, Payload CMS and MongoDB, preserving 1,300+ recipes with near-zero downtime.';
const publishedDate = '2026-08-22';

function getArticleMarkdown() {
  const source = fs.readFileSync(
    path.join(process.cwd(), 'case-studies-md/bernard/bernard-case-study.md'),
    'utf8'
  );

  return source
    .split('\n## Publication and SEO package for Inzint.com')[0]
    .replace(/^# .+\n+/, '')
    .replace(/\s*cite[^]+/g, '')
    .replace(
      'sandbox:/mnt/data/Screenshot%202026-08-21%20at%2020.03.40.png',
      '/assets/images/case-studies/bernard/client-testimonial.png'
    )
    .trim();
}

export const metadata: Metadata = {
  title: 'How Inzint Rebuilt La Cuisine de Bernard',
  description,
  alternates: { canonical: slug },
  openGraph: {
    title: `${title}: La Cuisine de Bernard × Inzint`,
    description,
    type: 'article',
    url: slug,
    publishedTime: publishedDate,
    authors: ['Inzint'],
    images: [
      {
        url: '/assets/images/case-studies/bernard/client-testimonial.png',
        width: 1888,
        height: 636,
        alt: 'Client feedback for the La Cuisine de Bernard platform rebuild',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title}: La Cuisine de Bernard × Inzint`,
    description,
    images: ['/assets/images/case-studies/bernard/client-testimonial.png'],
  },
};

export default function BernardCaseStudyPage() {
  const article = getArticleMarkdown();
  const wordCount = article.split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 225));
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: publishedDate,
    dateModified: publishedDate,
    wordCount,
    mainEntityOfPage: `https://inzint.com${slug}`,
    image: 'https://inzint.com/assets/images/case-studies/bernard/client-testimonial.png',
    author: {
      '@type': 'Organization',
      name: 'Inzint',
      url: 'https://inzint.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Inzint',
      url: 'https://inzint.com',
    },
    about: [
      'WordPress migration',
      'Next.js development',
      'Payload CMS',
      'MongoDB content migration',
      'Multilingual publishing',
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
            <Link
              href="/resources/tools/case-studies"
              className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-950"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All case studies
            </Link>

            <div className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-primary-600">
              La Cuisine de Bernard · Platform modernisation
            </div>
            <h1 className="case-study-title text-balance text-[2.65rem] font-semibold leading-[1.08] tracking-[-0.035em] text-gray-950 sm:text-6xl lg:text-[4.25rem]">
              {title}
            </h1>
            <p className="mt-7 text-xl leading-8 text-gray-600 sm:text-2xl sm:leading-9">
              How Inzint preserved 1,300+ recipes while rebuilding a decade-old publishing platform with Next.js, Payload CMS and MongoDB.
            </p>

            <div className="mt-9 flex items-center gap-4 border-t border-gray-200 pt-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-950 text-sm font-bold text-white">
                IN
              </div>
              <div className="text-sm leading-6">
                <p className="font-medium text-gray-950">Inzint</p>
                <p className="flex flex-wrap items-center gap-x-2 text-gray-500">
                  <time dateTime={publishedDate}>August 22, 2026</time>
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
            Have valuable content trapped in a legacy platform?
          </p>
          <h2 className="case-study-title mt-4 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
            Let&apos;s give it a foundation worthy of it.
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gray-950 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            Start a conversation
          </Link>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
