import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import FuchsiaSuite from '../index';
import Pages from '../pages/index';
import Store from '../store/index';
import * as configActions from '../actions/configActions';

const store = Store();

class FuchsiaSuiteInterface {

  constructor() {
    this.Pages = Pages;
    this.Store = store;
    this.Handlers = {
      FuchsiaSuite,
    };
    this.AppHandler = () => {};
    this.history = syncHistoryWithStore(hashHistory, this.Store);
  }

  addPage(name, component) {
    if (this.Pages.hasOwnProperty(name)) {
      throw new Error(`Attempted to add page "${name}" when it already exists.`);
    }
    if (typeof component != "function") {
      throw new Error(`Parameter "component" must be a function.`);
    }
    // TODO: get page from state
  }

  addHandler(name, handler) {
    this.Handlers[name] = handler;
  }

  loadConfiguration(settings) {
    this.Store.dispatch(configActions.SET_CONFIGURATION(settings));
    this.setHandler(settings);
  }

  setHandler(config) {
    if (!config.hasOwnProperty("app_handler")) {
      throw new Error(`Application must provide a handler: use "FuchsiaSuite" for default.`);
    }
    this.AppHandler = this.Handlers[config["app_handler"]];
  }

}

export default (new FuchsiaSuiteInterface());