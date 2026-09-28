import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add this property to allow your network IP
  allowedDevOrigins: [
    '192.168.1.26',
  ],
};

export default nextConfig;
