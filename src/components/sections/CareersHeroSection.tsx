'use client';

import { motion } from 'framer-motion';
import { Users, Rocket, Heart, Zap } from 'lucide-react';

const perks = [
  { label: 'Remote-First', icon: Users },
  { label: 'Fast Growth', icon: Rocket },
  { label: 'Great Culture', icon: Heart },
  { label: 'Cutting-Edge Tech', icon: Zap },
];

export default function CareersHeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Build the Future With Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join a team of passionate engineers building AI-driven solutions that make a real impact.
            </p>
          </motion.div>
        </div>

        {/* Perks */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {perks.map((perk, index) => (
            <motion.div
              key={perk.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 mb-3">
                <perk.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-lg font-semibold text-gray-900">{perk.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
