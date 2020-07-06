# 组件实现

## 弹窗类组件设计与实现

弹窗类组件的要求弹窗内容在A处声明，却在B处展示。react中相当于弹窗内容看起来被render到⼀个组件⾥面去，实际改变的是⽹页上另一处的DOM结构，这个显然不符合正常逻辑。但是通过使⽤框架提供的特定API创建组件实例并指定挂载⽬标仍可完成任务。

```js
// 常⻅见⽤用法如下：Dialog在当前组件声明，但是却在body中另⼀一个div中显示
import React, {Component} from "react";
import Dialog from "../conponents/Dialog";
export default class DialogPage extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            showDialog: false   
        };  
    }  
    render() {
        const {showDialog} = this.state;
        return (<div>
            <h3>DialogPage</h3>
            <buttonon Click={() =>this.setState({showDialog: !showDialog})}> toggle</button>
            {showDialog && <Dialog />}
        </div>);  
    }
}
```
### 具体实现: Portal传送⻔
react v16之后出现的portal可以实现内容传送功能。范例：Dialog组件
```js
// Diallog.js
import React, { Component } from "react";
import { createPortal } from "react-dom";
export default class Dialog extends Component {  
    constructor(props) {
        super(props);
        const doc = window.document;
        this.node = doc.createElement("div");
        doc.body.appendChild(this.node);  
    }  
    componentWillUnmount() {
        window.document.body.removeChild(this.node);  
    }  
    render() {
        const { hideDialog } = this.props;
        return createPortal(
            <div className="dialog">        
                {this.props.children}        
                {typeof hideDialog === "function" && (<button onClick={hideDialog}>关掉弹窗</button>)}
            </div>,
            this.node
        )
    }
}
```
总结⼀下：Dialog做得事情是通过调⽤用createPortal把要画的东⻄画在DOM树上另⼀个角落。