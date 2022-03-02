import React, { Component } from 'react';

class Box extends Component {
  removeBoxHandler = () => {
    this.props.removeBox(this.props.id);
  };
  render() {
    return (
      <div
        onClick={this.removeBoxHandler}
        style={{
          height: `${this.props.height}em`,
          width: `${this.props.width}em`,
          background: this.props.color,
        }}></div>
    );
  }
}
export default Box;
