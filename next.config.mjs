/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "firstroadapi.echopus.com",
          pathname: "/**", // Add this line
        },
      ],
    },
  };

export default nextConfig;
