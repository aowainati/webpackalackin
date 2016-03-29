import * as path from 'path';
import * as webpack from 'webpack';

import * as config from '..';

export default {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    './src/js/main'
  ],
  output: {
    path: path.join(config.current.rootDir, 'build', 'static'),
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
        include: path.join(config.current.rootDir, 'src'),
        test: /\.jsx$/,
      },
      {
        loader: 'url-loader?limit=8192',
        test: /\.(png|jpg)$/,
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};
