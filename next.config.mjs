/** @type {import('next').NextConfig} */
const nextConfig = {
  //   output: "export",
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.artic.edu",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
