# react-router

## 内容
- 使用方法
- Router原理

## 资源

1. [git地址](https://github.com/ReactTraining/react-router)
1. [英文文档](https://reacttraining.com/react-router/)
1. [中文文档](http://react-router.docschina.org/)

## 使用


### Route渲染内容的三种⽅式

Route渲染优先级：children>component>render

三者能接收到同样的[route props]，包括match, location and history，但是当不匹配的时候，children的match为null。

这三种⽅式互斥，你只能⽤⼀种。

#### children：func
有时候，不管location是否匹配，你都需要渲染⼀些内容，这时候你可以⽤
children。
除了不管location是否匹配都会被渲染之外，其它⼯作⽅法与render完全
⼀样。

```js
import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
function ListItemLink({ name, to, ...rest }) {
    return <Route
        path={to}
        children={({ match }) => (<li className={match ? "active" : ""}>
            <Link to={to} {...rest}>
                {name}
            </Link>
        </li>)}
    />
}

export default class RouteChildren extends Component {
    render() {
        return (
            <div>
                <Router>
                    <ul>
                        <ListItemLink to="/index" name="首页" />
                        <ListItemLink to="/home" name="首页2" />
                    </ul>
                </Router>
            </div>
        )
    }
}

```

#### render：func
是当你⽤render的时候，你调⽤的只是个函数。但是它和component⼀
样，能访问到所有的[route props]。



#### component: component
只在当location匹配的时候渲染。

当你⽤ component 的时候，Route会⽤你指定的组件和
React.createElement创建⼀个新的[React element]。这意味着当你提供
的是⼀个内联函数的时候，每次render都会创建⼀个新的组件。这会导致
不再更新已经现有组件，⽽是直接卸载然后再去挂载⼀个新的组件。因
此，当⽤到内联函数的内联渲染时，请使⽤render或者children。

### 使用Router
#### 动态路由
使⽤:id的形式定义动态路由
定义路由:
```js
<Route path="/product/:id" component={Product} />
```
添加导航链接: 
```js
<Link to={"/product/123"}>搜索</Link>
```
创建Search组件并获取参数:
```js
function ProductPage(e) {
  console.log(e)
  return (<div>ProductPage{e.match.params.id}</div>)
}
```

#### 嵌套路由
Route组件嵌套在其他⻚⾯组件中就产⽣了嵌套关系
修改Product，添加新增和详情
```js
function ProductPage(e) {
  const { url, params: { id } } = e.match
  return (
    <div>
      <div>ProductPage{id}</div>
      <Link to={url + '/detail'}>详情</Link>
      <Route path={url + '/detail'} component={DetailPage}></Route>
    </div>
  )
}

function DetailPage(params) {
  return (<div>DetailPage</div>)
}
```