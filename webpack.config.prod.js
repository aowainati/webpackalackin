var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    './src/js/main'
  ],
  output: {
    path: path.join(__dirname, 'build', 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
  ],
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        test: /\.jsx$/,
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};
