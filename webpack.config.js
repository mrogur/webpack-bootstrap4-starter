const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const config = {
    entry: {
        app: './assets/js/app.js'
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            /**
            {
                  test: /\.scss$/,
                  use: ExtractTextPlugin.extract({
                      fallback: 'style-loader',
                      use: [
                          {
                              loader: 'css-loader',
                              options: {importLoaders: 1}
                          },
                          'postcss-loader', 'sass-loader']
                  })
              },
              **/
            /**/
            {
                test: /\.(scss)$/,
                use: [{
                    loader: 'style-loader' // inject CSS to page
                }, {
                    loader: 'css-loader'// translates CSS into CommonJS modules
                }, {
                    loader: 'postcss-loader', // Run post css actions
                    options: {
                        plugins: function () { // post css plugins, can be exported to postcss.config.js
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ];
                        }
                    }
                }, {
                    loader: 'sass-loader' // compiles SASS to CSS
                }]
            },
        /**/
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader']
                })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('/css/[name].css'),
        new BrowserSyncPlugin({
            //proxy: 'musial-kancelaria.dev',
            server: true,
            port: 3033,
            files: [
                '**/*.php'
            ],
            ghostMode: {
                clicks: false,
                location: false,
                forms: false,
                scroll: false
            },
            injectChanges: true,
            logFileChanges: true,
            logLevel: 'debug',
            logPrefix: 'wepback',
            notify: true,
            reloadDelay: 0
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        })
    ]
};

//If true JS and CSS files will be minified
if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new UglifyJSPlugin(),
        new OptimizeCssAssetsPlugin()
    );
}

module.exports = config;
