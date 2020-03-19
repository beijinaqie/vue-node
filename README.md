# 简介

这是一个基于node搭建的全栈项目，没有ssr，纯spa项目，目的就是探究node在项目中所起到的中间件作用。常规vue项目自带webpack-dev-server，这样就是前端项目起了一个服务，node中间件也起了一个服务，这样就会造成跨域（不同端口），而且很不美观，况且webpack-dev-server本身就是node所写的一个插件，所以想法就是利用node启动服务，webpack-dev-middleware和webpack-hot-middleware俩兄弟来负责开发环境下的热插拔功能，nodemon和实现node文件的热更功能，let's do it。

# 运行环境

node v12.11.1 <br/>
npm v6.13.1 <br/>
yarn 1.22.4 <br/>
Win64 x64 <br/>
注释: yarn 和 npm都一样，只不过yarn下载依赖包是并发，而npm是串发，而且yarn下载依赖时，会有一个lock，锁定包的版本。为了方便，采用了淘宝源

# 依赖安装

```js
npm install 
// 或
yarn
```

# 开发模式启动

```js
npm start 
// 或
yarn start
```

# 开发模式预览打包的结果

```js
npm run build
npm run server:dev
// 或
yarn run build
yarn run server:dev
```

# 生产模式启动

```js
npm run build
npm run server
// 或
yarn run build
yarn run server
```