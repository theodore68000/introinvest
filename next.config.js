/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  
  // Ajoute cette ligne avec le nom EXACT de ton repo GitHub
  basePath: '/introinvest',
  
  // Souvent nécessaire sur GitHub Pages pour que les images s'affichent
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;


