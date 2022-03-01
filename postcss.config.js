const cssnanoConfig = {
  preset: [
    'default',
    {
      calc: false,
      discardComments: { removeAll: true },
    },
  ],
};

module.exports = (ctx) => ({
  map: ctx.env === 'development' ? ctx.options.map : false,
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      propList: ['*', '!border', '!box-shadow'],
      selectorBlackList: [':root'],
    },
    cssnano: ctx.env === 'production' ? cssnanoConfig : false,
  },
});
