import React from 'react';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <h3>Webpackalackin</h3>
        {this.props.children}
      </div>
    );
  }
}
