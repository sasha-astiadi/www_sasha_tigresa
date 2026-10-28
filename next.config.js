/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, options) {
      // Add file-loader for .mp4 files
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: '[path][name].[ext]',
            },
          },
        ],
      });
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  