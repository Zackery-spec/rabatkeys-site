import Image from "next/image";
import Link from "next/link";
import { Search, ChevronRight, Clock, User } from "lucide-react";

// --- Mock Data ---
const blogPosts = [
    { slug: "rabat-market-forecast-2026", title: "Rabat Rental Market Forecast 2026", snippet: "An in-depth look at supply, demand, and projected rental yield increases for luxury apartments and villas.", category: "Investment", author: "Karim Zaki", date: "Oct 28, 2025", image: "https://images.unsplash.com/photo-1547432095-885f69c581e2?q=80&w=2000" },
    { slug: "moroccan-interior-staging", title: "The Art of Moroccan Interior Staging", snippet: "How blending traditional Zellige patterns with modern furniture can drastically increase your booking appeal.", category: "Design", author: "Sofia Bensaid", date: "Oct 15, 2025", image: "https://images.unsplash.com/photo-1570535948967-15e8b7c7b4f8?q=80&w=2000" },
    { slug: "navigating-tourism-regulations", title: "Navigating Rabat's Tourism Regulations", snippet: "A guide for foreign investors on the key licensing and tax requirements for short-term rentals.", category: "Regulations", author: "Omar El Fassi", date: "Sep 01, 2025", image: "https://images.unsplash.com/photo-1627582236528-97c992762a40?q=80&w=2000" },
    { slug: "optimizing-airbnb-listings", title: "Optimizing Your Airbnb Listing for Q1", snippet: "Simple steps to refresh your property's listing copy and imagery for the new year.", category: "Digital", author: "Karim Zaki", date: "Dec 10, 2025", image: "https://images.unsplash.com/photo-1600585154340-be6160172e25?q=80&w=2000" },
];

const popularPosts = blogPosts.slice(0, 3);
const categories = ["Investment", "Design", "Regulations", "Digital"];

// --- Components ---

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => (
  <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-100">
    {/* Image */}
    <div className="h-56 relative w-full">
      <Image src={post.image} alt={post.title} fill className="object-cover" />
    </div>
    
    <div className="p-6">
      <div className="text-xs font-bold uppercase text-rabat-sand mb-2">{post.category}</div>
      <Link href={`/blog/${post.slug}`} className="hover:text-rabat-teal">
        <h2 className="font-serif text-xl text-rabat-navy mb-3 leading-snug">{post.title}</h2>
      </Link>
      <p className="text-slate-600 text-sm mb-4">{post.snippet}...</p>
      
      <div className="flex items-center justify-between text-xs text-slate-500 border-t pt-3">
        <span className="flex items-center gap-1"><User className="w-3 h-3"/> {post.author}</span>
        <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> {post.date}</span>
      </div>
    </div>
  </article>
);

const Sidebar = () => (
  <aside className="space-y-10">
    {/* Search */}
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
      <h3 className="font-bold text-lg text-rabat-navy mb-4">Search Resources</h3>
      <div className="relative">
        <input 
          type="search" 
          placeholder="Search topics..."
          className="w-full p-3 pr-10 border border-slate-200 rounded-sm focus:ring-1 focus:ring-rabat-sand focus:outline-none"
        />
        <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
      </div>
    </div>

    {/* Popular Posts */}
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
      <h3 className="font-bold text-lg text-rabat-navy mb-4">Popular Posts</h3>
      <ul className="space-y-4">
        {popularPosts.map((post, idx) => (
          <li key={idx}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <p className="text-sm font-medium text-rabat-navy group-hover:text-rabat-teal transition">{post.title}</p>
              <span className="text-xs text-slate-500">{post.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    
    {/* Categories */}
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
      <h3 className="font-bold text-lg text-rabat-navy mb-4">Categories</h3>
      <ul className="space-y-3">
        {categories.map((cat, idx) => (
          <li key={idx}>
            <a href={`/blog?category=${cat}`} className="flex justify-between items-center text-sm text-slate-600 hover:text-rabat-teal transition">
              <span>{cat}</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* CTA Banner */}
    <div className="bg-rabat-navy p-6 rounded-lg text-center shadow-xl">
      <h3 className="text-xl font-serif text-rabat-sand mb-3">Maximize Your Yield</h3>
      <p className="text-sm text-white/90 mb-4">Ready to move beyond the articles? Book your free consultation.</p>
      <Link href="/contact" className="inline-block bg-rabat-sand text-rabat-navy font-bold py-2 px-6 rounded-sm text-sm hover:bg-opacity-90 transition">
        Book Now
      </Link>
    </div>
  </aside>
);

export default function BlogListingPage() {
  return (
    <main className="min-h-screen pt-24 bg-rabat-beige">
      
      {/* Hero Section */}
      <section className="bg-rabat-navy py-16 text-center text-white border-b-8 border-rabat-sand">
        <div className="container mx-auto px-6">
          <h1 className="font-serif text-5xl mb-3">Insights for Property Owners</h1>
          <p className="text-white/80 text-lg">Stay ahead of the Rabat market with our expert analysis and guides.</p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Blog Post Grid (Main Content) */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <Sidebar />
          </div>
        </div>
      </section>

    </main>
  );
}