
import _ from 'lodash';

const actions = [
  require('./counter.js')
];

const boundActions = {};
_.forEach(actions, (action) => {
  _.forEach(Object.keys(action), (key) => {
    boundActions[key] = (data) => {
      const actionValue = action[key].bind(boundActions)(data);
      if(typeof actionValue === 'function')
        return actionValue;
      return {
        type: key,
        ...actionValue
      };
    };
  });
});

module.exports = boundActions;
