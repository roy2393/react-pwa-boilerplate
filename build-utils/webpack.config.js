const webpack = require('webpack');

module.exports = {
  entry: './web-app/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        use: [
          {
            loader: 'ts-loader',
            options: {
              /* Loader options go here */
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './build',
    hot: true,
  },
};
