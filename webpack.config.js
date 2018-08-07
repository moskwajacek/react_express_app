var path = require("path");
var Html = require('html-webpack-plugin');

module.exports = {
  entry: ['whatwg-fetch', './src/client/index.jsx'],
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, "build")
  },
  watch: true,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-2', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
            'style-loader', 
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  new require('autoprefixer')({
                    browsers: [
                      'ie 11' // tu definiujemy wsparcie dla przegladarek w css
                    ]
                  })
                ]
              }
            },
            'sass-loader'
          ]
      },
      {
        test: /\.(jpg|jpeg|gif|png|csv)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: 'images',
            outputPath: 'images'
          }
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: 'fonts',
            outputPath: 'fonts'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new Html({
        filename: 'index.html',
        template: './src/client/index.html'
    })
  ]
}