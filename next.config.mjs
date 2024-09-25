/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactRoot: true,
    serverComponents: true,
  },
  headers: async () => {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600', // Cache for 1 hour
          },
        ],
      },
    ];
  },
};

export default nextConfig;
