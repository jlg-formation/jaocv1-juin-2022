const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (_, env) => {
  const config = {
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
      new MiniCssExtractPlugin(),
    ],
    entry: "./src/main.ts",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },

    mode: env.mode ? env.mode : "production",
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      compress: true,
      port: 9000,
    },
  };

  if (env.mode === "development") {
    config.devtool = "inline-source-map";
  }

  return config;
};
