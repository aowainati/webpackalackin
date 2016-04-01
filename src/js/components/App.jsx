import React from 'react';

import TheButton from './TheButton';

/**
 * Entry point into the application.
 */
export default class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello, world!</p>
        <p>Build variant: {__CONFIG__.variant}</p>
        <p>apiEndpoint: {__CONFIG__.apiEndpoint}</p>
        <TheButton />
      </div>
    );
  }
}
