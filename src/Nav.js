import React from 'react';
const { Component } = React;

class Nav extends Component {
  render () {
    return (
      <span className="nav">
        <span className="prev">&#x2770;&#x2770;</span>
        &nbsp;
        <span className="next">&#x276f;&#x276f;</span>
      </span>
    );
  }
}

export default Nav;
