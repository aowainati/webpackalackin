import React from 'react';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';

import configureRoutes from './routes';
import { configureStore } from './redux';

const store = configureStore();
if (module.hot) {
  module.hot.accept('./redux', () => {
    console.log('Hot reloading reducers');
    store.replaceReducer(require('./redux').createRootReducer());
  });
}

const routes = configureRoutes(store);

render(
  (
    <Provider store={store}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);
