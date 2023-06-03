import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export default {
  input: "./src/index.ts",
  output: {
    dir: "lib",
    format: "es",
  },
  plugins: [
    resolve({
      // Only supports node environments
      exportConditions: ["node"],
      // 如果'true'，插件将更优先使用内置模块（例如'fs'，'path`）。如果'false'，插件将查找本地安装的同名模块。
      preferBuiltins: true,
    }),
    commonjs(),
    typescript(),
    json(),
  ],
};
