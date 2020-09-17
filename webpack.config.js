const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env = {}) => {
  const mode = env.production ? 'production' : 'development';
  process.env.NODE_ENV = mode;

  return {
    mode,
    entry: {
      'chat-ui': './src/index.js',
    },
    output: {
      filename: '[name].js',
      publicPath: '/',
      library: 'ChatUI',
      libraryTarget: 'umd',
    },
    module: {
      rules: [
        // {
        //   test: /\.js$/,
        //   enforce: 'pre',
        //   exclude: /node_modules/,
        //   loader: 'eslint-loader',
        // },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.less$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: true,
              },
            },
            'postcss-loader',
            'less-loader',
          ],
        },
      ],
    },
    devtool: env.production ? 'source-map' : 'cheap-module-eval-source-map',
    externals: {
      react: {
        commonjs: 'react',
        commonjs2: 'react',
        root: 'React',
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        root: 'ReactDOM',
      },
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          sourceMap: env.production,
        }),
      ],
    },
    devServer: {
      port: 8088,
      disableHostCheck: true,
      stats: 'minimal',
    },
  };
};
