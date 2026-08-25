/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'z-cdn-media.chatglm.cn' }
    ]
  }
};

module.exports = nextConfig;
