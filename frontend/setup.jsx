var React = require('react');
var ReactDOM = require('react-dom');
var MainGame = require('./components/main_game');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MainGame/>, document.getElementById('root'));
});
