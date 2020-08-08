const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "[name]-[hash].js"
    },
    mode: "development",
    resolveLoader: {
        modules: ["node_modules", "./myLoaders"]
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {
                        loader: miniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../",
                        },
                    },
                    "css-loader", 
                    "postcss-loader",
                    "less-loader"
                ]
            },
            // {
            //     test: /\.less$/,
            //     // use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
            //     use: ["my-style-loader", "my-css-loader", "my-less-loader"]
            // },
            // {
            //     test: /\.js$/,
            //     // use: path.resolve(__dirname, "./myLoaders/replaceLoader.js")
            //     use: [{
            //         loader: "./myLoaders/replaceLoader.js",
            //         options: {name:'hello webpack loader'}
            //     },
            //     {
            //         loader:"./myLoaders/replaceLoaderAsync.js",
            //         options: {name:'hello webpack loader2'}
            //     }]
            // }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index-[hash].html"
        }),
        new miniCssExtractPlugin({
            filename: "css/[name]-[contenthash].css",
        }),
    ]
}