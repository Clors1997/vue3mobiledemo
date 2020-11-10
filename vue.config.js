const path = require("path");
const webpackConfig = require("./config/webpack.config.js");
const isProd = process.env.NODE_ENV === "production";
console.log(webpackConfig);
module.exports = {
  chainWebpack: config => {
    webpackConfig(config);
  },
  productionSourceMap: false,
  publicPath: !isProd ? "/" : "",
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/styles/*.less")]
    }
  }
};
