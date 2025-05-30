import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  reactStrictMode: true,

  basePath: '/portfolio',

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;