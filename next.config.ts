import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Habilita la exportación estática
  distDir: 'dist',
  images: {
    unoptimized: true, // Deshabilita la optimización de imágenes (necesario para GitHub Pages)
  },
  basePath: '/starot',
  assetPrefix: '/starot/',
};

export default nextConfig;

