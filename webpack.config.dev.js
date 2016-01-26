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
    path: path.join(__dirname, 'build', 'static'),
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
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
}
