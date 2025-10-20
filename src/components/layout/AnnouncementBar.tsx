'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface AnnouncementBarProps {
  text: string;
  link?: string;
  linkText?: string;
}

export default function AnnouncementBar({
  text = 'Were ranked as the #1 AI Development Company by Clutch 2024',
  link = '/awards',
  linkText = 'Learn More',
}: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2.5 md:py-3">
            {/* Marquee Text for Mobile */}
            <div className="flex-1 overflow-hidden md:hidden">
              <motion.div
                className="flex whitespace-nowrap"
                animate={{
                  x: [0, -1000],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 20,
                    ease: 'linear',
                  },
                }}
              >
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center px-4">
                    <span className="text-sm font-medium">{text}</span>
                    {link && linkText && (
                      <Link
                        href={link}
                        className="ml-3 inline-flex items-center text-sm font-semibold underline-offset-4 hover:underline"
                      >
                        {linkText}
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Static Text for Desktop */}
            <div className="hidden flex-1 items-center justify-center md:flex">
              <span className="text-sm font-medium">{text}</span>
              {link && linkText && (
                <Link
                  href={link}
                  className="ml-3 inline-flex items-center text-sm font-semibold underline-offset-4 transition-all hover:underline"
                >
                  {linkText}
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              )}
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="flex-shrink-0 rounded-full p-1 transition-colors hover:bg-white/10"
              aria-label="Close announcement"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 -z-10 opacity-30"
          animate={{
            background: [
              'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
              'linear-gradient(90deg, transparent 100%, rgba(255,255,255,0.1) 150%, transparent 200%)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
