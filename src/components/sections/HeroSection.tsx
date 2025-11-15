'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, ChevronDown } from 'lucide-react';
import { AnimatedCodeScreen } from '@/components/ui/AnimatedCodeScreen';
import { useState, useEffect } from 'react';

const stats = [
  { label: 'Projects Delivered', value: '1000+', icon: Award },
  { label: 'Active Users', value: '100M+', icon: Users },
  { label: 'Revenue Generated', value: '$1B+', icon: TrendingUp },
];

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Humans build slow.\nWe build with AI.\n10x cheaper,\n10x faster.\n100% reliable.";

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 50; // milliseconds per character

    const typeNextChar = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeNextChar, typingSpeed);
      }
    };

    // Start typing after initial delay
    const startTimeout = setTimeout(() => {
      typeNextChar();
    }, 800);

    return () => clearTimeout(startTimeout);
  }, []);

  // Parse the displayed text to apply gradient
  const renderText = () => {
    const parts = displayedText.split('10x');
    if (parts.length === 1) {
      return <>{displayedText}</>;
    }

    // Check if we have the full gradient text
    const gradientPart = displayedText.includes('10x cheaper')
      ? displayedText.substring(displayedText.indexOf('10x'))
      : '';

    const beforeGradient = displayedText.substring(0, displayedText.indexOf('10x'));

    return (
      <>
        {beforeGradient}
        <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
          {gradientPart}
        </span>
      </>
    );
  };

// import Link from 'next/link';
  // 
  //  <Link href="/contact" className="group px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-semibold transition-all duration-300 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 flex items-center justify-center gap-2">
//               Book Discovery Call
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//             <Link href="/portfolio" className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 flex items-center justify-center">
//               View Portfolio
//             </Link>

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Animated Code Screen Background - Shifted Up */}
      <div className="absolute inset-0 z-0 -translate-y-20">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-7xl h-[800px] px-4">
            <AnimatedCodeScreen />
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-gray-950/30 to-gray-950/80" />

      {/* Centered Message */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight whitespace-pre-line">
            {renderText()}
            {displayedText.length < fullText.length && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 h-12 md:h-16 ml-1 bg-primary-400"
              />
            )}
          </h1>
        </motion.div>

        {/* Scroll Call-to-Action */}
        {displayedText.length === fullText.length && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12"
          >
            <p className="text-gray-400 text-sm md:text-base mb-4">
              See how we do it
            </p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="flex justify-center"
            >
              <ChevronDown className="w-8 h-8 text-primary-400" />
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-6 h-10 border-2 border-primary-400/50 rounded-full flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-primary-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
