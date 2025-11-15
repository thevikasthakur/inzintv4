'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';

// Configure NProgress
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3,
});

export default function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    const handleRouteChange = () => {
      NProgress.start();
    };

    // Listen to route changes
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.href && !anchor.target && !anchor.download) {
        const url = new URL(anchor.href);
        const currentUrl = new URL(window.location.href);

        // Only show progress for internal navigation
        if (url.origin === currentUrl.origin && url.pathname !== currentUrl.pathname) {
          handleStart();
        }
      }
    };

    // Add global click listener for all anchor tags
    document.addEventListener('click', handleClick);

    // Handle browser back/forward buttons
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('popstate', handleRouteChange);
      NProgress.done();
    };
  }, []);

  return null;
}