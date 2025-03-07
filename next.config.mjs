/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
