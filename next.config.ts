import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: '/disability-pension-consultation',
  assetPrefix: '/disability-pension-consultation/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  typescript: {
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
