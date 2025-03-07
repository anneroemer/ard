/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // bulkier but supports dynamic routes & api
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
