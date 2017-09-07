const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const port = 2002;
// dev server port

module.exports = (env = {}) => {

  const isProduction = env.production === true;;

  let config = {

    context: resolve(__dirname, './src'),


    entry: {
      app: (() => {
        let app = ['./client.js'];

        if(isProduction) {
          // production plugins
        } else {
          // development plugins
          app = [
            'react-hot-loader/patch',
            // activate HMR for React

            `webpack-dev-server/client?http://0.0.0.0:${port}`,
            // bundle the client for webpack-dev-server
            // and connect to the provided endpoint

            'webpack/hot/only-dev-server',
            // bundle the client for hot reloading
            // only- means to only hot reload for successful updates

            ...app
          ];
        }

        return app;
      })(),
    },


    output: {
      filename: '[name].bundle.js',
      // the output bundle

      path: resolve(__dirname, './dist'),

      publicPath: '/'
      // necessary for HMR to know where to load the hot update chunks
    },


    devtool: (() => {
      if (isProduction) return 'hidden-source-map';
      else return 'eval-source-map';
      // else return 'source-map';
    })(),


    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['react-hot-loader/webpack', 'babel-loader']
        },
        {
          test: /\.pug$/,
          use: ['pug-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(ttf|woff|woff2|eot|otf)$/,
          use: ['file-loader']
        },
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          use: ['graphql-tag/loader'],
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          use: [
            'file-loader',
            // {
            //   loader: 'image-webpack-loader',
            //   options: {
            //     mozjpeg: {
            //       progressive: true,
            //     },
            //     gifsicle: {
            //       interlaced: false,
            //     },
            //     optipng: {
            //       optimizationLevel: 4,
            //     },
            //     pngquant: {
            //       quality: '75-90',
            //       speed: 3,
            //     },
            //   },
            // }
          ]
        }
      ]
    },

    devServer: (() => {
      if (isProduction) {
        return {};
      } else {
        return {
          contentBase: resolve(__dirname, 'dist'),
          // match the output path

          publicPath: '/',
          // match the output `publicPath`

          port: port,
          hot: true,

          historyApiFallback: true,
          compress: true,
          open: true,
        }
      }
    })(),


    plugins: (() => {

      let plugins = [
        new webpack.LoaderOptionsPlugin({
        options: {
          context: __dirname
        }
      }),
      ];

      if(isProduction) {
        // production plugins
        plugins = [
          ...plugins,

          new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
          }),

          new LodashModuleReplacementPlugin(),

          new webpack.optimize.UglifyJsPlugin({
            comments: false
          })
        ]
      } else {
        // development plugins
        plugins = [
          ...plugins,

          new webpack.HotModuleReplacementPlugin(),
          // enable HMR globally

          new webpack.NamedModulesPlugin(),
          // prints more readable module names in the browser console on HMR updates

          new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolve(__dirname, 'src/assets/index.pug')
          })
        ];
      }


      return plugins;
    })(),

  };


  return config;
}
