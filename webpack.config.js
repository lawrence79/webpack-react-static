const webpack = require('webpack');
const path = require('path');

var config = {
  entry: './app/app.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  }
};

module.exports = config;