/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/WebDevPortfolio',
  transpilePackages: ["@material-tailwind/react"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
