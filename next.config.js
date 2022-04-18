/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    BASE_URL: "https://localhost:3000",
    BASE_URL_API: "https://localhost:3000/api",
  },
};

module.exports = nextConfig;
