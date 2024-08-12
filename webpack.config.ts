import * as webpack from "webpack";
import "webpack-dev-server";
import { buildWebpackConfig } from "./config/build/buildWebpackCofig";
import {
  BuildEnv,
  BuildMode,
  BuildOptions,
  BuildPaths,
} from "./config/types/config";
import path from "path";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };
  const PORT: number = env.port || 3000;
  const mode: BuildMode = env.mode || "development";
  const isDev = mode === "development";

  const config: webpack.Configuration = buildWebpackConfig({
    paths,
    mode,
    port: PORT,
    isDev,
  });

  return config;
};
