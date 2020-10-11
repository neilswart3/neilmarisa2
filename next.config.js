// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

const nextConfiguration = {
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(woff2|woff|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    );

    // eslint-disable-next-line no-param-reassign
    config.optimization.minimize = true;

    return config;
  },
};

const plugins = [withBundleAnalyzer];

if (process.env.NODE_ENV === 'production') {
  console.log('process.env.NODE_ENV:', process.env.NODE_ENV);

  plugins.push([
    withOptimizedImages,
    {
      imagesFolder: 'img',
      removeOriginalExtension: true,
    },
  ]);
}

module.exports = withPlugins(plugins, nextConfiguration);
