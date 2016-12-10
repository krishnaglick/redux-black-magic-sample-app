
import { createStore } from 'redux';
import reducers from './reducers/index';

function initStore({ props } = {}) {
  const store = createStore(reducers, props || {});
  return store;
}

module.exports = initStore;

export default initStore;
