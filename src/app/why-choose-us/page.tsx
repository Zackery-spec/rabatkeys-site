import Image from "next/image";
import Link from "next/link";
import { TrendingUp, MapPin, Star, Check, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// --- Types ---
interface Differentiator {
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
  reverse: boolean;
  accent: string;
}

// --- Data ---
const differentiators: Differentiator[] = [
  {
    title: "Local Mastery: Deep Rabat Market Knowledge",
    description: "Unlike international platforms, we live and breathe Rabat. Our team provides unparalleled insight into seasonal trends, neighborhood dynamics (Agdal, Hay Riad, Souissi), and the specific regulatory landscape, ensuring your property is compliant and competitively priced.",
    points: ["Hyper-local pricing strategy", "Vetted network of local tradesmen", "Regulatory compliance assurance"],
    icon: MapPin,
    reverse: false,
    accent: "bg-rabat-teal/5"
  },
  {
    title: "Digital Efficiency: Maximized Owner Returns",
    description: "We deploy state-of-the-art dynamic pricing algorithms and smart calendar management across all major booking platforms. This technical edge minimizes vacancies and ensures you always capture the highest possible yield from your investment.",
    points: ["Smart, dynamic pricing technology", "Real-time, transparent owner dashboard", "Automated marketing and listings optimization"],
    icon: TrendingUp,
    reverse: true,
    accent: "bg-rabat-sand/5"
  },
  {
    title: "Hospitality Excellence: Unmatched Guest Experience",
    description: "High guest ratings are the fuel for long-term success. Our dedicated hospitality team manages every aspect of the guest journey, from concierge services to prompt, 24/7 support, translating into higher occupancy and revenue.",
    points: ["Dedicated concierge support", "Professional Moroccan welcome and check-out", "Luxury cleaning and linen standards"],
    icon: Star,
    reverse: false,
    accent: "bg-rabat-beige"
  },
];

// --- Components ---

/**
 * Renders an alternating two-column section based on the 'reverse' flag.
 * @param data - The differentiator object containing content and layout flags.
 */
const DifferentiatorSection = ({ data }: { data: Differentiator }) => (
  <div className={`py-20 lg:py-28 ${data.accent}`}>
    <div className="container mx-auto px-6">
      <div className={`flex flex-col lg:flex-row items-center gap-12 ${data.reverse ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* Text and Points Column */}
        <div className="w-full lg:w-1/2 space-y-6">
          <data.icon className="w-10 h-10 text-rabat-sand mb-4" />
          <h2 className="font-serif text-4xl text-rabat-navy">{data.title}</h2>
          <p className="text-lg text-slate-600 leading-relaxed">{data.description}</p>
          
          <ul className="space-y-3 pt-4">
            {data.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-rabat-navy font-medium">
                <Check className="w-5 h-5 text-rabat-teal shrink-0 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual/Infographic Column */}
        <div className="w-full lg:w-1/2 relative">
          <div className="p-8 rounded-xl bg-white shadow-xl h-96 flex items-center justify-center">
            {/* Placeholder for Infographic/Geometric Accent */}
            <div className="w-full h-full border-4 border-rabat-sand/50 rounded-lg flex flex-col items-center justify-center">
                <Sparkles className="w-16 h-16 text-rabat-teal animate-pulse mb-4" />
                <p className="text-slate-500 font-bold">Benefit Visualization Placeholder</p>
                <p className="text-sm text-slate-400 mt-1">Icons or data charts go here</p>
            </div>
            
            {/* Subtle Moroccan geometric accent outside the main box */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-rabat-sand/30 rounded-full blur-xl -z-10" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-rabat-teal/30 rounded-full blur-xl -z-10" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function WhyChooseUsPage() {
  return (
    <main className="min-h-screen pt-24">
      
      {/* --- HERO SECTION: Why Choose Us --- */}
      <section className="relative h-[55vh] flex items-center justify-center text-center">
        <Image 
          src="https://images.unsplash.com/photo-1594950293121-69796677f3e8?q=80&w=2000&auto=format&fit=crop" // Rabat architecture or professional team photo
          alt="RabatKeys Team and Vision"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-rabat-navy/75"></div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-4 leading-tight">
            The Clear Choice for Rabat Owners
          </h1>
          <p className="text-rabat-sand text-xl max-w-3xl mx-auto">
            We deliver what others promise: superior returns, zero hassle, and authentic Moroccan excellence.
          </p>
        </div>
      </section>

      {/* --- CONTENT SECTIONS --- */}
      {differentiators.map((data, index) => (
        <DifferentiatorSection key={index} data={data} />
      ))}
      
      {/* --- FINAL CTA BANNER (REUSABLE) --- */}
      <section className="py-20 bg-rabat-sand relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl text-rabat-navy mb-6">
            Ready to Partner with RabatKeys?
          </h2>
          <p className="text-rabat-navy/80 text-lg mb-8 max-w-xl mx-auto">
            Let's schedule a property audit and discuss your investment goals.
          </p>
          <Link href="/contact">
            <button className="bg-rabat-navy text-white font-bold py-4 px-10 rounded-sm hover:bg-slate-800 transition-all shadow-xl uppercase tracking-wide">
              Book a Consultation Today
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}