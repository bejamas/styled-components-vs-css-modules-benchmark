//
// See: https://kentcdodds.com/blog/profile-a-react-app-for-performance#build-and-measure-the-production-app
// See: https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Enable React profiling in production
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom$': 'react-dom/profiling',
      'scheduler/tracing': 'scheduler/tracing-profiling',
    };

    // Ensure proper optimization settings
    config.optimization = {
      ...config.optimization,
      minimize: true,
      minimizer: config.optimization.minimizer.map(plugin => {
        if (plugin.constructor.name === 'TerserPlugin') {
          return new plugin.constructor({
            ...plugin.options,
            terserOptions: {
              ...plugin.options.terserOptions,
              keep_classnames: true,
              keep_fnames: true,
              compress: {
                ...plugin.options.terserOptions?.compress,
                pure_getters: true,
                // Disabled because of an issue with Uglify breaking seemingly valid code:
                // https://github.com/facebook/create-react-app/issues/2376
                // Pending further investigation:
                // https://github.com/mishoo/UglifyJS2/issues/2011
                comparisons: false,
                // Disabled because of an issue with Terser breaking valid code:
                // https://github.com/facebook/create-react-app/issues/5250
                // Pending further investigation:
                // https://github.com/terser-js/terser/issues/120
                inline: 2,
              },
              mangle: {
                safari10: true,
              },
            },
          });
        }
        return plugin;
      }),
    };

    return config;
  },
  // Enable styled-components
  compiler: {
    styledComponents: true,
  },
  // Ensure proper production settings
  productionBrowserSourceMaps: true,
  swcMinify: false, // Use terser instead of swc for minification
};

module.exports = nextConfig;
