module.exports = {
  entry: './app/main.ts',
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['ts-loader'] }
    ]
  }
}
