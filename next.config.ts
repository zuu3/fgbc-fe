import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  compiler: {
    emotion: true,
  },
};

export default nextConfig;
