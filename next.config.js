/**
 * @format
 * @type {import('next').NextConfig}
 */

const withPWA = require("next-pwa")({
  dest: "public",
});

const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Add any other Next.js configuration options here if needed
};

module.exports = withPWA(nextConfig);
