/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'payjustnow.com',
        pathname: '/wp-content/**',
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
