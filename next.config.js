/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
 // reactStrictMode : false,
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
