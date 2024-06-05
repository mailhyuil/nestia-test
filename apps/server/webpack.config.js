const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const path = require('path');
const { join } = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/server'),
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: false,
      outputHashing: 'none',
      // CUSTOMIZE HERE
      entry: {
        server: './src/executable/server.ts',
      },
      output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
      },
      // JUST KEEP THEM
      externals: [webpackNodeExternals()],
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: 'ts-loader',
          },
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    }),
  ],
};
