var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use('/api', proxy({
  target: 'http://222.45.42.120:60119',
  changeOrigin: true,
  pathRewrite: {'^/api' : ''}
}));

app.use(express.static('./web'));

module.exports = app.listen(8088, function (err) {
  if (err) {
    console.log(err);
    return
  }
  console.log('Listening at http://localhost:' + 8088 + '\n')
});
