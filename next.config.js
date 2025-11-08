/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pixdew-web',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
