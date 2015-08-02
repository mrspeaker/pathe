import React from 'react';
const { Component } = React;

class Nav extends Component {
  render () {
    const {onPrev, onNext} = this.props;
    return (
      <span className="nav">
        <span className="prev" onClick={onPrev}>⏪</span>
        &nbsp;
        <span className="next" onClick={onNext}>⏩</span>
      </span>
    );
  }
}

export default Nav;
