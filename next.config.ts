import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    // Tells Next.js to export a static site
  output: 'export',

  // Required for the site to work on GitHub Pages
  // Replace `your-repo-name` with your repository's name
  basePath: '/PortfolioWebsite',

  // Disables image optimization, which is not supported in a static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
