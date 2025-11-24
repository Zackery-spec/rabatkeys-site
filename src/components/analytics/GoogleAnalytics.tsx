'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Get your GA ID from the environment variables (.env.local)
const gaId = process.env.NEXT_PUBLIC_GA_ID;

// Define the gtag function globally for TypeScript to recognize it
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();

  // Log a page view on every route change (required for Single Page Apps like Next.js)
  useEffect(() => {
    // Check if the gtag function exists and we have an ID before running
    if (typeof window.gtag === 'function' && gaId) {
      // The 'config' command sends the page_path and logs the new page view
      window.gtag('config', gaId, {
        page_path: pathname,
      });
    }
  }, [pathname]); // Reruns every time the route changes

  // Don't render anything if the ID is missing or we are not in a context that should run GA
  if (!gaId) {
    return null;
  }

  return (
    <>
      {/* 1. Primary GA4 Script (Async Load) */}
      <Script 
        strategy="afterInteractive" 
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} 
        id="google-analytics-script" 
      />
      
      {/* 2. Initialization Script (The one Google provided) */}
      <Script 
        strategy="afterInteractive"
        id="google-analytics-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gaId}');
          `,
        }}
      />
    </>
  );
}