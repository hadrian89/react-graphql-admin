const paths = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',

  // Control how source maps are generated
  devtool: 'inline-source-map',

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: false,
    compress: true,
    hot: true,
    port: 3004,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: paths.join(__dirname,'../src/app/entrypoint/index.ejs'),
      chunks: ["main"],
      title: 'Project Title',
      favicon: paths.join(__dirname,'../src/app/assets/icons/favicon.png'),
    }),
    new HtmlWebpackPlugin({
      title: 'Proxy-server',
      template: './server/mock-server/proxy-start.ejs', // template file
      inject:false,
      publicPath:'/start.html',
      filename: 'start.html', // output file
    }),
    new ReactRefreshWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns:[
        {
          from: './src/assets',
          to: 'assets',
        }
      ]
    })
  ],

  module: {
    rules: [
      // ... other rules
      {
        test: /\.[js]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
        use: [
          // ... other loaders
          {
            loader: require.resolve('babel-loader'),
            options: {
              // ... other options
              plugins: [
                // ... other plugins
                require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
})
