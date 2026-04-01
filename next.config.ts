import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "files.manuscdn.com" },
      { protocol: "https", hostname: "**.manus.computer" },
    ],
  },
};

export default nextConfig;
