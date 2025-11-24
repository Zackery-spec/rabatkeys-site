// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";

import Navbar from "@/components/global/Navbar"; 
import Footer from "@/components/global/Footer";
// ⬅️ CRITICAL: Import the Google Analytics component
import { GoogleAnalytics } from '@next/third-parties/google' 

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// ----------------------------------------------------------------------
// Global Metadata (Updated for better SEO)
// ----------------------------------------------------------------------
export const metadata: Metadata = {
  title: "RabatKeys | Premium Property Management & Rentals in Rabat, Morocco",
  description: "RabatKeys offers professional property management, maximizing rental income for owners in Hay Riad and central Rabat. Local expertise, global standards.",
  keywords: ["Rabat property management", "Morocco rentals", "property", "short-term rentals Rabat"],
  authors: [{ name: "RabatKeys Team" }],
};
// ----------------------------------------------------------------------
// ⬅️ NEW HELPER COMPONENT (can be placed anywhere outside of the RootLayout function)
const GaWrapper = () => {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    
    // Only render the component if the ID is definitely defined
    if (!gaId) {
        // Optional: Add a console warning during development/build
       console.warn('NEXT_PUBLIC_GA_ID is missing! Analytics disabled.'); 
        return null; 
    }
    
    // Now TypeScript knows gaId is a string here
    return <GoogleAnalytics gaId={gaId} />;
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    // Add font variables to the html tag so they are available globally via CSS
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className={inter.className}>
        {/* 1. Global Navigation */}
        <Navbar /> 
        
        {/* 2. Page Content */}
        <main className="pt-24 min-h-screen"> 
          {children} 
        </main>
        
        {/* 3. Global Footer */}
        <Footer />

        {/* ⬅️ CRITICAL FIX: Add 'as string' to resolve TypeScript error */}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} /> 
      </body>
    </html>
  );
}