import React from 'react';

/**
 * Entry point into the application.
 */

// TODO : Make a BaseComponent that implements shallowCompare
export default class App extends React.Component {
  render() {
    const usaImgSrc = require('../../images/USA.png');
    return (
      <div>
        Hello, world!
        <img src={usaImgSrc} />
      </div>
    );
  }
}
