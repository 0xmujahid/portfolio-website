/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV !== 'production',
  },
  // Ensure output is set to export for static site generation if needed
  // output: 'export', // Uncomment this line only if you need static exports
};

module.exports = nextConfig; 