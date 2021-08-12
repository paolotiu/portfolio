const withTM = require('next-transpile-modules')(['unist-util-visit']);
const { withPlausibleProxy } = require('next-plausible');

const config = withTM({
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
});

module.exports = withPlausibleProxy({
  customDomain: 'https://plausible.paolotiu.com',
})(config);
