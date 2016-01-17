var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './src/js/main'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, 'src'),
        ],
        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,
        // Options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react'],
        }
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
}
