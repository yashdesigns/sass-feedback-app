/** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    
  }

module.exports = {
  async rewrites() {
    return [
      {
        source: '/data.json',
        destination: '/api/data',
      },
    ];
  },
};

  module.exports = nextConfig