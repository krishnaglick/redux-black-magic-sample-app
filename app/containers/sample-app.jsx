
import React, { Component } from 'react';

class SampleApp extends Component {
  constructor(props) {
    super(props);

    const { dispatch, actions: { increment, decrement } } = props;

    this.increment = () => dispatch(increment());
    this.decrement = () => dispatch(decrement());
  }

  render() {
    const { counter: { currentCount } } = this.props;
    const { increment, decrement } = this;

    return (
      <div>
        <div>{currentCount}</div>
        <div><button onClick={increment}>Increment</button></div>
        <div><button onClick={decrement}>Decrement</button></div>
      </div>
    );
  }
}

export default SampleApp;
