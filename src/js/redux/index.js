import * as redux from 'redux';
import combinedReduction from 'combined-reduction';
import thunkMiddleware from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';

import * as interactions from './interactions';

export function createRootReducer() {
  return combinedReduction({
    theButton: interactions.theButton.reducer,
  });
}

let createStoreWithMiddleware;
const appliedMiddleware = applyMiddleware(
  thunkMiddleware,
);

if (__CONFIG__.reactDevEnabled) {
  createStoreWithMiddleware = compose(
    appliedMiddleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )(createStore);
} else {
  createStoreWithMiddleware = appliedMiddleware(createStore);
}

export function configureStore(initialState) {
  return createStoreWithMiddleware(createRootReducer(), initialState);
}
