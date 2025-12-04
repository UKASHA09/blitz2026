module.exports = {
    reactStrictMode: true,
    trailingSlash: true,
    images: {
        domains: [
            'cdn-images-1.medium.com',
            'yt3.ggpht.com',
            'play-lh.googleusercontent.com',
            'media.fidoalliance.org',
            'authy.com',
            'images.unsplash.com',
            'c.tenor.com',
            'res.cloudinary.com',
            'drive.google.com',
        ],
    },
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
