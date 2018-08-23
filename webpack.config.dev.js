const path = require('path');

module.exports = {
  entry: './example/index.js',
  output: {
    path: path.resolve(__dirname, 'example/dist'),
    filename: 'unc-react-audio-list.js'
  },
  module: {
    rules: [
      {
        test:/\.jsx?$/,
        exclude: /(node_modules)/,
        use: [ 'babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.modernizrrc\.js$/,
        exclude: /(node_modules)/,
        loader: "webpack-modernizr-loader"
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: "fonts/[name].[ext]"
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      modernizr$: path.resolve(__dirname, ".modernizrrc.js")
    },
    extensions: ['.js', '.jsx']
  },
  target: 'web',
  mode: 'development'
}
