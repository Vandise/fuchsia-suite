import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import FuchsiaSuite from '../index';
import RouteGenerator from './routeGenerator';
import ComponentManager from './componentManager';
import PluginManager from './pluginManager';
import SideBarManager from './sideBarManager';
import Store from '../store/index';
import * as configActions from '../actions/configActions';

class FuchsiaSuiteInterface {

  constructor() {
    this.RootPage = null;
    this.AppHandler = null;
    this.ExternalReducers = {};
    this.history = null;
    this.Store = null;
    this.pluginCount = 0;
    this.receivedPlugins = 0;
    this.Handlers = {
      FuchsiaSuite,
    };
    this.RouteGenerator = new RouteGenerator(this);
    this.ComponentManager = new ComponentManager(this);
    this.SideBarManager = new SideBarManager(this);
    this.PluginManager = new PluginManager();
  }

  addHandler(name, handler) {
    this.Handlers[name] = handler;
  }

  loadConfiguration(settings) {
    this.Store.dispatch(configActions.SET_CONFIGURATION(settings));
    this.setHandler(settings);
    this.setRootPage(settings);
    this.RouteGenerator.setRouteConfig(settings.routes);
    this.PluginManager.setPlugins(settings.plugins);
    this.PluginManager.loadPlugins();
    this.SideBarManager.initialize(settings.sidebar ? settings.sidebar : []);
  }

  setHandler(config) {
    if (!config.hasOwnProperty('app_handler')) {
      throw Error('Application must provide a handler: use "FuchsiaSuite" for default.');
    }
    this.AppHandler = this.Handlers[config.app_handler];
  }

  setRootPage(config) {
    if (!config.hasOwnProperty('root_page')) {
      throw Error('Application must provide a root page: use "Portal" for default.');
    }
    this.RootPage = this.ComponentManager.getPage(config.root_page);
  }

  addReducer(reducer) {
    const info = /^function\s+([\w\$]+)\s*\(/.exec(reducer.toString());
    this.ExternalReducers[info[1]] = reducer;
  }

  initialize() {
    this.Store = Store({}, this.ExternalReducers);
    this.history = syncHistoryWithStore(hashHistory, this.Store);
    this.Store.dispatch(configActions.SET_INTERFACE(this));
  }

}

export default (new FuchsiaSuiteInterface());
