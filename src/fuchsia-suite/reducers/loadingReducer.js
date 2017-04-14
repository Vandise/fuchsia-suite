import { handleActions } from 'redux-actions';

export default handleActions({
  LOADING: (state, action) => {
    return {
      ...state,
      loading: {
        ...state.loading,
        ...action.payload.loading,
      },
    };
  },
}, {
  loading: {},
});
