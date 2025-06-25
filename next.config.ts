import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/lrigu76hy/tailark/abstract-bg.jpg',
      },
    ],
  },
};

export default nextConfig;
