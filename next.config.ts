import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dharatalgreens.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/3uiubuexm/**",
      },
    ],
  },
};

export default nextConfig;
