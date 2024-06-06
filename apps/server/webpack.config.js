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
      transformers: [
        'typia/lib/transform',
        {
          name: '@nestia/core/lib/transform',
          options: {
            validate: 'assert',
            stringify: 'assert',
          },
        },
      ],
    }),
  ],
};
