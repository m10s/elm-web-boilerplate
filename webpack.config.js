module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: './dist',
  },
  resolve: {
    modulesDirecotries: ['node_modules'],
    extensions: ['', '.js', '.elm'],
  },
  module: {
    loaders: [{
      test: /\.html$/,
      exclude: /node_modules/,
      loader: 'file?name=[name].[ext]',
    },
    {
      test: /\.elm$/,
      exclude: [/elm-stuff/, /node_modules/],
      loader: 'elm-webpack',
    }],
    noParse: /\.elm$/,
  },
};
