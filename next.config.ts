import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: 'export', // Habilita la exportación estática
  distDir: 'dist',
  images: {
    unoptimized: true, // Deshabilita la optimización de imágenes (necesario para GitHub Pages)
  },
  basePath: isProd ? '/starot' : '',
  assetPrefix: isProd ? '/starot/' : '',
};

export default nextConfig;

