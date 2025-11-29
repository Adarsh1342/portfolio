// next.config.js

const isProd = process.env.NODE_ENV === 'production'
const repoName = 'portfolio' // Replace 'portfolio' with your actual repository name if different

/** @type {import('next').NextConfig} */
const nextConfig = {
    // 1. Explicitly set properties required for static export
    output: 'export',
    reactStrictMode: true,

    // 2. Conditionally set basePath/assetPrefix/unoptimized only if not running through the Action.
    //    We explicitly set it here to cover any local build scenario, but the Action will overwrite/correct it.
    //    Crucially, we MUST ensure images are unoptimized if the action is not run.
    basePath: isProd ? `/${repoName}` : undefined,
    assetPrefix: isProd ? `/${repoName}/` : undefined,
    images: {
        unoptimized: true, // Set to true here to avoid the optimization error during build
        domains: [],
    },
}

module.exports = nextConfig