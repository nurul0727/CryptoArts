/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['jorgepoly.infura-ipfs.io'],
  },
};

module.exports = nextConfig;
