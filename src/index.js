import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import FuchsiaSuiteInterface from './fuchsia-suite/interface/index';
import Server from './fuchsia-suite/util/server';
import LoadingScreen from './fuchsia-suite/loadingScreen';

// eslint-disable-next-line no-unused-vars
import Styles from './stylesheets/main.scss';
// eslint-disable-next-line no-unused-vars
import Bulma from './stylesheets/bulma.scss';

const el = document.getElementById('app');
const Interface = FuchsiaSuiteInterface;

const initializeFuchsiaSuite = () => {
  ReactDOM.render(<LoadingScreen />, el);

  Interface.initialize();

  Server.getConfigSettings().then((data) => {
    Interface.loadConfiguration(data);

    Interface.PluginManager.resolvePlugins().then(() => {
      const routes = (
        <Provider store={Interface.Store}>
          <Router history={Interface.history}>
            <Route component={Interface.AppHandler}>
              <Route
                name="portal"
                component={Interface.RootPage}
                path="/"
              />
              { Interface.RouteGenerator.generateRoutes() }
            </Route>
          </Router>
        </Provider>
      );
      ReactDOM.render(routes, el);
    });
  }).catch((e) => {
    console.error(e);
  });
};

if (process.env.NODE_ENV === 'development') {
  initializeFuchsiaSuite();
}

window.FuchsiaSuite = {
  Interface,
  init: initializeFuchsiaSuite,
};
