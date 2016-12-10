
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import SampleApp from './containers/sample-app';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SampleApp />
      </Provider>
    );
  }
}

if(typeof window !== 'undefined')
  render(<App/>, document.getElementById('app'));

module.exports = App;
