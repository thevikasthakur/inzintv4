'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import Link from 'next/link';

const offices = [
  {
    city: 'New Delhi',
    country: 'India',
    type: 'Headquarters',
    address: '123 Tech Park, Sector 18, Gurugram, Haryana 122015',
    phone: '+91 11 1234 5678',
    email: 'delhi@inzint.com',
    timezone: 'IST (UTC+5:30)',
  },
  {
    city: 'Bangalore',
    country: 'India',
    type: 'Development Center',
    address: '456 Innovation Hub, Koramangala, Bangalore, Karnataka 560034',
    phone: '+91 80 8765 4321',
    email: 'bangalore@inzint.com',
    timezone: 'IST (UTC+5:30)',
  },
  {
    city: 'Mumbai',
    country: 'India',
    type: 'Regional Office',
    address: '789 Business Tower, Bandra Kurla Complex, Mumbai, Maharashtra 400051',
    phone: '+91 22 9876 5432',
    email: 'mumbai@inzint.com',
    timezone: 'IST (UTC+5:30)',
  },
  {
    city: 'Pune',
    country: 'India',
    type: 'Satellite Office',
    address: '321 Tech Center, Hinjewadi Phase 1, Pune, Maharashtra 411057',
    phone: '+91 20 6543 2109',
    email: 'pune@inzint.com',
    timezone: 'IST (UTC+5:30)',
  },
];

export default function LocationsSection() {
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
            Our Global Presence
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Offices across India, serving clients worldwide with local expertise and global standards.
          </p>
        </motion.div>

        {/* Offices Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16" ref={ref}>
          {offices.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {office.city}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600">
                    {office.type}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="space-y-3 text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p>{office.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <a href={`tel:${office.phone}`} className="hover:text-blue-600 transition-colors">
                    {office.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <a href={`mailto:${office.email}`} className="hover:text-blue-600 transition-colors">
                    {office.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <p>{office.timezone}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { label: 'Countries Served', value: '15+' },
            { label: 'Cities', value: '4' },
            { label: 'Team Members', value: '50+' },
            { label: 'Time Zones', value: '1' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Visit Our Office
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We'd love to meet you in person. Schedule a visit to discuss your project over coffee.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
          >
            Schedule a Visit
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
