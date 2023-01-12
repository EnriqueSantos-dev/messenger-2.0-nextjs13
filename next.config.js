/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["github.com", "platform-lookaside.fbsbx.com"],
  },
};

module.exports = nextConfig;
