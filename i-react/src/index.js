// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';

import React from './react/index'
import ReactDOM from './react/react-dom'
import Component from './react/Component'

import './index.css';


function FunctionComponent({ name }) {
  return (
    <div className="border">
      {name}
      <button
        onClick={() => {
          console.log("omg");
        }}>
        click
      </button>
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

