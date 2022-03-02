import React, { Component } from 'react';
import Box from './Box';
import './Box.css';
class Colors extends Component {
  static defaultProps = {
    nOfBoxes: 18,
    colors: ['purple', 'magenta', 'violet', 'pink', 'indigo', 'green', 'blue', 'orange'],
  };
  constructor(props) {
    super(props);
    this.state = {
      BoxColors: Array.from({ length: this.props.nOfBoxes }).map(() => {
        return this.randColor();
      }),
    };
  }
  randColor = () => {
    return this.props.colors[Math.floor(Math.random() * this.props.colors.length)];
  };
  changeColor = (id) => {
    let ind = id;
    this.setState((st) => {
      const arr = [...st.BoxColors];
      arr[ind] = this.randColor();
      return { BoxColors: arr };
    });
  };
  render() {
    const boxes = Array.from({ length: this.props.nOfBoxes }).map((e, i) => {
      return (
        <Box
          key={i}
          id={i}
          color={this.state.BoxColors[i]}
          changeColor={this.changeColor}
        />
      );
    });
    return <div className='BoxContainer'>{boxes}</div>;
  }
}
export default Colors;
