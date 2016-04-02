import ReactDOM from 'react-dom';
import React from 'react';
import shim from 'whatwg-fetch'; // HTML5 fetch() shim.
import App from 'components/App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.querySelector('#app'));
});
