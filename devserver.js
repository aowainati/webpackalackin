var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var COMPILER = webpack(config);

var app = express();
app.use(require('webpack-dev-middleware')(COMPILER, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'src/html/index.html'))
});

const PORT = 3000;
app.listen(PORT, function() {
  console.log('Server ready on port', PORT);
});
