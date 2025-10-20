'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {/* Inzint Logo Image */}
        <Image
          src="/assets/images/inzint-logo-dark.png"
          alt="Inzint"
          width={120}
          height={40}
          className="object-contain"
          priority
        />
      </motion.div>
    </Link>
  );
}
