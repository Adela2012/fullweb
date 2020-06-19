import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';

// import React from './react/index'
// import ReactDOM, {useState} from './react/react-dom'
// import Component from './react/Component'

import UseMemoPage from './pages/UseMemoPage'
import UseCallbackPage from './pages/UseCallbackPage'

import './index.css';


function FunctionComponent({ name }) {
  const [count, setCount] = useState(0)
  return (
    <div className="border">
      {name}
      <button onClick={() => setCount(count + 1)}>click add: {count}</button>
      {
        count % 2
          ? <span>22222</span>
          : <button
            onClick={() => {
              console.log("omg");
            }}>
            click
            </button>
      }

    </div>
  );
}

class ClassComponent extends Component {
  render() {
    return <div className="border">{this.props.name} {this.props.msg}</div>;
  }
}

ClassComponent.defaultProps = {
  msg: '默认defaultProps'
}

const jsx = (
  <div className="border">
    <p>哈哈哈哈哈</p>
    <a href="https://www.google.com/">google</a>
    <FunctionComponent name="FunctionComponent" />
    <ClassComponent name="ClassComponent" />

    <UseCallbackPage/>
    <UseMemoPage />


    {/* <>
      <h1>h1</h1>
      <div>8888</div>
    </>
    <ul>
      {
        [1, 2, 3].map(i => <li>
          text{i}
        </li>)
      }
    </ul> */}
  </div>
);

ReactDOM.render(
  jsx,
  document.getElementById('root')
);

