// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/global/Navbar"; // Make sure this file exists
import Footer from "@/components/global/Footer"; // Make sure this file exists

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

export const metadata: Metadata = {
  // ...
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <Navbar /> 
        {/* Add padding-top (e.g., pt-24) to offset the height of the fixed Navbar */}
        <main className="pt-24 min-h-screen"> 
          {children} 
        </main>
        <Footer />
      </body>
    </html>
  );
}