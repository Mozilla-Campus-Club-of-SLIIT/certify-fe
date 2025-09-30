import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizeCss: false, // Disable for now due to critters issue
  },
};

export default nextConfig;
