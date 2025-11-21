import Image from "next/image";
import { Clock, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

// --- Mock Data (Assuming a fetch based on slug) ---
const mockPost = {
    title: "Rabat Rental Market Forecast 2026: A Deep Dive",
    category: "Investment",
    author: "Karim Zaki",
    date: "Oct 28, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1547432095-885f69c581e2?q=80&w=2000",
    content: [
      { type: 'paragraph', text: "The Rabat real estate market continues its upward trajectory, driven primarily by government initiatives, diplomatic expansion, and a burgeoning high-net-worth tourism sector. Our forecast for 2026 suggests continued bullish sentiment, particularly in luxury rental segments like Hay Riad and the newly developed areas near the Atlantic coast." },
      { type: 'heading', text: "Demand Drivers: Tourism and Diplomatic Presence" },
      { type: 'paragraph', text: "A key differentiator for Rabat compared to Marrakech is the consistent demand from international governmental organizations and embassies. This provides stable, high-value rental contracts, insulating owners from some of the volatility inherent in purely leisure-driven markets. We project a 12% growth in long-term corporate rentals next year." },
      { type: 'list', items: ["Projected rental yield increase of 8-15%", "Highest growth expected in 2-bedroom luxury apartments", "Short-term market remains strong during peak seasons (Spring/Autumn)"] },
      { type: 'quote', text: "The stability offered by the diplomatic community makes Rabat a uniquely resilient investment hub in North Africa.", source: "Omar El Fassi, CEO" },
      { type: 'paragraph', text: "Furthermore, the increasing interest in Moroccan design and culture globally continues to fuel short-term rental profitability. Properties staged with authentic Moroccan elements command a 20% premium over generic modern finishes. Proper styling is not an option; it’s a necessity." },
    ]
};

// --- Types ---
type ContentBlock = { type: 'paragraph' | 'heading' | 'list' | 'quote'; text?: string; items?: string[]; source?: string };

// --- Utility Component for Rendering Content ---
const ContentRenderer = ({ blocks }: { blocks: ContentBlock[] }) => (
  <div className="space-y-8">
    {blocks.map((block, index) => {
      switch (block.type) {
        case 'paragraph':
          return <p key={index} className="text-lg leading-relaxed text-slate-700">{block.text}</p>;
        case 'heading':
          return <h2 key={index} className="font-serif text-3xl text-rabat-navy pt-6 pb-2">{block.text}</h2>;
        case 'list':
          return (
            <ul key={index} className="list-inside list-disc space-y-2 pl-4 text-slate-700">
              {block.items?.map((item, i) => <li key={i} className="text-lg">{item}</li>)}
            </ul>
          );
        case 'quote':
          return (
            <blockquote key={index} className="border-l-4 border-rabat-sand pl-6 italic text-xl text-slate-800 my-8 bg-rabat-beige/50 p-4 rounded-r-lg">
              "{block.text}"
              {block.source && <footer className="mt-2 text-sm font-semibold text-rabat-teal"> — {block.source}</footer>}
            </blockquote>
          );
        default:
          return null;
      }
    })}
  </div>
);

export default function SinglePostPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch post data using params.slug here
  const post = mockPost; 

  return (
    <main className="min-h-screen pt-24 bg-white">
      
      {/* Article Header & Image */}
      <article className="container mx-auto px-6 max-w-4xl pt-12">
        <Link href="/blog" className="flex items-center gap-2 text-rabat-navy hover:text-rabat-teal transition text-sm mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Insights
        </Link>
        
        <h1 className="font-serif text-4xl md:text-5xl text-rabat-navy mb-4 leading-tight">{post.title}</h1>
        
        {/* Meta Data */}
        <div className="flex items-center space-x-4 text-sm text-slate-500 mb-8 pb-4 border-b">
          <span className="text-rabat-sand font-bold uppercase">{post.category}</span>
          <span className="flex items-center gap-1"><User className="w-3 h-3"/> {post.author}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> {post.date} ({post.readTime})</span>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-[50vh] rounded-lg overflow-hidden mb-12 shadow-xl">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        </div>
        
        {/* Post Content */}
        <ContentRenderer blocks={post.content as ContentBlock[]} />

        {/* Post Footer CTA */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
            <h3 className="font-serif text-2xl text-rabat-navy mb-4">Ready to Capitalize on These Trends?</h3>
            <p className="text-slate-600 mb-6">Let RabatKeys implement these strategies for your property today.</p>
            <Link href="/contact" className="inline-block bg-rabat-sand text-rabat-navy font-bold py-3 px-8 rounded-sm hover:bg-opacity-90 transition shadow-md">
                Book Free Consultation
            </Link>
        </div>
        
      </article>
      
    </main>
  );
}