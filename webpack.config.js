const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {

    entry: './src/app.js', // точка входа в преложение
    output: { // как и куда мы будем выгружать файлы
        path: path.resolve(__dirname, './dist'),

        filename: 'main.js',
        // относительная ссылка на данный файл который будет подстовлятся из браузера
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },

    module: {
        // описание правил с каким расширением что мы делаем
        // по умолчанию нормально работает с js и json
        rules: [
            {   // скармливаю эти файлы

                test: /\.js$/,
                loader: 'babel-loader',
                // выдергивать из node_modules
                //exclude: './node_modules/'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
                // use: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use: ['css-loader', 'sass-loader']
                // })
            },
            {
                test: /\.png$/,
                include : path.join(__dirname, './img'),
                loader: 'file-loader'
            },
            // {
            //     test    : /\.(png|jpg|svg)$/,
            //     include : path.join(__dirname, './img'),
            //     loader  : 'url-loader?limit=30000&name=images/[name].[ext]'
            // }
        ]
    },
    // devtool: 'eval-sourcemap'
    // https://www.npmjs.com/package/extract-text-webpack-plugin
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
};

module.exports = (env, options) => {
    let production = options.mode === 'production';

    // conf.devtool = production ? 'source-map' : 'eval-sourcemap';
    conf.devtool = production ? false : 'eval-sourcemap';
    return conf;
};


