import React from 'react';
const { Component } = React;

class InfoBox extends Component {
  render () {
    const {content} = this.props;
    return (
      <pre className="description">{content}</pre>
    );
  }
}

export default InfoBox;
