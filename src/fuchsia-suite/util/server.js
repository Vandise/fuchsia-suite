import Q from 'q';
// eslint-disable-next-line no-unused-vars
import qXhr from 'q-xhr';

import * as config from './server/config';

Q.xhr.interceptors = [{

  request(cfg) {
    return cfg;
  },

  responseError(cfg) {
    let error = cfg.data;
    const errorStatus = parseInt(cfg.status);
    if (errorStatus === 0) {
      error = 'Network Issue - we will save your changes once your network connection is restored.';
    } else if (errorStatus === 500) {
      error = 'An error has occured.';
    } else if (errorStatus === 401) {
      error = 'An error has occured.';
    }
    Q.reject();
    throw new Error(error);
  },
}];

export default {
  ...config,
};
