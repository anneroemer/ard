/** @type {import('next').NextConfig} */
const nextConfig = {
  //   output: "export",
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
