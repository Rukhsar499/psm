/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    turbo: false
  },

  images: {
    unoptimized: false
  }
};

module.exports = nextConfig;