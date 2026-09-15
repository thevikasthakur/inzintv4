import Link from 'next/link';
import { ArrowRight, Home, Layers, BookOpen, Mail } from 'lucide-react';
import { FooterSection } from '@/components/sections';

const destinations = [
  { href: '/', label: 'Home', description: 'Start from the top', icon: Home },
  { href: '/services', label: 'Services', description: 'What we build, end to end', icon: Layers },
  { href: '/resources/tools/case-studies', label: 'Case studies', description: 'The work behind the outcomes', icon: BookOpen },
  { href: '/contact', label: 'Contact', description: 'Talk to the team', icon: Mail },
];

export default function NotFound() {
  return (
    <main>
      <section className="min-h-[70vh] flex items-center bg-gradient-to-b from-blue-50 to-white px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center w-full">
          <p className="text-sm font-semibold tracking-wider text-primary-600 uppercase mb-4">
            Error 404
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            We couldn&apos;t find that page
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            The link may be out of date, or the page has moved. These are the places most people are
            looking for.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {destinations.map((destination) => (
              <Link
                key={destination.href}
                href={destination.href}
                className="group flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-5 hover:border-primary-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <destination.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {destination.label}
                  </div>
                  <div className="text-sm text-gray-500">{destination.description}</div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
