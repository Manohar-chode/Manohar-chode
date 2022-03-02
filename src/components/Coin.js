import React, { Component } from 'react';
class Coin extends Component {
  render() {
    return (
      <div>
        <h1>Let's Flip a Coin</h1>
        <h2>{this.props.side}</h2>
        <h3>{`Out of ${this.props.nFlips} flips, there have been ${this.props.heads}
          heads and ${this.props.tails} tails`}</h3>
      </div>
    );
  }
}

export default Coin;
