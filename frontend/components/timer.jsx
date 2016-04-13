var React = require('react');
var PropTypes = React.PropTypes;

var Timer = React.createClass({

  getInitialState: function() {
    return {
      elaspsed: 0
    };
  },

  componentDidMount: function() {
    this.timer = window.setInterval(this.tick, 1000);
  },

  componentWillUnmount: function() {
    window.clearInterval(this.timer);
  },

  tick: function () {
    if (this.props.status === "play") {
      this.setState({ elaspsed: this.state.elaspsed + 1 });
    }
  },

  displayTime: function () {
    var seconds = this.state.elaspsed % 60;
    var minutes = Math.floor(this.state.elaspsed / 60);
    var hours = Math.floor(minutes / 60);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    hours = hours < 10 ? "0" + hours : hours;
    return (
      <div className="timer">
        <p>{hours}:{minutes}:{seconds}</p>
      </div>
    );
  },

  render: function() {
    return (
      <div className="score-board">
        Time Played
        { this.displayTime() }
      </div>
    );
  }

});

module.exports = Timer;
