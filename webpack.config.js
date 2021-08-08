const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    output: {
        clean: true,
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
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        }),

        new MiniCssExtract({
            filename: "nuevo-estilo.css",
            ignoreOrder: false,
        }),

        new CopyPlugin({
            patterns: [{ from: "src/assets/", to: "assets/" }],
        }),
    ],
};