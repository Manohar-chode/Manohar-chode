import React, { Component } from 'react';
import Random from './Random';
// import Click from './Button';

class App extends Component {
  render() {
    // return <Random maxNum={7} />;
    return (
      <div>
        <Random maxNum={7}></Random>
      </div>
    );
  }
}

export default App;
