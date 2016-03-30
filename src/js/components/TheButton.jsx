import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import BaseComponent from './BaseComponent';

import { theButton } from '../redux/interactions';

function SELECTOR(state, ownProps) {
  return {
    buttonPressed: _.get(state, 'theButton.buttonPressed'),
  };
}

const ACTIONS = {
  pushButton: theButton.pushButton,
};

@connect(SELECTOR, ACTIONS)
export default class TheButton extends BaseComponent {
  // TODO : Dapper-ify this
  buttonStyle = {
    border: '1px solid black',
    borderRadius: '5px',
    width: '200px',
    textAlign: 'center',
    padding: '30px',
    cursor: 'pointer',
    userSelect: 'none',
    WebkitUserSelect: 'none',
  };

  render() {
    const text = this.props.buttonPressed ? 'OMG YOU PUSHED IT' : 'Push button??!';
    return (
      <div onClick={this._onClick} style={this.buttonStyle}>
        {text}
      </div>
    );
  }

  _onClick = () => {
    this.props.pushButton();
  }
}
