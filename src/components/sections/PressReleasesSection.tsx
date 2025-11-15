'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const pressReleases = [
  {
    title: 'Inzint Launches AI Voice Bot Platform for Healthcare Industry',
    date: 'November 10, 2025',
    excerpt: 'Revolutionary AI-powered voice reception system helps healthcare providers automate patient interactions and improve service quality.',
    category: 'Product Launch',
    link: '#',
  },
  {
    title: 'Inzint Secures Series A Funding to Expand AI Capabilities',
    date: 'October 15, 2025',
    excerpt: 'Leading venture capital firms invest in Inzint to accelerate development of enterprise AI solutions and expand into new markets.',
    category: 'Funding',
    link: '#',
  },
  {
    title: 'Partnership Announcement: AWS Advanced Consulting Partner',
    date: 'September 20, 2025',
    excerpt: 'Inzint achieves AWS Advanced Consulting Partner status, demonstrating expertise in cloud architecture and enterprise solutions.',
    category: 'Partnership',
    link: '#',
  },
  {
    title: 'Inzint Named "Best AI Development Company" by Tech Awards 2025',
    date: 'August 5, 2025',
    excerpt: 'Industry recognition for excellence in AI and machine learning solutions, beating 500+ competitors in the software development category.',
    category: 'Award',
    link: '#',
  },
  {
    title: 'New Bangalore Development Center Opens with 50+ Engineers',
    date: 'July 12, 2025',
    excerpt: 'Expansion into Bangalore strengthens our ability to serve clients with dedicated teams of senior software engineers.',
    category: 'Expansion',
    link: '#',
  },
  {
    title: 'Case Study: How Inzint Helped XYZ Corp Reduce Costs by 40%',
    date: 'June 18, 2025',
    excerpt: 'Detailed look at how our AI-powered automation solution transformed operations for a Fortune 500 logistics company.',
    category: 'Case Study',
    link: '#',
  },
];

const mediaKits = [
  { title: 'Company Overview', type: 'PDF', size: '2.5 MB' },
  { title: 'Logo Pack', type: 'ZIP', size: '15 MB' },
  { title: 'Executive Bios', type: 'PDF', size: '1.2 MB' },
  { title: 'Product Screenshots', type: 'ZIP', size: '45 MB' },
];

export default function PressReleasesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Press & Media
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Latest news, updates, and media resources from Inzint.
          </p>
        </motion.div>

        {/* Press Releases */}
        <div className="mb-16" ref={ref}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Recent Press Releases
          </h2>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">
                        {release.category}
                      </span>
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Calendar className="w-4 h-4" />
                        {release.date}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {release.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {release.excerpt}
                    </p>
                  </div>
                  <Link
                    href={release.link}
                    className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300 whitespace-nowrap"
                  >
                    Read More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Media Kit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 border border-gray-200 mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Media Kit
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mediaKits.map((kit) => (
              <a
                key={kit.title}
                href="#"
                className="flex flex-col p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
              >
                <div className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {kit.title}
                </div>
                <div className="text-sm text-gray-600">
                  {kit.type} • {kit.size}
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Media Inquiries
          </h3>
          <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
            For press inquiries, interviews, or media partnerships, contact our PR team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:press@inzint.com"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
            >
              Email: press@inzint.com
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors duration-300"
            >
              Contact Form
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
