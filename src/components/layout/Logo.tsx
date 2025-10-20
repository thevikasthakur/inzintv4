'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface LogoProps {
  variant?: 'default' | 'white' | 'dark';
  className?: string;
}

export default function Logo({ variant = 'default', className = '' }: LogoProps) {
  const colorClasses = {
    default: 'text-primary-600',
    white: 'text-white',
    dark: 'text-gray-900',
  };

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {/* Logo Icon */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={colorClasses[variant]}
        >
          <path
            d="M20 0L38 10V30L20 40L2 30V10L20 0Z"
            fill="currentColor"
            opacity="0.1"
          />
          <path
            d="M20 8L32 14.5V25.5L20 32L8 25.5V14.5L20 8Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="20" cy="20" r="6" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <span className={`text-xl font-bold leading-none ${colorClasses[variant]}`}>
          Appinventiv
        </span>
        <span className={`text-[10px] font-medium tracking-wider ${colorClasses[variant]} opacity-70`}>
          DIGITAL INNOVATION
        </span>
      </div>
    </Link>
  );
}
