/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true,
  },
  // Compress responses
  compress: true,
  // Enable static optimization
  trailingSlash: false,
  // Optimize bundle
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
