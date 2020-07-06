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
```

建立文件夹more(默认是js和css)：

```
umi g page more/index --typescript --less
```

- 访问index: http://localhost:8000/
- 访问about: http://localhost:8000/about

**配置路由**
路由配置详细查看官方文档：https://umijs.org/zh-CN/docs/routing

        
### 约定式路由
#### 动态路由
```
umi g page product/[id]
```

```js
import React from 'react';
import { IRouteComponentProps } from 'umi';
import styles from './[id].less';
export default (props: IRouteComponentProps) => {  
  console.log('product', props); //sy-log  
  return (    
    <div>      
      <h1 className={styles.title}>Page product/[id]</h1>
      </div>  
  );
};
```
路由配置
```js
{ path: '/product/:id', component: '@/pages/product/[id]' }
```




#### 动态可选路由
路由配置可选的动态路由umi3暂不支持，


#### 嵌套路由

Umi 里约定目录下有_layout.tsx时会生成嵌套路由，以_layout.tsx为该目录的 layout。layout文件需要返回一个 React 组件，并通过props.children渲染子组件。

首先创建_layout.js
```
umi g page product/_layout
```

约定src/layouts/index.tsx为全局路由。返回一个 React 组件，并通过props.children渲染子组件。

比如：
```js
import React from 'react';
import { IRouteComponentProps } from 'umi';
export default (props: IRouteComponentProps) => {  
  console.log('product', props); //sy-log  
  return (    
    <div style={{ color: 'red' }}>     
      <h1>layout</h1>      
      {props.children}    
    </div>  
  );
}; 

```

配置路由：

```js
{      
  path: '/product/:id',      
  component: '@/pages/product/_layout',      
  routes: [{ path: '/product/:id', component: '@/pages/product/[id]' }],    }
```



#### 全局 layout
约定src/layouts/index.tsx为全局路由。返回一个 React 组件，并通过props.children渲染子组件。

```js
import { IRouteComponentProps } from 'umi'

export default function Layout({ children, location, route, history, match }: IRouteComponentProps) {
  return children
}

```

### 不同的全局 layout

你可能需要针对不同路由输出不同的全局 layout，Umi 不支持这样的配置，但你仍可以在src/layouts/index.tsx中对location.path做区分，渲染不同的 layout 。比如想要针对/login输出简单布局
```js
export default function(props) {
  if (props.location.pathname === '/login') {
    return <SimpleLayout>{ props.children }</SimpleLayout>
  }

  return (
    <>
      <Header />
      { props.children }
      <Footer />
    </>
  );
}

```


#### 404 路由
```js
umi g page 404/index --typescript --less
```
生成路由
```js
{ component: '@/pages/404' }
```

#### 扩展路由属性
支持在代码层通过导出静态属性的方式扩展路由
```js
function HomePage() {
  return <h1>Home Page</h1>;
}
HomePage.title = 'Home Page';
export default HomePage;
```
其中的 title 会附加到路由配置中。

## 页面跳转
在 umi 里，页面之间跳转有两种方式：声明式和命令式。
### 声明式
通过 Link 使用，通常作为 React 组件使用。
```js
import { Link } from 'umi';
export default () => (
  <Link to="/list">Go to list page</Link>
);
```

### 命令式
通过 history 使用，通常在事件处理中被调用。
```js
import { history } from 'umi';
function goToListPage() {
  history.push('/list');
}
```
也可以直接从组件的属性中取得 history
```js
export default (props) => (
  <Button onClick={()=>props.history.push('/list');}>Go to list page</Button>
)
```


## 按需加载
为了简化部署成本，按需加载功能默认是关闭的，你需要在使用之前先通过配置开启，
```js
export default {
  dynamicImport: {},
}
```
### 按需加载组件 dynamic
通过 Umi 的dynamic接口实现
```js
import { dynamic } from 'umi';
const delay = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));
const App = dynamic({  
  loader: async function() {    
    await delay(/* 1s */1000);    
    return () => <div>I will render after 1s</div>;  
  },
});
```
封装一个异步组件
```js
import { dynamic } from 'umi';
export default dynamic({
  loader: async function() {
    // 这里的注释 webpackChunkName 可以指导 webpack 将该组件 HugeA 以这个名字单独拆出去
    const { default: HugeA } = await import(/* webpackChunkName: "external_A" */ './HugeA');
    return HugeA;
  },
});
```
使用异步组件
```js
import React from 'react';
import AsyncHugeA from './AsyncHugeA';
// 像使用普通组件一样即可
// dynamic 为你做:
// 1. 异步加载该模块的 bundle
// 2. 加载期间 显示 loading（可定制）
// 3. 异步组件加载完毕后，显示异步组件
export default () => {
  return <AsyncHugeA />;
}
```

### 按需加载非组件
通过import()实现
```js
import('g2').then(() => { 
   // do something with g2
});
```


