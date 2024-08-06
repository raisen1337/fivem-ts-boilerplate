const path = require("path");
const glob = require("glob");
const webpack = require("webpack");

module.exports = {
  entry: getEntryPoints(),
  target: "node",
  mode: "none",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [],
};

function getEntryPoints() {
  const entryPoints = {};
  const directories = ["client", "server"];

  directories.forEach((directory) => {
    const files = glob.sync(`src/${directory}/**/*.ts`);
    files.forEach((file) => {
      const entryName = path
        .relative("src", file)
        .replace(/\\/g, "/")
        .replace(/\.ts$/, "");
      entryPoints[entryName] = `./${file}`;
    });
  });

  return entryPoints;
}
