/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
