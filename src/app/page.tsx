import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Key, Star, TrendingUp, ShieldCheck, MapPin } from "lucide-react";
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KLNG8WLP');</script>
<!-- End Google Tag Manager -->
// --- Types ---
interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

interface ValuePropProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

// --- Components ---

const PrimaryButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <Link href="/contact" className={`bg-rabat-sand text-rabat-navy font-bold py-3 px-8 rounded-sm hover:bg-opacity-90 transition-all duration-300 shadow-md uppercase tracking-wide text-sm ${className}`}>
    {children}
  </Link>
);

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-12">
    <h2 className="font-serif text-4xl md:text-5xl text-rabat-navy mb-4">{title}</h2>
    {subtitle && <div className="h-1 w-24 bg-rabat-sand mx-auto mt-4"></div>}
  </div>
);

const ValueCard = ({ icon: Icon, title, description }: ValuePropProps) => (
  <div className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-rabat-teal">
    <div className="bg-rabat-teal/10 p-4 rounded-full mb-6">
      <Icon className="w-8 h-8 text-rabat-teal" />
    </div>
    <h3 className="font-serif text-2xl text-rabat-navy mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const ServiceCard = ({ title, description, imageSrc }: ServiceCardProps) => (
  <Link href="/services" className="group relative overflow-hidden rounded-md shadow-lg cursor-pointer">
    {/* Image Placeholder */}
    <div className="h-80 w-full bg-slate-200 relative">
      <Image 
        src={imageSrc} 
        alt={title} 
        fill 
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-rabat-navy/90 to-transparent opacity-80" />
    </div>
    
    <div className="absolute bottom-0 left-0 p-6 w-full">
      <h3 className="font-serif text-2xl text-white mb-2">{title}</h3>
      <p className="text-rabat-beige text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {description}
      </p>
      <span className="text-rabat-sand font-bold text-sm flex items-center gap-2 uppercase tracking-wider">
        Learn More <ArrowRight className="w-4 h-4" />
      </span>
    </div>
  </Link>
);

export default function Homepage() {
  return (
    <main className="min-h-screen flex flex-col">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] w-full flex items-center">
        {/* Background Image & Gradient */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=2070&auto=format&fit=crop" // Placeholder Rabat/Morocco vibe
            alt="Luxury Rabat Apartment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-hero-gradient" />
          {/* Geometric Pattern Overlay (Simulated with CSS) */}
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rabat-sand to-transparent hidden md:block" />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12">
          <div className="text-left space-y-6 max-w-2xl">
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight">
              Elevate Your Property. <br />
              <span className="text-rabat-sand italic">Hassle-Free.</span>
            </h1>
            <p className="text-rabat-beige text-lg md:text-xl font-light max-w-lg leading-relaxed">
              We manage your apartments and villas with local expertise, modern digital efficiency, and premium hospitality care in the heart of Rabat.
            </p>
            <div className="pt-4">
              <PrimaryButton>Book a Consultation</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUE PROPOSITION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading title="Why Owners Trust RabatKeys" subtitle="true" />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <ValueCard 
              icon={ShieldCheck}
              title="Trust & Transparency"
              description="Real-time reporting and vetted tenants. We treat your property with the security and respect it deserves."
            />
            <ValueCard 
              icon={Star}
              title="Hospitality Excellence"
              description="5-star guest experiences driven by local Moroccan hospitality standards and concierge-level support."
            />
            <ValueCard 
              icon={TrendingUp}
              title="Digital Efficiency"
              description="Smart pricing algorithms and seamless booking management to maximize your occupancy and revenue."
            />
          </div>
        </div>
      </section>

      {/* --- SERVICES PREVIEW --- */}
      <section className="py-24 bg-rabat-beige">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl text-rabat-navy mb-4">Our Services</h2>
              <p className="text-slate-600">Comprehensive solutions tailored for absent owners and investors.</p>
            </div>
            <Link href="/services" className="hidden md:flex items-center gap-2 text-rabat-teal font-bold hover:underline">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard 
              title="Full Management" 
              description="End-to-end handling of bookings, cleaning, maintenance, and guest communication."
              imageSrc="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070"
            />
            <ServiceCard 
              title="Concierge Services" 
              description="Premium add-ons for guests including airport transfers, tours, and private chefs."
              imageSrc="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074"
            />
            <ServiceCard 
              title="Interior Styling" 
              description="Moroccan-chic furnishing and photography staging to boost listing appeal."
              imageSrc="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070"
            />
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-rabat-navy text-white relative overflow-hidden">
        {/* Decorative Accent */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rabat-sand to-rabat-teal" />
        
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="font-serif text-3xl mb-12 text-rabat-sand">What Our Partners Say</h2>
          
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
            "Since handing my keys to RabatKeys, my villa in Souissi has generated 
            <span className="text-rabat-sand font-normal"> 30% more revenue</span> without me lifting a finger. 
            The transparency is unmatched."
          </blockquote>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-slate-400 relative overflow-hidden border-2 border-rabat-sand">
               {/* Avatar Placeholder */}
               <Image src="https://i.pravatar.cc/150?img=32" alt="Owner" fill className="object-cover" />
            </div>
            <div className="text-left">
              <div className="font-bold text-lg">Karim Bennani</div>
              <div className="text-rabat-sand text-sm">Villa Owner, Souissi</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="py-20 bg-rabat-sand relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl text-rabat-navy mb-6">
            Let’s elevate your property.
          </h2>
          <p className="text-rabat-navy/80 text-lg mb-8 max-w-xl mx-auto">
            Schedule a free property assessment and income projection today.
          </p>
          <Link href="/contact" className="bg-rabat-navy text-rabat-sand font-bold py-4 px-10 rounded-sm hover:bg-slate-800 transition-all shadow-xl uppercase tracking-wide">
            Book a Consultation
          </Link>
        </div>
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-multiply" />
      </section>
    </main>
  );
}