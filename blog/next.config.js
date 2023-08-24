/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 375, 425, 768, 1024, 1440, 2560],
    imageSizes: [16, 32, 37, 42, 76, 102, 144, 256],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo.ghost.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
