const webpack= require('webpack')
const path =require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
  //cache: true,
  entry : {
    app:'./ts/index.ts'
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
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: [
          path.resolve(__dirname, "node_modules")
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }, {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      template: 'game/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  output : {
    filename: '[name].js',
    path: path.resolve(__dirname, 'game/js/plugins/'),
    publicPath:'/js/plugins/'
  },
  resolve: {
    extensions: ['*',".ts", ".js", ".json"]
  }
}
