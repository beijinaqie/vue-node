const path = require('path')
const fs = require('fs')

function nodeModules() {
  let nodeModules = {};
  fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });
  return nodeModules
}
module.exports = {
  mode: process.env.NODE_ENV,
  entry: [ path.resolve('./server/app.js') ],
  target: 'node',
  output: {
    path: path.resolve('./server-dist'),
    filename: 'index.js'
  },
  externals: nodeModules(),
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: path.resolve('./server')
      }
    ]
  }
}