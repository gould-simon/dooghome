import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "build", //this line will tell the build to create a file with this name
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
