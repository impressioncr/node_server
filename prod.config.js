module.exports = {
  proxy: [
    {
      url: 'api',
      target: 'http://222.45.42.120:60119',
      changeOrigin: true,
      pathRewrite: {'^/api' : ''}
    }
  ],
}