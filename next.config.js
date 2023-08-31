/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'images.unsplash.com',
                protocol: 'https',
            },
            {
                hostname: 'directus-production-b46e.up.railway.app',
                protocol: 'https',
            }
        ],
    },
}

module.exports = nextConfig
