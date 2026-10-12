const cssnanoConfig = {
  preset: [
    'default',
    {
      calc: false,
      discardComments: { removeAll: true },
    },
  ],
};

const pxtoremConfig = {
  propList: ['*', '!border*', '!box-shadow'],
  // selectorBlackList: [':root'],
  minPixelValue: 2,
};

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
          require('autoprefixer'),
          require('postcss-pxtorem')(pxtoremConfig),
          require('cssnano')(cssnanoConfig),
        ]
      : [],
};

module.exports = config;
