/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    // next/image を統一的に使いたいので SSG 向けに設定する
    unoptimized: true,
  },
}

module.exports = nextConfig
