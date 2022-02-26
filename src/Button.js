import { Component } from 'react';

class Click extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  clickHandler = (e) => {
    console.log(this, e);
    this.setState({ clicked: true });
  };
  clickHandler1(e) {
    //call this this.clickHandler.bind(this)
    console.log(this);
    this.setState({ clicked: true });
  }
  render() {
    return (
      <div>
        <h1>{this.state.clicked ? 'Clicked' : 'Not Clicked'}</h1>
        <button onClick={this.clickHandler}>Click Me!!</button>
      </div>
    );
  }
}
export default Click;
