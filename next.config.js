/**
 * @format
 * @type {import('next').NextConfig}
 */

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
};

module.exports = nextConfig;
