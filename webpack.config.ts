import * as path from "path";
import * as webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import "webpack-dev-server";
const cofing: webpack.Configuration = {
  mode: "production",
  entry: path.resolve("./", "src", "index.ts"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./", "build"),
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("./", "public", "index.html"),
      filename: "index.html",
    }),
    new webpack.ProgressPlugin(),
  ],
};

export default cofing;
