const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const _root = path.resolve(__dirname, '..');
const webpack = require("webpack");

/**
 * Fetch app root
 * @param args
 * @returns {string}
 */
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    let target_dir = path.join.apply(path, [_root].concat(args));
    console.log("Watching content from:", target_dir);
    return target_dir;
}

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.ts']
    },
    entry: {
        polyfills: "./src/app/index.polyfill.ts",
        main: "./src/app/index.ts",
        styles: "./src/app/assets/css/shell.css"
    },
    output: {
        path: path.resolve(__dirname, 'output'), // output directory
        filename: "[hash].[name].js" // name of the generated bundle
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ["style-loader", "css-loader"]
            },
            {
                test: /\.ts$/,
                loader: "ts-loader"
            },
            {
                test: /\.ts$/,
                enforce: "pre",
                loader: 'tslint-loader'
            },
            {
                test: /\.scss$/,
                loader: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/app/index.html",
            //inject: "body"
        }),
        new webpack.ContextReplacementPlugin(
            /\@angular(\\|\/)core(\\|\/)esm5/,
            root('iex-commander/src'),
            {
                // Angular Async Routes
            }
        )
    ],
    devtool: "source-map",
    devServer: {
        historyApiFallback: true,
        stats: {
            warningsFilter: /System\.import/
        }
    }
};