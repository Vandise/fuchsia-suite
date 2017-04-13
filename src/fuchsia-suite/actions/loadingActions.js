import { createAction } from 'redux-actions';

export const LOADING = createAction(
  'LOADING', (field, loading) => {
    let loadingState = {
      type: 'LOADING'
    };
    loadingState[field] = loading;
    return {loading: loadingState};
  }
);