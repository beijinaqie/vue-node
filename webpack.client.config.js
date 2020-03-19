const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: [ 
    path.resolve('./client/src/main.js'),
    'webpack-hot-middleware/client?noInfo=true&reload=true'
   ],
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        include: path.resolve('client')
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: path.resolve('client')
      }, 
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          esModule: false,
          name: 'images/[name]_[hash:7].[ext]'
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve('./client/src')
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('./client/template/index.html'),
      inject: true
    }),
  ]
}