import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import FuchsiaSuite from '../index';
import RouteGenerator from './routeGenerator';
import Pages from '../pages/index';
import Store from '../store/index';
import * as configActions from '../actions/configActions';

const NOOP = () => {};

class FuchsiaSuiteInterface {

  constructor() {
    this.RouteGenerator = new RouteGenerator();
    this.Pages = Pages;
    this.Store = null;
    this.Handlers = {
      FuchsiaSuite,
    };
    this.RootPage = NOOP;
    this.AppHandler = NOOP;
    this.ExternalReducers = {};
    this.history = null;
  }

  addPage(name, component) {
    if (this.Pages.hasOwnProperty(name)) {
      throw Error(`Attempted to add page "${name}" when it already exists.`);
    }
    if (typeof component != "function") {
      throw Error(`Parameter "component" must be a function.`);
    }
    // TODO: get page from state
  }

  addHandler(name, handler) {
    this.Handlers[name] = handler;
  }

  loadConfiguration(settings) {
    this.Store.dispatch(configActions.SET_CONFIGURATION(settings));
    this.setHandler(settings);
    this.setRootPage(settings);
    this.RouteGenerator.setRouteConfig(settings['routes']);
  }

  setHandler(config) {
    if (!config.hasOwnProperty("app_handler")) {
      throw Error(`Application must provide a handler: use "FuchsiaSuite" for default.`);
    }
    this.AppHandler = this.Handlers[config["app_handler"]];
  }

  setRootPage(config) {
    if (!config.hasOwnProperty("root_page")) {
      throw Error(`Application must provide a root page: use "Portal" for default.`);
    }
    this.RootPage = this.Pages[config["root_page"]];
  }

  addReducer(reducer) {
    const info = /^function\s+([\w\$]+)\s*\(/.exec( reducer.toString() );
    this.ExternalReducers[info[1]] = reducer;
  }

  initialize() {
    this.Store = Store({}, this.ExternalReducers);
    this.history = syncHistoryWithStore(hashHistory, this.Store);
  }

}

export default (new FuchsiaSuiteInterface());