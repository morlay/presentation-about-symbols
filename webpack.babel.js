import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import qs from 'qs';
import autoprefixer from 'autoprefixer';

const DEV_MODE = process.env.NODE_ENV !== 'production';

const SRC = './src';
const DEST = './public';

const GLOBALS = {
  process: {
    env: {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    },
  },
};

const extractCSS = new ExtractTextPlugin('app', '[name]-[hash].css', { allChunks: true });

const vendorJS = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  filename: '[name]-[hash].js',
});

const indexHTML = new HtmlWebpackPlugin({
  title: 'Symbols',
  template: './index.jade',
});

const createCssLoaderWithStyleLoader = (test, loaders) =>
  test ? ['style-loader'].concat(loaders).join('!') : extractCSS.extract(loaders);

export default {
  context: path.join(__dirname, SRC),

  entry: {
    vendor: [
      'react',
      'react-dom',
      'classnames',
    ],
    app: './index.js',
  },

  output: {
    path: path.join(__dirname, DEST),
    publicPath: '/',
    filename: '[name]-[hash].js',
  },

  module: {
    loaders: [
      {
        test: /_\.css$/,
        loader: createCssLoaderWithStyleLoader(DEV_MODE, [
          `css-loader?${qs.stringify({
            sourceMap: true,
            modules: true,
            importLoaders: 1,
            localIdentName: DEV_MODE ? '[name]__[local]---[hash:base64:5]' : '[hash:base64:5]',
          })}`,
          'postcss-loader',
        ]),
      },
      {
        test: /[^_]\.css$/,
        loader: createCssLoaderWithStyleLoader(DEV_MODE, [
          `css-loader?${qs.stringify({
            sourceMap: true,
          })}`,
          'postcss-loader',
        ]),
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.jade$/,
        loader: 'jade-loader',
      },
      {
        test: /\.(jpg|png|woff2|woff|ttf|eot)$/,
        loader: DEV_MODE ? 'url-loader' : 'file-loader',
      },
      {
        test: /\.svg$/,
        loaders: [
          'svg2jsx',
          'simplify-svg/lib/loader',
        ],
      },
    ],
  },

  postcss: [
    autoprefixer({
      browsers: [
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 2.3',
        'bb >= 10',
      ],
    }),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      'node_modules',
      __dirname,
    ],
  },

  plugins: [
    extractCSS,
    vendorJS,
    indexHTML,
    new webpack.DefinePlugin(GLOBALS),
    ...(
      DEV_MODE ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false,
          },
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
      ]
    ),
  ],
};
