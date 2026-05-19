/** @type {import('next').NextConfig} */
const nextConfig = {
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
