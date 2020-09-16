module.exports = () => {
  process.env.BROWSERSLIST_ENV = 'production';

  return {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: './demo/index.js',
    module: {
      rules: [
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
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'chat-ui': 'ChatUI',
    },
    devServer: {
      contentBase: './demo',
      port: 9000,
      stats: 'minimal',
    },
  };
};
