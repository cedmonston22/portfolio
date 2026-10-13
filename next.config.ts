import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/experience",
        destination: "/#experience",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
