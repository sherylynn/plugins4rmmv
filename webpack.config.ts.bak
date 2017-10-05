const webpack= require('webpack')
const path =require('path')
const nodeExternals = require("webpack-node-externals");

module.exports={
  //cache: true,
  entry: ["webpack/hot/poll?1000", "./ts/index.ts"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js"
  },
  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  context: __dirname,
  node: {
    __filename: false,
    __dirname: false
  },
  target: "node",
  externals: [
    nodeExternals({
      whitelist: ["webpack/hot/poll?1000", "parse"]
    })
  ],
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
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
    //new webpack.NoEmitOnErrorsPlugin()
  ]
};
