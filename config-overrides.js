const webpack = require("webpack");

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    querystring: require.resolve("querystring-es3"),
    zlib: require.resolve("browserify-zlib"),
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    assert: require.resolve("assert"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify"),
    url: require.resolve("url"),
    util: require.resolve("util"),
    path: false,
    fs: false,
    net: false,
    async_hooks: false,
  });
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      //   path: "path-browserify",
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
      target: "node",
    }),
    // new webpack.ContextReplacementPlugin(/\/fs\//, (data) => {
    //   delete data.dependencies[0].critical;
    //   return data;
    // }),
  ]);
  //   if (!isServer) {
  //     config.node = {
  //       fs: "empty",
  //       net: "empty",
  //     };
  //   }
  return config;
};
