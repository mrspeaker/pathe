import React from 'react';
import App from './App';

const {render} = React;

export default render(
  <App />,
  document.querySelector('#app')
);
