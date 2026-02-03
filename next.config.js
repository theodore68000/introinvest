/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir : "docs",
  basePath: "/introinvest",   // nom exact de ton repo
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;


