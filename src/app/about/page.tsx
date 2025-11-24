import Image from "next/image";
import Link from "next/link";
import { Handshake, Star, MapPin, TrendingUp } from "lucide-react";

// --- Data ---
const teamMembers = [
  {
    name: "Nejmi Youssef",
    role: "Co-Founder & CEO",
    bio: "Visionary leader combining Moroccan business acumen with global digital expertise.",
    img: "/images/nejmi_youssef.jpeg" // Placeholder
  },
  {
    name: "Bouchaqour Zakaria",
    role: "Co-Founder & CTO",
    bio: "Tech innovator driving our platform's seamless user experience and operational efficiency.",
    img: "/images/bouchaqour_zakaria.jfif" // Placeholder
  },
  //{
   // name: "Karim Zaki",
    //role: "Digital Strategy Architect",
    //bio: "Drives efficiency and revenue maximization using smart pricing and technology.",
    //img: "https://i.pravatar.cc/150?img=52" // Placeholder
  //},
];

const coreValues = [
  { icon: Handshake, title: "Trust & Transparency", description: "Clear, real-time reporting and ethical management of your property." },
  { icon: Star, title: "Hospitality Excellence", description: "Elevating stays with authentic Moroccan care and professional standards." },
  { icon: MapPin, title: "Local Expertise", description: "Unmatched knowledge of Rabat's neighborhoods, regulations, and market." },
  { icon: TrendingUp, title: "Digital Efficiency", description: "Leveraging technology for optimal occupancy, dynamic pricing, and seamless operations." },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen pt-24">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <Image 
          src="https://images.unsplash.com/photo-1549449852-64696f015691?q=80&w=2000&auto=format&fit=crop" // Rabat Cityscape/Architecture
          alt="Rabat Cityscape and Team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-rabat-navy/70"></div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-4 leading-tight">
            Our Story: Rabat Roots, <br /><span className="text-rabat-sand">Global Standards</span>
          </h1>
          <p className="text-rabat-sand text-xl">
            Building the future of property management in Morocco's capital.
          </p>
        </div>
      </section>

      {/* --- STORY SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-serif text-4xl text-rabat-navy mb-8">
            The RabatKeys Difference
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            RabatKeys was founded on a simple principle: property owners in Rabat deserve a service that blends authentic local hospitality with uncompromising international efficiency. We saw a gap between traditional *gardien* services and impersonal global platforms. We fill that gap by offering a hands-on, digitally-enabled, and highly personal approach to managing your most valuable assets.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed font-semibold">
            We are more than managers; we are partners dedicated to maximizing your returns and preserving the integrity of your property.
          </p>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className="py-24 bg-rabat-beige">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl text-center text-rabat-navy mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-b-4 border-rabat-teal">
                <value.icon className="w-10 h-10 text-rabat-teal mx-auto mb-4" />
                <h3 className="font-serif text-xl text-rabat-navy mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl text-center text-rabat-navy mb-12">
            Meet the Executive Team
          </h2>
          <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 relative border-4 border-rabat-sand shadow-lg">
                  <Image 
                    src={member.img} 
                    alt={member.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-2xl text-rabat-navy">{member.name}</h3>
                <p className="font-bold text-rabat-sand uppercase tracking-wider text-sm mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm italic">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* --- FINAL CTA SECTION --- */}
      <section className="py-20 bg-rabat-sand relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl text-rabat-navy mb-6">
            Work with RabatKeys Today
          </h2>
          <p className="text-rabat-navy/80 text-lg mb-8 max-w-xl mx-auto">
            Ready for true property partnership? Let's begin the conversation.
          </p>
          <Link href="/contact">
            <button className="bg-rabat-navy text-white font-bold py-4 px-10 rounded-sm hover:bg-slate-800 transition-all shadow-xl uppercase tracking-wide">
              Book a Consultation
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}