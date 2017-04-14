import { createAction } from 'redux-actions';

export const SET_CONFIGURATION = createAction(
  'SET_CONFIGURATION', (config) => {
    const state = {
      type: 'SET_CONFIGURATION',
      config,
    };
    return state;
  }
);

export const SET_INTERFACE = createAction(
  'SET_INTERFACE', (fuchsiaInterface) => {
    const state = {
      type: 'SET_INTERFACE',
      fuchsiaInterface,
    };
    return state;
  }
);
