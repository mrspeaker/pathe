import React from 'react';
const { Component } = React;

class Nav extends Component {
  render () {
    const {onPrev, onNext} = this.props;
    return (
      <span className="nav">
        <span className="prev" onClick={onPrev}>&#x2770;&#x2770;</span>
        &nbsp;
        <span className="next" onClick={onNext}>&#x276f;&#x276f;</span>
      </span>
    );
  }
}

export default Nav;
