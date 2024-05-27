/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
 experimental: {
  missingSuspenseWithCSRBailout: false,
 },
 webpack: (config, { isServer }) => {
  config.resolve.alias["@"] = path.resolve(__dirname);
  return config;
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
