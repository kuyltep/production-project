import * as webpack from "webpack";
import "webpack-dev-server";
import { buildWebpackConfig } from "./config/build/buildWebpackCofig";
import { BuildMode, BuildOptions, BuildPaths } from "./config/types/config";
import path from "path";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};
const mode: BuildMode = "development";

const cofing: webpack.Configuration = buildWebpackConfig({ paths, mode });

export default cofing;
