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
    cssnano: ctx.env === 'production' ? cssnanoConfig : false,
  },
});
