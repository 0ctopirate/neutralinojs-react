const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
	modules: [path.resolve(__dirname, 'src'), 'node_modules'],
	extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      // The styles here stop the user from being able to overscroll the window
      templateContent: ({ htmlWebpackPlugin }) => `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <script src="neutralino.js"></script>
            <style>
              html {
                margin: 0px;
                padding: 0px;
                overflow: hidden;
              }

              body {
                position: absolute;
                margin: 0px;
                padding: 0px;
                width: 100%;
                height: 100%;
                overflow: auto;

                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                  sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
              
              code {
                font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
                  monospace;
              }
            </style>
            <title>Neutralino React App</title>
          </head>
          <body>
            <div id="app"></div>
          </body>
        </html>
      `,
      filename: 'index.html',
    }),
    new CopyPlugin({
      patterns: ['neutralino.js'],
    }),
  ],
};

module.exports = config;