var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['./src/header.scss'],
    module: {
        rules: [
            {
                test: /\.(sc|c)ss$/,
                use: [
                MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'header.css',
        }),
    ],
};
