import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // This is experimental but it stops the stale-while-revalidate from being too aggressive
    staleTimes: {
      dynamic: 30
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: 'media.licdn.com',
        pathname: '/dms/image/**',
        port: '',
        protocol: 'https',
      },
    ],
  },
};

module.exports = nextConfig;
