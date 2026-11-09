// Sent with every page. The CSP only covers framing, plugins and base/form
// targets; scripts and styles are left open because Next and motion inline them.
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors 'self'; object-src 'none'; base-uri 'self'; form-action 'self'",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // 75 for most photographs, 85 for the full-screen hero.
    qualities: [75, 85],
  },
  experimental: {
    scrollRestoration: true,
  },
  // Placeholder stories removed in #33 that Google had already indexed.
  async redirects() {
    return [
      { source: "/stories/kerala-backwater-wedding", destination: "/wedding-photography/kerala", permanent: true },
      { source: "/stories/tamil-nadu-temple-wedding", destination: "/stories", permanent: true },
      { source: "/stories/punjab-anand-karaj", destination: "/stories", permanent: true },
      { source: "/stories/goa-konkani-wedding", destination: "/stories", permanent: true },
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
