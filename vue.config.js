const path = require("path");
// const webpack = require("webpack");
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  publicPath: "./",
  outputDir: "dist",
  lintOnSave: false,
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {},
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.mode = "production";
    } else {
      config.mode = "development";
    }

    Object.assign(config, {
      resolve: {
        extensions: [".js", ".vue", ".json", ".ts", ".tsx"],
        alias: {
          vue$: "vue/dist/vue.js",
          "@": path.resolve(__dirname, "./src"),
          "@c": path.resolve(__dirname, "./src/components"),
          "@l": path.resolve(__dirname, "./src/layouts"),
          "@u": path.resolve(__dirname, "./src/utils"),
          "@v": path.resolve(__dirname, "./src/views"),
          "@a": path.resolve(__dirname, "./src/assets"),
          "@s": path.resolve(__dirname, "./src/store"),
          "@m": path.resolve(__dirname, "./src/models")
        }
      }
    });
  },
  productionSourceMap: isDev,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {},
    modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  devServer: {
    hot: true,
    open: process.platform === "darwin",
    host: "localhost",
    port: 4000,
    https: false,
    hotOnly: false,
    proxy: {
      // proxy all requests starting with /api to jsonplaceholder
      "/api": {
        // target: "http://localhost:3000/",
        target: "http://129.204.143.28:3000/",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    before: app => {}
  },
  pluginOptions: {
    // ...
  }
};
