const express = require('express');
const proxy = require('http-proxy-middleware');
const config = require('./prod.config')
const PORT = process.env.NODE_PORT || 8080
const app = express()

if (config.proxy.length) {
  config.proxy.forEach(proxyConfig => {
    const { url, ...proxyTable } = proxyConfig
    app.use(url, proxy(proxyTable))
  })
}

app.use(express.static('./web'));

module.exports = app.listen(PORT, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + PORT + '\n')
});
