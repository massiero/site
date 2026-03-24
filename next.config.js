/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/site',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
