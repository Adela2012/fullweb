const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: {
        index: "./src/index.js",
        list: "./src/list.js",
    },
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "[name].js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            chunks: ["index", "list"]
        })
    ]
}