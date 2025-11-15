'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getIcon } from '@/lib/icons';

interface ServiceHeroSectionProps {
  badge: { icon: string; text: string };
  title: string;
  highlightedTitle: string;
  description: string;
  gradient?: string;
}

export default function ServiceHeroSection({
  badge,
  title,
  highlightedTitle,
  description,
  gradient = 'from-blue-600 to-purple-600',
}: ServiceHeroSectionProps) {
  const BadgeIcon = getIcon(badge.icon);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24">
      <div className="container relative z-10 max-w-5xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${gradient} bg-opacity-10 rounded-full text-sm font-medium mb-6`}
        >
          <BadgeIcon className="w-4 h-4" />
          <span>{badge.text}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          {title}{' '}
          <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
            {highlightedTitle}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r ${gradient} text-white rounded-lg font-semibold hover:shadow-xl transition-all`}
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/hire-developers"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-300 rounded-lg font-semibold hover:border-gray-400 transition-all"
          >
            Hire Developers
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
