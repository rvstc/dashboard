import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Dashboard from 'scenes/Dashboard';
import Settings from 'scenes/Settings';
import About from 'scenes/About';
import NotFound from 'scenes/NotFound';


/**
 * The root path for the GitHub Pages host site is not "/".
 * Prepending process.env.PUBLIC_URL is a workaround to ensure
 * that paths are well constructed.
 */
function prependPublicUrl(path) {
  return process.env.PUBLIC_URL + '/' + path;
}

function createRouteInfo(key, path, component, exact=true) {
  return {
    key,
    path: prependPublicUrl(path),
    component,
    exact,
  };
}

function createRoute(routeInfo) {
  return <Route key={routeInfo.key} exact={routeInfo.exact} path={routeInfo.path} component={routeInfo.component}/>;
}

/**
 * To add or remove routes from the app, edit routeInfos.
 */
const routeInfos = [
  createRouteInfo('dashboard', '', Dashboard),
  createRouteInfo('settings', 'settings', Settings),
  createRouteInfo('about', 'about', About),
];

export const paths = routeInfos.reduce((map, routeInfo) => {
  map[routeInfo.key] = routeInfo.path;
  return map;
}, {});

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        {routeInfos.map(createRoute)}
        <Route component={NotFound} />
      </Switch>
    );
  }
}
