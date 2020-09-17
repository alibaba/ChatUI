module.exports = (ctx) => ({
  map: ctx.env === 'development' ? ctx.options.map : false,
  plugins: {
    autoprefixer: {},
    cssnano: ctx.env === 'production' ? {
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }],
    } : false,
  },
});
