const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { buildQuickStart } = require('./quickstart-adoc');
const AssetsPlugin = require('assets-webpack-plugin');
const staticDir = path.join(process.cwd(), 'static/');

module.exports = (_env, argv) => {
  const isProd = argv.mode === 'production';
  const cssLoaders = ['style-loader', 'css-loader'];
  if (isProd) {
    // push loader for production mode only
    cssLoaders.push('clean-css-loader');
  }

  return {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
      path: path.resolve('public'),
      filename: '[name].[fullhash].bundle.js',
      pathinfo: false, // https://webpack.js.org/guides/build-performance/#output-without-path-info
      publicPath: '',
    },
    devServer: {
      hot: true,
      historyApiFallback: true,
      port: 3000,
      clientLogLevel: 'info',
      stats: 'minimal',
    },
    amd: false, // We don't use any AMD modules, helps performance
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? false : 'cheap-module-source-map',
    module: {
      rules: [
        {
          test: /\.[tj]sx?$/,
          include: [path.join(__dirname, 'src')],
          use: { loader: 'ts-loader' },
        },
        {
          test: /\.css$/,
          use: cssLoaders,
        },
        // here for testing with quickstarts-standalone.css (see src/index.tsx)
        // {
        //   test: /\.css$/,
        //   include: (stylesheet) => stylesheet.includes('@patternfly/react-styles/css/'),
        //   use: ['null-loader'],
        // },
        {
          test: /\.(png|jpe?g|webp|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 1024,
              fallback: 'file-loader',
              name: '[name].[contenthash].[ext]',
              outputPath: 'images/',
            },
          },
        },
        {
          test: /.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash:8].[ext]',
                outputPath: 'fonts/',
              },
            },
          ],
        },
        {
          test: /\.ya?ml$/,
          type: 'json',
          use: 'yaml-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, './tsconfig.json'),
        }),
      ],
    },
    plugins: [
      new MiniCssExtractPlugin(
        !isProd
          ? {}
          : {
              filename: '[name].[contenthash].css',
              chunkFilename: '[name].[contenthash].css',
            },
      ),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
      }),
      new CopyPlugin({
        patterns: [{ from: staticDir, to: '' }],
      }),
      new CopyPlugin({
        patterns: [{ from: path.resolve(__dirname, '_redirects'), to: '' }],
      }),
      new CopyPlugin({
        patterns: [{ from: 'src/quickstarts-data/asciidoc/getting-started/images', to: '' }],
      }),
      new AssetsPlugin({
        keepInMemory: false, // _env === 'development',
        removeFullPathAutoPrefix: true,
      }),
      new CopyPlugin({
        patterns: [
          {
            from: 'src/quickstarts-data/asciidoc/**/quickstart.yml',
            to: ({ absoluteFilename }) => {
              // The dirname of quickstart is used as the output key
              const dirName = path.basename(path.dirname(absoluteFilename));
              if (_env === 'development') {
                return `${dirName}.quickstart.json`;
              }
              return `${dirName}.[contenthash].quickstart.json`;
            },
            transform: (content, absoluteFilename) => {
              const basePath = path.dirname(absoluteFilename);
              return buildQuickStart(content, absoluteFilename, basePath, {});
            },
            noErrorOnMissing: true,
          },
        ],
      }),
    ],
    stats: 'minimal',
  };
};
