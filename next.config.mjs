/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/portfolio-app', 
  basePath: '/portfolio-app',  
};

export default nextConfig;
