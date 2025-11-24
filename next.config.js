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
 i18n: {
    // The locales supported by your application
    locales: ['en', 'fr', 'ar'], 
    // The default locale used when the user visits the root URL (e.g., /)
    defaultLocale: 'en', 
    // You can also use localeDetection: false if you don't want to auto-redirect users based on browser settings
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