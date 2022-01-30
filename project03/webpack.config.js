const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  name: 'crypto tracker',
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  entry: {
    main: './src/index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  plugins: [new RefreshWebpackPlugin(), new CleanWebpackPlugin()],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  devServer: {
    hot: true,
    devMiddleware: {
      publicPath: '/dist',
    },
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    client: {
      logging: 'error',
    },
    historyApiFallback: true,
  },
};
