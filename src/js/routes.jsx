import _ from 'lodash';
import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './components/App';
import Layout from './components/layouts/Layout';
import NotFound from './components/NotFound';
import Secret from './components/Secret';

/**
 * Generates the routes for our application. Notably, it takes the redux store
 * an argument, which it can then use to bind redux actions to route entry.
 * E.g. `store.dispatch(myCoolAction())` on a Route's onEnter property.
 */
export default function configureRoutes(store) {
  return (
    <Route path="/" component={Layout}>
      <IndexRoute component={App} />
      <Route path='secret' component={Secret} />
      <Route path='*' component={NotFound} />
    </Route>
  );
}
