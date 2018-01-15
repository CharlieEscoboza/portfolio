
const React = require('react');
const ReactDOM = require('react-dom');
const Homepage = require('../../app/views/Homepage');

require('../styles/index.scss');

ReactDOM.render(React.createElement(Homepage), document.getElementById('homepage'));

if (module.hot) {
  module.hot.accept();
}
