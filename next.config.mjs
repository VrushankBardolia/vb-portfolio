/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    // Static export has no image optimizer server-side
    unoptimized: true,
  },
};

export default nextConfig;
