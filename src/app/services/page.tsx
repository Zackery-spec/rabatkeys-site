import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

// --- Types ---
interface ServiceFeature {
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  reverse?: boolean; // To alternate layout
}

// --- Data ---
const servicesData: ServiceFeature[] = [
  {
    title: "Full-Service Management",
    description: "The ultimate peace of mind for absent owners. We handle every aspect of your property, from marketing and booking to cleaning and maintenance.",
    features: [
      "Professional Photography & Listing Creation",
      "24/7 Guest Communication & Vetting",
      "Check-in/Check-out Management",
      "Professional Cleaning & Linen Service"
    ],
    imageSrc: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000", // Living room
    reverse: false
  },
  {
    title: "Concierge & Guest Experience",
    description: "We elevate a simple stay into a 5-star experience. Our concierge services ensure high ratings and repeat bookings.",
    features: [
      "Airport Transfers (Rabat-Salé & Casablanca)",
      "Private Chef & Catering Arrangements",
      "Guided City Tours & Excursions",
      "Welcome Packs (Moroccan Sweets & Tea)"
    ],
    imageSrc: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2000", // Tea pouring/luxury detail
    reverse: true
  },
  {
    title: "Interior Styling & Maintenance",
    description: "Your property needs to look its best to command premium rates. We maintain your asset and style it for the market.",
    features: [
      "Moroccan-Chic Interior Staging",
      "Routine Maintenance Inspections",
      "Emergency Repairs Coordination",
      "Inventory Management"
    ],
    imageSrc: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2000", // Furniture detail
    reverse: false
  }
];

// --- Components ---

const ServiceSection = ({ data }: { data: ServiceFeature }) => (
  <div className={`flex flex-col md:flex-row items-center gap-12 py-20 ${data.reverse ? 'md:flex-row-reverse' : ''}`}>
    
    {/* Image Side */}
    <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
      <Image 
        src={data.imageSrc} 
        alt={data.title} 
        fill 
        className="object-cover hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 border-[12px] border-white/20 pointer-events-none"></div>
    </div>

    {/* Text Side */}
    <div className="w-full md:w-1/2 space-y-6">
      <h2 className="font-serif text-3xl md:text-4xl text-rabat-navy">{data.title}</h2>
      <p className="text-slate-600 text-lg leading-relaxed">{data.description}</p>
      
      <ul className="space-y-4 pt-4">
        {data.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-slate-700">
            <CheckCircle2 className="w-6 h-6 text-rabat-teal shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="pt-6">
        <Link href="/contact" className="inline-flex items-center gap-2 text-rabat-navy font-bold border-b-2 border-rabat-sand hover:text-rabat-teal hover:border-rabat-teal transition-colors pb-1 uppercase tracking-wide text-sm">
          Inquire About This Service <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </div>
);

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24">
      
      {/* Hero Banner */}
      <section className="relative bg-rabat-navy py-20 px-6 text-center text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Premium Management Services</h1>
          <p className="text-rabat-sand text-lg font-light">
            Tailored solutions for property owners who demand excellence and transparency.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="container mx-auto px-6 py-12">
        {servicesData.map((service, idx) => (
          <div key={idx}>
            <ServiceSection data={service} />
            {idx !== servicesData.length - 1 && (
              <hr className="border-t border-slate-200 my-8 w-2/3 mx-auto" />
            )}
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="bg-rabat-beige py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-rabat-navy mb-6">Not sure which package fits?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Every property is unique. Contact us for a customized proposal tailored to your specific needs in Rabat.
          </p>
          <Link href="/contact">
            <button className="bg-rabat-navy text-white font-bold py-3 px-8 rounded-sm hover:bg-slate-800 transition shadow-lg">
              Get a Custom Quote
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}