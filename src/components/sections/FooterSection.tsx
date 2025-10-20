'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  ArrowRight,
  Award,
  Globe,
} from 'lucide-react';
import Link from 'next/link';

const offices = [
  {
    id: 1,
    city: 'New York',
    country: 'USA',
    address: '1201 6th Avenue, New York, NY 10020',
    phone: '+1 (646) 585-2380',
    email: 'us@appinventiv.com',
  },
  {
    id: 2,
    city: 'London',
    country: 'UK',
    address: '10 Eastcheap, London EC3M 1AJ',
    phone: '+44 20 3807 1873',
    email: 'uk@appinventiv.com',
  },
  {
    id: 3,
    city: 'Dubai',
    country: 'UAE',
    address: 'Dubai Silicon Oasis, DDP Building A2',
    phone: '+971 50 276 9709',
    email: 'uae@appinventiv.com',
  },
  {
    id: 4,
    city: 'Singapore',
    country: 'Singapore',
    address: '1 Raffles Place, #40-02, Singapore 048616',
    phone: '+65 3157 0607',
    email: 'sg@appinventiv.com',
  },
];

const services = [
  'Mobile App Development',
  'Web Development',
  'AI & ML Solutions',
  'Blockchain Development',
  'IoT Solutions',
  'Cloud Services',
  'UI/UX Design',
  'DevOps Services',
];

const company = [
  'About Us',
  'Our Team',
  'Careers',
  'Case Studies',
  'Blog',
  'Press',
  'Partners',
  'Contact',
];

const industries = [
  'Healthcare',
  'Finance',
  'E-commerce',
  'Education',
  'Real Estate',
  'Logistics',
  'Entertainment',
  'Travel',
];

const resources = [
  'Documentation',
  'API Reference',
  'Tutorials',
  'Webinars',
  'White Papers',
  'Case Studies',
  'FAQs',
  'Support',
];

const socialLinks = [
  { icon: Facebook, url: '#', label: 'Facebook' },
  { icon: Twitter, url: '#', label: 'Twitter' },
  { icon: Linkedin, url: '#', label: 'LinkedIn' },
  { icon: Instagram, url: '#', label: 'Instagram' },
  { icon: Youtube, url: '#', label: 'YouTube' },
  { icon: Github, url: '#', label: 'GitHub' },
];

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">Appinventiv</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  A leading digital product engineering company transforming businesses with innovative
                  technology solutions. We build apps that scale and drive real business value.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                  <Award className="w-5 h-5 text-primary-400" />
                  <span className="text-sm">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                  <Globe className="w-5 h-5 text-primary-400" />
                  <span className="text-sm">50+ Countries</span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Subscribe to Newsletter</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                  />
                  <button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-semibold mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      className="w-10 h-10 bg-white/5 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all border border-white/10 hover:border-primary-500"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service}>
                      <Link
                        href="#"
                        className="hover:text-primary-400 transition-colors inline-block"
                      >
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-3">
                  {company.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="hover:text-primary-400 transition-colors inline-block"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Industries */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-white font-semibold mb-4">Industries</h4>
                <ul className="space-y-3">
                  {industries.map((industry) => (
                    <li key={industry}>
                      <Link
                        href="#"
                        className="hover:text-primary-400 transition-colors inline-block"
                      >
                        {industry}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Resources */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="text-white font-semibold mb-4">Resources</h4>
                <ul className="space-y-3">
                  {resources.map((resource) => (
                    <li key={resource}>
                      <Link
                        href="#"
                        className="hover:text-primary-400 transition-colors inline-block"
                      >
                        {resource}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h4 className="text-2xl font-bold text-white mb-2">Our Global Offices</h4>
            <p className="text-gray-400">Connect with us at any of our worldwide locations</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-primary-500/50 transition-all group"
              >
                <div className="mb-4">
                  <h5 className="text-white font-semibold text-lg mb-1">{office.city}</h5>
                  <p className="text-sm text-gray-500">{office.country}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm leading-relaxed">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <a
                      href={`tel:${office.phone}`}
                      className="text-sm hover:text-primary-400 transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-sm hover:text-primary-400 transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-gray-400"
            >
              © {currentYear} Appinventiv. All rights reserved.
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6 text-sm"
            >
              <Link href="#" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-primary-400 transition-colors">
                Cookie Policy
              </Link>
              <Link href="#" className="hover:text-primary-400 transition-colors">
                Sitemap
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-sm text-gray-400"
            >
              <span>Made with</span>
              <span className="text-red-500">❤</span>
              <span>across the globe</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
}
