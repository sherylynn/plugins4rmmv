const webpack= require('webpack')
const path =require('path')
const packageInfo=require('./package.json')
const CopyWebpackPlugin = require('copy-webpack-plugin')
//不打编号了，直接替换
let release='app.js'
//let release='app.'+packageInfo.version+'.js'
module.exports={
  //cache : true,
  entry : {
    app:'./src/index.js'
  },
  devtool : 'inline-source-map',
  devServer : {
    contentBase: path.join(__dirname, 'game'),
    hot: true,
    publicPath:'/js/plugins/',
    //需要设置一下位置
    watchContentBase: true,
    open:true
  },
  module : {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [path.resolve(__dirname, 'node_modules')]
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins : [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new CopyWebpackPlugin([
      // 打包出release
      {
        from: path.join(__dirname, 'game'),
        to: path.resolve(__dirname, 'android/assets/www'),
        toType: 'dir'
      }
    ])
  ],
  output : {
    filename: release,
    path: path.resolve(__dirname, 'game/js/plugins/'),
    publicPath:'/js/plugins/'
  },
  resolve : {
    extensions: ['*', '.js', '.json']
  }
}
