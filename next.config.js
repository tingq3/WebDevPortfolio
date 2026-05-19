/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/WebDevPortfolio',
  assetPrefix: '/WebDevPortfolio',
  transpilePackages: ["@material-tailwind/react"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: '/WebDevPortfolio/**'
      },
    ],
  },
};

module.exports = nextConfig;
