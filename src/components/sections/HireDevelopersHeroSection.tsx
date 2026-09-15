'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, Code, Zap } from 'lucide-react';

const BOOKING_URL =
  'https://outlook.office.com/bookwithme/user/dca57ea980d34c5ba4dd0dac1c5617f7%40inzint.com?anonymous&ismsaljsauthenabled=true';

export default function HireDevelopersHeroSection() {
  const facts = [
    { icon: Users, value: '3–5', label: 'engineers per squad, led by a founder' },
    { icon: Code, value: '2 weeks', label: 'pilot sprint before any long commitment' },
    { icon: Zap, value: 'Weekly', label: 'live demos or recorded updates' },
  ];

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                Dedicated squads
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                An Inzint squad
              </span>
              <br />
              <span className="text-gray-900">on your team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Add a founder-led squad of Inzint engineers to your team on a monthly retainer. The
              same stack we use for our own products, the same weekly demos, and code that lives in
              your repositories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={BOOKING_URL}
                target="_blank"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-[1.02] transition-all text-center"
              >
                Start With a Pilot Sprint
              </Link>
              <Link
                href="#how-it-works"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all text-center"
              >
                How It Works
              </Link>
            </div>
          </motion.div>

          {/* Right facts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-6"
          >
            {facts.map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex-shrink-0">
                  <fact.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">{fact.value}</div>
                  <div className="text-gray-600">{fact.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
