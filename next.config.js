/** @type {import('next').NextConfig} */
const nextConfig = {
  // CRITICAL FIX: Add this block for external image hosting
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Add Unsplash if you use it
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      // Add other domains here if needed, e.g., 'cdn.shopify.com'
    ],
  },
  
  // ⬅️ CRITICAL FIX: This explicitly ensures NEXT_PUBLIC_GA_ID is available to the client build
  env: {
    // This value will be hardcoded into the client-side bundle during the Vercel build
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
  
  // FIX FOR VERCEL FETCH ISSUE: Add the rewrites function directly inside the nextConfig object
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*', // Maps /api/properties to the API route handler
      },
    ];
  },
};

// Export the single combined configuration object
module.exports = nextConfig;