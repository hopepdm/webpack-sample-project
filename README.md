这是一个webpack从入门到放弃的项目，项目完全参考了简书zhangwang的blog：http://www.jianshu.com/p/42e11515c10f
仅供尝鲜，若想学习更多内容请仔细查看原博文或者官方文档。

本项目只实现两个功能：1、打包js文件；2、使用babel将es6编译成es5

##执行项目

全局安装webpack >npm install -g webpack

安装json中的依赖 >npm install

执行webpack命令 >webpack

本地访问public/index.html
页面中显示：Hi there and greetings!

##项目说明

package.json 依赖管理配置文件

webpackage.config.js webpack配置文件

app 存放原始.js .css .sass等资源

public 存放打包后的文件，其中bundle.js文件为执行webpackage打包生成，可删除。

##体会

功能强大归强大，但是对于一些野路子出生的小公司，估计很少会用到这种类似流程控制的管理工具。而且其配置项随着项目的复杂度增加而增加，没有实际练手的项目很难去学习理解各个配置项的意义和作用。小白了解了解知道咋用就ok ，在真正遇到实际项目的时候再仔细学习吧。