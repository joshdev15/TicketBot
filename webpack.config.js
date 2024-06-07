const ExtractTextPlugin = require("extract-text-webpack-plugin");
const pkg = require("./package.json");
const path = require("path");
const libraryName = pkg.name;

console.log(__dirname);

module.exports = {
  entry: path.join(__dirname, "/main.mjs"),
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "TicketBot.js",
    library: libraryName,
    libraryTarget: "umd",
    publicPath: "/dist/",
    umdNamedDefine: true,
  },
  plugins: [
    // new ExtractTextPlugin({
    // filename: path.join(__dirname, "./src/styles/main.css"),
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              fallback: "file-loader",
              name: "[name][md5:hash].[ext]",
              outputPath: "assets/",
              publicPath: "/assets/",
            },
          },
        ],
      },
      {
        test: /\.*css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
        }),
      },
      {
        test: /\.(js|jsx)$/,
        use: ["@babel/preset-react"],
        include: path.resolve(__dirname, "/src/components/"),
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(pdf|doc|zip)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
      assets: path.resolve(__dirname, "assets"),
    },
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
  },
};
