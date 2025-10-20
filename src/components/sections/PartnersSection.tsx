'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const partners = [
  { id: 1, name: 'Adidas', logo: 'ADIDAS' },
  { id: 2, name: 'IKEA', logo: 'IKEA' },
  { id: 3, name: 'Pizza Hut', logo: 'PIZZA HUT' },
  { id: 4, name: 'Americana', logo: 'AMERICANA' },
  { id: 5, name: 'KFC', logo: 'KFC' },
  { id: 6, name: 'Dominos', logo: 'DOMINOS' },
  { id: 7, name: 'Virgin', logo: 'VIRGIN' },
  { id: 8, name: 'Emirates', logo: 'EMIRATES' },
  { id: 9, name: 'KPMG', logo: 'KPMG' },
  { id: 10, name: 'Deloitte', logo: 'DELOITTE' },
  { id: 11, name: 'BMW', logo: 'BMW' },
  { id: 12, name: 'Philips', logo: 'PHILIPS' },
];

const featuredClients = [
  {
    id: 1,
    name: 'Fortune 500',
    count: '50+',
    description: 'Companies trust us',
  },
  {
    id: 2,
    name: 'Global Brands',
    count: '200+',
    description: 'Across industries',
  },
  {
    id: 3,
    name: 'Countries',
    count: '50+',
    description: 'Worldwide presence',
  },
  {
    id: 4,
    name: 'Active Users',
    count: '100M+',
    description: 'Using our solutions',
  },
];

export default function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPosition;

        // Reset when reaching halfway point for seamless loop
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4"
          >
            TRUSTED BY LEADERS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Global Partners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Partnering with world-renowned brands to deliver exceptional digital experiences
          </motion.p>
        </div>

        {/* Featured Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {featuredClients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                {client.count}
              </div>
              <div className="font-semibold text-gray-900 mb-1">
                {client.name}
              </div>
              <div className="text-sm text-gray-600">
                {client.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo Marquee - First Row */}
        <div className="relative mb-8">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Duplicate the array for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 w-48 h-32 bg-white rounded-xl border border-gray-200 flex items-center justify-center hover:border-primary-300 hover:shadow-lg transition-all group"
              >
                <div className="text-2xl font-bold text-gray-300 group-hover:text-primary-500 transition-colors">
                  {partner.logo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Major Clients Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Featured Partnerships
            </h3>
            <p className="text-gray-600">
              Building long-term relationships with industry leaders
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {partners.slice(0, 12).map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="aspect-square bg-white rounded-xl border border-gray-200 flex items-center justify-center hover:border-primary-300 hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-300 group-hover:text-primary-500 transition-colors">
                    {partner.logo}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">ISO Certified</div>
                <div className="text-sm text-gray-600">Quality Assured</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Top Rated</div>
                <div className="text-sm text-gray-600">4.9/5 Stars</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Secure</div>
                <div className="text-sm text-gray-600">Enterprise Grade</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
