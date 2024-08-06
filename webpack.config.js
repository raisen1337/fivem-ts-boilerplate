const path = require("path");
const glob = require("glob");
const webpack = require("webpack");
const { application } = require("express");
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

  // Define directories to search for .ts files
  const directories = ["client", "server"];

  directories.forEach((directory) => {
    // Get an array of all .ts files within the directory and its subdirectories
    const files = glob.sync(`src/${directory}/**/*.ts`);
    // Generate entry points dynamically
    files.forEach((file) => {
      // Generate a unique entry name based on directory structure
      const entryName = directory;
      // Add entry point to the object
      if (!entryPoints[entryName]) {
        entryPoints[entryName] = [`./${file}`];
      } else {
        entryPoints[entryName].push(`./${file}`);
      }
    });
  });

  return entryPoints;
}
