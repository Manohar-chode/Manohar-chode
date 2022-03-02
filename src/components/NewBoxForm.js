import React, { Component } from 'react';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '', height: '', color: '' };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.props.addBox(this.state);
    this.setState({ width: '', height: '', color: '' });
  };
  render() {
    return (
      <div>
        <h1>Box Form</h1>
        <form onSubmit={this.submitHandler}>
          {/* intead of For use htmlFor as for is kayword in JS*/}
          <label htmlFor='width'>Width:</label>
          <input
            id='width'
            name='width'
            type='number'
            value={this.state.width}
            placeholder='Width'
            onChange={this.handleChange}></input>
          <input
            name='height'
            type='number'
            value={this.state.height}
            placeholder='Height'
            onChange={this.handleChange}></input>
          <input
            name='color'
            type='text'
            value={this.state.color}
            placeholder='Color'
            onChange={this.handleChange}></input>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
}
export default NewBoxForm;
