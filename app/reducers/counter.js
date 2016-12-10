
const initialState = {
  counter: 0
};

export function increment(state = initialState, action = {}) {
  return {
    ...state,
    ...action
  };
}

export function decrement(state = initialState, action = {}) {
  return {
    ...state,
    ...action
  };
}