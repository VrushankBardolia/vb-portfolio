/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    // Static export has no image optimizer server-side
    unoptimized: true,
  },
  turbopack: {
    resolveAlias: {
      "../build/polyfills/polyfill-module": "./lib/empty-polyfill.js",
      "next/dist/build/polyfills/polyfill-module": "./lib/empty-polyfill.js",
      "@next/polyfill-module": "./lib/empty-polyfill.js",
    },
  },
};

export default nextConfig;
