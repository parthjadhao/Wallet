/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        PASSWORD_SECRET_KEY: process.env.PASSWORD_SECRET_KEY
    }
};

export default nextConfig;
