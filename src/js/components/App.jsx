import React from 'react';

import BaseComponent from './BaseComponent';

/**
 * Entry point into the application.
 */

const FLAG = require('../../images/USA.png');

export default class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello, world!</p>
        <p>Build variant: {__CONFIG__.variant}</p>
        <p>apiEndpoint: {__CONFIG__.apiEndpoint}</p>
        <img src={FLAG} />
      </div>
    );
  }
}
