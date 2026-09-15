'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Clock3, Star } from 'lucide-react';
import type { CaseStudy, CaseStudyVerdict } from '@/data/case-studies';
import { cn } from '@/lib/utils';

const BOOKING_URL =
  'https://outlook.office.com/bookwithme/user/dca57ea980d34c5ba4dd0dac1c5617f7%40inzint.com?anonymous&ismsaljsauthenabled=true';

const EASE = [0.22, 1, 0.36, 1] as const;

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const PRINCIPLES = [
  {
    number: '01',
    title: 'Decisions, not just deliverables',
    body: 'Why each architecture choice was made, what it replaced and what the trade-off cost.',
  },
  {
    number: '02',
    title: 'The hard parts stay in',
    body: 'Messy migrations, production incidents and vendor boundaries are part of the story, not edited out of it.',
  },
  {
    number: '03',
    title: 'Figures the client signed off',
    body: "Every number comes from the project record or the client's own review. Nothing is rounded up for effect.",
  },
];

const WAYS_OF_WORKING = ['Founder-led squads', 'Weekly demos', 'Documented decisions'];

function formatDate(iso: string, style: 'long' | 'short' = 'long') {
  const [year, month, day] = iso.split('-').map(Number);
  const name = MONTHS[(month ?? 1) - 1] ?? '';

  return style === 'short' ? `${name.slice(0, 3)} ${year}` : `${name} ${day}, ${year}`;
}

const pad = (value: number) => String(value).padStart(2, '0');

/* ------------------------------------------------------------------ */
/* Primitives                                                          */
/* ------------------------------------------------------------------ */

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        delay: reduceMotion ? 0 : delay,
        ease: EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        'flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500',
        className
      )}
    >
      <span aria-hidden="true" className="h-px w-8 bg-primary-600" />
      {children}
    </p>
  );
}

interface CoverProps {
  study: CaseStudy;
  size: 'large' | 'small';
  sizes: string;
  priority?: boolean;
}

/**
 * Visual for a study. Screenshots sit inside a browser-window frame that
 * bleeds off the bottom edge; illustrations are shown whole on a tinted
 * backdrop. The parent must be `relative` with a fixed aspect or height.
 */
function Cover({ study, size, sizes, priority = false }: CoverProps) {
  const { cover } = study;
  const large = size === 'large';

  if (cover.kind === 'illustration') {
    return (
      <div className="absolute inset-0" style={{ background: cover.backdrop }}>
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn('object-contain', large ? 'p-6 sm:p-10' : 'p-2')}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: cover.backdrop }}>
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div
        className={cn(
          'absolute bottom-0 overflow-hidden border border-white/10 bg-[#0d1130] shadow-[0_30px_80px_rgba(2,6,23,0.55)]',
          large
            ? 'inset-x-[8%] top-[14%] rounded-t-xl sm:rounded-t-2xl'
            : 'inset-x-[10%] top-[18%] rounded-t-lg'
        )}
      >
        <div
          aria-hidden="true"
          className={cn(
            'flex items-center gap-1.5 border-b border-white/10',
            large ? 'h-7 px-3 sm:h-8 sm:px-4' : 'h-4 px-2'
          )}
        >
          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              className={cn('rounded-full bg-white/20', large ? 'h-2 w-2' : 'h-1 w-1')}
            />
          ))}
        </div>
        <div className={cn('absolute inset-x-0 bottom-0', large ? 'top-7 sm:top-8' : 'top-4')}>
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-left-top"
          />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function Intro({ studies }: { studies: CaseStudy[] }) {
  const sectors = Array.from(new Set(studies.map((study) => study.sector)));
  const ratedStudies = studies.filter((study) => study.verdict);
  const averageRating = (
    ratedStudies.reduce(
      (sum, study) => sum + Number.parseFloat(study.verdict?.rating ?? '0'),
      0
    ) / Math.max(ratedStudies.length, 1)
  ).toFixed(1);
  const latest = studies[0];

  const facts = [
    { label: 'Published stories', value: pad(studies.length) },
    { label: 'Sectors', value: sectors.join(' · ') },
    { label: 'Average client rating', value: `${averageRating} / 5` },
    { label: 'Latest', value: latest ? formatDate(latest.publishedDate, 'short') : '—' },
  ];

  return (
    <section
      aria-labelledby="case-studies-heading"
      className="border-b border-gray-200 px-5 pb-10 pt-10 sm:px-8 sm:pt-14 lg:pb-11 lg:pt-16"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
            Resources
            <span aria-hidden="true" className="text-gray-300">
              /
            </span>
            <span className="text-primary-600">Case studies</span>
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
            <h1
              id="case-studies-heading"
              className="case-study-title text-balance text-[clamp(2.75rem,6.6vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-gray-950"
            >
              The work behind the outcome.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-gray-600 sm:text-xl sm:leading-9 lg:pb-2">
              Long-form engineering stories about migrations, re-architectures and the decisions
              inside them. Written from the project record, with outcomes the client signed off.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-gray-200 pt-6 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-lg font-semibold tracking-tight text-gray-950 sm:text-xl">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function FeaturedStudy({ study }: { study: CaseStudy }) {
  return (
    <section aria-labelledby="latest-story-heading" className="px-5 pt-12 sm:px-8 lg:pt-16">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h2
              id="latest-story-heading"
              className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500"
            >
              <span aria-hidden="true" className="h-px w-8 bg-primary-600" />
              Latest story
            </h2>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
              Published{' '}
              <time dateTime={study.publishedDate} className="text-gray-500">
                {formatDate(study.publishedDate)}
              </time>
            </p>
          </div>

          <article className="group grid overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white shadow-[0_28px_70px_-40px_rgba(15,23,42,0.25)] lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            <Link
              href={study.slug}
              aria-label={`Read the ${study.client} case study`}
              className="relative block aspect-[4/3] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-600 lg:aspect-auto lg:min-h-[560px]"
            >
              <Cover
                study={study}
                size="large"
                sizes="(max-width: 1024px) 100vw, 640px"
                priority
              />
            </Link>

            <div className="flex flex-col p-7 sm:p-10 lg:p-12">
              <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-500">
                <span className="font-semibold text-gray-950">{study.client}</span>
                <span aria-hidden="true">·</span>
                <span>{study.industry}</span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                  {study.readTime} min read
                </span>
              </p>

              <h3 className="case-study-title mt-6 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-gray-950 sm:text-4xl lg:text-[2.75rem]">
                <Link
                  href={study.slug}
                  className="transition-colors hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-4"
                >
                  {study.title}
                </Link>
              </h3>

              <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                {study.dek}
              </p>

              <dl className="mt-8 grid grid-cols-3 divide-x divide-gray-200 border-y border-gray-200">
                {study.proof.map((item) => (
                  <div key={item.label} className="flex flex-col-reverse py-5 pl-4 first:pl-0 sm:pr-4">
                    <dt className="mt-1.5 text-xs leading-5 text-gray-500">{item.label}</dt>
                    <dd className="text-xl font-semibold tracking-tight text-gray-950 sm:text-2xl lg:text-[1.7rem]">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology stack">
                {study.stack.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-gray-200 bg-[#f7f7f5] px-3 py-1.5 text-xs font-medium text-gray-700"
                  >
                    {technology}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                <Link
                  href={study.slug}
                  className="group/cta inline-flex items-center gap-2.5 rounded-full bg-gray-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                >
                  Read the case study
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover/cta:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

function StudyIndex({ studies }: { studies: CaseStudy[] }) {
  return (
    <section
      aria-labelledby="index-heading"
      className="mt-16 border-t border-gray-200 bg-[#f7f7f5] px-5 py-16 sm:px-8 lg:mt-24 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Index</Eyebrow>
            <h2
              id="index-heading"
              className="case-study-title mt-4 text-3xl font-semibold tracking-[-0.02em] text-gray-950 sm:text-4xl"
            >
              All case studies
            </h2>
          </div>
          <p className="text-sm text-gray-500">
            {pad(studies.length)} {studies.length === 1 ? 'story' : 'stories'}
            <span aria-hidden="true"> · </span>
            newest first
          </p>
        </Reveal>

        <ol className="mt-8 border-t border-gray-200">
          {studies.map((study, index) => (
            <li key={study.id} className="border-b border-gray-200">
              <Reveal delay={index * 0.05}>
                <Link
                  href={study.slug}
                  className="group -mx-3 grid gap-5 rounded-2xl px-3 py-7 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 sm:py-8 md:grid-cols-[9.5rem_minmax(0,1fr)_auto] md:items-center md:gap-6 lg:grid-cols-[3rem_13rem_minmax(0,1.2fr)_minmax(0,0.8fr)_auto] lg:gap-7"
                >
                  <span
                    className="hidden font-mono text-sm text-gray-400 lg:block"
                    aria-hidden="true"
                  >
                    {pad(index + 1)}
                  </span>

                  <div className="relative aspect-[4/3] w-full max-w-[340px] overflow-hidden rounded-xl border border-gray-200 md:max-w-none">
                    <Cover study={study} size="small" sizes="(max-width: 768px) 90vw, 220px" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                      {study.client}
                      <span aria-hidden="true" className="mx-2 text-gray-300">
                        ·
                      </span>
                      {study.industry}
                    </p>
                    <h3 className="case-study-title mt-2.5 text-2xl font-semibold leading-[1.15] tracking-[-0.02em] text-gray-950 transition-colors group-hover:text-primary-700 sm:text-[1.75rem]">
                      {study.title}
                    </h3>
                    <p className="mt-2.5 max-w-xl text-sm leading-6 text-gray-600 lg:hidden">
                      {study.engagement}
                    </p>
                  </div>

                  <div className="hidden text-sm leading-6 lg:block">
                    <p className="text-gray-950">
                      <span className="font-semibold">{study.highlight.value}</span>{' '}
                      <span className="text-gray-600">{study.highlight.label}</span>
                    </p>
                    <p className="mt-1.5 text-gray-500">{study.stack.join(' · ')}</p>
                  </div>

                  <div className="flex items-center justify-between gap-4 md:flex-col md:items-end md:justify-center md:gap-3">
                    <p className="whitespace-nowrap text-sm text-gray-500">
                      <time dateTime={study.publishedDate}>
                        {formatDate(study.publishedDate, 'short')}
                      </time>
                      <span aria-hidden="true"> · </span>
                      {study.readTime} min
                    </p>
                    <span
                      aria-hidden="true"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-colors group-hover:border-primary-600 group-hover:bg-primary-600 group-hover:text-white"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section
      aria-labelledby="principles-heading"
      className="border-t border-gray-200 px-5 py-16 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="max-w-2xl">
          <Eyebrow>How these are written</Eyebrow>
          <h2
            id="principles-heading"
            className="case-study-title mt-4 text-3xl font-semibold tracking-[-0.02em] text-gray-950 sm:text-4xl"
          >
            Case studies you can check.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 md:grid-cols-3">
          {PRINCIPLES.map((principle, index) => (
            <Reveal key={principle.number} delay={index * 0.06} className="bg-white p-7 sm:p-8">
              <span className="font-mono text-xs text-primary-600">{principle.number}</span>
              <h3 className="mt-10 text-xl font-semibold tracking-tight text-gray-950">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">{principle.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function VerdictCard({ study }: { study: CaseStudy & { verdict: CaseStudyVerdict } }) {
  const { verdict } = study;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span
            role="img"
            aria-label={`${verdict.rating} out of 5 client rating`}
            className="flex gap-0.5"
          >
            {[0, 1, 2, 3, 4].map((star) => (
              <Star key={star} className="h-4 w-4 fill-amber-500 text-amber-500" aria-hidden="true" />
            ))}
          </span>
          <span className="text-sm font-semibold text-gray-950" aria-hidden="true">
            {verdict.rating}
          </span>
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
          {study.period}
        </span>
      </div>

      <blockquote className="case-study-title mt-6 text-xl font-medium leading-snug tracking-[-0.01em] text-gray-950 sm:text-[1.35rem]">
        “{verdict.quote}”
      </blockquote>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Client endorsements">
        {verdict.endorsements.map((endorsement) => (
          <li
            key={endorsement}
            className="rounded-full bg-[#eef1f4] px-3 py-1.5 text-xs font-medium text-gray-700"
          >
            {endorsement}
          </li>
        ))}
      </ul>

      <footer className="mt-auto flex items-center justify-between gap-4 border-t border-gray-200 pt-5">
        <div>
          <p className="text-sm font-semibold text-gray-950">{study.client}</p>
          <p className="mt-0.5 text-xs text-gray-500">{study.engagement}</p>
        </div>
        <Link
          href={study.slug}
          className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
        >
          Read the story
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </footer>
    </article>
  );
}

function Verdicts({ studies }: { studies: CaseStudy[] }) {
  const reviewedStudies = studies.filter(
    (study): study is CaseStudy & { verdict: CaseStudyVerdict } => Boolean(study.verdict)
  );

  if (reviewedStudies.length === 0) return null;

  return (
    <section
      aria-labelledby="verdicts-heading"
      className="border-t border-gray-200 bg-[#f7f7f5] px-5 py-16 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
          <div>
            <Eyebrow>Client verdicts</Eyebrow>
            <h2
              id="verdicts-heading"
              className="case-study-title mt-4 text-3xl font-semibold tracking-[-0.02em] text-gray-950 sm:text-4xl"
            >
              Rated on completion, not on the pitch.
            </h2>
          </div>
          <p className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 lg:max-w-xl lg:justify-self-end">
            Ratings and endorsements are taken from the client&apos;s own review at the close of
            each engagement.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {reviewedStudies.map((study, index) => (
            <Reveal key={study.id} delay={index * 0.06} className="h-full">
              <VerdictCard study={study} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden bg-[#07142d] px-5 py-20 text-white sm:px-8 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_88%_18%,rgba(0,105,255,0.3),transparent_34%),radial-gradient(circle_at_6%_92%,rgba(0,105,255,0.14),transparent_28%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />

      <div className="relative mx-auto max-w-[1200px]">
        <Reveal className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              <span aria-hidden="true" className="h-px w-8 bg-blue-400" />
              Have a system with history?
            </p>
            <h2
              id="cta-heading"
              className="case-study-title mt-5 text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
            >
              Modernise it without losing what already works.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A 30-minute call is enough to tell you whether your migration, re-architecture or AI
              product is a fit for how we work.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-gray-950 transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#07142d]"
            >
              Book a 30-minute call
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#07142d]"
            >
              Start a conversation
            </Link>
          </div>
        </Reveal>

        <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
          {WAYS_OF_WORKING.map((item) => (
            <li key={item} className="inline-flex items-center gap-2.5">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page section                                                        */
/* ------------------------------------------------------------------ */

export default function CaseStudiesSection({ studies }: { studies: CaseStudy[] }) {
  const [latest] = studies;

  return (
    <>
      <Intro studies={studies} />
      {latest ? <FeaturedStudy study={latest} /> : null}
      <StudyIndex studies={studies} />
      <Principles />
      <Verdicts studies={studies} />
      <ClosingCta />
    </>
  );
}
