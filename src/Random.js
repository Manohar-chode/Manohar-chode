import { Component } from 'react';

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      btn: 'Click Me!!',
    };
    // this.makeTimer();
  }
  static defaultProps = {
    maxNum: 7,
  };
  clickHandler = (e) => {
    let rand = Math.floor(Math.random() * this.props.maxNum) + 1;
    rand === 7
      ? this.setState({ num: rand })
      : this.setState({ num: rand, btn: 'You Won' });
    console.log(this.state.num, rand);
  };
  render() {
    return (
      <div>
        <h1>Number is: {this.state.num}</h1>
        {this.state.num === 7 ? (
          <h2>You Win!!</h2>
        ) : (
          <button onClick={this.clickHandler}>{this.state.btn}</button>
        )}
      </div>
    );
  }
}

export default Random;
