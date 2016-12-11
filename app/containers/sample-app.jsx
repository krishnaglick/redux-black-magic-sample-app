
import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../actions/index';

class SampleApp extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    const { increment, decrement } = actions;

    this.increment = (currentCount) => dispatch(increment(currentCount));
    this.decrement = (currentCount) => dispatch(decrement(currentCount));
  }

  render() {
    const { state: { counter: { currentCount } } } = this.props;
    const { increment, decrement } = this;

    return (
      <div>
        <div>{currentCount}</div>
        <div><button onClick={() => increment(currentCount)}>Increment</button></div>
        <div><button onClick={() => decrement(currentCount)}>Decrement</button></div>
      </div>
    );
  }
}

export default connect(state => ({
  state
}))(SampleApp);
