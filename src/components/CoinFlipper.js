import React, { Component } from 'react';
import Coin from './Coin';
class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side: 'Head',
      nFlips: 0,
      heads: 0,
      tails: 0,
    };
  }
  setHead = (st) => {
    console.log(st);
    return { side: 'Head', nFlips: st.nFlips + 1, heads: st.heads + 1, tails: st.tails };
  };
  setTail = (st) => {
    console.log(st);
    return { side: 'Tail', nFlips: st.nFlips + 1, heads: st.heads, tails: st.tails + 1 };
  };
  clickHandler = () => {
    let rand = Math.floor(Math.random() * 2) + 1;
    console.log(rand);
    rand === 1 ? this.setState(this.setHead) : this.setState(this.setTail);
  };
  render() {
    return (
      <div>
        <Coin
          side={this.state.side}
          nFlips={this.state.nFlips}
          heads={this.state.heads}
          tails={this.state.tails}></Coin>
        <button onClick={this.clickHandler}>Flip Coin!</button>
      </div>
    );
  }
}
export default CoinFlipper;
