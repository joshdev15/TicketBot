const { build } = require("esbuild");
const { dependencies } = require("./package.json");
const stylePlugin = require("esbuild-style-loader");
// const { sassPlugin } = require("esbuild-sass-plugin");
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
    stylePlugin.styleLoader({
      filter: /\.(css|less|scss|sass|tyss)(\?.*)?$/,
      namespace: ["native-component", "file"],
      // browsers: "ios >= 11, android >= 5, chrome >= 54",
      cssModules: {
        pattern:
          process.env.CI_TEST === "test"
            ? "[name]__[local]"
            : "[local]__[hash]",
      },
      publicPath: __dirname,
    }),
    // sassPlugin({
    // filter: /\.module\.css$/,
    // type: "local-css",
    // }),
    // sassPlugin({
    // filter: /\.css$/,
    // type: "local-css",
    // }),
  ],
  target: ["esnext", "node12.22.0"],
});

build({
  ...shared,
  format: "cjs",
  outfile: "./dist/index.cjs.js",
  plugins: [
    stylePlugin.styleLoader({
      filter: /\.(css|less|scss|sass|tyss)(\?.*)?$/,
      namespace: ["native-component", "file"],
      // browsers: "ios >= 11, android >= 5, chrome >= 54",
      cssModules: {
        pattern:
          process.env.CI_TEST === "test"
            ? "[name]__[local]"
            : "[local]__[hash]",
      },
      publicPath: __dirname,
    }),
    // sassPlugin({
    // filter: /\.module\.css$/,
    // type: "local-css",
    // }),
    // sassPlugin({
    // filter: /\.css$/,
    // type: "local-css",
    // }),
  ],
  target: ["esnext", "node12.22.0"],
});
