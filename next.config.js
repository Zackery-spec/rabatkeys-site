/** @type {import('next').NextConfig} */
const nextConfig = {
  // CRITICAL FIX: Add this block for external image hosting
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', 
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
  
  // ⬅️ CRITICAL FIX: The Environment Variables block
  env: {
    // This explicitly bundles the public variable into the client-side code
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
  
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*', 
      },
    ];
  },
};

// Export the single combined configuration object
module.exports = nextConfig;