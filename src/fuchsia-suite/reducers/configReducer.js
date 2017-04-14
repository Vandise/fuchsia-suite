import { handleActions } from 'redux-actions';

export default handleActions({
  SET_CONFIGURATION: (state, action) => {
    return {
      ...state,
      config: action.payload.config,
    };
  },
  SET_INTERFACE: (state, action) => {
    return {
      ...state,
      fuchsiaInterface: action.payload.fuchsiaInterface,
    };
  },
}, {
  config: {},
  fuchsiaInterface: {},
});