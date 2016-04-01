import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';

import { configureStore } from './redux';

const store = configureStore();
if (module.hot) {
  module.hot.accept('./redux', () => {
    console.log('Hot reloading reducers');
    store.replaceReducer(require('./redux').createRootReducer());
  });
}

render(
  (<Provider store={store}>
    <App />
  </Provider>),
  document.getElementById('root')
);
