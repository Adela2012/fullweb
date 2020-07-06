## Hooks API

### useReducer

```js
const [state, dispatch] =useReducer(reducer, initialArg,init);
```

useState 的替代⽅案。它接收⼀个形如 (state, action) =>
newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch ⽅
法。（如果你熟悉 Redux 的话，就已经知道它如何⼯作了。）

```js
import React, {useReducer, useLayoutEffect, useEffect} from "react";
import {counterReducer} from "../store";
const init = initArg => {
    return initArg + 1;
};

export default function HooksPage(props) {
    const [state, dispatch] = useReducer(counterReducer, 0, init);
    useEffect(() => {
        console.log("useEffect"); //sy-log
    });
    useLayoutEffect(() => {
        console.log("useLayoutEffect"); //sy-log
    });
    console.log("---"); //sy-log
    return (
        <div> 
            <h3>HooksPage</h3> 
            <p>{state}</p> 
            <button onClick={() => dispatch({type: "ADD"})}>add</button>
        </div>
    );
}
```

### useEffect

```js
useEffect(didUpdate);
```

该 Hook 接收⼀个包含命令式、且可能有副作⽤代码的函数。

在函数组件主体内（这⾥指在 React 渲染阶段）改变 DOM、添加订阅、设
置定时器、记录⽇志以及执⾏其他包含副作⽤的操作都是不被允许的，因
为这可能会产⽣莫名其妙的 bug 并破坏 UI 的⼀致性。

使⽤ useEffect 完成副作⽤操作。赋值给 useEffect 的函数会在组件渲
染到屏幕之后延迟执⾏。你可以把 effect 看作从 React 的纯函数式世界通
往命令式世界的逃⽣通道。

默认情况下，effect 将在每轮渲染结束后执⾏，但你可以选择让它 在只有
某些值改变的时候 才执⾏。

官⽹地址： https://zh-hans.reactjs.org/docs/hooks-reference.html#useeffect


### useLayoutEffect
其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调⽤
effect。可以使⽤它来读取 DOM 布局并同步触发重渲染。在浏览器执⾏绘
制之前， useLayoutEffect 内部的更新计划将被同步刷新。

尽可能使⽤标准的 useEffect 以避免阻塞视觉更新。


## 使⽤react-redux
每次都重新调⽤render和getState太low了，想⽤更react的⽅式来写，需
要react-redux的⽀持。

```
yarn add react-redux
```
提供了两个api
1. Provider 为后代组件提供store
2. connect 为组件提供数据和变更⽅法

<Provider store> 使组件层级中的 connect() ⽅法都能够获得 Redux
store。正常情况下，你的根组件应该嵌套在 <Provider> 中才能使⽤
connect() ⽅法。

`connect([mapStateToProps], [mapDispatchToProps],[mergeProps], [options])`
连接 React 组件与 Redux store。
返回⼀个新的已与 Redux store 连接的组件类。


**参数**
- mapStateToProps(state, [ownProps]): stateProps ] (Function)

该回调函数必须返回⼀个纯对象，这个对象会与组件的 props 合并。
如果定义该参数，组件将会监听 Redux store 的变化，否则 不监听。
ownProps 是当前组件⾃身的props，如果指定了，那么只要组件接收
到新的 props， mapStateToProps 就会被调⽤，mapStateToProps 都
会被重新计算，mapDispatchToProps 也会被调⽤。注意性能！

- mapDispatchToProps(dispatch, [ownProps]): dispatchProps ] (Object or Function):

如果你省略这个 mapDispatchToProps 参数，默认情况下，dispatch
会注⼊到你的组件 props 中。
如果传递的是⼀个对象，那么每个定义在该对象的函数都将被当作
Redux action creator，对象所定义的⽅法名将作为属性名；每个⽅法
将返回⼀个新的函数，函数中 dispatch ⽅法会将action creator的返回
值作为参数执⾏。这些属性会被合并到组件的 props 中。
如果传递的是⼀个函数，该函数将接收⼀个 dispatch 函数，然后由
你来决定如何返回⼀个对象。
ownProps 是当前组件⾃身的props，如果指定了，那么只要组件接收
到新的 props， mapDispatchToProps 就会被调⽤。注意性能！

- mergeProps(stateProps, dispatchProps, ownProps): props ] (Function)

如果指定了这个参数， mapStateToProps() 与
mapDispatchToProps() 的执⾏结果和组件⾃身的 props 将传⼊到这
个回调函数中。该回调函数返回的对象将作为 props 传递到被包装的
组件中。你也许可以⽤这个回调函数，根据组件的 props 来筛选部分
的 state 数据，或者把 props 中的某个特定变量与 action creator 绑定
在⼀起。如果你省略这个参数，默认情况下返回 Object.assign({},
ownProps, stateProps, dispatchProps) 的结果。



全局提供store，index.js
```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import {Provider} from "react-redux";
import {Provider} from "./kReactRedux";
import store from "./store/";
// 把Provider放在根组件外层，使⼦组件能获得store
ReactDOM.render( 
    <Provider store={store}> <App /></Provider>,
    document.getElementById("root")
);
```
获取状态数据，ReactReduxPage.js
```js
import React, { Component } from "react";
import { connect } from "react-redux";
class ReactReduxPage extends Component {
    render() {
        const { num, add, minus, asyAdd } = this.props;
        return (
            <div> 
                <h1>ReactReduxPage</h1> 
                <p>{num}</p> 
                <button onClick={add}>add</button> 
                <button onClick={minus}>minus</button>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        num: state,
    };
};
const mapDispatchToProps = {
    add: () => {
        return { type: "add" };
    },
    minus: () => {
        return { type: "minus" };
    }
};
export default connect(
    mapStateToProps, //状态映射 mapStateToProps
    mapDispatchToProps, //派发事件映射
)(ReactReduxPage);
```
> connect中的参数：state映射和事件映射

### 详细使⽤
```js
import React, {Component} from "react";
// import {connect} from "react-redux";
// import {bindActionCreators} from "redux";
import {bindActionCreators, connect} from "../kReactRedux";
// connect⽤于连接React组件与store， 返回⼀个新的已经与store连接的组件类（HOC）
export default connect(
    // mapStateToProps Fucntion
    // !慎重定义ownProps，因为你⼀旦定义ownProps，那么每当ownProps发⽣改变的时候，当前的mapStateToProps都会被调⽤，
    // !这⾥的state也会被重新计算，容易影响性能
    state => {
        // console.log("mapStateToProps"); //sy-log
        return {
            count: state
        };
    },
// mapDispatchToProps Object Fucntion
// Object 此时props中没有dispacth，但是有action creators，内部实现dispatch
// {
// add: () => ({type: "ADD"}),
// minus: () => ({type: "MINUS"})
// }
// Fucntion 参数是dispatch与ownProps
// !慎重定义ownProps，因为你⼀旦定义ownProps，那么每当ownProps发⽣改变的时候，当前的mapStateToProps都会被调⽤，容易影响性能
    (dispatch, ownProps) => {
        console.log("mapDispatchToProps--", ownProps); //sy-log
        let creators = {
            add: () => ({type: "ADD"}),
            minus: () => ({type: "MINUS"})
        };
        creators = bindActionCreators(creators, dispatch);
        return {dispatch, ...creators};
    }
)(
    class ReactReduxPage extends Component {
        add = () => {
             this.props.dispatch({type: "ADD"});
        };
        render() {
            console.log("props", this.props); //sy-log
            const {count, dispatch, add, minus} = this.props;
            return (
                <div> 
                    <h3>ReactReduxPage</h3> 
                    <p>omg:{count}</p> 
                    <button onClick={this.add}>add-usedispatch</button> 
                    <button onClick={add}>add</button> 
                    <button onClick={minus}>minus</button>
                </div>
            );
        }
    }
);
```

## 实现react-redux

实现React-redux.js
```js
import React, {useContext, useReducer, useLayoutEffect} from "react";
const Context = React.createContext();
export const connect = (
    mapStateToProps = state => state,
    mapDispatchToProps
) => WrappendComponent => props => {
    const store = useContext(Context);
    const {dispatch, getState, subscribe} = store;
    const stateProps = mapStateToProps(getState());
    let dispatchProps = {dispatch};
    
    if (typeof mapDispatchToProps === "function") {
        dispatchProps = mapDispatchToProps(dispatch);
    } else if (typeof mapDispatchToProps === "object") {
        dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
    }

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    useLayoutEffect(() => {
        const unsubscribe = subscribe(() => {
            forceUpdate();
        });
        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, [store]);
    return <WrappendComponent {...props} {...stateProps} {...dispatchProps} />;
};

export function Provider({store, children}) {
    return <Context.Provider value={store}>{children}</Context.Provider>; 
}
function bindActionCreator(creator, dispatch) {
    return (...args) => dispatch(creator(...args));
}
function bindActionCreators(creators, dispatch) {
    const obj = {};
    for (let key in creators) {
        obj[key] = bindActionCreator(creators[key], dispatch);
    }
    return obj; 
}
```


## react-redux hooks API及实现

useSelector 获取store state
useDispatch 获取dispatch
```js
import React, {useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";
export default function ReactReduxHookPage({value}) {
    const dispatch = useDispatch();
    const add = useCallback(() => {
        dispatch({type: "ADD"});
    }, []);
    const count = useSelector(({count}) => count);
    return (
        <div>   
            <h3>ReactReduxHookPage</h3> 
            <p>{count}</p> 
            <button onClick={add}>add</button>
        </div>
    );
}
```

实现：
```js
export function useSelector(selector) {
    const store = useStore();
    const {getState, subscribe} = store;
    const selectedState = selector(getState());

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    useLayoutEffect(() => {
        const unsubscribe = subscribe(() => {
            forceUpdate();
        });
        
        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, [store]);

    return selectedState; 
}

export function useDispatch() {
    const store = useStore();
    return store.dispatch; 
}

export function useStore() {
    const store = useContext(Context);
    return store; 
}
```

> 拓展
function组件中有类似 forceUpdate 的东⻄吗？

如果前后两次的值相同， useState 和 useReducer Hook 都会放弃更
新。原地修改 state 并调⽤ setState 不会引起重新渲染。

通常，你不应该在 React 中修改本地 state。然⽽，作为⼀条出路，你
可以⽤⼀个增⻓的计数器来在 state 没变的时候依然强制⼀次重新渲
染：
```js
const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
function handleClick() {
    forceUpdate();
}
```
可能的话尽量避免这种模式。