'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function GoogleTranslate() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    // 1. Define the callback function that Google calls
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en', // Your site's original language
          includedLanguages: 'en,fr,ar', // The languages you want to support
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    // 2. Load the Google Translate script if it's not already loaded
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.id = 'google-translate-script';
      script.async = true;
      document.body.appendChild(script);
      setIsScriptLoaded(true);
    }
  }, []);

  return (
    <>
      {/* This div is where the Google dropdown will appear */}
      <div id="google_translate_element" className="p-4 bg-slate-900 text-white rounded-md"></div>
      
      {/* Hide the top bar that Google adds by default */}
      <style jsx global>{`
        .goog-te-banner-frame {
          display: none !important;
        }
        body {
          top: 0px !important; 
        }
        .goog-tooltip {
            display: none !important;
        }
        .goog-te-gadget-simple {
            background-color: transparent !important;
            border: none !important;
        }
        .goog-te-gadget-simple .goog-te-menu-value span {
            color: #d4af37 !important; /* Change this to your preferred text color */
            font-weight: bold;
        }
      `}</style>
    </>
  );
}