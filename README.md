## dist静态文件部署到node环境

## 项目布局

```txt
.
├── web                                     // 项目静态文件 通过源代码npm run build生成
│    └── static                             // 项目资源
│    └── index.html                         // 入口html
├── package.json                            // npm依赖包                
├── prod.server.js                          // 服务器程序
├── prod.config.js                          // 程序配置
```

## prod.server.js

```javascript
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
```

## 项目运行

```shell
// 安装package.json里的依赖
npm i

// 启动服务器
npm run prod

// 关闭服务器
npm run stop
```
