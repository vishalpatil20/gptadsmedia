import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: "/home/vishal/gpt ads/openai-ads/gptadsmedia",
  },
};

export default nextConfig;
