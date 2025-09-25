import type {NextConfig} from 'next';

// const isProd = true;
/**
 * @type {import('next').NextConfig}
 */

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',  
  reactStrictMode: false,
  trailingSlash: true,
  basePath: '/anniv',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },

  
};

/* module.exports = nextConfig*/
export default nextConfig;
