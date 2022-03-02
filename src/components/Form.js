import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phno: '',
      email: '',
      psswd: '',
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ name: '', phno: '', email: '', psswd: '' });
  };
  render() {
    return (
      <div>
        <h1>Demo Form</h1>
        <form onSubmit={this.submitHandler}>
          {/* intead of For use htmlFor as for is kayword in JS*/}
          <label htmlFor='username'>User Name:</label>
          <input
            id='username'
            name='name'
            type='text'
            value={this.state.name}
            placeholder='Name'
            onChange={this.handleChange}></input>
          <input
            name='phno'
            type='tel'
            value={this.state.phno}
            placeholder='Phone Num'
            onChange={this.handleChange}></input>
          <input
            name='email'
            type='email'
            value={this.state.email}
            placeholder='Email'
            onChange={this.handleChange}></input>
          <input
            name='psswd'
            type='password'
            value={this.state.psswd}
            placeholder='Password'
            onChange={this.handleChange}></input>
          <input type='submit'></input>
        </form>
        <h1>{this.state.name}</h1>
        <h1>{this.state.phno}</h1>
        <h1>{this.state.psswd}</h1>
        <h1>{this.state.email}</h1>
      </div>
    );
  }
}
export default Form;
