"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = isScrolled 
    ? "bg-white/95 backdrop-blur-md shadow-md py-4 text-rabat-navy" 
    : "bg-white py-6 text-rabat-navy";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClass}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="font-serif text-2xl font-bold tracking-wide">
          Rabat<span className={isScrolled ? "text-rabat-sand" : "text-rabat-sand"}>Keys</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-wider">
          <Link href="/services" className="hover:text-rabat-sand transition">Services</Link>
          <Link href="/about" className="hover:text-rabat-sand transition">About</Link>
          <Link href="/why-choose-us" className="hover:text-rabat-sand transition">Why Us</Link>
          <Link href="/contact" className={`px-5 py-2 rounded-sm border transition ${isScrolled ? "border-rabat-navy hover:bg-rabat-navy hover:text-white" : "border-rabat-navy hover:bg-rabat-sand hover:text-rabat-navy"}`}>Book Consultation</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-rabat-navy shadow-xl border-t border-slate-100 py-6 px-6 flex flex-col gap-4 md:hidden">
           <Link href="/services" className="text-lg font-medium">Services</Link>
           <Link href="/about" className="text-lg font-medium">About</Link>
           <Link href="/why-choose-us" className="text-lg font-medium">Why Us</Link>
           <Link href="/contact" className="text-lg font-medium text-rabat-sand">Book Consultation</Link>
        </div>
      )}
    </nav>
  );
}