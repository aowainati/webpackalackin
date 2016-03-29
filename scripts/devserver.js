#!/usr/bin/env ./node_modules/.bin/babel-node
import * as path from 'path';
import devMiddleware from 'webpack-dev-middleware';
import express from 'express';
import hotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';

import webpackConfig from '../webpack.config.development.babel';

const PROJECT_ROOT = path.resolve(__dirname, '..');
const COMPILER = webpack(webpackConfig);
const PORT = 3006 || process.env.PORT;

var app = express();
app.use(devMiddleware(COMPILER, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.use(hotMiddleware(COMPILER));

app.get('/*', function(req, res) {
  res.sendFile(path.join(PROJECT_ROOT, 'src/html/index.html'));
});

app.listen(PORT, function() {
  console.log('Server ready on port', PORT);
});
