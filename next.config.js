/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  assetPrefix: process.env.NEXT_PUBLIC_URL_PREFIX === "prod" ? "/MUI-SandBox" : "",
  basePath: process.env.NEXT_PUBLIC_URL_PREFIX === "prod" ? "/MUI-SandBox" : "",
};
