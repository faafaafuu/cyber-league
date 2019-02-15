const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {

    entry: ['./src/app.js', './src/assets/main.scss'],
    output: { 
        path: path.resolve(__dirname, './dist'),

        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    devtool: "source-map",
    devServer: {
        overlay: true
    },

    module: {
        rules: [
            { 
                test: /\.js$/,
                loader: 'babel-loader',
                //exclude: './node_modules/'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {name: 'img/[name].[ext]'}  
                  }
                ]
              },
              {
                test: /\.(sass|scss)$/,
                include: path.resolve(__dirname, './src/assets/main.scss'),
                use: ExtractTextPlugin.extract({
                  use: [{
                      loader: "css-loader",
                      options: {
                        sourceMap: true,
                        minimize: true//,
                        //url: false
                      }
                    },
                    {
                      loader: "resolve-url-loader"
                    },
                    {
                      loader: "sass-loader",
                      options: {
                        sourceMap: true
                      }
                    }
                  ]
                })
              }
        ]
    },
    // devtool: 'eval-sourcemap'
    // https://www.npmjs.com/package/extract-text-webpack-plugin
    // plugins: [
    //     new ExtractTextPlugin("styles.css"),
    // ]
    plugins: [
        new ExtractTextPlugin({
          filename: './css/style.bundle.css',
          allChunks: true,
        }),
    ]
};

module.exports = (env, options) => {
    let production = options.mode === 'production';

    // conf.devtool = production ? 'source-map' : 'eval-sourcemap';
    conf.devtool = production ? false : 'eval-sourcemap';
    return conf;
};


