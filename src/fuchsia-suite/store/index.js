import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { routerReducer } from 'react-router-redux';
import loadingReducer from '../reducers/loadingReducer';
import configReducer from '../reducers/configReducer';

const reducers = combineReducers({
  loadingReducer,
  configReducer,
  routing: routerReducer,
});

export default (state = {}) => {
  const store = createStore(reducers, state,
    applyMiddleware(thunk, promiseMiddleware)
  );
  store.subscribe(() => { });
  return store;  
};