/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [],
        unoptimized: false,
    },
    reactStrictMode: true,
    output: 'export', // Required for Static HTML Export (GitHub Pages)
    basePath: '/portfolio', // <--- Add this line!
}

module.exports = nextConfig
