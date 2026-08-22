'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Database,
  FileStack,
  Languages,
  Quote,
  Sparkles,
  Star,
  Waypoints,
  Zap,
} from 'lucide-react';

const featuredStudy = {
  company: 'La Cuisine de Bernard',
  industry: 'Digital publishing',
  title: 'A decade of recipes, rebuilt for the next decade.',
  description:
    'We transformed a plugin-heavy WordPress archive into a fast, structured and multilingual publishing platform—without losing the content readers already loved.',
  href: '/case-studies/la-cuisine-de-bernard-wordpress-nextjs-payload-mongodb-migration',
  stack: ['Next.js', 'Payload CMS', 'MongoDB', 'DeepL'],
};

const proofPoints = [
  { value: '1,300+', label: 'recipes preserved' },
  { value: '2 GB', label: 'legacy data decoded' },
  { value: 'Near-zero', label: 'launch downtime' },
  { value: '5.0', label: 'client rating' },
];

const transformation = [
  {
    number: '01',
    icon: FileStack,
    title: 'Preserve the value',
    description:
      'Years of recipes, media and editorial context were treated as an asset—not baggage to discard.',
  },
  {
    number: '02',
    icon: Waypoints,
    title: 'Structure the system',
    description:
      'Inconsistent content became a clear model that editors, search engines and AI systems can understand.',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Launch with care',
    description:
      'The new stack replaced the old platform with near-zero downtime and a calmer publishing workflow.',
  },
];

const endorsements = [
  'Solution oriented',
  'Clear communicator',
  'Accountable for outcomes',
  'Detail oriented',
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function CaseStudiesSection() {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.7;
  const lift = reduceMotion ? 0 : 24;

  return (
    <>
      <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-[#061321] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(circle at 76% 34%, rgba(0,105,255,0.28), transparent 29%), radial-gradient(circle at 8% 92%, rgba(44,128,255,0.14), transparent 24%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1440px] flex-col px-5 pb-8 pt-14 sm:px-8 sm:pt-20 lg:px-12 lg:pt-10 xl:px-16">
          <div className="grid flex-1 items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-7">
            <motion.div
              initial={{ opacity: 0, y: lift }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration, ease }}
              className="relative z-10 max-w-3xl"
            >
              <div className="mb-7 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-200/80 sm:text-xs">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5 text-blue-300" aria-hidden="true" />
                  Selected engineering stories
                </span>
                <span className="text-white/35" aria-hidden="true">
                  /
                </span>
                <span>01 published story</span>
              </div>

              <h1 className="max-w-4xl text-[clamp(3.35rem,7.2vw,7.25rem)] font-semibold leading-[0.91] tracking-[-0.065em] text-white">
                The work behind
                <span className="block text-[#75b7ff]">the outcome.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
                Deep dives into the decisions, migrations and systems behind durable digital products—where the hard parts are the story.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#featured-work"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#071523] transition-colors hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#061321]"
                >
                  Explore the story
                  <ArrowDownRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
                <Link
                  href="/contact"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#061321]"
                >
                  Start a conversation
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 0.12, ease }}
              className="relative mx-auto w-full max-w-[650px] lg:max-w-none"
            >
              <div className="absolute inset-x-[12%] bottom-[8%] h-1/3 rounded-full bg-blue-500/25 blur-3xl" aria-hidden="true" />
              <Image
                src="/assets/images/case-studies/case-studies-hero-architecture.svg"
                alt="Diagram showing legacy records transformed into a structured digital platform"
                width={720}
                height={560}
                priority
                sizes="(max-width: 1024px) 92vw, 48vw"
                className="relative h-auto w-full"
              />
            </motion.div>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45 sm:text-xs">
            <span>Strategy / engineering / delivery</span>
            <span className="hidden items-center gap-2 sm:inline-flex">
              Scroll to inspect
              <span className="h-px w-8 bg-white/25" aria-hidden="true" />
            </span>
          </div>
        </div>
      </section>

      <section id="featured-work" className="scroll-mt-24 bg-[#f3f0e8] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1360px]">
          <motion.div
            initial={{ opacity: 0, y: lift }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration, ease }}
            className="mb-12 grid gap-6 border-t border-[#0b2037]/20 pt-5 md:grid-cols-[0.7fr_1.3fr] lg:mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-600">Featured transformation</p>
            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#091827] sm:text-5xl lg:text-6xl">
                Complex history. Clearer future.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#526274]">
                A closer look at what it takes to modernise a platform without erasing the value that made it successful.
              </p>
            </div>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: lift }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration, ease }}
            className="group overflow-hidden rounded-[2rem] border border-[#0b2037]/10 bg-white shadow-[0_28px_80px_rgba(20,43,66,0.10)] sm:rounded-[2.5rem]"
          >
            <div className="grid lg:grid-cols-[1.06fr_0.94fr]">
              <div className="relative flex min-h-[390px] items-center overflow-hidden bg-[#dfe8f3] p-4 sm:min-h-[520px] sm:p-8 lg:min-h-[620px]">
                <div className="absolute -left-20 top-1/4 h-56 w-56 rounded-full bg-blue-300/50 blur-3xl" aria-hidden="true" />
                <div className="absolute -right-16 bottom-8 h-64 w-64 rounded-full bg-white/70 blur-3xl" aria-hidden="true" />
                <motion.div
                  whileHover={reduceMotion ? undefined : { scale: 1.015 }}
                  transition={{ duration: 0.45, ease }}
                  className="relative w-full"
                >
                  <Image
                    src="/assets/images/case-studies/bernard-migration-map.svg"
                    alt="Diagram of La Cuisine de Bernard's legacy archive becoming a structured multilingual platform"
                    width={960}
                    height={720}
                    sizes="(max-width: 1024px) 92vw, 52vw"
                    className="h-auto w-full drop-shadow-[0_24px_32px_rgba(20,43,66,0.14)]"
                  />
                </motion.div>
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/75 bg-white/80 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.17em] text-[#0b2037] shadow-sm backdrop-blur sm:left-8 sm:top-8 sm:text-[11px]">
                  <span className="h-2 w-2 rounded-full bg-[#1bb978]" aria-hidden="true" />
                  Live platform
                </div>
              </div>

              <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12 xl:p-16">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-primary-700">
                      {featuredStudy.industry}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#718094]">01 / 01</span>
                  </div>

                  <p className="mt-10 text-sm font-semibold text-primary-600">{featuredStudy.company}</p>
                  <h3 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#081726] sm:text-5xl">
                    {featuredStudy.title}
                  </h3>
                  <p className="mt-6 max-w-xl text-base leading-8 text-[#5b6a7a] sm:text-lg">
                    {featuredStudy.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2.5" aria-label="Technology stack">
                    {featuredStudy.stack.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-[#0b2037]/10 bg-[#f7f7f4] px-3.5 py-2 text-xs font-semibold text-[#294057]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={featuredStudy.href}
                  className="mt-12 inline-flex w-fit items-center gap-3 border-b border-[#0b2037] pb-2 text-sm font-bold text-[#081726] transition-colors hover:border-primary-600 hover:text-primary-600 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-4"
                >
                  Read the full engineering story
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>

            <div className="grid border-t border-[#0b2037]/10 sm:grid-cols-2 lg:grid-cols-4">
              {proofPoints.map((item, index) => (
                <div
                  key={item.label}
                  className={`px-7 py-7 sm:px-8 lg:py-8 ${[
                    '',
                    'border-t border-[#0b2037]/10 sm:border-l sm:border-t-0',
                    'border-t border-[#0b2037]/10 sm:border-t lg:border-l lg:border-t-0',
                    'border-t border-[#0b2037]/10 sm:border-l sm:border-t lg:border-t-0',
                  ][index]}`}
                >
                  <p className="text-2xl font-semibold tracking-[-0.035em] text-[#081726] sm:text-3xl">{item.value}</p>
                  <p className="mt-1.5 text-sm text-[#6c7a89]">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.article>

          <div className="mt-20 sm:mt-24">
            <motion.div
              initial={{ opacity: 0, y: lift }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration, ease }}
              className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-600">How the change happened</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#081726] sm:text-4xl">Three moves. One careful rebuild.</h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#607080]">
                The technology mattered. The sequence—and the decisions inside it—mattered more.
              </p>
            </motion.div>

            <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-[#0b2037]/10 bg-[#0b2037]/10 lg:grid-cols-3">
              {transformation.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: lift }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration, delay: reduceMotion ? 0 : index * 0.08, ease }}
                  className="bg-[#faf9f5] p-7 sm:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.18em] text-primary-600">{item.number}</span>
                    <item.icon className="h-5 w-5 text-[#21415f]" strokeWidth={1.7} aria-hidden="true" />
                  </div>
                  <h3 className="mt-14 text-2xl font-semibold tracking-[-0.03em] text-[#081726]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#607080]">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#071523] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-600/20 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1220px]">
          <motion.div
            initial={{ opacity: 0, y: lift }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration, ease }}
            className="grid gap-12 lg:grid-cols-[0.32fr_0.68fr] lg:gap-20"
          >
            <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-10 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-14">
              <Quote className="h-10 w-10 text-primary-400" strokeWidth={1.4} aria-hidden="true" />
              <div>
                <div className="flex gap-1.5" aria-label="5 out of 5 client rating">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-[#ffb252] text-[#ffb252]" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-3 text-sm font-semibold text-white">5.0 client rating</p>
                <p className="mt-1 text-xs text-slate-400">La Cuisine de Bernard</p>
              </div>
            </div>

            <div>
              <blockquote className="max-w-4xl text-3xl font-medium leading-[1.18] tracking-[-0.035em] text-white sm:text-4xl lg:text-[3.15rem]">
                “Thank you, Vika took this project very seriously; he managed to find the right solutions.”
              </blockquote>
              <div className="mt-10 flex flex-wrap gap-2.5">
                {endorsements.map((endorsement) => (
                  <span
                    key={endorsement}
                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.05] px-3.5 py-2 text-xs font-medium text-slate-300"
                  >
                    <Check className="h-3.5 w-3.5 text-[#67dbaa]" aria-hidden="true" />
                    {endorsement}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f3f0e8] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: lift }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration, ease }}
          className="relative mx-auto max-w-[1360px] overflow-hidden rounded-[2rem] bg-primary-600 px-7 py-12 text-white sm:rounded-[2.5rem] sm:px-12 sm:py-16 lg:px-16 lg:py-20"
        >
          <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full border border-white/20" aria-hidden="true" />
          <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/20" aria-hidden="true" />
          <div className="absolute right-16 top-16 hidden h-3 w-3 rounded-full bg-[#ffb252] lg:block" aria-hidden="true" />

          <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-100">Have a system with history?</p>
              <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Make that history an advantage.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
                Modernise the platform without losing the content, customers or operational knowledge you have already built.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary-700 transition-colors hover:bg-[#edf5ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-primary-600 sm:px-7"
            >
              Talk to our team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <div className="relative mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20 pt-6 text-xs font-semibold uppercase tracking-[0.15em] text-blue-100">
            <span className="inline-flex items-center gap-2"><Database className="h-4 w-4" aria-hidden="true" /> Data migration</span>
            <span className="inline-flex items-center gap-2"><Languages className="h-4 w-4" aria-hidden="true" /> Multilingual systems</span>
            <span className="inline-flex items-center gap-2"><Waypoints className="h-4 w-4" aria-hidden="true" /> Platform modernisation</span>
          </div>
        </motion.div>
      </section>
    </>
  );
}
