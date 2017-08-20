# multipage-start-kit
基于 Webpack 开发和构建 传统多页面静态站点的前端工程化方案，支持
同时适用于 PC 端和移动端。
> 开发 PC 端网站时，如果需要兼容 IE8，请尽量少使用 CSS3，并且不使用 IE8 不能模拟的 ECMAScript 5 特性。

## 功能
- 前端工程化
- 支持响应式
- 模块化
- 组件化
- 开发、调试和构建
- 集成 PostCSS、Sass
- JS 代码规范性校验
- CSS 代码规范性校验

## Requirements
* node `^5.0.0`
* yarn `^0.23.0` or npm `^3.0.0`

## Installation 安装

```bash
$ https://github.com/HuaRongSAO/multipage-start-kit <my-project-name>
$ cd <my-project-name>
$ npm i
$ npm start //开始开发和调试
$ npm run build //压缩打包
$ npm run server //发布运行本地服务器
```
## 全局补丁
## 添加 polyfill
按需引入 polyfill，提高浏览器兼容性。
polyfill 在 `/src/javascript/polyfill.js` 文件中引入：
```js
// 1) Object.assign
Object.assign = require('object-assign')

// 2) Promise
if (typeof Promise === 'undefined') {
    require('promise/lib/rejection-tracking').enable()
    window.Promise = require('promise/lib/es6-extensions.js')
}

// 3) Fetch
// ------------------------------------
// Fetch polyfill depends on a Promise implementation, so it must come after
// the feature check / polyfill above.
if (typeof window.fetch === 'undefined') {
    require('whatwg-fetch')
}
// 3) 第三方工具库
if (typeof window._ === 'undefined') {
    require('lodash')
}
```

## 样式编写规范
请参照 BEM 规范，详情见：[https://github.com/zhaotoday/bem](https://github.com/zhaotoday/bem)，下面是一个例子：  
HTML 代码：
```html
<nav class="nav">
  <a href="#" class="nav__item nav__item--normal">正常状态</a>
  <a href="#" class="nav__item nav__item--active">当前状态</a>
  <a href="#" class="nav__item nav__item--hover">鼠标移上时的状态</a>
</nav>
```
Sass 代码：
```scss
.nav {
  &__item {
    &--normal {
    }
    &--active {
    }
    &--hover {
    }
  }
}
```
基于 BEM mixin 的 Sass 代码：
```scss
@include b(nav) {
  @include e(item) {
    @include m(normal) {
    }
    @include m(active) {
    }
    @include m(hover) {
    }
  }
}
```
## 响应式开发
 ```npm i -D include-media```
```scss
@import "~include-media/dist/_include-media.scss";

$breakpoints: (phone: 320px, tablet: 768px, desktop: 1024px);

.selector {
  @include media("<=tablet") {
    background-color: red;
  }

  @include media(">tablet", "<desktop") {
    background-color: yellow;
  }

  @include media(">=desktop") {
    background-color: green;
  }
}
```

# 目录结构

├── bin  #服务器配置文件夹    
│   └── server.js  #express #服务器实例配置     
├── build  #webpack配置文件夹    
│   ├── filePath.js  #文件路径   
│   ├── tool  #封装的小工具（获取文件，log）    
│   │   ├── getFile.js   
│   │   ├── logger.js   
│   │   └── watchDirs.js   
│   ├── webpack.config.base.js  #  webpack基础配置  
│   ├── webpack.config.dev.js  #  webpack 开发模式基础配置   
│   └── webpack.config.production.js  #  webpack 生产模式基础配置     
├── dist  # 输出文件夹   
├── package.json  
├── README.md    
├── src  #  根路径     
│   ├── data  #  静态数据      
│   │   └── data.json   
│   ├── image  #  静态图片   
│   │   ├── logo.png   
│   │   └── p.jpg   
│   ├── javascript  #  js模块  
│   │   ├── lib  #  js库文件      
│   │   │   └── normalize.js      
│   │   ├── polyfill.js  # pilyfill 文件      
│   │   └── vendor  # vendor 文件    
│   │       └── vendor.js   
│   ├── layout   # html模板文件   
│   │   ├── head   # html模板文件 组件   
│   │   │   ├── MobileHead.ejs    # flex-lib 移动分辨率兼容方案   
│   │   │   └── PcHead.ejs    # 移动方案     
│   │   └── polyfill     
│   │       └── polyfill.ejs   # html5  shim    
│   ├── setting.js  #  项目设置（端口）     
│   ├── style  #  样式    
│   │   ├── app.scss  #  全局样式入口     
│   │   ├── base  #  样式工具模块    
│   │   │   ├── _base.scss   #  基础样式工具模块     
│   │   │   ├── _color.scss  #  颜色工具模块     
│   │   │   ├── _fn.scss     #  方法工具模块     
│   │   │   ├── _mixin.scss  #  mixin工具模块     
│   │   │   └── _reset.scss  #  reset样式工具模块     
│   │   ├── style.js   #  webpack 样式入口（！单一css输出设置）  
│   │   └── utill.scss  #  样式工具模块出口         
│   └── view  #  单页面文件夹       
│       ├── home  #  页面文件夹   
│           ├── home.html  #  html文件     
│           ├── home.js    #  js文件   
│           ├── home.scss  #  scss文件 需要import到app.css  
│           └── asset  #  静态资源   
│                └── bg.jpg  
│    
└── static   
    ├── favicon.ico   
    └── readme.md   

