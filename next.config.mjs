/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["source.unsplash.com", "aceternity.com"],
  },
};

export default nextConfig;
