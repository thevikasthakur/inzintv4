'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Activity } from 'lucide-react';
import Link from 'next/link';

interface ScrollAnnouncementModalProps {
  message?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function ScrollAnnouncementModal({
  message = `🎓 Now Hiring: Computer Science Graduates from 2026 Batch for AI & ML Engineering Department`,
  ctaText = 'Apply Now',
  ctaLink = '/about/company/careers',
}: ScrollAnnouncementModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the modal (clicked an action button)
    const hasDismissedModal = sessionStorage.getItem('hasSeenAnnouncementModal');
    if (hasDismissedModal) {
      return;
    }

    const handleScroll = () => {
      // Show modal when user scrolls down 100px
      if (window.scrollY > 100 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        // Remove scroll listener after showing once
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown]);

  const handleDismiss = () => {
    // Mark as dismissed only when user takes action
    sessionStorage.setItem('hasSeenAnnouncementModal', 'true');
    setIsVisible(false);
  };

  const handleClose = () => {
    // Just hide the modal, don't mark as dismissed
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="announcement-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
            <motion.div
              key="modal-content"
              className="w-full max-w-2xl"
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ type: 'spring', duration: 0.5 }}
            >
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-primary-500/50 rounded-2xl shadow-2xl shadow-primary-500/20 overflow-hidden">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-200 hover:rotate-90"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Animated Border Effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent animate-[shimmer_3s_ease-in-out_infinite] [animation-delay:1.5s]" />
                </div>
              </div>

              <div className="relative p-8 sm:p-10">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary-500/30 blur-xl rounded-full animate-pulse" />
                    <div className="relative w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                      <Activity className="w-8 h-8 text-white animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Build in Progress
                </h2>

                {/* Message */}
                <div className="text-center mb-8">
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-mono">
                    {message}
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-[bounce_1s_ease-in-out_infinite]" />
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-[bounce_1s_ease-in-out_infinite] [animation-delay:0.2s]" />
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-[bounce_1s_ease-in-out_infinite] [animation-delay:0.4s]" />
                    </div>
                    <span className="text-sm text-primary-400 font-medium">Building autonomously</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href={ctaLink}
                    className="group relative w-full sm:w-auto"
                    onClick={handleDismiss}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300" />
                    <div className="relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg leading-none flex items-center justify-center gap-2">
                      <span className="text-white font-semibold text-base capitalize">
                        {ctaText}
                      </span>
                      <svg
                        className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </Link>

                  <button
                    onClick={handleDismiss}
                    className="w-full sm:w-auto px-8 py-4 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-200 border border-gray-700 hover:border-gray-600"
                  >
                    Maybe Later
                  </button>
                </div>

                {/* Footer Note */}
                <p className="mt-6 text-center text-xs text-gray-500">
                  Click a button to dismiss permanently this session
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
