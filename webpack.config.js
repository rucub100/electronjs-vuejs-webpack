const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mode = process.env.NODE_ENV || "production";

const webConfig = {
    mode,
    entry: "./src/app/renderer.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    output: {
        filename: "renderer.js",
        path: path.resolve(__dirname, "dist"),
    },
};

const electronMainConfig = {
    mode,
    target: "electron-main",
    entry: "./src/electron/main.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
    },
};

const electronPreloadConfig = {
    mode,
    target: "electron-preload",
    entry: "./src/electron/preload.js",
    output: {
        filename: "preload.js",
        path: path.resolve(__dirname, "dist"),
    },
};

module.exports = [webConfig, electronMainConfig, electronPreloadConfig];
