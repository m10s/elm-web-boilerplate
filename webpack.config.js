const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: './dist',
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.ejs',
    title: 'Elm',
  })],
  resolve: {
    modulesDirecotries: ['node_modules'],
    extensions: ['', '.js', '.elm'],
  },
  module: {
    loaders: [{
      test: /\.elm$/,
      exclude: [/elm-stuff/, /node_modules/],
      loader: 'elm-webpack',
    }],
    noParse: /\.elm$/,
  },
};
