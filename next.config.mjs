/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/]
      },
      use: [{ loader: '@svgr/webpack' }]
    });
    return config;
  },

  // Specify the custom entry point for your application
  // Replace 'src/app.jsx' with the path to your custom entry point file
  entry: async () => {
    return {
      ...(await require('./.next/server/pages/index.js')), // Assuming your entry point is located here
    };
  },
};

export default nextConfig;
