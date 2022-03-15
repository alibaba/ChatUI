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
  propList: [
    '*',
    '!border*',
    '!box-shadow',
  ],
  selectorBlackList: [':root'],
};

module.exports = (ctx) => ({
  map: ctx.env === 'development' && ctx.options ? ctx.options.map : false,
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': pxtoremConfig,
    cssnano: ctx.env === 'production' ? cssnanoConfig : false,
  },
});
