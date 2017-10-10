## vue静态文件部署到node环境

## 项目布局

```txt
.
├── web                                     // 项目静态文件 通过源代码npm run build生成
│    └── static                             // 项目资源
│    └── index.html                         // 入口html
├── package.json                            // npm依赖包                
├── prod.server.js                          // 服务器程序
```

## prod.server.js

```javascript
var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

// 后台接口
app.use('/api', proxy({
  target: 'http://192.168.10.248:80',
  changeOrigin: true
}));

// 服务器根目录
app.use(express.static('./web'));

// 启动node服务器
module.exports = app.listen(8088, function (err) {
  if (err) {
    console.log(err);
    return
  }
  console.log('Listening at http://localhost:' + 8088 + '\n')
});
```

## 项目运行

```shell
// 全局安装forever
npm i forever -g

// 安装package.json里的依赖
npm i

// 启动服务器
forever start prod.server.js

// 关闭服务器
forever stop prod.server.js
```
