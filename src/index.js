import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import Pages from './fuchsia-suite/pages/index';
import Store from './fuchsia-suite/store/index';
import FuchsiaSuiteInterface from './fuchsia-suite/interface/index';
import Server from './fuchsia-suite/util/server';

import * as loadingActions from './fuchsia-suite/actions/loadingActions';
import LoadingScreen from './fuchsia-suite/loadingScreen';


// eslint-disable-next-line no-unused-vars
import Styles from './stylesheets/main.scss';

const el = document.getElementById('app');

const Interface = FuchsiaSuiteInterface;

Interface.Store.dispatch(loadingActions.LOADING('initial_load', true));

if (Interface.Store.getState()['initial_load']) {
  if (process.env.NODE_ENV === 'development') {
    ReactDOM.render(LoadingScreen, el);
  }
}

setTimeout(() => {
  
  Server.getConfigSettings().then((data) => {
  
    Interface.Store.dispatch(loadingActions.LOADING('initial_load', false));
    Interface.loadConfiguration(data);
  
    const routes = (
      <Provider store={Interface.Store}>
        <Router history={Interface.history}>
          <Route component={Interface.AppHandler}>
            <Route
              name='portal'
              component={Interface.Pages.Portal}
              path='/'
            />
          </Route>
        </Router>
      </Provider>
    );
    
    if (process.env.NODE_ENV === 'development') {
      ReactDOM.render(routes, el);
    }
  
  });

}, 1500);
