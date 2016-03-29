import React from 'react';

import BaseComponent from './BaseComponent';

/**
 * Entry point into the application.
 */

export default class App extends BaseComponent {
  render() {
    return (
      <div>
        <p>Hello, world!</p>
        <p>Build variant: {__CONFIG__.variant}</p>
        <p>apiEndpoint: {__CONFIG__.apiEndpoint}</p>
      </div>
    );
  }
}
