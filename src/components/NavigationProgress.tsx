'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';

// Configure NProgress
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3,
  speed: 500,
});

export default function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleStart = () => {
      NProgress.start();

      // Safety mechanism: Force completion after 5 seconds
      timeout = setTimeout(() => {
        NProgress.done();
      }, 5000);
    };

    const handleStop = () => {
      clearTimeout(timeout);
      NProgress.done();
    };

    const handleRouteChange = () => {
      NProgress.start();

      // Safety mechanism for popstate events
      timeout = setTimeout(() => {
        NProgress.done();
      }, 5000);
    };

    // Listen to route changes
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.href && !anchor.target && !anchor.download) {
        const href = anchor.getAttribute('href');

        // Ignore hash-only links (same page anchors)
        if (href && href.startsWith('#')) {
          return;
        }

        // Ignore javascript: and mailto: links
        if (href && (href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('tel:'))) {
          return;
        }

        try {
          const url = new URL(anchor.href);
          const currentUrl = new URL(window.location.href);

          // Only show progress for internal navigation to different pages
          if (
            url.origin === currentUrl.origin &&
            url.pathname !== currentUrl.pathname &&
            !url.hash // Ignore if it's just adding a hash to current page
          ) {
            handleStart();
          }
        } catch (error) {
          // Invalid URL, ignore
          console.error('Invalid URL in navigation:', error);
        }
      }
    };

    // Add global click listener for all anchor tags
    document.addEventListener('click', handleClick);

    // Handle browser back/forward buttons
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('click', handleClick);
      window.removeEventListener('popstate', handleRouteChange);
      NProgress.done();
    };
  }, []);

  return null;
}