# Umi

## 介绍
### What
Umi，可扩展的企业级前端应用框架。Umi 以路由为基础的，同时支持配置式路由和约定式路由，保证路由的功能完备，并以此进行功能扩展。
然后配以生命周期完善的插件体系，覆盖从源码到构建产物的每个生命周期，支持各种功能扩展和业务需求。

### Why
它主要具备以下功能：
- 🎉 可扩展，Umi 实现了完整的生命周期，并使其插件化，Umi 内部功能也全由插件完成。此外还支持插件和插件集，以满足功能和垂直域的分层需求。
- 📦 开箱即用，Umi 内置了路由、构建、部署、测试等，仅需一个依赖即可上手开发。并且还提供针对 React 的集成插件集，内涵丰富的功能，可满足日常 80% 的开发需求。
- 🐠 企业级，经蚂蚁内部 3000+ 项目以及阿里、优酷、网易、飞猪、口碑等公司项目的验证，值得信赖。
- 🚀 大量自研，包含微前端、组件打包、文档工具、请求库、hooks 库、数据流等，满足日常项目的周边需求。
- 🌴 完备路由，同时支持配置式路由和约定式路由，同时保持功能的完备性，比如动态路由、嵌套路由、权限路由等等。
- 🚄 面向未来，在满足需求的同时，我们也不会停止对新技术的探索。比如 dll 提速、modern mode、webpack@5、自动化 external、bundler less 等等。


### When
如果你，

- 需要支持 IE 8 或更低版本的浏览器
- 需要支持 React 16.8.0 以下的 React
- 需要跑在 Node 10 以下的环境中
- 有很强的 webpack 自定义需求和主观意愿
- 需要选择不同的路由方案
Umi 可能不适合你。


## 上手
```
建个空目录
mkdir myapp && cd myapp
创建项目
yarn create @umijs/umi-app
安装依赖
yarn
启动项目
yarn start
```


## 目录结构
```
├── package.json
├── .umirc.ts    配置文件，包含 umi 内置功能和插件的配置。
├── .env         环境变量
├── dist         执行 umi build 后，产物默认会存放在这里。
├── mock         存储 mock 文件，此目录下所有 js 和 ts 文件会被解析为 mock 文件。
├── public       此目录下所有文件会被 copy 到输出路径。
└── src    
    ├── .umi     
    ├── layouts/index.tsx 约定式路由时的全局布局文件。    
    ├── pages             所有路由组件存放在这里。       
        ├── index.less        
        └── index.tsx   
    └── app.ts 
```
- src/.umi
临时文件目录，比如入口文件、路由等，都会被临时生成到这里。不要提交 .umi 目录到 git 仓库，他们会在 umi dev 和 umi build 时被删除并重新生成。
- src/app.ts
运行时配置文件，可以在这里扩展运行时的能力，比如修改路由、修改 render 方法等。

## 路由
手动创建或者使用下面的命令。
建立pages下面的单页面about：
```
umi g page about
``

建立文件夹more(默认是js和css)：
```
umi g page more/index --typescript --less
```

- 访问index: http://localhost:8000/
- 访问about: http://localhost:8000/about

**配置路由**
路由配置详细查看官方文档：https://umijs.org/zh-CN/docs/routing

        




