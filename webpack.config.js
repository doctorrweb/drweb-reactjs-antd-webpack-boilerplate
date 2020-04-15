const path = require('path')

module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, "./src"),
        historyApiFallback: true,
    },
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                include: [/node_modules\/.*antd/],
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    {
                        loader: "less-loader",
                        options: {
                            modifyVars: {
                                "primary-color": "#009944",
                                "link-color": "#009944",
                                "border-radius-base": "2px",
                            },
                            javascriptEnabled: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".css"],
    },
};