import React, { Component } from "react";

const InputC = (props) => {
  return <input {...props} />;
};

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { value = "", ...otherProps } = this.props;

    return (
      <div>
        <InputC style={{ outline: "none" }} value={value} {...otherProps} />
      </div>
    );
  }
}
