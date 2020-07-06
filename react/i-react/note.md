# React原理
- 虚拟DOM
- JSX
- 核心API React.createElement、ReactDom.render、React.Component


## 虚拟DOM

### what
1. JavaScript 对象
2. 表示 DOM 信息和结构
3. 当状态变更的时候，重新渲染


### why
DOM操作很慢，轻微的操作都可能导致页面重新排版，非常耗性能。相对于DOM对象，js对象处理起来更快，而且更简单。通过diff算法对比新旧vdom之间的差异，可以批量的、最小化的执行dom操作，从而提高性能。

### where
React中用JSX语法描述视图，通过babel-loader转译后它们变为React.createElement(...)形式，该函数将生成vdom来描述真实dom。将来如果状态变化，vdom将作出相应变化，再通过diff算法对比新老vdom区别从而做出最终dom操作。

## JSX

### what 
1. 语法糖
2. React 使用 JSX 来替代常规的 JavaScript。
3. JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。

### why
- 开发效率：使用 JSX 编写模板简单快速。
- 执行效率：JSX编译为 JavaScript 代码后进行了优化，执行更快。
- 类型安全：在编译过程中就能发现错误。

### how
babel-loader会预编译JSX为React.createElement(...)

### 与vue的异同
- react中虚拟dom+jsx的设计一开始就有，vue则是演进过程中才出现的
- jsx本来就是js扩展，转义过程简单直接的多；vue把template编译为render函数的过程需要复杂的编译器转换字符串-ast-js函数字符串

## 核心API

- React.createElement：创建虚拟
- DOMReact.Component：实现自定义组件
- ReactDOM.render：渲染真实DOM


### React.createElement

将传入的节点定义转换为vdom

注意节点类型：
- 文本节点
- HTML标签节点
- function组件
- class组件
- fragment
- 其他如portal等节点

### DOMReact.Component



### ReactDom.render
```js
ReactDOM.render(element, container[, callback])
```
当首次调用时，容器节点里的所有 DOM 元素都会被替换，后续的调用则会使用 React 的 DOM 差分算法（DOM diffing algorithm）进行高效的更新。

如果提供了可选的回调函数，该回调将在组件被渲染或更新之后被执行。

## 总结：
1. webpack+babel编译时，替换JSX为React.createElement(type,props,...children)
2. 所有React.createElement()执行结束后得到一个JS对象即vdom，它能够完整描述dom结构
3. ReactDOM.render(vdom, container)可以将vdom转换为dom并追加到container中
4. 实际上，转换过程需要经过一个diff过程。