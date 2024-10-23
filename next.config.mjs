import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/video/:path*',
        destination: 'https://ayyamcdn.b-cdn.net/hls_media/:path*'
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn1.ayyam.net'
      },
      {
        protocol: 'https',
        hostname: 'ayyamcdn.b-cdn.net'
      },
      {
        protocol: 'https',
        hostname: 'placehold.co'
      },
      {
        protocol: 'https',
        hostname: 'iili.io'
      }
    ]
  }
};

export default withNextIntl(nextConfig);
