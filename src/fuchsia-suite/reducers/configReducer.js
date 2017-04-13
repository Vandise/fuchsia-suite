import { handleActions } from 'redux-actions';

export default handleActions({
  SET_CONFIGURATION: (state, action) => {
    return {
      ...state,
      config: action.payload.config,
    };
  },
}, {
  config: {},
});