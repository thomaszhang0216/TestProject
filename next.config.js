/** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    output: {
      path: `${__dirname}/out`,
      publicPath: '/',
      filename: "[name].js"
    },
  }

  module.exports = nextConfig