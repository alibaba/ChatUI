module.exports = (api) => {
  const env = api.env();
  api.cache.using(() => env === 'development');

  return {
    presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-transform-runtime',

      // Stage 3
      '@babel/plugin-proposal-class-properties',
    ],
    env: {
      esm: {
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
            },
          ],
        ],
        plugins: [
          [
            '@babel/plugin-transform-runtime',
            {
              useESModules: true,
            },
          ],
        ],
      },
      umd: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                android: '4.4',
                ios: '9',
              },
              useBuiltIns: 'usage',
              corejs: 3,
            },
          ],
        ],
        plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]],
      },
    },
  };
};
