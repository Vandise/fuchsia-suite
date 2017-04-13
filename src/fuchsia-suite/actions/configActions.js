import { createAction } from 'redux-actions';

export const SET_CONFIGURATION = createAction(
  'SET_CONFIGURATION', (config) => {
    let state = {
      type: 'SET_CONFIGURATION',
      config
    };
    return state;
  }
);