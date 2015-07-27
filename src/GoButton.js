import React from 'react';
const { Component } = React;

class GoButton extends Component {
  render () {
    return (
      <span className="clicker" onClick={this.props.onClick}>Next&nbsp;&gt;&gt;</span>
    );
  }
}

export default GoButton;
