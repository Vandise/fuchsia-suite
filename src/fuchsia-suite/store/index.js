import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { routerReducer } from 'react-router-redux';
import loadingReducer from '../reducers/loadingReducer';
import configReducer from '../reducers/configReducer';

export default (initialState = {}, externalReducers = {}) => {

  const reducers = combineReducers({
    loadingReducer,
    configReducer,
    ...externalReducers,
    routing: routerReducer,
  });

  const store = createStore(reducers, initialState,
    applyMiddleware(thunk, promiseMiddleware)
  );

  store.subscribe(() => { });

  return store;  
};