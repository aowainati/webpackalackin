import * as path from 'path';
import * as webpack from 'webpack';

import * as config from '..';

const ROOT_DIR = config.current.rootDir;

export default {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    path.join(ROOT_DIR, 'src', 'js', 'main'),
  ],
  output: {
    path: path.join(ROOT_DIR, 'build', 'static'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      // Expand config values into `__CONFIG__.path.to.value`
      '__CONFIG__': config.defines(config.current),
      // For dependencies like React and Redux that expect this to exist.
      'process.env.NODE_ENV': JSON.stringify(config.current.variant),
    }),
  ],
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: path.join(ROOT_DIR, 'src'),
        test: /\.jsx?$/,
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
}
