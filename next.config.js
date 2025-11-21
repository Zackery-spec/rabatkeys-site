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
  // If you are using a Next.js version that uses the older 'domains' array:
  // images: {
  //   domains: ['images.unsplash.com'],
  // },
};

module.exports = nextConfig;