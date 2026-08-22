import Link from 'next/link';
import { ArrowUpRight, ChevronDown, Quote } from 'lucide-react';
import TestimonialVideoPlayer from './TestimonialVideoPlayer';

const transcript =
  'We interviewed multiple companies for this project and Inzint were by far the most capable and the most proactive, and the pricing was also excellent. We started work around 2.5 years ago, and since then we have built not one, not two, but three different products with Inzint. Three quite different products, and we\'re still finalising two of them now. One of them has been completed. My experience with the company has been superb. The communication is excellent, the attention to detail is excellent, the cooperation and general expertise and technicality of the company has been beyond my expectations. I have no hesitation in recommending Inzint to any company that is looking for any development on the technical side whatsoever. Superb experience.';

export default function VideoTestimonialsSection() {
  return (
    <section
      aria-labelledby="client-testimonial-heading"
      className="relative isolate overflow-hidden bg-[#07142d] py-20 text-white sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(0,105,255,0.28),transparent_30%),radial-gradient(circle_at_92%_88%,rgba(124,58,237,0.2),transparent_27%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      <div className="container relative z-10">
        <header className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
            <span className="h-px w-10 bg-blue-400" />
            Client story
          </div>
          <h2
            id="client-testimonial-heading"
            className="text-4xl font-bold tracking-[-0.035em] sm:text-5xl lg:text-6xl"
          >
            What our clients say
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            The clearest measure of our work is the trust that grows from one
            product into the next.
          </p>
        </header>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.65fr)] lg:gap-16">
          <article className="relative order-2 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-[0_30px_90px_-45px_rgba(0,0,0,0.8)] backdrop-blur-sm sm:p-10 lg:order-1 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary-500/15 blur-3xl"
            />

            <Quote
              aria-hidden="true"
              className="relative mb-8 h-10 w-10 text-blue-300"
              strokeWidth={1.5}
            />

            <blockquote className="relative">
              <p className="text-2xl font-semibold leading-[1.3] tracking-[-0.025em] text-white sm:text-3xl lg:text-[2.45rem]">
                “We interviewed multiple companies. Inzint were by far the most
                capable and the most proactive. Since then, we have built{' '}
                <span className="text-blue-300">
                  not one, not two, but three different products
                </span>{' '}
                with Inzint.”
              </p>

              <footer className="mt-9 border-t border-white/10 pt-7">
                <p className="text-base font-semibold text-white">
                  Chief Executive Officer
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  TALEER LLC <span aria-hidden="true">·</span> Sharjah, UAE
                </p>
              </footer>
            </blockquote>

            <dl className="mt-9 grid grid-cols-2 gap-4 border-t border-white/10 pt-7">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Partnership
                </dt>
                <dd className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  2.5+ years
                </dd>
              </div>
              <div className="border-l border-white/10 pl-5 sm:pl-7">
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Built together
                </dt>
                <dd className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  3 products
                </dd>
              </div>
            </dl>

            <details className="group mt-8 border-t border-white/10 pt-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-200 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#07142d] [&::-webkit-details-marker]:hidden">
                Read the complete transcript
                <ChevronDown
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300">
                {transcript}
              </p>
            </details>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-950/30 transition-colors hover:bg-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#07142d]"
            >
              Start a conversation
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </article>

          <div className="order-1 mx-auto w-full max-w-[370px] lg:order-2">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rotate-2 rounded-[2.5rem] border border-blue-300/15 bg-gradient-to-b from-blue-400/10 to-purple-400/5"
              />
              <TestimonialVideoPlayer />
            </div>
            <p className="mt-6 text-center text-sm leading-relaxed text-slate-400">
              A 55-second account of a multi-product partnership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
