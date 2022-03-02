import React, { Component } from 'react';
import './Box.css';
class Box extends Component {
  changeColorHandler = () => {
    this.props.changeColor(this.props.id);
  };
  render() {
    return (
      <div
        // id={this.props.id}
        style={{ backgroundColor: this.props.color }}
        className='Box'
        onClick={this.changeColorHandler}></div>
    );
  }
}
export default Box;
