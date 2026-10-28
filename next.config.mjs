/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // 75 for most photographs, 85 for the full-screen hero.
    qualities: [75, 85],
  },
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
