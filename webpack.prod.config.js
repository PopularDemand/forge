const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackShellPlugin = require('./config/webpackShellPlugin');

const paths = require('./config/paths');

process.env.NODE_ENV = 'production';
const env = process.env.NODE_ENV;

const browserConfig = {
  entry: [require.resolve('./config/polyfills'), paths.browserIndexJs],
  bail: true,
  output: {
    path: paths.appBuild,
    filename: "public/index.js",
    publicPath: paths.servedPath
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /js$/,
        enforce: 'pre',
        exclude: /(node_modules)/,
        use: [
          {
            options: {
              formatter: eslintFormatter,
              presets: ["react-app"]
            },
            loader: require.resolve('eslint-loader')
          }
        ],
        include: paths.appSrc
      },
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: require.resolve('babel-loader'),
        options: {
          plugins: ["transform-object-rest-spread"],
        }
      },
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.ttf$/],
        loader: "file-loader",
        options: {
          name: "public/media/[name].[ext]",
          publicPath: url => url.replace(/public/, "")
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                minimize: true,
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                ident: 'postcss',
                plugins: () => [
                  require('postcss-flexbugs-fixes'),
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009'
                  })
                ]
              }
            }
          ]
        })
      }
    ]
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "public/css/[name].css"
    }),
    // new webpack.DefinePlugin(env.stringified)
    // new UglifyJSPlugin({
    //   compress: {
    //     warnings: false,
    //     comparisons: false
    //   },
    //   output: {
    //     comments: false,
    //     ascii_only: true
    //   },
    //   sourcemap: true
    // }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    })
  ]
};

const serverConfig = {
  entry: [require.resolve('./config/polyfills'), paths.serverIndexJs],
  target: "node",
  bail: true,
  output: {
    path: paths.appBuild,
    filename: "server.js",
    libraryTarget: "commonjs2"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /js$/,
        enforce: 'pre',
        exclude: /(node_modules)/,
        use: [
          {
            options: {
              formatter: eslintFormatter,
              presets: ["react-app"]
            },
            loader: require.resolve('eslint-loader')
          }
        ],
        include: paths.appSrc
      },
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: require.resolve('babel-loader'),
        options: {
          plugins: ["transform-object-rest-spread"],
          presets: ["react-app"]
        }
      },
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.ttf$/],
        loader: "file-loader",
        options: {
          name: "public/media/[name].[ext]",
          publicPath: url => url.replace(/public/, ""),
          emit: false
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader/locals"
          }
        ]
      }
    ]
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "public/css/[name].css"
    }),
    // new webpack.DefinePlugin(env.stringified)
    // new UglifyJSPlugin({
    //   compress: {
    //     warnings: false,
    //     comparisons: false
    //   },
    //   output: {
    //     comments: false,
    //     ascii_only: true
    //   },
    //   sourcemap: true
    // }),
    new webpack.DefinePlugin({
      'window': {
        navigator: {
          'userAgent': {
            indexOf: () =>{}
          },
        }
      }
    }),
    new WebpackShellPlugin(env)
  ]
};

module.exports = [browserConfig, serverConfig];
