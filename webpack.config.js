const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = () => {
  const CSSExtractPlugin = new MiniCssExtractPlugin({
    filename: 'styles.css'
  });
  return {
    mode: isProduction ? 'production' : 'development',
    entry: './src/app.js',
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Indecision App',
        template: './src/template/index.html',
        favicon: './src/template/favicon.png'
      })
    ].concat(isProduction ? [CSSExtractPlugin] : []),
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }, {
        test: /\.s?css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public')
      }
    }
  };
};
