import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    pageExtensions: ['ts', 'tsx'],

  reactCompiler: true,
  reactStrictMode: true,
};

export default nextConfig;
