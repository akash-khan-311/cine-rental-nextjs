/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "image.tmdb.org",
          },
          {
            protocol: "https",
            hostname: "source.unsplash.com",
          },
          {
            protocol: "https",
            hostname: "i.pravatar.cc",
          },
          {
            protocol: "https",
            hostname: "images.pexels.com",
          },
        ],
      },
};

export default nextConfig;
