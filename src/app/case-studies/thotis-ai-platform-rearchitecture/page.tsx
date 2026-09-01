import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock3 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FooterSection } from '@/components/sections';

const slug = '/case-studies/thotis-ai-platform-rearchitecture';
const title = 'How Inzint Turned Thotis IA Into a Product Platform';
const description =
  'How Inzint helped re-engineer a live AI education platform across data, personas, conversational AI, voice, integrations, security and automated QA.';
const publishedDate = '2026-09-01';

function getArticleMarkdown() {
  return fs
    .readFileSync(
      path.join(process.cwd(), 'case-studies-md/thotis/thotis-case-study.md'),
      'utf8'
    )
    .replace(/^# .+\n+/, '')
    .trim();
}

export const metadata: Metadata = {
  title: 'Thotis AI Platform Re-architecture | Inzint Case Study',
  description,
  alternates: { canonical: slug },
  openGraph: {
    title,
    description,
    type: 'article',
    url: slug,
    publishedTime: publishedDate,
    authors: ['Inzint'],
    images: [
      {
        url: '/assets/images/case-studies/thotis-ia/product-screenshots/1-welcome.png',
        width: 1908,
        height: 953,
        alt: 'Thotis IA conversational education platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/assets/images/case-studies/thotis-ia/product-screenshots/1-welcome.png'],
  },
};

export default function ThotisCaseStudyPage() {
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
    image:
      'https://inzint.com/assets/images/case-studies/thotis-ia/product-screenshots/1-welcome.png',
    author: { '@type': 'Organization', name: 'Inzint', url: 'https://inzint.com' },
    publisher: { '@type': 'Organization', name: 'Inzint', url: 'https://inzint.com' },
    about: [
      'AI platform engineering',
      'Conversational AI',
      'AI product re-architecture',
      'Next.js and NestJS',
      'Voice AI',
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
              Thotis IA · AI platform engineering
            </div>
            <h1 className="case-study-title text-balance text-[2.65rem] font-semibold leading-[1.08] tracking-[-0.035em] text-gray-950 sm:text-6xl lg:text-[4.25rem]">
              {title}
            </h1>
            <p className="mt-7 text-xl leading-8 text-gray-600 sm:text-2xl sm:leading-9">
              Reworking data, personas, conversational AI, voice and quality systems inside a live, multi-vendor education platform.
            </p>

            <div className="mt-9 flex items-center gap-4 border-t border-gray-200 pt-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-950 text-sm font-bold text-white">
                IN
              </div>
              <div className="text-sm leading-6">
                <p className="font-medium text-gray-950">Inzint</p>
                <p className="flex flex-wrap items-center gap-x-2 text-gray-500">
                  <time dateTime={publishedDate}>September 1, 2026</time>
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
            Has your AI prototype become a production platform?
          </p>
          <h2 className="case-study-title mt-4 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
            Let&apos;s make the next release safer than the last.
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
