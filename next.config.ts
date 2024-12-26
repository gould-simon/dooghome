import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // This will allow all domains. Adjust based on your needs
      },
    ],
  },
};

export default nextConfig;
