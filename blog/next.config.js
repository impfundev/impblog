/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
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
