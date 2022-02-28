import { Component } from 'react';
import Dice from './Dice';
import './Dice.css';
class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six'],
  };
  constructor(props) {
    super();
    this.state = {
      diceOne: 'one',
      diceTwo: 'one',
      isRolling: false,
    };
  }
  clickHandler = (e) => {
    let r1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    let r2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    console.log(r1, r2);
    this.setState({ isRolling: true });
    setTimeout(() => {
      this.setState({ diceOne: r1, diceTwo: r2, isRolling: false });
    }, 1000);
  };
  render() {
    return (
      <div className='RollDice'>
        <div className='RollDice-container'>
          <Dice face={this.state.diceOne} rolling={this.state.isRolling}></Dice>
          <Dice face={this.state.diceTwo} rolling={this.state.isRolling}></Dice>
        </div>
        <button onClick={this.clickHandler} disabled={this.state.isRolling}>
          {this.state.isRolling ? 'Rolling' : 'Roll Dice'}
        </button>
      </div>
    );
  }
}
export default RollDice;
