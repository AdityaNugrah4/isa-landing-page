module.exports = {
  chainWebpack: config => {
    // to make the webpack trully ignore any index.html, other than only from new HtmlWebpackPlugin
    config.plugin('copy').tap(args => {
      args[0].patterns[0].globOptions.ignore.push('**/index.html');
      return args;
    });
  }
};