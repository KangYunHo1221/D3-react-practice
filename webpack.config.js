module.exports = {
  entry: './src/index.tsx',
  output: {
    publicPath: '/',
  },
  devServer: {
    port: 3000,
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|ico|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]',
        },
      },
      {
        test: /\.(j|t)sx?$/,
        use: ['esbuild-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};
