
## fiber


### WHAT
A Fiber is work on a Component that needs to be done or was done. There can be more than one
per component.

fiber是指组件上将要完成或者已经完成的任务，每个组件可以一个或者多个。

### WHY NEED

**为什么需要fiber**
对于大型项目，组件树会很大，这个时候递归遍历的成本就会很高，会造成主线程被持续占用，结
果就是主线程上的布局、动画等周期性任务就无法立即得到处理，造成视觉上的卡顿，影响用户体
验。

fiber 的特点
- 任务分解
- 增量渲染（把渲染任务拆分成块，匀到多帧）
- 更新时能够暂停，终止，复用渲染任务
- 给不同类型的更新赋予优先级
- 并发方面新的基础能力
- 更流畅

### HOW

#### window.requestIdleCallback(callback[, options])

window.requestIdleCallback()方法将在浏览器的空闲时段内调用的函数排队。这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应。函数一般会按先进先调用的顺序执行，然而，如果回调函数指定了执行超时时间timeout，则有可能为了在超时前执行函数而打乱执行顺序。

你可以在空闲回调函数中调用requestIdleCallback()，以便在下一次通过事件循环之前调度另一个回调。

- **返回值**
一个ID，可以把它传入 Window.cancelIdleCallback() 方法来结束回调。

- **参数**
  - `callback`
    一个在事件循环空闲时即将被调用的函数的引用。函数会接收到一个名为 IdleDeadline 的参数，这个参数可以获取当前空闲时间以及回调是否在超时时间前已经执行的状态。
  - `options 可选`
    包括可选的配置参数。具有如下属性：
    timeout：如果指定了timeout并具有一个正值，并且尚未通过超时毫秒数调用回调，那么回调会在下一次空闲时期被强制执行，尽管这样很可能会对性能造成负面影响。

react中requestIdleCallback的hack在
`react/packages/scheduler/src/forks/SchedulerHostConfig.default.js`

#### 实现fiber
Fiber 是 React 16 中新的协调引擎。它的主要目的是使 Virtual DOM 可以进行增量式渲染。

一个更新过程可能被打断，所以React Fiber一个更新过程被分为两个阶段(Phase)：
- 第一个阶段
Reconciliation Phase
- 第二阶段
Commit Phase。

## reconciliation 协调

### 设计动力
在某一时间节点调用 React 的render()方法，会创建一棵由 React 元素组成的树。
在下一次 state 或props 更新时，相同的render()方法会返回一棵不同的树。
React 需要基于这两棵树之间的差别来判断如何有效率的更新 UI 以保证当前 UI 与最新的树保持同步。


这个算法问题有一些通用的解决方案，即生成将一棵树转换成另一棵树的最小操作数。 然而，即使在最
前沿的算法中，该算法的复杂程度为 O(n 3 )，其中 n 是树中元素的数量。


如果在 React 中使用了该算法，那么展示 1000 个元素所需要执行的计算量将在十亿的量级范围。这个
开销实在是太过高昂。于是 React 在以下两个假设的基础之上提出了一套 O(n) 的启发式算法：


1. 两个不同类型的元素会产生出不同的树；
2. 开发者可以通过 key prop 来暗示哪些子元素在不同的渲染下能保持稳定；

在实践中，我们发现以上假设在几乎所有实用的场景下都成立。

### diffing算法
算法复杂度O(n)


#### diff 策略
1. 同级比较，Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计。
2. 拥有不同类型的两个组件将会生成不同的树形结构。
例如：div->p, CompA->CompB
3. 开发者可以通过 key prop 来暗示哪些子元素在不同的渲染下能保持稳定；

#### diff过程

比对两个虚拟dom时会有三种操作：**删除、替换和更新**
vnode是现在的虚拟dom，newVnode是新虚拟dom。
- 删除：newVnode不存在时
- 替换：vnode和newVnode类型不同或key不同时
- 更新：有相同类型和key但vnode和newVnode不同时

在实践中也证明这三个前提策略是合理且准确的，它保证了整体界面构建的性能。



