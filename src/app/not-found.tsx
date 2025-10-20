'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to website-status page
    router.replace('/website-status');
  }, [router]);

  // Return null or a loading state while redirecting
  return null;
}
