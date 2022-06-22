const path = require("path");

module.exports = (_, env) => {
  const config = {
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
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },

    mode: env.mode ? env.mode : "production",
  };

  if (env.mode === "development") {
    config.devtool = "inline-source-map";
  }

  return config;
};
