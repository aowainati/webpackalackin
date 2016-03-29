import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';


/**
 * A nice React BaseComponent that implements PureRenderMixin.
 * See: http://facebook.github.io/react/docs/advanced-performance.html
 */
export default class BaseComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
}
