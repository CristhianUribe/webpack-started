const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const CsSMinimizer = require("css-minimizer-webpack-plugin");
const Terser = require("terser-webpack-plugin");

module.exports = {
    mode: "development",
    output: {
        clean: true,
        filename: "main.[contenthash].js",
    },
    module: {
        rules: [{
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    // minimize: true,
                    sources: false,
                },
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader, "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: "file-loader",
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },

    optimization: {
        minimize: true,
        minimizer: [new CsSMinimizer(), new Terser()],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        }),

        new MiniCssExtract({
            filename: "[name].[fullhash].css",
            ignoreOrder: false,
        }),

        new CopyPlugin({
            patterns: [{ from: "src/assets/", to: "assets/" }],
        }),
    ],
};