import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/socialmedia',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/socialmedia',
        destination: '/socialmedia',
      },
      {
        source: '/bio',
        destination: '/bio',
      },
    ];
  },
};

export default nextConfig;
