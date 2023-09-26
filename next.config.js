/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
  output: "standalone",
};

module.exports = nextConfig;
