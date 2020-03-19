const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const ejs = require('ejs')
const opn  = require('opn')
const logger = require('morgan')

// 路由模版
const index = require('./router/index.js')

// 解析post请求
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 解析cookie·
app.use(cookieParser())

if (app.get('env') === 'development') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require("webpack-dev-middleware")
  const webpackHotMiddleware = require("webpack-Hot-middleware")
  const webpackConfig = require(path.resolve('./webpack.client.config.js'))
  const complier = webpack(webpackConfig)

  // 开放静态资源
  app.use(express.static(path.resolve('./client/src/assets')))
  // 设定模版目录
  app.set('views', path.resolve('./client/template'))
  // 指定模版引擎进行渲染.html的文件
  app.engine('.html', require('ejs').__express);  
  // 忽略时，使用指定的模版引擎进行渲染
  app.set('view engine', 'ejs')

  let devMiddleware = webpackDevMiddleware(complier, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true //向控制台显示任何内容 
  })
  
  let hotMiddleware = webpackHotMiddleware(complier,{
    log: false,
    heartbeat: 2000,
  })
  
  app.use(logger('dev'))
  app.use(devMiddleware)
  app.use(hotMiddleware)

} else {
  app.use(logger('combined'))
  app.use(express.static('./dist'))
}


app.use('/', index)

app.use((req, res, next) => {
  res.status(404).render('404.html')
})

app.use((err, req, res, next) => {
  res.status(err.status | 500).send('Server Error!')
})

app.listen(8080, () => {
  // if (app.get('env') === 'development') opn(`http://127.0.0.1:8080`)
  console.log(`your server is running at http://127.0.0.1:8080`)
})
