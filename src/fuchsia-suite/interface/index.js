import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Pages from '../pages/index';
import Store from '../store/index';

const store = Store();

class FuchsiaSuiteInterface {

  constructor() {
    this.Pages = Pages;
    this.Store = store;
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

}

export default (new FuchsiaSuiteInterface());