// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    // 1. CRITICAL: Enables static export mode
    output: 'export',

    // 2. CRITICAL: Sets the base path for pages and internal links (MUST start with /)
    basePath: '/portfolio',

    // 3. CRITICAL: Sets the prefix for static assets like /_next/static/
    assetPrefix: '/portfolio/',

    images: {
        // 4. CRITICAL: Disables the Next.js Image Optimization API
        unoptimized: true,
        domains: [], // Keep this empty if not using external images
    },

    reactStrictMode: true,
}

module.exports = nextConfig