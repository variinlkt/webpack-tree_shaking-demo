const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  mode: "production",
    entry: __dirname + "/src/index.js",
    output: {
      path: __dirname + "/dist",
      filename: "[name][hash].js"
    },
    devtool:false,
    optimization: {
      minimize: true,
      usedExports: true, 
      // sideEffects: true,
      concatenateModules: true,
    },
    module: {
        rules: [
          {
            test: /\.html$/,
            use: [
              "html-loader"
            ]
          },
          // {
          //   test:/\.js$/,
          //   exclude: /node_modules/, 
          //   use:[
          //     'babel-loader'
          //   ]
          // },
        ]
      },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/public/index.html"
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}