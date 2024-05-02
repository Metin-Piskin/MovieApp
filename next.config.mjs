/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_KEY: process.env.API_KEY
    },
    images: {
        domains: ["image.tmdb.org"]
    }
};

export default nextConfig;
