const { build } = require("esbuild");
const { dependencies } = require("./package.json");
const { sassPlugin } = require("esbuild-sass-plugin");
// const cssModulesPlugin = require("esbuild-css-modules-plugin");
// const { ScssModulesPlugin } = require("esbuild-scss-modules-plugin");

const entryFile = "src/index.tsx";
const shared = {
  bundle: true,
  entryPoints: [entryFile],
  external: Object.keys(dependencies),
  logLevel: "info",
  minify: true,
  sourcemap: true,
};

build({
  ...shared,
  format: "esm",
  outfile: "./dist/index.esm.js",
  plugins: [
    sassPlugin({
      filter: /\.css$/,
      type: "local-css",
    }),
  ],
  target: ["esnext", "node12.22.0"],
});

build({
  ...shared,
  format: "cjs",
  outfile: "./dist/index.cjs.js",
  plugins: [
    sassPlugin({
      filter: /\.css$/,
      type: "local-css",
    }),
  ],
  target: ["esnext", "node12.22.0"],
});
