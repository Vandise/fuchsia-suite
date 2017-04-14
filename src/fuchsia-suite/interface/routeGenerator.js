import React from 'react';
import { Route } from 'react-router';

export default class RouteGenerator {

  constructor() {
    this.config = [];
  }

  setRouteConfig(config) {
    if (!Array.isArray(config)) {
      throw Error("Routes definition must be an array.");
    }
    this.config = config;
  }

  generateRoutes() {
    return this.config.map((routeObj) => {
      if(!routeObj.hasOwnProperty("name") 
          || !routeObj.hasOwnProperty("path")
          || !routeObj.hasOwnProperty("component")
      ) {
        throw Error(`Route definition must contain a name, path, and component property`);
      }
      return (
        <Route
          name={routeObj.name}
          component={routeObj.component}
          path={routeObj.path}
          key={routeObj.name}
        />
      );
    });
  }

}