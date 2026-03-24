/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/site',
    assetPrefix: '/site/',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
