/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/ProjectCLMC',
  assetPrefix: '/ProjectCLMC/',
  trailingSlash: true,
};

module.exports = nextConfig; 