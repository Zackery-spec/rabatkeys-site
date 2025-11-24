'use client';

import Link from "next/link";
import { MapPin, Key, Facebook, Instagram, Linkedin } from "lucide-react";
// Import the Google Translate component we created
import GoogleTranslate from "@/components/GoogleTranslate";

export default function Footer() {
  // REMOVED: All the complex pathname and regex logic is gone.

  return (
    <footer className="bg-slate-900 text-rabat-beige py-16 border-t border-slate-800">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
        
        {/* Column 1: Brand & Mission */}
        <div>
          <h3 className="font-serif text-2xl text-white mb-4">Rabat<span className="text-rabat-sand">Keys</span></h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Premium property management services blending local Moroccan expertise with international hospitality standards.
          </p>
          
          {/* REPLACED: The manual links are gone. The Widget is here. */}
          <div className="mt-4">
             <GoogleTranslate />
          </div>

        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-bold text-white uppercase tracking-wider mb-6 text-sm">Company</h4>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li><Link href="/services" className="hover:text-rabat-sand transition">Our Services</Link></li>
            <li><Link href="/about" className="hover:text-rabat-sand transition">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-rabat-sand transition">Insights (Blog)</Link></li>
            <li><Link href="/why-choose-us" className="hover:text-rabat-sand transition">Why Choose Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="font-bold text-white uppercase tracking-wider mb-6 text-sm">Reach Us</h4>
          <ul className="space-y-4 text-slate-300 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-rabat-sand shrink-0" />
              <span>12 Avenue Annakhil, Hay Riad,<br/>Rabat, Morocco</span>
            </li>
            <li className="flex items-center gap-3">
              <Key className="w-5 h-5 text-rabat-sand shrink-0" />
              <span>+212 5 37 00 00 00</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media & Final CTA */}
        <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-6 text-sm">Connect</h4>
            <div className="flex space-x-4">
              <Link href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-rabat-sand transition">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-slate-400 hover:text-rabat-sand transition">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" aria-label="Facebook" className="text-slate-400 hover:text-rabat-sand transition">
                <Facebook className="w-6 h-6" />
              </Link>
            </div>
            
            <Link href="/contact">
              <button className="mt-8 w-full bg-rabat-sand text-rabat-navy font-bold py-3 px-4 rounded-sm hover:bg-opacity-90 transition-all uppercase tracking-wide text-sm">
                Book a Consultation
              </button>
            </Link>
        </div>
      </div>
      
      <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-xs">
        © {new Date().getFullYear()} RabatKeys. All rights reserved. | <Link href="/privacy" className="hover:text-rabat-sand">Privacy Policy</Link>
      </div>
    </footer>
  );
}